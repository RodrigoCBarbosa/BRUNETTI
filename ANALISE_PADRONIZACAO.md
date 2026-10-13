# Análise de Padronização e Engenharia Reversa - Website Clínica Brunetti

Este documento serve como a base técnica e visual para registrar a **engenharia reversa** dos sites de referência enviados, consolidando os melhores padrões de design, experiência do usuário (UX), arquitetura de informação e mapeamento de componentes para o protótipo em **React** (somente front-end) da **Clínica Odontológica Brunetti**.

> 🚫 **REGRA ABSOLUTA, CONFIRMADA PELA CLIENTE: NÃO usar vermelho no site, de forma alguma.**
> Isso vale para cores da marca, botões, links, estados de erro, ícones, pins de mapa, ícones de redes sociais coloridos (ex.: o degradê do Instagram), *badges*, notificações e imagens com destaque vermelho. Também vale para tons próximos: carmim, bordô, rosa-avermelhado e laranja-avermelhado. Na dúvida, usar marrom `#695643`. Ver a lista de "armadilhas" na seção 3.10.

---

## 1. Critérios de Avaliação e Engenharia Reversa

Cada site enviado será avaliado sob os seguintes pilares:

| Pilar | O que analisamos |
| :--- | :--- |
| **Identidade Visual & Cores** | Paleta cromática dominante, cores de acento (*CTA*), contraste e psicologia das cores aplicadas à saúde. |
| **Tipografia & Hierarquia** | Famílias tipográficas (títulos, corpo de texto, botões), pesos (*font-weights*) e legibilidade em telas de computador. |
| **Arquitetura & Seções** | Ordem de apresentação das informações (Hero, Especialidades, Médicos, Depoimentos, etc.). |
| **Padrões de Conversão (UX/CRO)** | Disposição dos botões de agendamento, formulários, botões de WhatsApp e canais de contato. |
| **Componentização React** | Como a seção pode ser transformada em um componente modular e reutilizável. |

---

## 2. Briefing da Cliente (pedidos da proprietária da Clínica Brunetti)

Pedidos registrados **na íntegra**, como foram passados:

> posicionamento · cores - vermelho não · hotelaria de alto luxo - arte · tecnologia · impacto da primeira vez · público de luxo · seu sorriso em 3 dias · onde a arte se encontra · minimalista

### 2.1. Interpretação e Aplicação no Protótipo

| # | Pedido | Interpretação | Como aplicar no site |
| :--- | :--- | :--- | :--- |
| 1 | **Posicionamento** | A clínica quer se posicionar como marca premium, e não como "mais um consultório". O site precisa comunicar *quem ela é* antes de *o que ela faz*. | O tom de toda a comunicação parte dos pedidos 3, 6 e 9. Os textos apresentam a marca primeiro (conceito e experiência) e os serviços depois. |
| 2 | **Cores: vermelho não** | Restrição explícita. Vermelho remete a sangue, dor e urgência, ou seja, ao "lado hospitalar" que a clínica quer evitar. | A paleta (marrom, beges, cinza, branco) **já não tem vermelho**. Regra extra: **nem em estados de erro** de formulário. Usar o marrom `#695643` ou o `#8F7C56` com ícone e texto explicativo no lugar do vermelho padrão. Evitar também tons rosados ou bordô que se aproximem do vermelho. **Atenção:** o kit de marca de 2020 é carmim `#E41848`, então usar só as versões monocromáticas (ver seção 3.3). |
| 3 | **Hotelaria de alto luxo + arte** | Confirma o Fasano como referência principal. O "arte" acrescenta uma camada de **galeria/ateliê**: o sorriso tratado como obra, e o dentista como artista. | Seguir todos os padrões da Referência #1. Linguagem visual de galeria: fotos grandes com muito respiro, enquadramentos de detalhe (mãos, texturas, porcelana) e legendas pequenas em CAIXA ALTA, como placas de obras de arte. |
| 4 | **Tecnologia** | A clínica tem estrutura digital (escaneamento intraoral, planejamento 3D, laboratório integrado) e quer mostrar isso. | Uma seção própria ("Tecnologia" ou "Ateliê Digital") com o **mesmo tratamento elegante**: fotos de equipamentos como objetos de design, sem estética "sci-fi" (nada de azul neon, gradientes ou ícones genéricos de tecnologia). |
| 5 | **Impacto da primeira vez** | A primeira impressão ao abrir o site precisa causar impacto. Também pode se referir à **primeira consulta** do paciente na clínica. | **No site:** hero em tela cheia com vídeo de alta qualidade (padrão Fasano) e uma entrada suave do logo e da frase de assinatura (*fade-in* lento, 1–1,5s). **No conteúdo:** uma seção "Sua primeira visita" descrevendo a experiência de chegada (recepção, conforto, avaliação). |
| 6 | **Público de luxo** | Repetido duas vezes no briefing, ou seja, é **prioridade**. O público espera exclusividade e discrição, e não promoções. | **Sem preços, "promoções", contadores de urgência, pop-ups ou banners chamativos.** O CTA é um convite ("Solicitar Consulta", "Fale com o Concierge"), nunca uma venda. Português impecável e frases curtas. A versão em inglês fica como possibilidade futura (o Fasano tem PT \| EN). |
| 7 | **Seu sorriso em 3 dias** | Promessa comercial forte, provavelmente ligada a lentes ou reabilitação em fluxo digital acelerado. | ⚠️ **Ver alerta abaixo.** No protótipo, sugiro usar como destaque de um tratamento específico, com a redação revisada. |
| 8 | **Onde a arte se encontra** | Candidata a **frase-assinatura (tagline)** da marca. A frase parece incompleta: pode ser "Onde a arte se encontra com a ciência", "...com a odontologia" ou "...com você". **Confirmar com a cliente.** | Usar como **única frase sobre o hero**, pequena e em CAIXA ALTA espaçada, abaixo do logo. É uma exceção controlada ao "hero sem texto" do Fasano, que mantém a atmosfera e reforça o posicionamento. |
| 9 | **Minimalista** | Confirma a linguagem do Fasano: menos elementos, mais espaço. | Seguir à risca: uma família tipográfica, paleta restrita, sem sombras, gradientes ou cantos arredondados, e poucas seções na home. Na dúvida, **remover** em vez de adicionar. |

### 2.2. ⚠️ Alerta sobre "Seu sorriso em 3 dias"

O Código de Ética Odontológica e as normas de publicidade do CFO vedam anúncios que **prometam resultados** ou que induzam o paciente a esperar resultado garantido. Um prazo fixo ("em 3 dias") pode ser interpretado dessa forma, já que depende de avaliação, do caso clínico e da indicação.

**Sugestões de redação mais seguras (a validar com a cliente e, de preferência, com o CRO ou um assessor):**
* "Fluxo digital: planejamento e confecção em poucos dias, conforme avaliação clínica."
* "Lentes em porcelana com tecnologia digital. Prazos reduzidos para casos indicados."
* "Do planejamento ao sorriso, em um fluxo digital pensado para o seu tempo."

> No protótipo, a frase pode aparecer como texto provisório, sinalizado para revisão antes de qualquer publicação real.

### 2.3. Pilares da Marca (síntese do briefing)

| Pilar | Palavra-chave | Tradução visual |
| :--- | :--- | :--- |
| **Arte** | Exclusividade autoral | Fotografia de galeria, legendas de obra, muito respiro |
| **Hospitalidade** | Acolhimento de alto luxo | Paleta quente de beges e marrom, linguagem de concierge |
| **Tecnologia** | Precisão | Seção "Ateliê Digital" com estética limpa e sem clichês tecnológicos |
| **Minimalismo** | Contenção | Uma fonte, poucas cores, nenhum excesso |

**Restrições absolutas:** sem vermelho (nem em estados de erro), sem preços ou promoções, sem visual hospitalar frio, sem excesso de elementos.

---

## 3. Identidade Visual da Clínica Brunetti (análise dos ativos reais)

**Material analisado (12/10/2026):**
* **Kit de marca** (`logos brunetti.zip`, 2020): arquivos-fonte `.ai`, `.cdr` e `.pdf` + 25 JPGs (1182×1182px) em 5 versões × 5 fundos.
* **Fotos da clínica** (pasta `Desktop/brunetti`): 47 JPEGs (fotos profissionais de arquitetura, enviadas via WhatsApp em **1600×1066px**), 1 JPEG em alta (2544×3816px) e 8 arquivos **RAW Sony (.ARW)**, cujas prévias têm até 7008px.

---

### 3.1. Símbolo (elemento não tipográfico)

* **Construção:** um **"b" minúsculo monolinear**, feito de uma haste vertical e **dois arcos concêntricos**:
  * o arco interno forma o "bojo" do b e fica aberto no topo;
  * o arco externo envolve a letra pela base, como uma **espiral** ou uma **onda que se expande**.
* **Traço:** espessura **constante**, pontas retas (corte seco), sem preenchimentos. É um desenho de **linha fina**.
* **Leituras simbólicas:**
  1. **O "b" de Brunetti.**
  2. **A curva do sorriso:** o arco externo inferior lembra o contorno de um sorriso.
  3. **Espiral / movimento:** evolução, transformação e acolhimento (um arco "abraça" o outro).
* **Coincidência a explorar:** a **escada em caracol** da clínica, vista de cima, repete exatamente a espiral do símbolo. É uma imagem forte para o site, que liga a marca ao espaço físico.
* **Pictogramas da clínica:** a sinalização interna (ex.: o ícone de escada gravado na madeira) usa o **mesmo traço monolinear fino**. Isso confirma o padrão: **ícones de linha fina, sem preenchimento**, o que combina com os ícones `lucide-react` já instalados no projeto.

### 3.2. Logotipo (elemento tipográfico)

* **"BRUNETTI":** sem serifa **geométrica**, de largura generosa e baixo contraste, peso regular/book, em CAIXA ALTA. O "R" tem perna reta diagonal, o "G" tem barra horizontal e as formas são arredondadas e abertas. O estilo é próximo de **Gotham / Montserrat**. As fontes estão **convertidas em curvas** nos arquivos, então o nome exato não pôde ser confirmado. **Perguntar ao designer da marca.**
* **"ODONTOLOGIA":** mesma família, em corpo menor e com **espaçamento entre letras bem aberto** (≈ +200, ou 0.2em).
* **Harmonia:** a espessura do traço do símbolo é igual à espessura das hastes das letras, o que faz o conjunto parecer um bloco único.
* **Versões oficiais do kit:**

| Arquivo | Versão | Uso sugerido no site |
| :--- | :--- | :--- |
| `marca_blocada` | Símbolo em cima + BRUNETTI + ODONTOLOGIA | Menu em tela cheia, rodapé, tela de abertura |
| `marca_horizontal` | Símbolo à esquerda + nome à direita | **Header** (formato mais baixo, cabe nos 55px) |
| `selo_01` | Símbolo + ODONTOLOGIA embaixo | Selo/assinatura discreta no hero |
| `selo_02` | Símbolo + ODONTOLOGIA ao lado | Variação para espaços horizontais |
| `simbolo` | Só o "b" | Favicon, marca-d'água, ícone de carregamento, detalhes gráficos |

* **Fundos oficiais do kit:** branco, carmim, cinza, **branco com logo preto** e **preto com logo branco**.

**Variações encontradas no espaço físico:**
* **Fachada (vidro):** "BRUNETTI" em CAIXA ALTA + "odontologia" em **minúsculas**, em peso fino.
* **Paredes da recepção:** "BRUNETTI" em letras pretas finas, sem símbolo, iluminadas por luz rasante.
* Ou seja, **no espaço físico a marca é usada só em preto, em pesos finos e sem cor**.

### 3.3. ⚠️ Conflito de cor: a marca oficial é vermelha

Cores medidas nos arquivos do kit:

| Cor | Hex | Papel no kit de 2020 |
| :--- | :--- | :--- |
| **Carmim / vermelho framboesa** | **`#E41848`** | Cor principal do símbolo e de "ODONTOLOGIA" |
| Cinza médio | `#B0B4B0` | Cor de "BRUNETTI" e fundo alternativo |
| Preto | `#000000` | Versão monocromática |
| Branco | `#FFFFFF` | Versão negativa |

* **O briefing diz "vermelho não".** A cor principal do kit de 2020 é justamente um vermelho carmim. Ao mesmo tempo, a **clínica física não usa vermelho em lugar nenhum**: é toda madeira, mármore preto, creme e luz quente. A marca evoluiu no espaço, mas o kit de 2020 ficou para trás.
* **Decisão para o protótipo:**
  * Usar **somente as versões monocromáticas oficiais**: **preta** (sobre fundos claros) e **branca** (sobre fotos e fundos escuros), exatamente como o espaço físico faz.
  * Opcional: uma versão **marrom `#695643`**, recolorindo o vetor do `.ai`/`.pdf`, para harmonizar com a paleta. Isso não altera o desenho da marca.
  * O **cinza `#B0B4B0`** do kit é praticamente o `#B8B8B8` do Fasano, então já está coberto pelo token `--color-gray`.
* ✅ **Confirmado pela cliente (12/10/2026): não usar vermelho no site de forma alguma.** A versão carmim do kit está **descartada** no digital.

### 3.4. Paleta real do espaço (extraída das fotos)

Cores dominantes calculadas por quantização das 47 fotos da clínica:

| Material / Elemento | Hex aproximado | Observação |
| :--- | :--- | :--- |
| **Madeira nogueira (painéis)** | `#592910` / `#6C3112` / `#925732` | Material dominante. É um marrom **avermelhado** quente (é madeira, não vermelho). |
| **Marrom médio (sombras da madeira)** | **`#664F3C`** | ✨ **Praticamente idêntico ao `#695643` do Fasano.** A paleta da referência já "mora" na clínica. |
| **Café / quase-preto** | `#25130A` / `#150804` / `#2C221A` | Mármore preto, couro, ambientes escuros |
| **Areia / caramelo** | `#9C7A58` / `#B59C80` | Madeira iluminada, tons de transição |
| **Champanhe (luz)** | `#D2AE81` | Brilho das fitas de LED quentes |
| **Creme (paredes e piso)** | `#E4D0B1` | Microcimento e paredes sob luz quente, próximo ao `#F5EADA` |
| **Off-white bouclé** | ≈ `#EDE6DA` | Poltronas orgânicas |
| **Mostarda / ocre (veludo)** | ≈ `#C9A043` | Assentos das cabines do lounge. **Único acento "colorido"**, usar com muita parcimônia. |

**Materiais e texturas recorrentes:** madeira nogueira em painéis do piso ao teto, **mármore Nero Marquina** (preto com veios brancos), microcimento creme, colunas de concreto/pedra crua, tecido bouclé, couro preto, **iluminação indireta quente** (fitas de LED em rodapés, nichos e degraus, pendentes finos) e vegetação (árvore interna, orquídeas brancas).

### 3.5. Arte & Atmosfera (o "onde a arte se encontra" já existe)

O acervo de arte da clínica confirma o pedido "hotelaria de alto luxo + arte":
* **Esculturas:**
  * figuras humanas alongadas em bronze escuro, de estilo *giacomettiano*;
  * escultura vertical em forma de lâmina/semente;
  * objetos de design nas estantes.
* **Pinturas e mosaicos:** dois **retratos femininos em mosaico**, uma tela em **preto e branco de estilo cubista/art déco** e uma **pintura abstrata azul e laranja**.
* **Citação na parede (espelho do lavabo):** *"É mais fácil obter o que se deseja com um sorriso do que à ponta da espada"* (frase atribuída a Shakespeare). É uma ótima **candidata a frase editorial do site**.
* **Ateliê / laboratório:** fotos de **mãos pintando à mão** uma coroa de porcelana com pincel fino e paleta de cerâmica. É a tradução literal de "**onde a arte se encontra** com a odontologia".
* **Estúdio fotográfico próprio:** softboxes, cadeira de diretor e fundo preto, para a fotografia de planejamento do sorriso. É um ponto forte de **tecnologia + exclusividade**.

### 3.6. Inventário de imagens por seção do site

| Seção do site | Imagens candidatas (descrição) | Observação |
| :--- | :--- | :--- |
| **Hero** | Corredor de nogueira com a árvore ao fundo · recepção com "BRUNETTI" na parede iluminada · fachada de vidro com o logo · **escada em caracol vista de cima** | Ideal: um **vídeo curto** passeando por esses ambientes (padrão Fasano). No protótipo: foto fixa ou sequência lenta (*fade* + zoom suave). |
| **Arte / Manifesto** | Esculturas em bronze · retratos em mosaico · tela cubista · citação do espelho | Seção editorial com a frase-assinatura |
| **Experiência do Paciente** | Lounge com cabines em veludo mostarda · salas de consulta com poltronas bouclé · estantes com objetos de arte · bar com taças · lavabo | Espelho da seção "Gastronomia" do Fasano |
| **Tecnologia / Ateliê Digital** | Consultórios (2 salas, cadeiras pretas) · estúdio fotográfico · **mãos pintando porcelana** (fotos RAW) | As fotos do ateliê são as mais "autorais" do conjunto |
| **Estrutura / Tour** | Escada com degraus iluminados · corredores · recepção · fachada | Grid editorial com fotos verticais (426/502) |
| **Texturas e fundos** | Close da madeira nogueira com o pictograma de escada | Fundo de seção ou separador visual |
| **Corpo Clínico** | ❌ **Nenhuma foto da equipe no material** | **Pendente:** pedir retratos profissionais no mesmo estilo (luz quente, fundo de madeira ou neutro) |

**Qualidade técnica:**
* ✅ As fotos são profissionais, com luz e enquadramento consistentes e estética de revista de arquitetura.
* ⚠️ As fotos vieram **comprimidas pelo WhatsApp** (1600px). Servem para cards, mas o **hero em tela cheia precisa dos originais** (≥ 2560px). Pedir os originais ao fotógrafo.
* ⚠️ Os **RAW (.ARW) não são usados direto na web**. No protótipo, usar as prévias JPEG extraídas e, depois, exportações tratadas pelo fotógrafo.
* Todas as imagens devem ser **renomeadas de forma semântica** (ex.: `hero-corredor.webp`, `arte-escultura-bronze.webp`) e otimizadas em **WebP**.

### 3.7. Padrão Visual da Brunetti: Síntese

| Dimensão | Padrão da clínica | Alinhamento com o Fasano |
| :--- | :--- | :--- |
| **Cor** | Madeira, café, creme e luz quente. **Sem vermelho** no espaço. | ✅ Quase idêntico (marrom `#664F3C` ≈ `#695643`, creme ≈ `#F5EADA`) |
| **Tipografia** | Sem serifa **geométrica larga**, CAIXA ALTA, letras espaçadas no complemento | ✅ Mesmo espírito da Akzidenz *Extended* do Fasano: larga, limpa, sem serifa |
| **Símbolos** | Monolinear, traço fino e constante, círculos e espirais | ✅ Combina com os ícones finos e as linhas divisórias de 1px do Fasano |
| **Fotografia** | Arquitetura com luz quente e baixa, sombras profundas, arte em destaque | ✅ Atmosfera de hotel de luxo, sem estética hospitalar |
| **Atmosfera** | Galeria + hotel boutique + ateliê | ✅ Exatamente o briefing ("hotelaria de alto luxo + arte") |

> **Conclusão:** a clínica física **já é** o "Fasano da odontologia". O site não precisa inventar uma linguagem, e sim **traduzir o espaço para a tela**. O único ponto fora do padrão é o **carmim do kit de 2020**, que fica de fora por decisão do briefing.

---

### 3.8. Procedimentos Realizados (material oficial da clínica)

**Fonte:** arte de divulgação da própria clínica (`Desktop/procedimentos`).

**Bônus de identidade nessa arte:** ela confirma o padrão visual da clínica:
* fundo de **madeira nogueira**;
* **escultura de bronze** recortada;
* textos **brancos em sem serifa fina**;
* rodapé com **"B R U N E T T I  o d o n t o l o g i a"** em letras muito espaçadas (nome em caixa alta + complemento em minúsculas);
* o **símbolo "b"** em branco no canto.

**Lista oficial (15 procedimentos), organizada em categorias para o site:**

| Categoria (proposta para o site) | Procedimentos (texto original da clínica) |
| :--- | :--- |
| **Estética do Sorriso** | Lentes de contato de porcelana · Lentes em resina · Clareamento dental · Remoção de facetas a laser (*LiteTouch*) |
| **Reabilitação Oral & Implantes** | Reabilitações complexas · Coroas, onlays e próteses sobre implante · Implantes · Extrações |
| **Estética Gengival** | Cirurgias estéticas gengivais (gengivoplastia e enxertos) |
| **Ortodontia Invisível** | Invisalign |
| **Harmonização Facial** | Harmonização facial |
| **Saúde & Prevenção** | Profilaxia com Air Flow · Restaurações · Endodontia |

**Como aparecer no protótipo:**
* **Home, "Tratamentos de Assinatura":** os 4 cards seguem o padrão "Destinos" do Fasano, e um 5º card largo, "Todos os Tratamentos", leva para a lista completa. Os 4 cards são:
  1. **Lentes de Porcelana**: carro-chefe. Provável ligação com o "sorriso em 3 dias" (ver 2.2).
  2. **Reabilitação Oral**: casos complexos, autoridade técnica.
  3. **Invisalign**: ortodontia invisível.
  4. **Harmonização Facial**.
* **Seção ou página "Tratamentos":** as 6 categorias acima, cada uma com uma descrição curta (2 a 3 linhas) e a lista dos procedimentos. O layout é editorial, com títulos em CAIXA ALTA e foto vertical por categoria.
* **Textos:** no protótipo serão textos **descritivos e neutros** (o que é o procedimento e como funciona), sem promessa de resultado, **sinalizados para revisão da clínica**.
* **Fotos por categoria:** ainda não há fotos específicas de procedimentos. No protótipo, usar as fotos do ateliê (porcelana pintada à mão), dos consultórios e do estúdio, até receber material específico.

### 3.9. Localização & Contato

| Informação | Valor |
| :--- | :--- |
| **Endereço** | St. de Habitações Individuais Sul (SHIS) QI 11, Edifício Onze, Bloco K, Sala 06 (térreo) |
| **Bairro / Cidade** | Lago Sul, Brasília - DF |
| **CEP** | 71625-590 |
| **Coordenadas** | -15.8349201, -47.8677607 |
| **Google Maps** | [Brunetti Odontologia](https://www.google.com/maps/place/Brunetti+Odontologia/@-15.8349149,-47.8703356,17z/data=!3m1!4b1!4m6!3m5!1s0x935a251780c40e49:0xe0959da4c2385e3f!8m2!3d-15.8349201!4d-47.8677607!16s%2Fg%2F11qyh6kyh7) |
| Telefone / WhatsApp | ⏳ *Pendente* |
| Horário de funcionamento | ⏳ *Pendente* |
| Instagram / redes | ⏳ *Pendente* |

**Aplicação no site:**
* **Rodapé:** endereço completo em 10–12px, com o link "Como chegar" abrindo o Google Maps.
* **Seção "Visite-nos"** (opcional, antes do rodapé): mapa incorporado via `iframe` do Google Maps, que funciona sem backend e sem chave de API.
  * ⚠️ **O pin padrão do Google Maps é VERMELHO.** Aplicar o filtro `grayscale(1) sepia(.3)` no `iframe`, o que deixa o mapa em tons neutros e quentes e remove o vermelho. Outra opção: uma imagem estática estilizada do mapa com um pin marrom próprio.
* **Público:** Lago Sul é um dos bairros de maior renda do país e tem muitos moradores do corpo diplomático. Isso reforça o público de luxo e torna uma **versão em inglês** (PT | EN, como no Fasano) uma evolução relevante para o futuro.

### 3.10. Vídeos da Clínica (Google Drive)

* **Pasta:** `https://drive.google.com/drive/folders/11GNyNw_upiW6dttDNpF8wArbFOkA4iHU`
* **Conteúdo:** **50 arquivos MP4 brutos** (nomes de câmera `C7173`–`C7192`, `C7313`–`C7356` e `C9000`–`C9020`), de 64 a 192 MB cada, **≈ 4,5 GB no total**, gravados em datas diferentes (abril, maio e junho).
* **Diagnóstico:** são **takes brutos de câmera, sem edição**. Não servem direto na web.
* **O que o hero precisa:**
  * **1 vídeo editado** em loop, de **10–20 segundos**, **sem áudio**;
  * cortes lentos pelos ambientes (corredor de nogueira, escada em caracol, arte, ateliê);
  * exportado em **1920×1080, H.264/MP4 + WebM, de 4 a 8 MB**;
  * uma **imagem de pôster** (primeiro quadro) para carregar instantaneamente;
  * no celular: versão vertical ou recortada (450px de altura, padrão Fasano).
* **No protótipo:** enquanto o vídeo editado não chega, o hero usa uma foto em tela cheia com zoom lento (*Ken Burns*). A estrutura do componente já fica pronta para receber o `<video>`.

**🚫 Armadilhas de vermelho a evitar na implementação:**

| Armadilha | Solução |
| :--- | :--- |
| Pin padrão do Google Maps | Filtro `grayscale` no `iframe` ou mapa estático com pin marrom |
| Ícone colorido do Instagram (degradê com vermelho e rosa) | Ícones **monocromáticos** (`lucide-react`) em marrom ou branco |
| Cor de erro padrão de formulários e navegadores | `--color-error` marrom + ícone + texto |
| Kit de marca 2020 (carmim `#E41848`) | Usar só os logos preto, branco ou marrom |
| Indicadores de "gravando", notificações e *badges* | Não usar, ou usar em marrom |
| Fotos com elementos vermelhos em destaque | Revisar uma a uma. Ex.: a tela cubista tem detalhe vermelho, então evitar no hero ou dessaturar levemente. |

---

## 4. Registro das Referências Analisadas

### Referência #1: Fasano (Hospitalidade, Gastronomia & Luxo)
* **URL:** `https://fasano.com.br`
* **Segmento:** Hospitalidade de alto padrão / Luxo atemporal
* **Data da análise:** 12/10/2026
* **Método:** Extração direta do HTML e das folhas de estilo do tema (`wp-content/themes/fasano/style.css`). Os valores abaixo são **reais**, não estimados.
* **Stack do site original:** WordPress + Tailwind CSS (tema baseado em `_tw`) + jQuery. Para o nosso protótipo, os mesmos padrões serão recriados em React + CSS com variáveis.

> **Conceito central:** o Fasano comunica luxo pela **contenção**. Há poucas cores, uma única família tipográfica, textos pequenos, muito espaço em branco, fotos grandes e nenhum elemento "gritando" por atenção. A sofisticação vem do que **não** está na tela.

---

#### 4.1. Paleta de Cores (valores extraídos do CSS)

| Token no Fasano | Hex | Onde é usado |
| :--- | :--- | :--- |
| `medium-brown` | **`#695643`** | **Cor-assinatura.** Títulos de seção, botões, links do menu, ícones, **fundo do rodapé** e do header ao rolar. É a cor mais usada do site. |
| `beige` | **`#F5EADA`** | **Fundo padrão do `body`**, header fixo (*stuck*) e menu em tela cheia. |
| `light-beige` | **`#F9F1E9`** | Fundo de seções alternadas (ex.: seção "Gastronomia") e barra de reservas no mobile. |
| `legacy-brown` | **`#8F7C56`** | Marrom-oliva/dourado discreto, usado pontualmente em bordas e textos de destaque. |
| `gray` | **`#B8B8B8`** | Links inativos do menu, linhas divisórias verticais, bullets do carrossel e bordas de inputs. |
| Texto do corpo | **`#404040`** | Cor padrão dos parágrafos. |
| Branco | `#FFFFFF` | Logo e menu sobre o vídeo do hero e textos do rodapé. |
| Preto | `#000000` | Títulos de cards (`_tx_black`) e subtítulos `h3`. |

**Contraste (WCAG) calculado:**

| Combinação | Razão | Uso permitido |
| :--- | :--- | :--- |
| `#695643` sobre `#F5EADA` | ~5,9:1 | ✅ Texto de qualquer tamanho |
| `#404040` sobre `#F5EADA` | ~8,7:1 | ✅ Corpo de texto |
| Branco sobre `#695643` (rodapé) | ~7,0:1 | ✅ Texto de qualquer tamanho |
| `#8F7C56` sobre `#F5EADA` | ~3,4:1 | ⚠️ Somente títulos grandes, ícones e bordas |
| `#B8B8B8` sobre `#F5EADA` | ~1,7:1 | ❌ Somente decorativo (linhas e bullets). Não usar para texto legível. |

> **Correção em relação à versão anterior deste documento:** o Fasano **não usa** charcoal `#1A1A1A` no rodapé (o rodapé é **marrom `#695643`**) nem o dourado `#C5A880`. Os beges reais são `#F5EADA` e `#F9F1E9`, mais quentes e "amanteigados" que os estimados antes.

---

#### 4.2. Tipografia (valores extraídos do CSS)

* **Família única:** **Akzidenz-Grotesk** (fundição Berthold), uma **sem serifa** clássica suíça, usada em diversas larguras e pesos:

| Arquivo da fonte | Variante | Onde é usado |
| :--- | :--- | :--- |
| `akz-ext` | Extended Regular | **Fonte principal**: títulos de seção, títulos de cards, botões, links "Saiba mais" e rodapé |
| `akz-ext-light` | Extended Light | Itens do menu, seletor de idioma PT \| EN |
| `akz-regular` | Regular (largura normal) | Corpo de texto (`body`) |
| `akz-medium` / `akz-bold` | Medium / Bold | Subtítulos `h3` pontuais |

> **Correção importante:** o Fasano **não usa fonte serifada** (Cormorant ou Playfair). A elegância vem de uma grotesca **expandida (*extended*)**, em caixa alta e em tamanhos pequenos. É um luxo "suíço/arquitetônico", não "revista clássica".

**Escala tipográfica real (bem contida):**

| Elemento | Tamanho | Estilo |
| :--- | :--- | :--- |
| Título de seção (`._title`) | **20px** | Extended, CAIXA ALTA, `letter-spacing: 0.8px`, centralizado, marrom |
| Título de card (`h3`) | **14px** | Extended, CAIXA ALTA, preto |
| Itens do menu | **13–14px** | Extended Light, CAIXA ALTA, peso 300 |
| Botão (`._button`) | **13px** | Extended, CAIXA ALTA |
| Corpo de texto / descrição de card | **12–14px** | Regular / Extended, `#404040` |
| Link "Saiba mais" (`._link`) | **12px** | Extended, **sublinhado** |
| Links do rodapé | **10px** | Extended, `letter-spacing: 0.96px` |

* **Espaçamento entre letras:** **sutil**, entre `0.5px` e `1px` (≈ 0.04em a 0.08em). O documento anterior previa `0.15em` a `0.25em`, o que fica bem mais "aberto" do que o Fasano realmente usa.
* **Alternativa gratuita para o protótipo:** Akzidenz-Grotesk é uma fonte **paga**. Sugestão: **Archivo** (Google Fonts, com eixo de largura variável `wdth`). Usar `wdth 115–125` para imitar a versão *Extended* e `wdth 100` para o corpo. Outras opções: *Inter Tight*, *Schibsted Grotesk* ou *Work Sans*.

---

#### 4.3. Header & Navegação

* **Logo centralizado** (`left: 50%` + `translateX(-50%)`), em SVG.
* **Sobre o hero:** o header é **transparente**. O logo fica **branco** (filtro `grayscale` + `brightness(1000)`) e flutua a `top: 1.25rem`.
* **Ao rolar (classe `.stuck`):** o header vira uma **barra sólida bege `#F5EADA`** de **55px** de altura, o logo volta à cor original e diminui para **75%**, e os textos ficam marrons.
  * **Correção:** não há *glassmorphism*/`backdrop-filter: blur`. O fundo é **sólido e opaco**.
* **Menu hambúrguer à esquerda** (3 linhas finas, 21×18px, brancas sobre o vídeo e marrons no estado *stuck*). Ao passar o mouse, a escala aumenta 10%.
* **Seletor de idioma `PT | EN` à direita**, 13px, CAIXA ALTA, Extended Light.
* **Menu em tela cheia (overlay):**
  * Fundo bege `#F5EADA` cobrindo 100% da tela, com transição de opacidade de 150ms.
  * Logo no topo, centralizado, com uma linha cinza fina abaixo.
  * Lista vertical em CAIXA ALTA com **submenus em cascata para a direita**, separados por **linhas verticais finas cinza** (`1px #B8B8B8`).
  * Links cinza `#B8B8B8` que ficam **marrons e sublinhados no hover**.
  * Pequenas setas SVG marrons indicam itens com submenu.
  * Itens: Gastronomia, Hotéis, Experiências, Eventos, Villas, Shop, Descubra, Corriere, História, Sustentabilidade, Contato.

---

#### 4.4. Hero Section

* **Vídeo em tela cheia** (`autoplay muted loop playsinline`, `object-fit: cover`):
  * **Desktop:** `100vh`.
  * **Mobile:** **450px** de altura.
* **Sem nenhum texto, título ou CTA sobre o vídeo**: só a atmosfera.
* **Selo institucional** ("um empreendimento JHSF") em SVG branco centralizado na parte inferior (`bottom: 100px`).
* Estrutura de **carrossel** (com setas e *bullets* redondos de 8px cinza), atualmente com 1 item.
* Espaço generoso depois do hero (`margin-bottom: 4–5rem`).

---

#### 4.5. Seções de Conteúdo (Home)

**Seção "Destinos"** (fundo bege padrão):
* Título de seção centralizado (20px, CAIXA ALTA, marrom).
* **4 cards lado a lado** (3 de 12 colunas cada) + **1 card largo** (12 colunas) com "Experiências".
* **Anatomia do card:**
  1. Foto com **proporção vertical `426/502`** (≈ 0,85, quase retrato), `object-fit: cover`, altura máxima de 490px no desktop e 250px no mobile.
  2. Título 14px em CAIXA ALTA.
  3. Descrição curta (1 a 2 frases).
  4. Link **"Saiba mais"** sublinhado, 12px.
* O card inteiro é clicável.
* **Sem bordas, sombras ou cantos arredondados.**
* **Correção:** as fotos **não são** 4:3 nem 16:9. São levemente verticais, quase retrato.

**Seção "Gastronomia"** (fundo `light-beige #F9F1E9`, alternando com a anterior):
* 2 cards grandes (Restaurantes e Eventos), com o mesmo padrão: foto, título, texto e "Saiba mais".
* Texto institucional com a marca de tradição: *"Dal 1902. Com mais de 100 anos de tradição..."*.
* O card "Eventos" leva **direto para o WhatsApp** (`wa.me/...`). O canal de conversão aparece **embutido no conteúdo**, sem botão flutuante.

---

#### 4.6. Barra de Reservas Fixa (principal padrão de conversão)

* **Barra fixa na parte inferior da tela** (`position: fixed; bottom: 0`):
  * **Desktop:** **70px**, fundo branco, borda superior fina.
  * **Mobile:** **60px**, fundo `light-beige`, expansível ao toque.
* Campos: seleção de hotel/restaurante, **Check-in \| Check-out** (calendário), **Adultos** e botão **"Reservar"**. Chamada: *"Reserve sua estada"*.
* **Insight:** o Fasano mantém o hero e o conteúdo **limpos** porque toda a conversão está **concentrada nessa barra discreta**, sempre visível.

---

#### 4.7. Rodapé

* **Fundo marrom `#695643`** com textos **brancos**. O rodapé ganha `padding-bottom: 90px` para não ficar escondido atrás da barra de reservas.
* **Colunas por categoria** (Destinos, Gastronomia, etc.) com lista longa de links pequenos (10px, `letter-spacing: 0.96px`).
* **Títulos de coluna** de 12px com um **pequeno traço branco de 16px × 1,5px** logo abaixo (`._divider`), um detalhe de assinatura.
* **Newsletter:** texto curto + **botão vazado** (borda branca de 1px, fundo transparente) que **inverte no hover** (fundo branco, texto marrom).
* **Redes sociais:** ícones brancos de 20px (Facebook, Instagram, Spotify) com `opacity: 0.5` no hover.
* Linha final com copyright.

---

#### 4.8. Grid, Espaçamento & Breakpoints

| Propriedade | Mobile | Desktop (≥ 1025px) |
| :--- | :--- | :--- |
| Colunas | 6 | **12** |
| Espaço entre colunas (*gap*) | 1rem (16px) | **1.5rem (24px)** |
| Margem lateral | 1.5rem (24px) | **72px** |
| Largura máxima do conteúdo | 100% | **1440px** (centralizado) |
| Padding vertical de seção | 2rem (32px) | **50px** |

* **Breakpoint principal:** `1025px`. Breakpoints secundários: `768px` e `1440px`.

---

#### 4.9. Botões, Links & Microinterações

* **Botão padrão (`._button`):**
  * Vazado (*outline*): borda de 1px marrom, **fundo transparente**, texto marrom.
  * 13px, CAIXA ALTA, padding `8px 32px`.
  * **Cantos retos** (sem `border-radius`).
* **Link de texto:** sublinhado, 12px. É o principal convite à ação dentro dos cards.
* **Transições curtas e discretas:** 150–200ms, `cubic-bezier(0.4, 0, 0.2, 1)`.
* **Ícones:** traço fino, monocromáticos (marrom ou branco), sem preenchimentos coloridos.
* **Nada de** sombras pesadas, gradientes, cantos arredondados ou cores vibrantes.

---

### Como Transpor o "DNA Fasano" para a Odontologia Brunetti

| Elemento Fasano | Aplicação na Clínica Odontológica |
| :--- | :--- |
| **Destinos de Luxo** | **Tratamentos de Assinatura** (*Lentes em Porcelana Pura, Reabilitação Oral 3D, Ortodontia Invisível, Harmonização Facial*) |
| **Hospitalidade & Concierge** | **Experiência do Paciente** (*Salas privativas com isolamento acústico, atendimento pontual, sedação consciente e conforto*) |
| **História & Tradição (Dal 1902)** | **Autoridade do Corpo Clínico** (*Especialistas com registro no CRO, formação acadêmica e tecnologia de referência*) |
| **Fotografia Arquitetônica** | **Tour da Estrutura** (*Consultórios modernos, escaneamento intraoral digital sem moldagens desconfortáveis, laboratório digital integrado*) |
| **Barra de Reservas fixa** | **Barra de Agendamento Privativo fixa** (*Tratamento de interesse + período preferido + "Solicitar Consulta"*, que abre o WhatsApp com a mensagem pré-preenchida) |
| **Card "Eventos" → WhatsApp** | **Cards de tratamento com "Fale com o Concierge"** levando ao WhatsApp |
| **Selo JHSF no hero** | **Assinatura discreta no hero** (ex.: "Odontologia Brunetti · Responsável Técnico CRO-XX 00000") |
| **Seletor PT \| EN** | Opcional. Pode virar um link discreto "Agendar" ou "WhatsApp" no canto superior direito. |

> ⚠️ **Atenção (publicidade odontológica):** os textos finais devem seguir o Código de Ética Odontológica e as normas de publicidade do CFO. Evitar promessas de resultado e superlativos, e exibir o nome e o CRO do responsável técnico.

---

### Referência #2: [Nome do Site / Link]
* **URL:** *(Aguardando envio)*
* **Foco / Especialidade:**
* **Pontos Fortes Observados:**
* **O que vamos aproveitar no protótipo da Clínica:**

---

## 5. Matriz de Síntese & Padronização para a Nossa Clínica

Quadro do padrão adotado. **Status atual: provisório, baseado apenas na Referência #1 (Fasano)**. Será revisado conforme novas referências chegarem.

| Componente | Padrão Selecionado (proposta) | Justificativa |
| :--- | :--- | :--- |
| **Header / Navbar** | **Marca horizontal** (símbolo + BRUNETTI) centralizada, hambúrguer à esquerda e link "Agendar" à direita. Transparente sobre o hero com **logo branco**; ao rolar, vira barra sólida bege (55px) com **logo preto ou marrom** reduzido. | Fiel ao Fasano: minimalismo e logo como protagonista. |
| **Menu** | Overlay em tela cheia bege, itens em CAIXA ALTA, linhas verticais finas, hover marrom sublinhado. | Mantém a página limpa e dá sensação de "sala exclusiva". |
| **Hero Section** | Vídeo/foto em tela cheia (100vh desktop, 450px mobile). **Única frase:** a tagline "Onde a arte se encontra..." em CAIXA ALTA pequena, com *fade-in* lento junto ao logo. Assinatura discreta (nome + CRO) embaixo. | Atmosfera antes de informação (Fasano) + "impacto da primeira vez" e posicionamento (briefing). A conversão fica na barra fixa. |
| **Tratamentos** | Grid de 4 cards (3/12 col) + 1 card largo. Foto vertical 426/502, título 14px CAIXA ALTA, descrição curta, "Saiba mais" sublinhado. Sem bordas, sombras ou cantos arredondados. | Espelho direto da seção "Destinos". |
| **Experiência do Paciente** | Seção com fundo `light-beige`, 2 cards grandes (ex.: "Sua Primeira Visita" e "Conforto & Sedação"). | Espelho da seção "Gastronomia" + pedido "impacto da primeira vez". |
| **Tecnologia / Ateliê Digital** | Seção própria: foto grande de equipamento tratado como objeto de design + texto curto sobre o fluxo digital (escaneamento, planejamento 3D, laboratório). Pode abrigar a mensagem do "sorriso em poucos dias", com a redação revisada (ver 2.2). | Pedido "tecnologia" do briefing, sem quebrar o minimalismo. |
| **Corpo Clínico** | Cards no mesmo padrão editorial: foto vertical, nome em CAIXA ALTA, especialidade e **CRO**. | Autoridade sem quebrar a linguagem visual. |
| **Prova Social** | *A definir com a Referência #2.* O Fasano não tem depoimentos na home. | Precisa ser discreta (ex.: citação curta em texto, sem estrelas coloridas). |
| **Agendamento** | Barra fixa inferior (70px desktop / 60px mobile) com "Tratamento de interesse", "Período" e botão "Solicitar Consulta", que abre o WhatsApp com mensagem pré-preenchida. | Espelho da barra de reservas: conversão sempre visível e discreta. Funciona sem backend. |
| **Rodapé** | Fundo marrom `#695643`, colunas com título + traço branco de 16px, links 10px, endereço/horário/CRO, botão vazado branco e ícones sociais brancos. | Fiel ao Fasano e com contraste excelente (7:1). |

---

## 6. Design Tokens (base para `src/styles/variables.css`)

```css
:root {
  /* Cores — extraídas do Fasano */
  --color-brown: #695643;        /* cor-assinatura: títulos, botões, rodapé */
  --color-beige: #F5EADA;        /* fundo padrão do body, header stuck, menu */
  --color-beige-light: #F9F1E9;  /* seções alternadas, barra mobile */
  --color-gold: #8F7C56;         /* destaque pontual — apenas títulos grandes/ícones */
  --color-gray: #B8B8B8;         /* linhas e bullets — decorativo, não usar em texto */
  --color-text: #404040;         /* corpo de texto */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-espresso: #1E140D;     /* seções escuras: ecoa o mármore preto e os ambientes escuros da clínica */

  /* Estados de formulário — briefing: VERMELHO PROIBIDO, inclusive em erros */
  --color-error: var(--color-brown);   /* usar com ícone + mensagem, nunca vermelho */

  /* Tipografia */
  /* Montserrat: geométrica larga, a alternativa gratuita mais próxima do logotipo
     Brunetti (estilo Gotham) e com o mesmo espírito "extended" do Fasano.
     Alternativa: 'Archivo' com font-stretch 115–125%. */
  --font-extended: 'Montserrat', sans-serif;  /* títulos, botões, menu (CAIXA ALTA) — pesos 300/400/500 */
  --font-body: 'Montserrat', sans-serif;      /* corpo de texto — peso 400 */
  --fs-title: 20px;
  --fs-card-title: 14px;
  --fs-menu: 13px;
  --fs-button: 13px;
  --fs-body: 14px;
  --fs-small: 12px;
  --fs-footer: 10px;
  --ls-title: 0.8px;
  --ls-small: 0.96px;

  /* Layout */
  --container-max: 1440px;
  --gutter-mobile: 24px;
  --gutter-desktop: 72px;
  --gap-mobile: 1rem;
  --gap-desktop: 1.5rem;
  --section-py-mobile: 2rem;
  --section-py-desktop: 50px;
  --header-stuck-height: 55px;
  --booking-bar-height: 70px;
  --booking-bar-height-mobile: 60px;

  /* Movimento */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 200ms;
}

/* Breakpoint principal: @media (min-width: 1025px) */
```

---

## 7. Próximos Passos
1. ~~Destrinchar a Referência #1 (Fasano)~~ ✅ Concluído.
2. ~~Registrar o briefing da cliente~~ ✅ Concluído (seção 2). **Pendências com a cliente:** confirmar a frase completa da tagline ("Onde a arte se encontra com...?") e validar a redação de "Seu sorriso em 3 dias".
3. Receber e analisar a Referência #2 (e outras, se houver), e fechar a linha "Prova Social" da matriz.
4. ~~Criar `src/styles/variables.css` com os tokens da seção 6 e substituir as variáveis do template Vite em `src/index.css`, removendo o tema roxo e o dark mode automático.~~ ✅
5. ~~Ajustar o `index.html`: `lang="pt-BR"`, título "Brunetti | Odontologia" e importação da fonte Montserrat (300/400/500).~~ ✅
6. ~~Criar os componentes React: `Header`, `MenuOverlay`, `Hero`, `TratamentosGrid`, `Experiencia`, `Tecnologia`, `CorpoClinico`, `BarraAgendamento` e `Footer`.~~ ✅ Protótipo v1 com textos provisórios (12/10/2026). Também foram criados `Manifesto`, `TodosTratamentos`, `Estrutura` e `VisiteNos`.
7. ~~Analisar a identidade visual e as fotos da clínica~~ ✅ Concluído (seção 3).
8. ~~Preparar os ativos para o protótipo: extrair o logo em **SVG** dos arquivos `.ai`/`.pdf` (versões preta, branca e marrom), converter as fotos para **WebP** com nomes semânticos e organizá-las em `src/assets/`.~~ ✅ Logos em `src/assets/logo/` (SVG vetorial com `currentColor`) e 23 fotos WebP em `src/assets/images/`.
9. ~~Registrar procedimentos, localização e vídeos~~ ✅ Concluído (seções 3.8 a 3.10).

### 7.1. ✅ Já recebido

| Item | Status |
| :--- | :--- |
| Referência visual (Fasano) | ✅ Analisada |
| Briefing da proprietária | ✅ Registrado |
| Kit de logo (vetor `.ai`/`.pdf` + JPGs) | ✅ Recebido |
| Fotos da clínica (47 JPEG + 8 RAW) | ✅ Recebidas (resolução limitada pelo WhatsApp) |
| Lista de procedimentos | ✅ 15 procedimentos |
| Endereço e localização | ✅ Completo |
| Vídeos brutos | ✅ 50 arquivos no Drive (precisam de edição) |
| Regra de cor (sem vermelho) | ✅ Confirmada |

### 7.2. ⏳ O que ainda falta

**Essencial para o protótipo ficar fiel**
1. **Telefone e WhatsApp** da clínica. São o principal canal de conversão (barra de agendamento, cards e rodapé).
2. **Responsável técnico:** nome completo + **número CRO-DF**. A exibição é **obrigatória** pelas normas do CFO.
3. **Corpo clínico:** nomes, especialidades, CRO, minibiografia (2–3 linhas) e **retratos profissionais** de cada profissional.
4. **História e manifesto da clínica:** desde quando existe, quem é a fundadora e a filosofia de atendimento. É o equivalente ao "Dal 1902" do Fasano.
5. **Tagline completa:** "Onde a arte se encontra..." com o quê?
6. **"Seu sorriso em 3 dias":** a qual procedimento se refere e qual é a redação aprovada (ver 2.2).
7. **Horário de funcionamento** e **redes sociais** (Instagram etc.).

**Importante para a versão final**
8. **Vídeo do hero:** escolher os melhores takes dos 50 brutos e editar 10–20s em loop. Pode ser com o videomaker ou fazemos uma seleção juntos.
9. **Fotos originais em alta resolução** (≥ 2560px) do fotógrafo, principalmente para o hero.
10. **Fotos por procedimento** (ateliê, consultório, detalhes), sem antes/depois por enquanto.
11. **Prova social:** depoimentos autorizados ou nota e avaliações do Google. Lembrando que o CFO tem regras para depoimentos e antes/depois.
12. **Referência #2** (se houver) para fechar a seção de prova social.

**Desejável / futuro**
13. Nome da fonte do logotipo (para ficar 100% fiel à marca).
14. Domínio do site e e-mail de contato.
15. Diferenciais de hospitalidade: estacionamento ou manobrista, café, atendimento por agendamento exclusivo, etc.
16. Versão em inglês (PT | EN), relevante pelo público diplomático do Lago Sul.
17. Política de privacidade (LGPD), necessária quando o formulário for ligado a um sistema real.
