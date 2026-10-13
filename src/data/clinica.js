// Dados institucionais da Clínica Brunetti.
// Campos marcados com PROVISÓRIO aguardam confirmação da clínica
// (ver ANALISE_PADRONIZACAO.md, seção 7.2).

export const clinica = {
  nome: 'Brunetti Odontologia',
  tagline: 'Onde a arte se encontra', // PROVISÓRIO: confirmar frase completa

  endereco: {
    linha1: 'SHIS QI 11, Edifício Onze, Bloco K, Sala 06 (térreo)',
    linha2: 'Lago Sul, Brasília - DF',
    cep: '71625-590',
    mapsUrl:
      'https://www.google.com/maps/place/Brunetti+Odontologia/@-15.8349149,-47.8703356,17z/data=!3m1!4b1!4m6!3m5!1s0x935a251780c40e49:0xe0959da4c2385e3f!8m2!3d-15.8349201!4d-47.8677607!16s%2Fg%2F11qyh6kyh7',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s-15.8349201,-47.8677607!6i16',
  },

  // PROVISÓRIO: telefone, WhatsApp, horário, Instagram e CRO
  telefone: '(61) 0000-0000',
  whatsapp: '5561000000000',
  horario: ['Segunda a sexta · 8h às 19h', 'Sábado · com agendamento'],
  instagram: 'https://www.instagram.com/',
  responsavelTecnico: 'Responsável Técnico: Dra. Nome Sobrenome · CRO-DF 00000',
}

export function whatsappUrl(mensagem) {
  return `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`
}
