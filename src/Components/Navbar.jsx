import { Link } from "react-router-dom"
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <>
        <div class={styles.nav}>
        <div class={styles.box}><Link to="/">
            <img src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook" alt="masai" />
            </Link></div>
        <div class={styles.box}><Link to="/lectures">Lectures</Link></div>
        <div class={styles.box}><Link to="/assignments">Assignments</Link></div>
        <div class={styles.box}><Link to="/quizzes">Quizzes</Link></div>
        <div class={styles.box}><Link to="/tickets">Tickets</Link></div>
        <div class={styles.box}><Link to="/discussions">Discussions</Link></div>
        <div class={styles.box}><Link to="./notifications">Notifications</Link></div>
        <div class={styles.box}><Link to="/electives">Electives</Link></div>
        </div>
        </>
    )
}