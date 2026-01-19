import styles from '@/styles/home/BookingBoxHome.module.css';

export default function BookingBoxHome() {
    return (
        <div className={styles.bookingContainer}>
            <img 
                src="/img/repairpic.jpg" 
                alt="Person repairing a gaming console" 
                className={styles.repairImage} 
            />
            <div className={styles.infoBoxOverlay}>
                <div className={styles.contentWrapper}>
                    <h2>Boka din reparation eller modifikation idag!</h2>
                    <p>Enkel och snabb bokning online. Välj tid som passar dig bäst.</p>
                    <a href="/priser" className={styles.buttonLink}>
                        Boka tid
                    </a>
                </div>
            </div>
        </div>
    );
}