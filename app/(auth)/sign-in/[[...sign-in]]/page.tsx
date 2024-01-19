import React from 'react'
import { SignIn } from '@clerk/nextjs';

const page = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <SignIn />
        </div>
    )
}

export default page