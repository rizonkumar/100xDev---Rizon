'use client'

import {ChangeEventHandler, useState} from 'react'
import {useRouter} from 'next/navigation'
import {signup} from "@/app/actions/user";

export function Signup() {
    const [username, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const router = useRouter()

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <a
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                >
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">Sign up</div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput
                            label="Username"
                            placeholder="rizon@gmail.com"
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                        <LabelledInput
                            label="Password"
                            type="password"
                            placeholder="123456"
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                        />
                        <button
                            onClick={async () => {
                                try {
                                    const response = await signup(username, password);
                                    if (response === "Signup successfully") {
                                        // Signup was successful
                                        router.push('/');
                                    } else {
                                        console.error("Signup failed:", response);
                                    }
                                } catch (error) {
                                    console.error("Error during signup:", error);
                                }
                            }}
                            type="button"
                            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Sign up
                        </button>
                    </div>
                </a>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string
    placeholder: string
    type?: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

function LabelledInput({
                           label,
                           placeholder,
                           type,
                           onChange,
                       }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">
                {label}
            </label>
            <input
                type={type || 'text'}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
                onChange={onChange}
            />
        </div>
    )
}
