import styles from './Header.module.css'

function Header() {

    return (
      <>
      <header className={styles.header}>
        <div className={styles.nav}>
        <a href="/">SHOP</a>
        <a href="/">ABOUT</a>
        </div>
     

        <a href="/"><img src="/src/public/icons/PARFUM.svg" alt="logotype" loading="lazy"/></a>
      
        <div className={styles.nav}>
        <a href="/">BLOG</a>
        <a href="/">CONTACT</a>
        <a href="/"><img src="/src/public/icons/iconoir_shopping-bag xsmall.svg" alt="basket" loading="lazy"/></a>
        </div>
      </header>
      </>
    )
  }
  
  export default Header
  