import { tratamentoDestaque, tratamentosAssinatura } from '../data/tratamentos.js'
import './TratamentosAssinatura.css'

// Espelho da seção "Destinos" do Fasano: 4 cards verticais + 1 card largo.
export default function TratamentosAssinatura({ onAgendar }) {
  return (
    <section id="assinatura" className="section assinatura">
      <div className="container">
        <h2 className="section-title">Tratamentos de Assinatura</h2>

        {tratamentosAssinatura.map((tratamento) => (
          <article key={tratamento.id} className="assinatura__card reveal">
            <img className="thumb" src={tratamento.imagem} alt={tratamento.alt} loading="lazy" />
            <h3 className="card-title">{tratamento.titulo}</h3>
            <p>{tratamento.texto}</p>
            <button
              type="button"
              className="text-link assinatura__link"
              onClick={() => onAgendar(tratamento.titulo)}
            >
              Solicitar consulta
            </button>
          </article>
        ))}

        <a href={tratamentoDestaque.href} className="assinatura__wide reveal">
          <img src={tratamentoDestaque.imagem} alt={tratamentoDestaque.alt} loading="lazy" />
          <h3 className="card-title">{tratamentoDestaque.titulo}</h3>
          <p>{tratamentoDestaque.texto}</p>
          <span className="text-link">Saiba mais</span>
        </a>
      </div>
    </section>
  )
}
