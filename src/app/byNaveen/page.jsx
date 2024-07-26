import React from "react";
import CardList from "../components/CardList/Cardlist";
import Menu from "../components/Menu/Menu";
import styles from "./codingPage.module.css";
import Image from "next/image";

const codingblog=()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>By Naveen</h1>
            <div className={styles.content}>
                <div className={styles.letter}>
                        <div className={styles.image}>

                            <Image src="/kkpics/kkandnaveen3.jpg" height={500} width={400} className={styles.image}/>
                        </div>

                        <div className={styles.text}>
                            <h1>YO</h1>
                            <p>
                                         eeyyy bhaiii ! Kya haal enjoy ur day ham abhi sath hote toh saket tak gedi maar ke aateh or fir gurgaon...miss u ! Happy birthday brother
                            </p>
                        </div>





                    </div>
                    <div>
                        <h1>GALLERY</h1>
                    </div>
                    <div className={styles.gallery}>
                        <Image src="/kkpics/kkandnaveen2.jpg" height={300} width={250} className={styles.image}/>
                        
                        <Image src="/kkpics/kkandnaveen1.jpg" height={300} width={250    } className={styles.image}/>
                        <Image src="/kkpics/kkandnaveen5.jpg" height={300} width={250    } className={styles.image}/>
                        <Image src="/kkpics/kkandnaveen6.jpg" height={300} width={250    } className={styles.image}/>
                        <Image src="/kkpics/kkandnaveen3.jpg" height={300} width={250    } className={styles.image}/>
                    


                    </div>
                


            </div>
        </div>
    )
}

export default codingblog;