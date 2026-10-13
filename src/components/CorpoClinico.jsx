import Logo from './Logo.jsx'
import './CorpoClinico.css'

// PROVISÓRIO: aguardando nomes, especialidades, CRO, minibiografia e retratos.
const profissionais = [
  { nome: 'Dra. Nome Sobrenome', especialidade: 'Prótese Dentária · Estética', cro: 'CRO-DF 00000' },
  { nome: 'Dr. Nome Sobrenome', especialidade: 'Implantodontia · Reabilitação Oral', cro: 'CRO-DF 00000' },
  { nome: 'Dra. Nome Sobrenome', especialidade: 'Ortodontia · Invisalign', cro: 'CRO-DF 00000' },
]

export default function CorpoClinico() {
  return (
    <section id="corpo-clinico" className="section corpo">
      <div className="container">
        <h2 className="section-title">Corpo Clínico</h2>

        {profissionais.map((pessoa, i) => (
          <article key={i} className="corpo__card reveal">
            <div className="corpo__retrato" role="img" aria-label="Retrato em breve">
              <Logo versao="simbolo" className="corpo__simbolo" />
              <span>Retrato em breve</span>
            </div>
            <h3 className="card-title">{pessoa.nome}</h3>
            <p>{pessoa.especialidade}</p>
            <p className="corpo__cro">{pessoa.cro}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
