import { useEffect, useState } from 'react'
import { clinica } from '../data/clinica.js'
import corredor from '../assets/images/hero-corredor-arvore.webp'
import escada from '../assets/images/hero-escada-espiral.webp'
import recepcao from '../assets/images/hero-recepcao-brunetti.webp'
import Logo from './Logo.jsx'
import './Hero.css'

// Enquanto o vídeo editado não chega (ver seção 3.10 do documento),
// o hero alterna fotos com zoom lento. Para usar vídeo, troque os
// slides por <video autoPlay muted loop playsInline poster=...>.
const slides = [
  { src: corredor, alt: 'Corredor revestido em nogueira com árvore ao fundo' },
  { src: recepcao, alt: 'Recepção com o nome Brunetti iluminado na parede' },
  { src: escada, alt: 'Escada em caracol vista de cima' },
]

const INTERVALO = 6500

export default function Hero() {
  const [ativo, setAtivo] = useState(0)

  // Avança sozinho, exceto para quem prefere menos movimento.
  // Depende de `ativo`: ao clicar num ponto, o tempo recomeça do zero.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setTimeout(() => setAtivo((i) => (i + 1) % slides.length), INTERVALO)
    return () => clearTimeout(timer)
  }, [ativo])

  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`hero__slide ${i === ativo ? 'is-active' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>

      <div className="hero__content">
        <h1 className="hero__tagline">{clinica.tagline}</h1>
      </div>

      <div className="hero__footer">
        <Logo versao="simbolo" className="hero__symbol" />
        <div className="hero__dots" role="group" aria-label="Imagens">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-pressed={i === ativo}
              aria-label={`Mostrar imagem ${i + 1}`}
              className={i === ativo ? 'is-active' : ''}
              onClick={() => setAtivo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
