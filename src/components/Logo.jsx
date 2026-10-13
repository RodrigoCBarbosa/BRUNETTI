// Logo oficial em vetor (extraído de Brunetti_marca.pdf).
// O SVG usa `currentColor`, então a cor vem do CSS (`color`) —
// nunca usar a versão carmim do kit de 2020.
import blocada from '../assets/logo/logo-blocada.svg?raw'
import horizontal from '../assets/logo/logo-horizontal.svg?raw'
import selo from '../assets/logo/logo-selo.svg?raw'
import simbolo from '../assets/logo/logo-simbolo.svg?raw'

const versoes = { blocada, horizontal, selo, simbolo }

export default function Logo({ versao = 'horizontal', className = '' }) {
  return (
    <span
      className={`logo logo--${versao} ${className}`}
      dangerouslySetInnerHTML={{ __html: versoes[versao] }}
    />
  )
}
