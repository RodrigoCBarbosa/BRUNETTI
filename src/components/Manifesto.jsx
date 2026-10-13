import escultura from '../assets/images/arte-escultura-bronze.webp'
import './Manifesto.css'

// Textos PROVISÓRIOS — aguardando história e manifesto da clínica.
export default function Manifesto() {
  return (
    <section id="clinica" className="section manifesto">
      <div className="container">
        <figure className="manifesto__figure reveal">
          <img
            src={escultura}
            alt="Escultura em bronze de figura humana alongada sobre painel de nogueira"
            loading="lazy"
          />
          <figcaption>Acervo Brunetti · Escultura em bronze</figcaption>
        </figure>

        <div className="manifesto__text reveal">
          <span className="eyebrow">A Clínica</span>
          <h2 className="manifesto__title">
            Odontologia como arte.
            <br />
            Hospitalidade como princípio.
          </h2>
          <p>
            Na Brunetti, cada sorriso é tratado como uma obra única: estudado, desenhado e executado
            com precisão técnica e sensibilidade artística.
          </p>
          <p>
            Um espaço pensado para receber com calma e privacidade, onde arquitetura, arte e
            tecnologia trabalham juntas a favor do seu cuidado.
          </p>

          <blockquote className="manifesto__quote">
            <p>“É mais fácil obter o que se deseja com um sorriso do que à ponta da espada.”</p>
            <cite>Atribuída a William Shakespeare</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
