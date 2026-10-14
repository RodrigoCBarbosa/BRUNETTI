import { clinica } from '../data/clinica.js'
import fachada from '../assets/images/fachada-vidro.webp'
import './VisiteNos.css'

export default function VisiteNos() {
  const { endereco } = clinica

  return (
    <section id="visite" className="section section--light visite">
      <div className="container">
        <h2 className="section-title">Visite-nos</h2>

        <figure className="visite__fachada reveal">
          <img src={fachada} alt="Fachada de vidro com o logotipo Brunetti Odontologia" loading="lazy" />
          <figcaption>Lago Sul · Brasília</figcaption>
        </figure>

        <div className="visite__info reveal">
          <div>
            <h3 className="visite__label">Endereço</h3>
            <address>
              {endereco.linha1}
              <br />
              {endereco.linha2}
              <br />
              CEP {endereco.cep}
            </address>
          </div>

          <div>
            <h3 className="visite__label">Horário</h3>
            {clinica.horario.map((linha) => (
              <p key={linha}>{linha}</p>
            ))}
          </div>

          <div>
            <h3 className="visite__label">Contato</h3>
            <p>{clinica.telefone}</p>
          </div>

          <a className="button" href={endereco.mapsUrl} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>

        {/* Mapa nas cores padrão do Google: única exceção à regra "sem vermelho" */}
        <div className="visite__mapa reveal">
          <iframe
            title="Mapa da Brunetti Odontologia"
            src={endereco.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
