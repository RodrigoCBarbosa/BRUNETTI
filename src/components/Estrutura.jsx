import citacao from '../assets/images/arte-citacao-lavabo.webp'
import biblioteca from '../assets/images/biblioteca.webp'
import corredor from '../assets/images/corredor-escultura.webp'
import escada from '../assets/images/escada-iluminada.webp'
import mosaico from '../assets/images/sala-consulta-mosaico.webp'
import poltrona from '../assets/images/poltrona-boucle.webp'
import './Estrutura.css'

// Galeria com legendas no estilo "placa de obra de arte".
const fotos = [
  { src: escada, legenda: 'Escada · Degraus iluminados', alt: 'Escada com degraus iluminados por luz indireta', formato: 'alta' },
  { src: mosaico, legenda: 'Sala de consulta · Retratos em mosaico', alt: 'Sala de consulta com mesa em mármore preto e retratos em mosaico', formato: 'larga' },
  { src: corredor, legenda: 'Corredor · Escultura ao fundo', alt: 'Corredor revestido em nogueira com escultura ao fundo', formato: 'larga' },
  { src: poltrona, legenda: 'Espera · Poltrona bouclé', alt: 'Poltrona em tecido bouclé diante de painel de nogueira', formato: 'alta' },
  { src: biblioteca, legenda: 'Biblioteca · Acervo de arte', alt: 'Biblioteca com estantes iluminadas e poltronas claras', formato: 'alta' },
  { src: citacao, legenda: 'Lavabo · “É mais fácil obter o que se deseja com um sorriso…”', alt: 'Lavabo com bancada de mármore preto e citação no espelho iluminado', formato: 'larga' },
]

export default function Estrutura() {
  return (
    <section id="estrutura" className="section section--light estrutura">
      <div className="container">
        <h2 className="section-title">Estrutura</h2>
        <p className="estrutura__intro reveal">
          Nogueira, mármore, luz indireta e arte: um espaço desenhado para acolher.
        </p>

        <div className="estrutura__galeria">
          {fotos.map((foto) => (
            <figure key={foto.src} className={`estrutura__foto estrutura__foto--${foto.formato} reveal`}>
              <img src={foto.src} alt={foto.alt} loading="lazy" />
              <figcaption>{foto.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
