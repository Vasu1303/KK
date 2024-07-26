import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./blogPage.module.css"
import Image from "next/image";
import Footer from "../components/footer/Footer";


const BlogPage=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Krati</h1>
            <div className={styles.content}>
                <div className={styles.letter}>
                    <div className={styles.image}>

                        <Image src="/kkpics/kkandkraticover.jpg" height={1400} width={1400} className={styles.coverimage}/>
                    </div>

                    <div className={styles.text}>
                        <h1>To the Guy in Blue Sweatshirt</h1>
                        <p>
                            Saw you for the first time in the physics lab and wont lie but i found you hot(facts) ab bajna mat but ek vo din h aur ek ye and idk how but kaafi smoothly you knocked the door of my life and dammit rehne hi lg gya h.
                            Well,there is no way in this world through which I can actually express my love for you but THANKYOUUUU SOOO MUCHH for everything you do for me.
                            Thankyou for being all ears to my problems,for listening to those ranting sessions, for legit being mohalle ki aunty when I give you the tea, for making those shitty days better just by showing up and assuring that you are there like the strongest pillar.
                            You choose to love me everyday, even when I get difficult to love sometimes. <br />
                            I love when you smile, it legit makes me smile ear to ear ,to watch you happy is probably my favourite sport. <br />
                            I love how dedicated you are towards your goals and how you never forget to push me to touch my potential,i know you love to annoy me and lowkey even I love being annoyed kyunki uske baad ka princess treatment ufff,i love your reaction when you hear that vroom sound from a speeding car,i love that you never forget to ask me if I have had enough water and the list can go on but kritagya I just love you for making this life so easy.
                            Its almost been two years of knowing you now but I never stopped discovering the limits of you niceness coz maybe there ain’t any.
                            Now no raat is sunni coz always naal mere tu. <br />
                            Happiest birthday my love,thankyou for personifying home for me, every second with you is an 11:11 coz it’s not the number who’s angel, it’s you!!
                        </p>
                    </div>





                </div>
                <div>
                    <h1>GALLERY</h1>
                </div>
                <div className={styles.gallery}>
                    <Image src="/kkpics/kkandKrati5.jpg" height={500} width={500} className={styles.image}/>
                    <Image src="/kkpics/kkandkraticover.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati7.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati3.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati4.jpg" height={1000} width={1000} className={styles.image}/>
                    
                    <Image src="/kkpics/kkandkrati6.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati9.jpg" height={1000} width={1000} className={styles.image}/>
                    <Image src="/kkpics/kkandkrati11.jpg" height={500} width={500} className={styles.image}/>
                   
                   


                </div>

                 

               
                

               
                


            </div>
        </div>
    )
}

export default BlogPage;