// Procedimentos oficiais da clínica (arte "Procedimentos que realizamos").
// Textos descritivos são PROVISÓRIOS e devem ser revisados pela clínica,
// sem promessas de resultado (normas de publicidade do CFO).

import atelieporcelana from '../assets/images/atelie-porcelana-pincel.webp'
import consultorio from '../assets/images/consultorio-cadeira.webp'
import consultorioJanelas from '../assets/images/consultorio-janelas.webp'
import estantes from '../assets/images/estantes-arte.webp'
import retratoMosaico from '../assets/images/arte-retrato-mosaico.webp'

export const tratamentosAssinatura = [
  {
    id: 'lentes',
    titulo: 'Lentes de Porcelana',
    texto:
      'Lâminas ultrafinas de porcelana, desenhadas e pintadas à mão para respeitar a forma e a luz naturais de cada sorriso.',
    imagem: atelieporcelana,
    alt: 'Mãos pintando uma lente de porcelana com pincel fino',
  },
  {
    id: 'reabilitacao',
    titulo: 'Reabilitação Oral',
    texto:
      'Planejamento digital completo para casos complexos, unindo implantes, coroas e próteses em um tratamento integrado.',
    imagem: consultorioJanelas,
    alt: 'Consultório iluminado por janelas amplas, com painéis de madeira',
  },
  {
    id: 'invisalign',
    titulo: 'Invisalign',
    texto:
      'Alinhadores transparentes e removíveis, planejados digitalmente para uma ortodontia discreta e confortável.',
    imagem: consultorio,
    alt: 'Consultório com cadeira odontológica e painéis de madeira',
  },
  {
    id: 'harmonizacao',
    titulo: 'Harmonização Facial',
    texto:
      'Procedimentos que respeitam as proporções do rosto, pensados em equilíbrio com o desenho do sorriso.',
    imagem: retratoMosaico,
    alt: 'Retrato feminino em mosaico exposto na clínica',
  },
]

export const tratamentoDestaque = {
  titulo: 'Todos os Tratamentos',
  texto:
    'Da prevenção à reabilitação complexa: conheça todos os procedimentos realizados na Brunetti.',
  imagem: estantes,
  alt: 'Estantes iluminadas com objetos de arte',
  href: '#tratamentos',
}

export const categorias = [
  {
    titulo: 'Estética do Sorriso',
    texto: 'Desenho do sorriso com materiais nobres e acabamento artesanal.',
    itens: [
      'Lentes de contato de porcelana',
      'Lentes em resina',
      'Clareamento dental',
      'Remoção de facetas a laser (LiteTouch)',
    ],
  },
  {
    titulo: 'Reabilitação Oral & Implantes',
    texto: 'Função e estética devolvidas com planejamento digital.',
    itens: [
      'Reabilitações complexas',
      'Coroas, onlays e próteses sobre implante',
      'Implantes',
      'Extrações',
    ],
  },
  {
    titulo: 'Estética Gengival',
    texto: 'O contorno da gengiva como moldura do sorriso.',
    itens: ['Gengivoplastia', 'Enxertos gengivais'],
  },
  {
    titulo: 'Ortodontia Invisível',
    texto: 'Alinhamento discreto, planejado etapa por etapa.',
    itens: ['Invisalign'],
  },
  {
    titulo: 'Harmonização Facial',
    texto: 'Equilíbrio entre rosto e sorriso.',
    itens: ['Harmonização facial'],
  },
  {
    titulo: 'Saúde & Prevenção',
    texto: 'Cuidado contínuo, a base de todo tratamento.',
    itens: ['Profilaxia com Air Flow', 'Restaurações', 'Endodontia'],
  },
]
