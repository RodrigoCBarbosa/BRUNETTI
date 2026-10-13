import { clinica } from '../data/clinica.js'
import { secoes } from '../data/navegacao.js'
import Logo from './Logo.jsx'
import './Footer.css'

const ANO_ATUAL = new Date().getFullYear()

// Ícone do Instagram monocromático (o oficial tem degradê com vermelho).
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const { endereco } = clinica

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <Logo versao="blocada" className="footer__logo" />
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Navegação</h2>
          <ul>
            {secoes.map((secao) => (
              <li key={secao.href}>
                <a href={secao.href}>{secao.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Endereço</h2>
          <address>
            {endereco.linha1}
            <br />
            {endereco.linha2}
            <br />
            CEP {endereco.cep}
          </address>
          <a className="footer__link" href={endereco.mapsUrl} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Contato</h2>
          <p>{clinica.telefone}</p>
          {clinica.horario.map((linha) => (
            <p key={linha}>{linha}</p>
          ))}
          <a
            className="footer__social"
            href={clinica.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Brunetti Odontologia"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className="footer__bottom">
          <p>{clinica.responsavelTecnico}</p>
          <p>© {ANO_ATUAL} Brunetti Odontologia</p>
        </div>
      </div>
    </footer>
  )
}
