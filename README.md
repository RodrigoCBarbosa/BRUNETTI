# Brunetti Odontologia — site institucional

Página única em React + Vite, inspirada na linguagem visual do Fasano.
Decisões de design e pendências da clínica estão em `ANALISE_PADRONIZACAO.md`.

## Comandos

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão final em dist/
npm run lint     # oxlint
```

## Estrutura

- `src/components/` — uma seção da página por componente (JSX + CSS)
- `src/data/` — conteúdo editável: dados da clínica, tratamentos e menu
- `src/styles/variables.css` — cores, tipografia e espaçamentos (design tokens)
- `src/hooks/` — aparição ao rolar (`useReveal`) e tamanho do texto (`useTamanhoFonte`)

## Regras do projeto

- **Nenhum vermelho no site**, nem em mensagens de erro ou ícones. Exceção: o mapa do Google
  em Visite-nos fica nas cores padrão.
- Tamanhos de fonte em `rem`: o botão "Aa" do header aumenta o texto de 100% a 150%
  (a escolha fica salva no navegador). Header e o próprio controle usam `px` para não mudar de tamanho.
- Itens marcados como **PROVISÓRIO** em `src/data/` (telefone, WhatsApp, CRO, corpo clínico,
  textos) aguardam confirmação da clínica.
