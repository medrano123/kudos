// app/components/user-panel.tsx
import type  { User } from '@prisma/client';
import { useNavigate } from '@remix-run/react'

import { UserCircle } from './User-Circle';

interface props {
    users: User[]
}


export function UserPanel({ users }: props) {
    const navigate = useNavigate()

    return (
        <div className="w-1/6 flex bg-black flex-col">
            <div className="text-center bg-black-100 h-20 flex items-center justify-center rounded-2xl">
                <h2 className="text-xl text-[#915eff] font-semibold">My Team</h2>
            </div>
            <div className="flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10 ">
                {
                    users.map(user => <UserCircle 
                        profile={user.profile} 
                        key={user.id } 
                        className="h-24 w-24 mx-auto flex-shrink-0"
                        onClick={() => navigate(`kudo/${user.id}`)}
                        />)
                }
            </div>
            <div className="text-center p-6 bg-black-100 rounded-2xl">
                <form action="/logout" method="post">
                    <button
                        type="submit"
                        className="rounded-2xl bg-black font-semibold text-[#915eff] px-3 py-2 transition duration-300 ease-in-out hover:bg-tertiary hover:-translate-y-1"
                    >
                        Sign Out
                    </button>
                </form>
            </div>
        </div>
    )
  }