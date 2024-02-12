import styles from "./footer.module.css"

const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>New Bedrock</div>
        <div className={styles.text}>
          New Bedrock creative thoughts agency © All rights reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;