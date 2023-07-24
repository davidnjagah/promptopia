"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const userProfile = ({ params }) => {

    const [userPosts, setUserPosts] = useState([]);

    const searchParams = useSearchParams();

    console.log(params);

    const userName = searchParams.get("name");

    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();
  
        setUserPosts(data);
      }
     
    useEffect(() => {
      
      setTimeout(() => {
        if(params?.id) fetchPosts();
      }, 500);

    }, [params.id]);
    
  return (
    <Profile
    name={userName}
    desc="Welcome to your personalised profile page"
    data={userPosts}
    />
  )
}

export default userProfile