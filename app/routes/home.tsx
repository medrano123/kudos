import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { Outlet,  useLoaderData } from '@remix-run/react'
import type { Kudo as IKudo, Prisma, Profile } from "@prisma/client";


import { Layout } from '~/components/layout'
import { RecentBar } from '~/components/RecentBar'
import { UserPanel } from '~/components/UserPanel'
import { getUser, requireUserId } from "~/utils/auth.server";
import { getOtherUsers } from '~/utils/users.server'
import { getFilteredKudos, getRecentKudos  } from '~/utils/kudo.server';
import { Kudo } from "~/components/Kudo";
import { SearchBar } from "~/components/SearchBar";


export const loader: LoaderFunction = async ({ request }) => {
    const userId = await requireUserId(request)
    const users = await getOtherUsers(userId)
    const user = await getUser(request);


    const url = new URL(request.url)
    const sort = url.searchParams.get('sort')
    const filter = url.searchParams.get('filter')
  
    // 2
    let sortOptions: Prisma.KudoOrderByWithRelationInput = {}
    if (sort) {
      if (sort === 'date') {
        sortOptions = { createdAt: 'desc' }
      }
      if (sort === 'sender') {
        sortOptions = { author: { profile: { firstName: 'asc' } } }
      }
      if (sort === 'emoji') {
        sortOptions = { style: { emoji: 'asc' } }
      }
    }
  
    // 3
    let textFilter: Prisma.KudoWhereInput = {}
    if (filter) {
      textFilter = {
        OR: [
          { message: { mode: 'insensitive', contains: filter } },
          {
            author: {
              OR: [
                { profile: { is: { firstName: { mode: 'insensitive', contains: filter } } } },
                { profile: { is: { lastName: { mode: 'insensitive', contains: filter } } } },
              ],
            },
          },
        ],
      }
    }
  
    
    const kudos = await getFilteredKudos(userId, sortOptions, textFilter)
    
    const recentKudos = await getRecentKudos();

    return json({ users, kudos, recentKudos, user, userId })
}

interface KudoWithAuthor extends IKudo {
    author: {
        profile: Profile;
    };
}

export default function Home() {
    const { users, kudos, recentKudos, user, userId } = useLoaderData()


    return (
        <Layout>
            <Outlet />
            <div className='h-full flex'>
                <UserPanel users={users} />
                <div className='flex-1 flex flex-col'>
                    <SearchBar profile={user.profile}/>
                    <div className='flex-1 flex'>
                        <div className='w-full p-10 flex flex-col gap-y-4'>
                            {/* recent kudos/feed  */}

                            {/* {console.log(kudos)} */}

                            {kudos.map((kudo: KudoWithAuthor) => (
                                <Kudo key={kudo.id} kudo={kudo} profile={kudo.author.profile} />
                            ))}
                        </div> 
                        <RecentBar kudos={recentKudos} />
                    </div>
                </div>
            </div>

        </Layout>
    )
}