import styles from'./Button.module.css';

function Buttomtest(){
    return(
        <div>
            
        <button className={`${styles.mybutton} ${styles.primaty}`}>
        My Primary Button
      </button>
      <br />
      <br />
      <button className={`${styles.mybutton} ${styles.secondary}`}>
        My Secondary Button
      </button>

        </div>
       
    );
}


export default Buttomtest;