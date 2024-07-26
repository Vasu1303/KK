"use client";
import React from "react";
import styles from "./loginPage.module.css"
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";

const LoginPage = () =>   {
    

    const alert = () =>{
        toast("Sign In Karke Kya krega? Backend Nahi aata mereko" ,{position: 'top-center'})
    }
    const alert2 = () =>{
        toast("Jab Google Ka nahi hora, github kaise hoga " , {position: 'top-center'})
    }
    const alert3 = () =>{
        toast("Are Naa Maan raha", {position: 'top-center'})
        toast.error('Nahi aata jab backend', {position: 'top-center'})
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={alert} >Sign in with Google</div>
                <div className={styles.socialButton}  onClick={alert2}>Sign in with GitHub</div>
                <div className={styles.socialButton} onClick={alert3}>Sign in with Facebook</div>


            </div>
        </div>

    )
}

export default LoginPage;
