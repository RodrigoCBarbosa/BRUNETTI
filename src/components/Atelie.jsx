import coroa from '../assets/images/atelie-coroa-pinca.webp'
import estudio from '../assets/images/estudio-fotografico.webp'
import './Atelie.css'

// Seção de tecnologia ("Ateliê Digital"). Textos PROVISÓRIOS.
// A mensagem do "sorriso em 3 dias" aparece com redação segura (ver seção 2.2).
const recursos = [
  {
    titulo: 'Escaneamento intraoral',
    texto: 'Moldagem digital, sem massas e com precisão milimétrica.',
  },
  {
    titulo: 'Planejamento digital do sorriso',
    texto: 'O resultado é desenhado e discutido com você antes de começar.',
  },
  {
    titulo: 'Estúdio fotográfico próprio',
    texto: 'Registro profissional que orienta cada etapa do planejamento.',
  },
  {
    titulo: 'Ateliê de porcelana',
    texto: 'Peças finalizadas e pintadas à mão, uma a uma.',
  },
]

export default function Atelie() {
  return (
    <section id="atelie" className="section section--dark atelie">
      <div className="container">
        <h2 className="section-title">Ateliê Digital</h2>

        <figure className="atelie__media reveal">
          <img src={coroa} alt="Mãos finalizando uma coroa de porcelana com pinça" loading="lazy" />
          <img
            src={estudio}
            alt="Estúdio fotográfico da clínica com iluminação profissional"
            loading="lazy"
          />
        </figure>

        <div className="atelie__text reveal">
          <p className="atelie__lead">
            Tecnologia de precisão a serviço de um trabalho artesanal.
          </p>
          <p>
            Do escaneamento à pintura final da porcelana, todo o fluxo é digital e integrado — o que
            permite reduzir prazos nos casos indicados, sempre conforme a avaliação clínica.
          </p>

          <ul className="atelie__list">
            {recursos.map((recurso) => (
              <li key={recurso.titulo}>
                <h3>{recurso.titulo}</h3>
                <p>{recurso.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
