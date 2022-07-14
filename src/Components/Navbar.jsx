import { Link } from "react-router-dom"
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <>
        <div className={styles.nav}>
            
        <div className={styles.mainBox1}>
        <div className={styles.box}><Link to="/">
            <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="masai" />
            </Link></div>
        <div className={styles.box}><Link to="/lectures">Lectures</Link></div>
        <div className={styles.box}><Link to="/assignments">Assignments</Link></div>
        <div className={styles.box}><Link to="/quizzes">Quizzes</Link></div>
        <div className={styles.box}><Link to="/tickets">Tickets</Link></div>
        <div className={styles.box}><Link to="/discussions">Discussions</Link></div>
        <div className={styles.box}><Link to="/notifications">Notifications</Link></div>
        <div className={styles.box}><Link to="/electives">Electives</Link></div>
        </div>

        <div class={styles.mainBox2}>username</div>

        </div>
        
        </>
    )
}