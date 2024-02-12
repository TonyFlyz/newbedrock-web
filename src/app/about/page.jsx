import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
    <div className={styles.container}>

      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}> Welcome to New Bedrock</h1>
        <p className={styles.desc}>
        At the core of Human Connection lies the beating heart of Stories. 
        A profound narrative serves as the enchanting bridge between the storyteller and the captivated audience. 
        We are masters in the art of Visual Production and Strategic Brand Marketing, destined to lead the way in crafting genuine Brand Storytelling experiences. 
        Whether it's the grandeur of Anthem Videos, the cinematic allure of Brand Films, the authenticity of Testimonials, the depth of Documentaries, or any other video methodology, we stand poised to weave and illuminate Powerful Stories that resonate with hearts and minds!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experiences</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experiences</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experiences</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image 
          src="/about.png" 
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
      
    </div>
    );
  };
  
  export default AboutPage;