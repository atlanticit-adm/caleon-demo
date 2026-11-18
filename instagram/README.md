# CALEON · Instagram

Kit completo para abrir e lançar o Instagram da CALEON: perfil, identidade visual, 12 publicações para a grelha (2 em carrossel), 3 stories e 5 capas de destaques, com legendas e calendário.

> O kit está pronto a publicar, mas a conta ainda não existe. A criação da conta exige um telemóvel/e-mail verificado e o login da empresa, por isso é feita por alguém da equipa (cerca de 15 min, ver "Configuração").

## Estrutura

```
instagram/
├── perfil/perfil-avatar.png      foto de perfil 1080×1080 (navy + logótipo)
├── posts/post-XX.png             feed 1080×1350 (4:5). post-03-* e post-09-* são carrosséis
├── stories/story-0X.png          1080×1920 (9:16)
├── destaques/destaque-*.png      capas de destaques 1080×1080
├── marca/logo-caleon-480.png     logótipo original (extraído da landing)
└── gerador/                      fonte editável: pecas.html + render.js
```

Para alterar um texto: editar `gerador/pecas.html` e correr `node instagram/gerador/render.js` (Playwright). Todos os PNG são gerados de novo.

## Identidade visual

| Token | Cor | Uso |
|---|---|---|
| Navy | `#02123E` | Fundo principal, texto sobre claro |
| Navy 2 / 3 | `#071A4A` / `#0E2A66` | Cartões e ícones sobre navy |
| Teal (marca) | `#1EA3BC` | "ON" do logótipo, onda, destaques |
| Teal escuro | `#0E6F82` | Fundo alternativo, rótulos sobre claro |
| Ciano | `#8FD9E8` | Rótulos e ícones sobre fundo escuro |
| Papel | `#F6F8FC` / `#E8F5F8` | Fundos claros |
| Estados | verde `#1F7A52` · âmbar `#8A5A00` · vermelho `#B3261E` | Regularizado · a expirar · irregular |

- **Tipografia:** Archivo 600 (títulos, tracking −2%), Archivo 800 (logótipo), Inter 400–600 (texto). As mesmas da landing.
- **Logótipo:** CALE em branco/navy + ON em teal, com a onda por baixo.
- **Ícones:** traço 1,8 px arredondado, os mesmos da plataforma.
- **Grelha:** alternância navy / claro / teal, para a grelha de 3 colunas ter ritmo. Rótulo pequeno em maiúsculas por cima de cada título.
- **Tom:** português europeu, frases curtas, concreto, sem exageros. Exemplos com dados marcados sempre como **fictícios**.

## Perfil

- **Nome:** `CALEON · Obra em regra`
- **Utilizador sugerido:** `@caleon.pt` (alternativas: `@caleon.obra`, `@caleon_pt`). A disponibilidade tem de ser confirmada na criação; se mudar, trocar `@caleon.pt` em `gerador/pecas.html` e voltar a gerar.
- **Categoria:** Software
- **Bio (133 de 150 caracteres):**
  ```
  Procurement e homologação para construção 🇵🇹
  Construtoras, subempreiteiros e trabalhadores num só lugar.
  👇 Experimente a demonstração
  ```
- **Link:** URL da demonstração (a página `Landing.dc.html` publicada na Vercel/Netlify).
- **Botões de contacto:** e-mail comercial da Atlanticit.
- **Destaques (por ordem):** Sobre · Construtora · Subempreiteiro · Trabalhador · Demo, com as capas em `destaques/`.

## Publicações

Publicar de baixo para cima (01 primeiro), para a grelha final ficar como na pré-visualização.

**01 · Lançamento** (`post-01`)
> Obra em regra. 🏗️
> A CALEON junta construtoras, subempreiteiros e trabalhadores num só lugar: documentos, horas, propostas e faturas. Sem folhas de cálculo e sem andar atrás de papéis.
> Experimente a demonstração. Link na bio.
> #CALEON #construção #construçãocivil #obra #portugal

**02 · Manifesto** (`post-02`)
> Quem trabalha na obra está em regra. E toda a gente vê isso.
> É por isto que existimos: a construtora, o subempreiteiro e o trabalhador a ver a mesma verdade, ao mesmo tempo.
> #CALEON #construção #obra #subempreiteiros #portugal

**03 · Como funciona — carrossel 5** (`post-03-1` a `post-03-5`)
> Quatro passos, sem complicar 👉
> 01 Registe · 02 Homologue · 03 Aloque · 04 Confira
> Do registo à fatura conferida, tudo no mesmo sítio.
> #CALEON #procurement #construção #gestãodeobra #homologação

**04 · Para a construtora** (`post-04`)
> Construtora: veja quem está regularizado em cada obra, peça e compare propostas e confira as faturas antes de pagar.
> #CALEON #construtora #gestãodeobra #construçãocivil #portugal

**05 · Para o subempreiteiro** (`post-05`)
> Subempreiteiro: envie os documentos uma vez e fique homologado para todas as construtoras. Equipas, horas e faturação no mesmo sítio.
> #CALEON #subempreiteiros #empreiteiro #construção #portugal

**06 · Para o trabalhador** (`post-06`)
> Trabalhador: crie o seu perfil no telemóvel, mantenha os documentos em dia e saiba quanto tem a receber.
> #CALEON #trabalhoemobra #construção #emprego #portugal

**07 · Conformidade por obra** (`post-07`)
> Quem pode estar em obra hoje? 14 trabalhadores, 4 estados, uma só vista.
> Os documentos a caducar aparecem antes de virarem problema.
> (Exemplo com dados fictícios.)
> #CALEON #conformidade #segurançanotrabalho #gestãodeobra #construção

**08 · Ponte Luís I** (`post-08`)
> Uma ponte só aguenta quando cada peça está no sítio. 🌉
> Numa obra é igual: documentos, equipas e pagamentos alinhados, e visíveis para quem decide.
> Do Porto a Gaia, a pensar em quem está no estaleiro.
> #CALEON #porto #gaia #ponteluisi #construção

**09 · Plataforma — carrossel 7** (`post-09-1` a `post-09-7`)
> Menos papel. Mais obra. 👉
> Homologação · Conformidade por obra · Horas e jornadas · Faturas conferidas · Propostas · Recrutamento
> Tudo o que anda em e-mails, folhas de cálculo e grupos de conversa, num só sítio.
> #CALEON #construção #procurement #digitalização #gestãodeobra

**10 · Checklist do subempreiteiro** (`post-10`)
> Guarde este post 📌
> 5 documentos para ter em dia antes de entrar em obra: alvará/certificado, certidão da AT, certidão da Segurança Social, seguro de acidentes de trabalho e seguro de responsabilidade civil.
> Lista indicativa: confirme sempre o que a sua construtora exige.
> #CALEON #subempreiteiros #alvará #segurançasocial #construção

**11 · Faturas conferidas** (`post-11`)
> Horas, proposta e fatura lado a lado. A diferença aparece antes do pagamento, não depois.
> (Exemplo com dados fictícios.)
> #CALEON #faturação #controlodecustos #gestãodeobra #construção

**12 · Demonstração** (`post-12`)
> Veja a obra em regra. 👀
> Entre na demonstração e escolha o perfil: construtora, subempreiteiro ou trabalhador. Dados fictícios, não precisa de instalar nada.
> Link na bio.
> #CALEON #construção #software #demo #portugal

### Stories
- `story-01` — dia do lançamento, com o autocolante de menção/link.
- `story-02` — colocar o autocolante **Sondagem** na área tracejada: "1–2", "3–5", "Perdi a conta".
- `story-03` — colocar o autocolante **Link** (demonstração) na área tracejada. Fixar nos destaques "Demo".

## Calendário (4 semanas, 3 publicações/semana)

| Semana | Segunda | Quarta | Sexta | Stories |
|---|---|---|---|---|
| 1 | 01 Lançamento | 02 Manifesto | 03 Como funciona | story-01 (seg), story-03 (sex) |
| 2 | 04 Construtora | 05 Subempreiteiro | 06 Trabalhador | story-02 (qua) |
| 3 | 07 Conformidade | 08 Ponte | 09 Plataforma | partilhar 07 e 09 |
| 4 | 10 Checklist | 11 Faturas | 12 Demonstração | story-03 (sex) |

Horário sugerido para público B2B de construção: 08:00–09:00 ou 12:30–13:30, dias úteis. Ajustar após 4 semanas com as estatísticas da conta.

## Configuração (passo a passo)

1. Criar a conta na app do Instagram com o e-mail da empresa e o utilizador escolhido.
2. **Definições → Tipo de conta e ferramentas → Mudar para conta profissional → Empresa**, categoria *Software*.
3. Ligar a uma Página do Facebook da CALEON (necessário para agendar no Meta Business Suite).
4. **Editar perfil:** foto `perfil/perfil-avatar.png`, nome, bio e link (secção "Perfil").
5. Ativar a verificação em dois passos (Definições → Centro de Contas → Palavra-passe e segurança).
6. Em **business.facebook.com → Planeador**, agendar os 12 posts conforme o calendário, colando as legendas acima. Nos carrosséis, carregar os ficheiros pela ordem numérica.
7. Publicar `story-01` no dia 1 e criar os 5 destaques com as capas de `destaques/`.
