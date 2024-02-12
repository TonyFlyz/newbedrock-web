import Image from 'next/image';
import { Bungee } from 'next/font/google';
import styles from './home.module.css';

const Home = () => {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
    <h1 className={styles.title}>Creative Thoughts Agency.</h1>
    <p className={styles.desc}>
      Expanding your imagination & forming a new conscious through art.
    </p>
    <div className={styles.buttons}>
       <button className={styles.button}>Learn More</button>
       <button className={styles.button}>Contact</button>
    </div>
    <div className={styles.brands}>
      <Image src="/brands.png" atl="" fill className={styles.brandImg}/>
    </div>
  </div>
  <div className={styles.imgContainer}>
      <Image src="/hero.gif" atl="" fill className={styles.heroImg}/>
    </div>
  </div>
    );
};

export default Home;