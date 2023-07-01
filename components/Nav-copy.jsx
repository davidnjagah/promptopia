'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
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

   async function handleSignIn (id) {
        await signIn(id, {callbackUrl: "/"});
    }

    async function handleSignOut () {
        await signOut();
    }

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
            src="/assets/images/logo.svg"
            alt="Promptopia Logo"
            width={30}
            height={30}
            className='object-contain'
            />
            <p className='logo_text'>Promptopia</p>

        </Link>

        
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt" className='black_btn'>
                        Create Post
                    </Link>
                    
                    <button type="button" onClick={() => {handleSignOut(); console.log("You've clicked Me");}}
                     className='outline_btn'>
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        />
                    </Link>

                </div>
            ): (
                <>
                {providers &&
                    Object.values(providers).map((provider) =>
                    (
                        <button
                        type="button"
                        key={provider.name}
                        onClick={()=> handleSignIn(provider.id)}
                        className='black_btn'
                        >
                            Sign In
                        </button>
                    ))
                }
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <button
                    onClick={() => setToggleDropDown((prev) => !prev)}
                    //className='black_btn'
                    >
                    <Image
                        src={session?.user.image}
                        width={35}
                        height={35}
                        className='rounded-full'
                        alt='profile'
                    /></button>

                        {toggleDropDown && (
                           <div className='dropdown'> 
                           <Link
                           href='/profile'
                           className='dropdown_link'
                           onClick={() => setToggleDropDown(false)}
                           >
                           My Profile
                           </Link>
                           <Link
                           href='/create-prompt'
                           className='dropdown_link'
                           onClick={() => setToggleDropDown(false)}
                           >
                           
                           Create Prompt
                           </Link>
                           <button
                           type="button"
                           onClick={() => {
                            setToggleDropDown(false);
                            handleSignOut();
                           }}
                           className='mt-5 w-full black_btn'
                           >
                            Sign Out
                           </button>
                           </div>
                        )}
                </div>
            ):(
                <>
                {providers &&
                    Object.values(providers).map((provider) =>
                    (
                        <button
                        type="button"
                        key={provider.name}
                        onClick={()=> handleSignIn(provider.id)}
                        className='black_btn'
                        >
                            Sign In
                        </button>
                    ))
                }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav