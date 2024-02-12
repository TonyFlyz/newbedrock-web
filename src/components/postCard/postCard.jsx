import Link from "next/link";
import styles from "./postCard.module.css"
import Image from "next/image"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.squarespace-cdn.com/content/v1/648c80d7f9efe066dd6ee108/1704756166690-X6LOKO2W92PL3VFH8EZG/IMG_9794.jpg?format=1000w" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Desc</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard