'use client'
import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./contacts.module.css";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
export const contacts=()=>{
    const alert = () =>{
        toast("OMFOO, Naughty hore ho!", {position: 'top-center'})
    } 
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Sampark Karein</h1>
            <div className={styles.content}>
                <div className={styles.mainArea}>
                    <div className={styles.mainTitle}>CONTACTS</div>
                    <Link href="/" className={styles.mobile}>
                        <Image src="/kkpics/call1.png" width={50} height={50} className={styles.phone}/>
                        <span>+91 78381 01333</span>
                    </Link>
                    <Link href="mailto:kritagykhanna21k@gmail.com" className={styles.g}>
                        <Image src="/kkpics/gmaillogo.png" width={100} height={100} className={styles.gmail}/>
                        <span>kritagykhanna21@gmail.com</span>
                        
                    </Link>
                    
                    <Link href="https://www.instagram.com/khanna__kritagya" className={styles.ig} target="__blank">
                        <Image src="/kkpics/instagramlogo.png" width={500} height={500} className={styles.instagram} alt="/"/>
                        <span>khanna__kritagya</span>
                    </Link>
                        <Link href="" onClick={alert} className={styles.onlyfans}>
                            <Image src="/kkpics/OF1.png" width={500} height={500} className={styles.OF} alt="/"/>
                            <span>KK</span>
                        </Link>
                    
                </div>
                

            </div>
        </div>
    )
}

export default contacts;