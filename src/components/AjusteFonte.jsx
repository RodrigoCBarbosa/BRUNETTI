import { Minus, Plus } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import useTamanhoFonte from '../hooks/useTamanhoFonte.js'
import './AjusteFonte.css'

// Botão "Aa" no header que abre um painel para aumentar/diminuir o texto do site.
export default function AjusteFonte() {
  const [aberto, setAberto] = useState(false)
  const raizRef = useRef(null)
  const botaoRef = useRef(null)
  const { nivel, podeDiminuir, podeAumentar, diminuir, aumentar, redefinir } = useTamanhoFonte()

  useEffect(() => {
    if (!aberto) return
    const aoClicarFora = (event) => {
      if (!raizRef.current?.contains(event.target)) setAberto(false)
    }
    const aoTeclar = (event) => {
      if (event.key === 'Escape') {
        setAberto(false)
        botaoRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', aoClicarFora)
    document.addEventListener('keydown', aoTeclar)
    return () => {
      document.removeEventListener('pointerdown', aoClicarFora)
      document.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto])

  return (
    <div ref={raizRef} className={`ajuste ${aberto ? 'is-open' : ''}`}>
      <button
        ref={botaoRef}
        type="button"
        className="ajuste__toggle"
        aria-label="Tamanho do texto"
        aria-expanded={aberto}
        aria-controls="ajuste-painel"
        onClick={() => setAberto((a) => !a)}
      >
        <span aria-hidden="true">
          A<small>a</small>
        </span>
      </button>

      <div id="ajuste-painel" className="ajuste__painel" role="group" aria-label="Tamanho do texto" hidden={!aberto}>
        <p className="ajuste__titulo">Tamanho do texto</p>

        <div className="ajuste__controles">
          <button type="button" onClick={diminuir} disabled={!podeDiminuir} aria-label="Diminuir texto">
            <Minus size={14} strokeWidth={1.25} />
          </button>
          <output aria-live="polite">{Math.round(nivel * 100)}%</output>
          <button type="button" onClick={aumentar} disabled={!podeAumentar} aria-label="Aumentar texto">
            <Plus size={14} strokeWidth={1.25} />
          </button>
        </div>

        <button type="button" className="ajuste__redefinir" onClick={redefinir} disabled={nivel === 1}>
          Restaurar padrão
        </button>
      </div>
    </div>
  )
}
