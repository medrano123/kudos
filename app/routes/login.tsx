import React, { useState } from "react";
import type { V2_MetaFunction } from "@remix-run/react";

import { Layout } from "~/components/layout";
import { styles } from "~/styles/styles.js";
import { FormField } from "~/components/FormField";

export const meta: V2_MetaFunction = () => {
    return [{ title: "New Remix App" }];
};


export default function Login() {
    const [isUser, setIsUser] = useState("login");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });
     
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData( form => ({
            ...form,
            [field] : event.target.value
        }))
    };

  	return (
        <Layout>
			<div className='h-full flex justify-center items-center flex-col gap-4'>

                <h2 className="text-5xl font-black text-[#915eff]">
                    Welcome to Kudos!
                </h2>
                <p className="font-black text-2xl text-secondary">
                    {/* Login to gives some praise! */}
                    {
                        isUser ? "Login to give some praise!" : "Sign up to get started"
                    }
                </p>
                <button
                    onClick={() => setIsUser(isUser == 'login' ? 'register' : 'login')}
                    className=" text-secondary text-sm font-extrabold ">

                    {isUser === 'login' ? 'Sign Up' : 'Already have an account? Sign In'}
                </button>
                <form method="post" className="rounded-2xl p-6 w-96 flex flex-col gap-4 mb-8 bg-black-100">
                    <div className="flex flex-col ">
                        <FormField
                            htmlFor="email"
                            label="Email"
                            value={formData.email}
                            onChange={e => handleInputChange(e, 'email')}
                            placeholder="Enter your email address"
                        />
                        <FormField
                            htmlFor="password"
                            type="password"
                            label="Password"
                            value={formData.password}
                            onChange={e => handleInputChange(e, 'password')}
                            placeholder="Enter your password"

                        />
                        {
                            isUser !== 'login' ? <>
                                <FormField
                                    htmlFor="first name"
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={e => handleInputChange(e, 'firstName')}
                                    placeholder="Enter your first name" 
                                />
                                <FormField
                                    htmlFor="last name"
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={e => handleInputChange(e, 'lastName')}
                                    placeholder="Enter your last name"
                                />
                            </> : null
                        }
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
                            <button type="submit" name="_action" value={isUser} className="rounded-xl mt-2 bg-tertiary px-3 py-2 text-[#915eff] font-black transition duration-300 ease-in-out hover:bg-[#fdsf3] hover:-translate-y-1">
                                {
                                    isUser === 'login' ? "Sign In" : "Sign Up"
                                }
                         </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>  	
    );
}
