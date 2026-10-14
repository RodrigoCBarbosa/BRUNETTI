import { useEffect, useState } from 'react'

// Escala do texto do site (100% a 150%). Altera o font-size do <html>;
// como as fontes estão em rem, todo o conteúdo acompanha.
export const NIVEIS = [1, 1.125, 1.25, 1.375, 1.5]
const CHAVE = 'brunetti:tamanho-fonte'

function lerSalvo() {
  try {
    const salvo = Number(localStorage.getItem(CHAVE))
    return NIVEIS.includes(salvo) ? salvo : 1
  } catch {
    return 1
  }
}

function aplicar(nivel) {
  document.documentElement.style.fontSize = nivel === 1 ? '' : `${nivel * 100}%`
}

// Aplica a preferência salva antes da primeira renderização (evita "pulo" do layout).
aplicar(lerSalvo())

export default function useTamanhoFonte() {
  const [nivel, setNivel] = useState(lerSalvo)

  useEffect(() => {
    aplicar(nivel)
    try {
      if (nivel === 1) localStorage.removeItem(CHAVE)
      else localStorage.setItem(CHAVE, String(nivel))
    } catch {
      // armazenamento indisponível (modo privado etc.): vale só nesta visita
    }
  }, [nivel])

  const indice = NIVEIS.indexOf(nivel)

  return {
    nivel,
    podeDiminuir: indice > 0,
    podeAumentar: indice < NIVEIS.length - 1,
    diminuir: () => setNivel(NIVEIS[Math.max(indice - 1, 0)]),
    aumentar: () => setNivel(NIVEIS[Math.min(indice + 1, NIVEIS.length - 1)]),
    redefinir: () => setNivel(1),
  }
}
