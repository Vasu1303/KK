import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"

const Card5=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/kkpics/kkcard5.jpg" alt="" fill className={styles.image}/>
            </div>                    
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>24.07.2024 | </span>
                    <span className={styles.category}>NETAGIRI</span>
                </div>
                <Link href="/">
                  <h1 className={styles.title}>Ban gaya Neta?</h1>
                </Link>
                
               
                <p className={styles.description}>
                    Bas, Ban gaye aap neta? 
                </p>
                

            </div>
        </div>
    )
}

export default Card5