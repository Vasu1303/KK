import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./culturePage.module.css";
import Image from "next/image";

const cultureblog=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Prajwal</h1>
            <div className={styles.content}>
            <div className={styles.letter}>
                    <div className={styles.image}>

                        <Image src="/kkpics/kkandprajwal.jpg" height={1000} width={1000} className={styles.coverimage}/>
                    </div>

                    <div className={styles.text}>
                        <h1>YES SIR</h1>
                        <p>
                        Kritagya,
                            U were a 100% unknown to me, I'm sorry if i made sime pre made perceptions without getting to knw u first. <br />

                            But do i know u now? <br />
                            Kaafi had tak yes. Ig. <br />
                            I'm happy to be a part of ur 'angry' side wali personality hehe. <br />
                            Ik how to deal with u  ( till some extent )
                            And idk kya kya kaha kaha se sunke aa jata h. <br />
                            But from day 1 i had nothing but admiration for u . <br />
                            How full u r of knowledge,
                            Tune jab pehli baar mujhe oops padhaya tha with ex, mind blown mkc.
                            I've not done much in coding. <br />
                            But haan agar tu vasu na hote
                            I would have never started giving a fk to career ya kuch bhi related to it.
                            U admire me and brings the best out of me <br />
                            And yes,
                            Wac main log bol dere the bhai
                            Ki kisi ki nhi sunega prajwal ye kk ki zaroor sunega. <br />
                            Toh haan true bhi h, <br />
                            One thing I'm unsure of, <br />
                            Is  <br />  
                            Idk whether to give u ur private space when u dont feel urself 
                            Or just invade it and tell u that u can talk...
                            But never the less
                            U're one of my closest college main.
                            I Don't feel like loosing u..
                        </p>
                    </div>





                </div>
                <div>
                    <h1>GALLERY</h1>
                </div>
                <div className={styles.gallery}>
                    <Image src="/kkpics/kkandprajwal2.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandprajwal3.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandprajwal4.jpg" height={1000} width={1000} className={styles.image}/>
                    
                    
                    <Image src="/kkpics/kkandprajwal2.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandprajwal5.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandprajwal6.jpg" height={1000} width={1000} className={styles.image}/>
                   
                   


                </div>
                

            </div>
        </div>
    )
}

export default cultureblog;