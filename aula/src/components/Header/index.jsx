import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <span> Devs Full Stack </span>
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Projetos</a>
        <a href="">Contatos</a>
      </nav>
    </header>
  )
}

export default Header
