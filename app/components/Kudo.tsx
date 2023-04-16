import { UserCircle } from '~/components/User-Circle'
import type { Profile, Kudo as IKudo } from '@prisma/client'
import { colorMap, backgroundColorMap, emojiMap } from '~/utils/constants'

interface props {
    profile: Profile;
    kudo: Partial<IKudo>;
}

export function Kudo({ profile, kudo }: props) {
    return (
        <div
            className={`flex ${ backgroundColorMap[kudo.style?.backgroundColor || 'BLACK']} p-4 rounded-xl w-full gap-x-2 relative`}
        >
            <div>
                <UserCircle profile={profile} className="h-16 w-16" />
            </div>
            <div className="flex flex-col">
                <p className={`${colorMap[kudo.style?.textColor || 'PURPLE']} font-bold text-lg whitespace-pre-wrap break-all`}>
                    {profile.firstName} {profile.lastName}
                </p>
                <p className={`${colorMap[kudo.style?.textColor || 'PURPLE']} whitespace-pre-wrap break-all text-sm`}>
                    {kudo.message}
                </p>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl">
                {emojiMap[kudo.style?.emoji || 'THUMBSUP']}
            </div>
        </div>
    )
}