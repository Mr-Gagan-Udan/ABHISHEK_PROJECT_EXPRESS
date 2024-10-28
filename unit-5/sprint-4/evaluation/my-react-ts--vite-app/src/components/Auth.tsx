import React,{useEffect, useState} from "react";
import {auth} from  "../firebaseConfig";
import {User} from "firebase/auth";

const Auth: React.FC= () => {
    const [user, setUser] = useState< User | null > (null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    })
}