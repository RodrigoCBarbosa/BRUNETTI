import lounge from '../assets/images/lounge-cabines.webp'
import recepcao from '../assets/images/recepcao-ampla.webp'
import './Experiencia.css'

// Espelho da seção "Gastronomia" do Fasano (fundo bege-claro, 2 cards grandes).
// Textos PROVISÓRIOS.
const cards = [
  {
    titulo: 'Sua Primeira Visita',
    texto:
      'Uma recepção sem pressa, um tempo dedicado a ouvir suas expectativas e uma avaliação completa antes de qualquer proposta de tratamento.',
    imagem: recepcao,
    alt: 'Recepção da clínica com sofás escuros, tapete curvo e iluminação quente',
  },
  {
    titulo: 'Conforto & Privacidade',
    texto:
      'Ambientes reservados, atendimento com hora marcada e cuidados pensados para que cada etapa aconteça com tranquilidade.',
    imagem: lounge,
    alt: 'Lounge com cabines privativas estofadas em veludo',
  },
]

export default function Experiencia() {
  return (
    <section id="experiencia" className="section section--light experiencia">
      <div className="container">
        <h2 className="section-title">Experiência do Paciente</h2>

        {cards.map((card) => (
          <article key={card.titulo} className="experiencia__card reveal">
            <img src={card.imagem} alt={card.alt} loading="lazy" />
            <h3 className="card-title">{card.titulo}</h3>
            <p>{card.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
