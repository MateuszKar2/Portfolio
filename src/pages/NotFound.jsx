import styles from './../module/NotFound.module.css';



const NotFound = () => {

    return(
        <>
            <div className={styles.message}>
                <div>Do you know who you're looking for?</div>
                <div>Do you know how much your time is worth?</div>
            </div>
            <div className={styles.link}>Mateusz Karpiński, Frontend Developer</div>
        </>
    )
}

export default NotFound;