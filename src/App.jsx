import { useCallback, useState } from 'react'
import Atelie from './components/Atelie.jsx'
import BarraAgendamento from './components/BarraAgendamento.jsx'
import CorpoClinico from './components/CorpoClinico.jsx'
import Experiencia from './components/Experiencia.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import MenuOverlay from './components/MenuOverlay.jsx'
import TodosTratamentos from './components/TodosTratamentos.jsx'
import TratamentosAssinatura from './components/TratamentosAssinatura.jsx'
import VisiteNos from './components/VisiteNos.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [barraAberta, setBarraAberta] = useState(false)
  const [tratamento, setTratamento] = useState('')

  useReveal()

  const fecharMenu = useCallback(() => setMenuAberto(false), [])

  // Abre a barra de agendamento (já com o tratamento escolhido, se houver)
  function agendar(tratamentoEscolhido) {
    if (typeof tratamentoEscolhido === 'string') setTratamento(tratamentoEscolhido)
    setMenuAberto(false)
    setBarraAberta(true)
    requestAnimationFrame(() => document.getElementById('barra-tratamento')?.focus())
  }

  return (
    <>
      <Header
        menuOpen={menuAberto}
        onToggleMenu={() => setMenuAberto((aberto) => !aberto)}
        onAgendar={agendar}
      />
      <MenuOverlay open={menuAberto} onClose={fecharMenu} />

      <main>
        <Hero />
        <Manifesto />
        <TratamentosAssinatura onAgendar={agendar} />
        <Experiencia />
        <Atelie />
        <TodosTratamentos onAgendar={agendar} />
        <CorpoClinico />
        <VisiteNos />
      </main>

      <Footer />

      <BarraAgendamento
        aberta={barraAberta}
        onAbertaChange={setBarraAberta}
        tratamento={tratamento}
        onTratamentoChange={setTratamento}
      />
    </>
  )
}

export default App
