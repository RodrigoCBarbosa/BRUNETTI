import { useEffect, useRef } from 'react'
import { clinica } from '../data/clinica.js'
import { secoes } from '../data/navegacao.js'
import Logo from './Logo.jsx'
import './MenuOverlay.css'

export default function MenuOverlay({ open, onClose }) {
  const navRef = useRef(null)

  useEffect(() => {
    if (!open) return
    // Leva o foco para o menu e o devolve ao fechar (navegação por teclado)
    const focoAnterior = document.activeElement
    navRef.current?.querySelector('a')?.focus()
    const onKey = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      focoAnterior?.focus?.({ preventScroll: true })
    }
  }, [open, onClose])

  return (
    <div id="menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="menu__inner">
        <nav ref={navRef} className="menu__nav" aria-label="Menu principal">
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
