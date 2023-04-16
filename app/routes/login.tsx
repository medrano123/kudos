import React, { useState, useEffect, useRef } from "react";
import type { V2_MetaFunction } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'

import { login, register, getUser } from '~/utils/auth.server'
import { Layout } from "~/components/layout";
import { styles } from "~/styles/styles.js";
import { FormField } from "~/components/FormField";
import { validateEmail, validateName, validatePassword } from '~/utils/validators.server'

export const loader: LoaderFunction = async ({ request }) => {
    return (await getUser(request)) ? redirect("/") : null;
};

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData()
    const action = form.get('_action')
    const email = form.get('email')
    const password = form.get('password')
    let firstName = form.get('firstName')
    let lastName = form.get('lastName')


    if (typeof action !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        return json({ error: `Invalid Form Data1`, form: action }, { status: 400 })
      }
    
      if (action === 'register' && (typeof firstName !== 'string' || typeof lastName !== 'string')) {
        return json({ error: `Invalid Form Data2`, form: action }, { status: 400 })
      }
    

    const errors = {
        email: validateEmail(email),
        password: validatePassword(password),
        ...(action === 'register'
            ? {
                firstName: validateName((firstName as string) || ''),
                lastName: validateName((lastName as string) || ''),
            }  : {}),
    }

    if (Object.values(errors).some(Boolean)){
        return json({ errors, fields: { email, password, firstName, lastName }, form: action }, { status: 400 })
    }

      // validation ...

    switch (action) {
        case 'login': {
            return await login({ email, password })
        }
        case 'register': {
            firstName = firstName as string
            lastName = lastName as string
            return await register({ email, password, firstName, lastName })
        }
        default:
            alert({errors});
            return json({ error: `Invalid Form Data` }, { status: 400 });
    }
}



export default function Login() {
    const actionData = useActionData()
    const [formError, setFormError] = useState(actionData?.error || '')
    const [errors, setErrors] = useState(actionData?.errors || {})
    const firstLoad = useRef(true)
    const [action, setAction] = useState("login");
    const [formData, setFormData] = useState({
        email: actionData?.fields?.email || '',
        password: actionData?.fields?.password || '',
        firstName: actionData?.fields?.lastName || '',
        lastName: actionData?.fields?.firstName || '',
    })
     
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData( form => ({
            ...form,
            [field] : event.target.value
        }))
    };

    useEffect(() => {
        if (!firstLoad.current) {
            const newState = {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                }
            setErrors(newState)
            setFormError('')
            setFormData(newState)
        }
    }, [action])
    
    useEffect(() => {
        if (!firstLoad.current) {
            setFormError('')
        }
    }, [formData])
    
    useEffect(() => { 
        firstLoad.current = false 
    }, [])
    

  	return (
        <Layout>
			<div className='h-full flex justify-center items-center flex-col gap-4'>

                <h2 className="text-5xl font-black text-[#915eff]">
                    Welcome to Kudos!
                </h2>
                <p className="font-black text-2xl text-secondary">
                    {/* Login to gives some praise! */}
                    {
                        action ? "Login to give some praise!" : "Sign up to get started"
                    }
                </p>
                <button
                    onClick={() => setAction(action == 'login' ? 'register' : 'login')}
                    className=" text-secondary text-sm font-extrabold ">

                    {action === 'login' ? 'Sign Up' : 'Already have an account? Sign In'}
                </button>
                <form method="post" className="rounded-2xl p-6 w-96 flex flex-col gap-4 mb-8 bg-black-100">
                    <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full">
                        {formError}
                    </div>

                    <div className="flex flex-col ">

                        <FormField
                            htmlFor="email"
                            label="Email"
                            value={formData.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            placeholder="Enter your email address"
                            error={errors?.email}

                        />
                        <FormField
                            htmlFor="password"
                            type="password"
                            label="Password"
                            value={formData.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                            placeholder="Enter your password"
                            error={errors?.password}
                        />
                        {action !== 'login' ? (
                        <> 
                            {/* or maybe switchto not login */}
                                <FormField
                                    htmlFor="firstName"
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange(e, 'firstName')}
                                    placeholder="Enter your first name" 
                                    error={errors?.firstName}
                                />
                                <FormField
                                    htmlFor="lastName"
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange(e, 'lastName')}
                                    placeholder="Enter your last name"
                                    error={errors?.lastName}

                                />
                            </>) : null }
                        {/* <label htmlFor="email" className="">
                            <h3 className='mb-4 text-[#915eff] font-black text-2xl'>Email</h3>
                        </label>
                        <input type="text" id="email" name="email" placeholder="Enter Email" className="w-full p-2 rounded-xl my-2 bg-tertiary" style={{ color: 'white' }} />

                        <label htmlFor="password" className="">
                            <h3 className='mb-4 mt-2 text-[#915eff] font-black text-2xl '>Password</h3>
                        </label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" className="w-full p-2 rounded-xl my-2 bg-tertiary" style={{ color: 'white' }}/> */}

                        <div className="w-full text-center">
                            {/* <input
                                type="submit"
                                className="rounded-xl mt-2 bg-tertiary px-3 py-2 text-[#915eff] font-black transition duration-300 ease-in-out hover:bg-[#fdsf3] hover:-translate-y-1"
                                value={isUser === 'login' ? "Sign In" : "Sign Up" }
                            /> */}
                            <button 
                                type="submit"
                                name="_action"
                                value={action} 
                                className="rounded-xl mt-2 bg-tertiary px-3 py-2 text-[#915eff] font-black transition duration-300 ease-in-out hover:bg-[#fdsf3] hover:-translate-y-1">
                                {
                                    action === 'login' ? "Sign In" : "Sign Up"
                                }
                         </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>  	
    );
}
