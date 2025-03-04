import React from "react";
import styles from "./editorsPick.module.css"
import Link from "next/link";
import Image from "next/image";

export const EditorsPick =(withImage) =>{
    return(
        <div className={styles.container}>
            <Link href="/" className={styles.item}>
                       {withImage && <div className={styles.imageContainer}>
                            <Image src="/kkpics/rashi.jpg" alt="" width={60} height={60} className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.travel}`}>
                                Rashi
                            </span>
                            <h3 className={styles.title}>Happy Birthday Khanna Saab.. achhe insaan ho aap kafi ..it feels really nice to be with you ... you're one of those jisse college life thodi achhi hogyi haan .. chlo enjoyyy your day to the fullestttt. You deserve everything wonderful today and always.Once again... a  very very Happy Birthday!🥰
                            </h3>
                            <div className={styles.detail}>
                               
                                <span className={styles.date}> 27.07.2024</span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                        {withImage && <div className={styles.imageContainer}>
                            <Image src="/kkpics/vishwas.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.coding}`}>
                                Vishwas
                            </span>
                            <h3 className={styles.title}>Happy birthday to Kritagya, probably the wittiest friend I have! Cheers to a lovely life ahead! Allah hu akbar</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                        { withImage && <div className={styles.imageContainer}>
                            <Image src="/kkpics/ayush.jpg" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.culture}`}>
                                Ayush
                            </span>
                            <h3 className={styles.title}>Many happy returns of the day to one of the humorous personalities I came across. #chicmagnet #notabodybuilder #kk</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                        {withImage && <div className={styles.imageContainer}>
                            <Image src="/kkpics/madhu.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.fashion}`}>
                                Madhu
                            </span>
                            <h3 className={styles.title}>HAPPY BIRTHDAY KRITAGYA🥳🥳
                                Hoping all your wishes comes true🤞
                                Have a Fan-CAKE-tastic Day 🥂
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/khushi.jpg" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.food}`}>
                                Khushi
                            </span>
                            <h3 className={styles.title}>Happiest birthday to you KRITAGYA KHANNA🥳🎉
                            Hope your birthday is as stunning  as you are!❤</h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/mrighakshi.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.travel}`}>
                                Mrighakshi
                            </span>
                            <h3 className={styles.title}>kritagyaaaaaa
                                happy happy happy birthday!
                                Lol the first time I met you I was like vasu kahan kahan se apne jaise dhundh kar laata hai. But fir pta chala ki aap gaali dete ho. Idk much honestly but you are really hard working is what I saw. Khush raahooo, aabaad raho, haste raho (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/vibhanshu.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.culture}`}>
                                Vibhanshu
                            </span>
                            <h3 className={styles.title}>Happy birthday kritagya

                                You are one of the most unique people ive met in my life and you’ve been a great friend to me

                                Youre very hardworking and i wish for you the best in your career and life in general, and i hope you have a great great birthday!!

                                Oh and btw
                                Pehle din jab maine tujhe dekha tha i thought you were some serial killer, and i have to say that still might be true😶‍🌫

                                Ps - vasu ko bigaad mat
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/aastha.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.coding}`}>
                                Aastha
                            </span>
                            <h3 className={styles.title}>Hello Mr KK , the master of teasing 
                                Happy Birthday homie ❤🎉<br />
                                To the one who teases everyone but is always there to help ❤ <br />
                                To the one who is so smart that noone can't even pretend to show off their skills around kyunki sir ko har cheez ki knowledge rhti h and sabko apna raasta dikha dete h 😎🫡
                                <br />
                                And to the one who hides his feelings like a pro 
                                We may not always chat,but I know you've got my back, and I've got yours ❤
                                Hope your day is as amazing as you think you are! Hehehe 
                                Happppyyyyyyyy birthday 🥳🥳❤
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/sukhpreet.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.food}`}>
                                Sukhpreet
                            </span>
                            <h3 className={styles.title}>
                                To: Mr. KHANNA <br />
                                Subject: Birthday Wishes 🥂 <br />

                                Happy Birthday Sir !! 
                                Party hard but drink soft

                                Party na mainai di na mai le payunga aaj but it's due for sure.

                                Well wishes to you have a great and adventurous life ahead. <br />

                                Pov: life sucks after 20's, from personal experience of 4 days 🫠

                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/lavanya2.png" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.food}`}>
                                Lavanya
                            </span>
                            <h3 className={styles.title}>
                                Happy birthday kk.... Lol jb vasu ne kk bola I thought KK😂.... Anyways happy birthday.... Janm din ki hardik badhai
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
                    <Link href="/" className={styles.item}>
                       {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/kkpics/vaayu1.jpg" alt="" fill className={styles.image}/>

                        </div>}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.food}`}>
                                Vaayu
                            </span>
                            <h3 className={styles.title}>
                                Happy Birthday Kritagya
                                May your dreams come true and haan mere taraf se vasu apko gift kar dega aur return gift direct mere ko bhej dena hehehe jokes apart 
                                Cheers on your birthday. ...
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.editor}>  </span>
                                <span className={styles.date}>   </span>
                            </div>
                        </div>

                    </Link>
        </div>
    )
}