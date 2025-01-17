import Image from "next/image";
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.squarespace-cdn.com/content/v1/648c80d7f9efe066dd6ee108/1704756166690-X6LOKO2W92PL3VFH8EZG/IMG_9794.jpg?format=1000w" 
          alt="" 
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
        <Image 
          className={styles.avatar} 
          src="https://images.squarespace-cdn.com/content/v1/648c80d7f9efe066dd6ee108/1704756166690-X6LOKO2W92PL3VFH8EZG/IMG_9794.jpg?format=1000w" 
          alt="" 
          width={50}
          height={50}
        />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Christian Coleman</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
      </div>
      <div className={styles.content}>
        This is where the content goes
      </div>
    </div>
    </div>
    );
  };
  
  export default SinglePostPage;