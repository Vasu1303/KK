import React from "react";
import styles from "./singlePage.module.css"
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import { Comme } from "next/font/google";
import Comments from "../components/Comments/Comments";
import Link from "next/link";

export const SinglePage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>The Man. KK.</h1>
                   
                    
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/kkpics/kkfamily.jpg" alt="" fill className={styles.coverimage}/>
                   
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.resume}>
                        <h1>Resume</h1>
                       <Image src="/kkpics/kkresume.jpg" alt="" height={500} width={400} className={styles.resumeimage}/>
                       <p>GALLERY</p>
                       
                    </div>
                    <div className={styles.gallery}>
                        <Image src="/kkpics/kk1.jpg" height={500} width={500} className={styles.image}/>
                        <Image src="/kkpics/kk2.jpg" height={1000} width={1000} className={styles.image2}/>
                       
                        <Image src="/kkpics/kk3.jpg" height={1000} width={1000} className={styles.image}/>
                        <Image src="/kkpics/kk5.jpg" height={1000} width={1000} className={styles.image3}/>
                        
                        <Image src="/kkpics/kk11.jpg" height={1000} width={1000} className={styles.image}/>
                        <Image src="/kkpics/kk7.jpg" height={1000} width={1000} className={styles.image}/>
                        <Image src="/kkpics/kk14.jpg" height={500} width={500} className={styles.image}/>
                        <Image src="/kkpics/kk15.jpg" height={500} width={500} className={styles.image}/>
                        <Image src="/kkpics/kk16.jpg" height={500} width={500} className={styles.image}/>
                        <Image src="/kkpics/kk10.jpg" height={500} width={500} className={styles.image}/>



                    </div>
                    <div className={styles.finalText}>
                        <div>So Yes, That's it. Happpy Birthday Sir from all of us. Hum to bajenge aapke saamne,
                            jo karna hai karlo, Neta bhi banenge. We Love You and will irritate you humesha. <br /> <br />
                            ~ ALL OF YOUR PEOPLE
                        </div>
                    </div>
                        
                    
                  
                </div>
             
                

            </div>
            
        </div>
    )
}

export default SinglePage;