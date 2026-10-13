import { useEffect } from 'react'
import { clinica } from '../data/clinica.js'
import { secoes } from '../data/navegacao.js'
import Logo from './Logo.jsx'
import './MenuOverlay.css'

export default function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div id="menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="menu__inner">
        <nav className="menu__nav" aria-label="Menu principal">
          <ul>
            {secoes.map((secao) => (
              <li key={secao.href}>
                <a href={secao.href} onClick={onClose}>
                  {secao.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <aside className="menu__info">
          <Logo versao="blocada" className="menu__logo" />
          <p className="menu__tagline">{clinica.tagline}</p>
          <address>
            {clinica.endereco.linha1}
            <br />
            {clinica.endereco.linha2}
            <br />
            CEP {clinica.endereco.cep}
          </address>
          <p>{clinica.telefone}</p>
        </aside>
      </div>
    </div>
  )
}
