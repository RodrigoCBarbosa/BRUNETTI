import { useEffect, useState } from 'react'
import AjusteFonte from './AjusteFonte.jsx'
import Logo from './Logo.jsx'
import './Header.css'

export default function Header({ menuOpen, onToggleMenu, onAgendar }) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = ['header', stuck && 'is-stuck', menuOpen && 'is-menu-open']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="header__left">
        <button
          type="button"
          className="header__menu-button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <AjusteFonte />
      </div>

      <a href="#inicio" className="header__logo" aria-label="Brunetti Odontologia — início">
        <Logo versao="horizontal" />
      </a>

      <button type="button" className="header__cta" onClick={onAgendar}>
        Agendar
      </button>
    </header>
  )
}
