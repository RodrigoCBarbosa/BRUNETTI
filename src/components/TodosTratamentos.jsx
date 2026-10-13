import { categorias } from '../data/tratamentos.js'
import './TodosTratamentos.css'

export default function TodosTratamentos({ onAgendar }) {
  return (
    <section id="tratamentos" className="section todos">
      <div className="container">
        <h2 className="section-title">Todos os Tratamentos</h2>

        {categorias.map((categoria, i) => (
          <article key={categoria.titulo} className="todos__categoria reveal">
            <span className="todos__numero">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="card-title">{categoria.titulo}</h3>
            <p className="todos__texto">{categoria.texto}</p>
            <ul>
              {categoria.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <div className="todos__cta reveal">
          <button type="button" className="button" onClick={() => onAgendar()}>
            Solicitar consulta
          </button>
        </div>
      </div>
    </section>
  )
}
