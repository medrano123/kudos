import { useState } from 'react'
import type { KudoStyle } from '@prisma/client'
import { Modal } from '~/components/Modal';
import { json, redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
 import { useActionData, useLoaderData } from "@remix-run/react";

import { UserCircle } from '~/components/User-Circle';
import { getUser, requireUserId } from "~/utils/auth.server";
import { getUserById } from "~/utils/users.server";
import { SelectBox } from "~/components/SelectBox";
import { colorMap, emojiMap, backgroundColorMap } from "~/utils/constants";
import { Kudo } from "~/components/Kudo";
import { createKudo } from '~/utils/kudo.server';
 
export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const userId = await requireUserId(request);
  
    const message = form.get("message");
    const backgroundColor = form.get("backgroundColor");
    const textColor = form.get("textColor");
    const emoji = form.get("emoji");
    const recipientId = form.get("recipientId");

    if (
        typeof message !== "string" ||
        typeof recipientId !== "string" ||
        typeof backgroundColor !== "string" ||
        typeof textColor !== "string" ||
        typeof emoji !== "string"
    ) {
        return json({ error: `Invalid Form Data` }, { status: 400 });
        }
    
    if (!message.length) {
        return json({ error: `Please provide a message.` }, { status: 400 });
    }
    
    if (!recipientId.length) {
        return json({ error: `No recipient found...` }, { status: 400 });
    }

    //This is where we create a kudo
    await createKudo(message, userId, recipientId, {
        backgroundColor,
        textColor,
        emoji
    } as KudoStyle);
    
    return redirect("/home");
}

export const loader: LoaderFunction = async ({ params, request }) => {
    const { userId } = params;
    if (typeof userId !== "string") {
        return redirect("/home");
    }
    const user = await getUser(request);
    // const recipient = await getUserById(userId);
    // return json({ recipient, user });
    const recipient = await getUserById(userId);
     return json({ recipient, user });
};

export default function KudoModal() {
    const actionData = useActionData();
    const [formError] = useState(actionData?.error || "");
    const [formData, setFormData] = useState({
        message: '',
        style: {
            backgroundColor: 'BLACK',
            textColor: 'PURPLE',
            emoji: 'PARTY',
        } as KudoStyle,
    })
    
    const handleStyleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setFormData(data => ({
            ...data, style: {
                ...data.style,
                [field]: e.target.value
            }
        }))
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setFormData(data => ({ ...data, [field]: e.target.value }))
    }
        
    const getOptions = (data: any) => Object.keys(data).reduce((acc: any[], curr) => {
        acc.push({
            name: curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase(),
            value: curr
        })
        return acc
    }, [])

    const colors = getOptions(colorMap)
    const emojis = getOptions(emojiMap)

    const { recipient, user } = useLoaderData();
    return (
        <Modal isOpen={true} className="w-2/3 p-10">
            <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2'>
                {formError}
            </div>
            <form method="post">
                <input type="hidden" value={recipient.id} name="recipientId" />
                <div className="flex flex-col lg:flex-row gap-y-2 md:gap-y-0">
                    <div className="text-center flex flex-col items-center gap-y-2 pr-8">
                        <UserCircle profile={recipient.profile} className="h-24 w-24" />
                        <p className="font-black text-[#915eff]">
                            {recipient.profile.firstName} {recipient.profile.lastName}
                        </p>
                       {recipient.profile.department && (
                            <span className="px-2 py-1 bg-gray-300 rounded-xl text-blue-300 w-auto">
                                {recipient.profile.department[0].toUpperCase() + recipient.profile.department.toLowerCase().slice(1)}
                            </span>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col gap-y-4">    
                        <textarea
                            name="message"
                            className="w-full rounded-xl h-40 p-4 bg-tertiary text-white "
                            value={formData.message}
                            onChange={e => handleChange(e, 'message')}
                            placeholder={`Say something nice about ${recipient.profile.firstName}...`}
                        />
                        <div className="flex flex-col items-center md:flex-row md:justify-start gap-x-4">
                            <SelectBox
                                options={colors}
                                name="backgroundColor"
                                value={formData.style.backgroundColor}
                                onChange={e => handleStyleChange(e, 'backgroundColor')}
                                label="Background Color"
                                containerClassName="w-36"
                                className="w-full rounded-xl px-3 py-2 text-gray-400"
                            />
                            <SelectBox
                                options={colors}
                                name="textColor"
                                value={formData.style.textColor}
                                onChange={e => handleStyleChange(e, 'textColor')}
                                label="Text Color"
                                containerClassName="w-36"
                                className="w-full rounded-xl px-3 py-2 text-gray-400"
                            />
                            <SelectBox
                                options={emojis}
                                label="Emoji"
                                name="emoji"
                                value={formData.style.emoji}
                                onChange={e => handleStyleChange(e, 'emoji')}
                                containerClassName="w-36"
                                className="w-full rounded-xl px-3 py-2 text-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <br />
                <p className="text-[#915eff] font-black mb-2">Preview</p>
                <div className="flex flex-col items-center md:flex-row gap-x-24 gap-y-2 md:gap-y-0">
                    <Kudo profile={user.profile} kudo={formData} />
                    <div className="flex-1" />
                        <button
                            type="submit"
                            className="rounded-xl bg-tertiary font-semibold text-[#915eff] w-80 h-12 transition duration-300 ease-in-out hover:bg-black hover:-translate-y-1"
                        >
                            Send
                        </button>
                </div>
            </form>
        </Modal>
    )
}  