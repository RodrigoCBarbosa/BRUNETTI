import { ChevronUp, X } from 'lucide-react'
import { useState } from 'react'
import { whatsappUrl } from '../data/clinica.js'
import { categorias } from '../data/tratamentos.js'
import './BarraAgendamento.css'

// Espelho da barra de reservas fixa do Fasano. Sem backend:
// o envio abre o WhatsApp da clínica com a mensagem pré-preenchida.
const opcoesTratamento = [
  'Avaliação geral',
  'Lentes de Porcelana',
  'Reabilitação Oral',
  'Invisalign',
  'Harmonização Facial',
  ...categorias.map((c) => c.titulo).filter((t) => !['Ortodontia Invisível', 'Harmonização Facial'].includes(t)),
]

const periodos = ['Manhã', 'Tarde', 'Sem preferência']

export default function BarraAgendamento({ aberta, onAbertaChange, tratamento, onTratamentoChange }) {
  const [nome, setNome] = useState('')
  const [periodo, setPeriodo] = useState(periodos[2])
  const [erro, setErro] = useState('')

  function enviar(event) {
    event.preventDefault()
    if (!nome.trim()) {
      setErro('Por gentileza, informe seu nome.')
      return
    }
    setErro('')
    const mensagem =
      `Olá, meu nome é ${nome.trim()}. Gostaria de solicitar uma consulta na Brunetti Odontologia.\n` +
      `Interesse: ${tratamento || 'Avaliação geral'}\nPeríodo preferido: ${periodo}`
    window.open(whatsappUrl(mensagem), '_blank', 'noopener')
  }

  return (
    <div className={`barra ${aberta ? 'is-open' : ''}`}>
      <button
        type="button"
        className="barra__toggle"
        aria-expanded={aberta}
        aria-controls="barra-form"
        onClick={() => onAbertaChange(!aberta)}
      >
        <span>Solicitar consulta</span>
        {aberta ? <X size={16} strokeWidth={1.25} /> : <ChevronUp size={16} strokeWidth={1.25} />}
      </button>

      <form id="barra-form" className="barra__form" onSubmit={enviar} noValidate>
        <p className="barra__titulo">Agende sua consulta</p>

        <label className="barra__campo">
          <span>Tratamento</span>
          <select
            id="barra-tratamento"
            value={tratamento || opcoesTratamento[0]}
            onChange={(e) => onTratamentoChange(e.target.value)}
          >
            {opcoesTratamento.map((opcao) => (
              <option key={opcao}>{opcao}</option>
            ))}
          </select>
        </label>

        <label className="barra__campo">
          <span>Período</span>
          <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
            {periodos.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>

        <label className="barra__campo">
          <span>Nome</span>
          <input
            type="text"
            value={nome}
            placeholder="Seu nome"
            autoComplete="name"
            aria-invalid={Boolean(erro)}
            aria-describedby="barra-erro"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <button type="submit" className="barra__submit">
          Solicitar
        </button>

        <p id="barra-erro" className="barra__erro" role="alert">
          {erro}
        </p>
      </form>
    </div>
  )
}
