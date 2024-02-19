'use client'
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'

interface PageProps {
}

const Page: React.FC<PageProps> = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()
    const [signuperror, setError] = useState<string | null>(''); 

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            setError(error);
            console.log(error);
            return;
        }

        console.log(result)
        return router.push("/admin")
    }
    return (<div className="wrapper">
        <div className="form-wrapper h-screen grid grid-cols-1 sm:grid-cols-2 bg-[#f5f4f4] justify-center items-center">
            <div className="h-full w-full bg-center mt-16 sm:mt-0 mx-auto flex bg-[url('../assets/signin.svg')] bg-no-repeat justify-center items-center sm:h-3/4 sm:w-3/4"></div>
            <div className="text-black x    w-3/4 sm:w-3/5 h-3/5 m-2 flex flex-col border-none sm:border-2 mx-auto sm:border-black rounded-xl justify-center items-center">
                <h1 className="text-2xl mb-4">Sign Up</h1>
                <form onSubmit={handleForm} className="form items-center">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input className="my-2 mb-4 p-1 px-2 rounded-lg" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input className="my-2 mb-4 p-1 px-2 rounded-lg" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    </label>
                    <button className="flex p-4 py-1 m-auto my-2 border border-black rounded-lg" type="submit">Sign up</button>
                    <p className="mt-3 cursor-pointer" onClick={() => router.push("/signin")}>Already have an account? Sign In!</p>
                </form>
                {signuperror &&
                <div>
                    <p className="text-red-500">Error</p>
                </div>
                }
            </div>
        </div>
    </div>);
}

export default Page;