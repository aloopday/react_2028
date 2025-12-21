import styles from  './MyStyles.module.css';

function TestHeader(){
    return(

        <div>
            <h1 className="myheader">
                My Header
            </h1>
            <p className={styles.myparagraph}>
                This is a styled paragraph.
            </p>
        </div>
    )
}
export default TestHeader;