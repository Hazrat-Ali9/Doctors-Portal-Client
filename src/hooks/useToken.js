import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {email:email}
        if(email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method:'PUT',
                header:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(currentUser),
            })
            .then(res => res.json())
            .then(data => {
                console.log("data inside token", data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken);
            })
        }
    },[user])
    return [token];
};

export default useToken;