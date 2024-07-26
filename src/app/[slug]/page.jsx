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
                    <Image src="/kkpics/kkfamily.jpg" alt="" fill className={styles.image}/>
                   
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <h1>Resume</h1>
                        <img src="/kkpics.kkandkrati1.png" alt="" />
                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et dolor, ratione nam quasi quod quidem, nihil eligendi fuga, eius unde aut necessitatibus labore dolorem voluptatem praesentium error atque amet.</p>
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consecte tur adipisicing elit. Suscipit et dolor, ratione nam quasi quod quidem, nihil eligendi fuga, eius unde aut necessitatibus labore dolorem voluptatem praesentium error atque amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolore aperiam, commodi est impedit, delectus aliquam ducimus optio accusamus voluptatum fuga quaerat autem reprehenderit aliquid fugit temporibus, numquam a rem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, ipsa magnam unde voluptate eum quos, modi incidunt dignissimos, animi rem inventore cum fugiat reprehenderit libero odit consequatur excepturi qui quibusdam? </p>
                    </div>
                  
                </div>
             
                

            </div>
            
        </div>
    )
}

export default SinglePage;