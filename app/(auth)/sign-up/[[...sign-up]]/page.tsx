import React from 'react'
import { SignUp } from '@clerk/nextjs';

const page = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp />
        </div>
    )
}

export default page