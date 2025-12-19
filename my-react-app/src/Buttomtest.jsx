import styles from'./Button.module.css';

function Buttomtest(){
    return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <br/>
      <br/>
      <button className={styles.secondary}>
        Secondary Button
      </button>
    </div>
  );
}


export default Buttomtest;