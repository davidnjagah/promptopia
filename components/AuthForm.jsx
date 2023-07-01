
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


export const SignIn = () => {
    const {data: session} = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);


    useEffect(() => {
        const setUpProviders= async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setUpProviders();
    }, [])

  return (
    <div>AuthForm</div>
  )
}

export const SignOut = () => {
    return(
        <div>AuthForm</div>
    )
}



