# [PLACEHOLDER: Nome do Projeto — ex. Fórum Escolar / Colmeia / StudyZone / Ágora]
Repositório de Back-end + Web para o projeto *[PLACEHOLDER: Nome do Projeto]*, projeto o qual possui o objetivo de [PLACEHOLDER: descrição em 2-3 frases — a equipe ainda não convergiu para um único enunciado de problema; ver seção "Situação Atual" no fim deste README].
 
O sistema permite que [PLACEHOLDER: ex. "alunos publiquem dúvidas organizadas por disciplina e tópico, recebam respostas validadas por professores/monitores e acompanhem um painel de dúvidas mais frequentes"], além de disponibilizar uma área administrativa restrita para [PLACEHOLDER: gestão de disciplinas, tópicos e usuários].
 
Projeto desenvolvido para [PLACEHOLDER: nome da disciplina/Hackathon/instituição — ex. "Projeto Integrador — 2ª Série do Ensino Médio Técnico em Informática"].
 
## Stack Utilizada
### Back-End
- **Node.js + TypeScript** — Runtime e linguagem base.
- **Express** — Framework web para rotas e middlewares.
- **OOP (Orientação a Objetos)** — Classes com atributos privados, getters/setters, validações e métodos `fromJSON()` / `toJSON()`.
- **Repository Pattern** — Camada de persistência desacoplada, sobre banco de dados relacional.
- **MySQL** — Banco de dados relacional (`mysql2`), com migrations e seeds versionadas em `database/`.
- **Autenticação & Segurança** — `bcrypt` para criptografia de senhas e `express-session` para controle de sessão/login.
- **Upload de Arquivos** — `Multer` para gerenciamento de materiais de apoio por tópico.
- **Testes Automatizados** — `Jest` para testes unitários e de integração.
### Front-end
- **EJS (Embedded JavaScript)** — Renderização de templates HTML dinâmicos.
- **CSS3 Customizado** — Estilização própria, responsiva (mobile-first, a partir de 360px) e focada em usabilidade.
- **JavaScript Vanilla (`public/js/`)** — Consumo interno de rotas via `fetch API` (ex.: sugestão de perguntas parecidas, validação de resposta, busca com debounce), com estados de *loading* e feedback visual, sem recarregar a página.
## Equipe e Papéis
 
| Integrante | Papel Principal | Responsabilidades |
| :--- | :--- | :--- |
| **Fábio Guilherme** | Líder Técnico | Arquitetura MVC, regras de negócio, revisão de Pull Requests, controle de versão |
| **Oséias da Costa** | Desenvolvedor Back-end | Requisitos funcionais, arquitetura técnica, repositories e conexão MySQL |
| **Adônis Bezerra** | Desenvolvedor Front-end / Apresentador | Views em EJS, estilos em CSS, scripts com `fetch API` |
| **Alice Gurgel** | Web-Designer / Front-end | Identidade visual, protótipo (Figma), estilos em CSS |
| **João Felipe** | QA / Testes | Testes unitários/integração com Jest, critérios de avaliação, segurança e autenticação |
| **João Victor** | Operador Sob Demanda / Apresentador | [PLACEHOLDER: atribuições ainda não definidas por escrito — ver checklist de Prioridade 1], controle de versão, entregáveis finais |
 
**Nota** — [PLACEHOLDER: confirmar se, como no projeto de referência, todos os participantes transitam entre funções ao longo do desenvolvimento].
 
**Regra de participação** — Mínimo de [PLACEHOLDER: quantidade de commits combinada — a proposta original citava 75] commits por participante.
 
## Estrutura de Pastas
```
[PLACEHOLDER: Nome do Projeto]/
├── database/                  # Migrations e seeds do MySQL
│   ├── migrations/
│   └── seeds/
├── public/                    # Arquivos estáticos
│   ├── css/                   # Estilos CSS próprios e responsivos
│   ├── js/                    # Scripts client-side (fetch, DOM, loading states)
│   └── uploads/
│       └── materiais/         # Materiais de apoio enviados via Multer
├── src/
│   ├── entities/               # Classes OOP (Usuario, Turma, Disciplina, Topico, Pergunta, Resposta...)
│   │   └── __tests__/
│   ├── models/                 # Repositories (persistência em MySQL)
│   │   └── __tests__/
│   ├── services/                # Regras de negócio (perguntas parecidas, validação, termômetro)
│   │   └── __tests__/
│   ├── routes/                  # Rotas da aplicação (Express Routers)
│   │   └── __tests__/
│   ├── middlewares/             # Autenticação, autorização por papel e upload (Multer)
│   ├── config/
│   │   └── database.ts          # Configuração do pool de conexão MySQL
│   ├── views/                   # Templates EJS
│   │   ├── partials/            # Header, nav, footer, feedback
│   │   ├── components/          # Cards reutilizáveis (pergunta, resposta, tópico...)
│   │   └── pages/                # Páginas (login, disciplinas, perguntas, admin...)
│   ├── app.ts                   # Configurações do Express e middlewares
│   └── server.ts                # Inicialização do servidor na porta 3000
├── jest.config.js
├── tsconfig.json
├── package.json
├── .env.example
└── README.md
```
 
## Arquitetura e Diagramas UML
O projeto segue uma arquitetura em camadas inspirada no padrão **MVC**, com forte uso de **Orientação a Objetos** no Back-end:
 
- **Entities (`src/entities/`)** — Classes de domínio ([PLACEHOLDER: confirmar lista final — provavelmente `Usuario`, `Turma`, `Disciplina`, `Topico`, `Pergunta`, `Resposta`, `DuvidaCompartilhada`]), responsáveis por encapsular atributos privados, validações internas e conversão `fromJSON()` / `toJSON()`.
- **Models / Repositories (`src/models/`)** — Camada de persistência, implementando o **Repository Pattern** sobre o MySQL, isolando o restante da aplicação do SQL.
- **Services (`src/services/`)** — Regras de negócio puras (ex.: detecção de perguntas parecidas, validação única de resposta, cálculo do termômetro de dúvidas), testáveis sem subir o servidor.
- **Routes / Controllers (`src/routes/`)** — Roteadores do Express que recebem as requisições, aplicam os middlewares necessários e orquestram entidades, services e repositories.
- **Middlewares (`src/middlewares/`)** — Autenticação, autorização por papel (aluno / professor / [PLACEHOLDER: monitor?]) e upload de arquivos (`Multer`).
- **Views (`src/views/`)** — Templates EJS renderizados no servidor.
### Diagramas
[PLACEHOLDER: diagramas UML ainda não produzidos. Recomendado incluir, seguindo o modelo de referência:]
- [PLACEHOLDER: Diagrama de Casos de Uso]
- [PLACEHOLDER: Diagrama de Classes (Entities + Repositories)]
- [PLACEHOLDER: Diagrama de Componentes (Back-end)]
- [PLACEHOLDER: Diagrama de Sequência — publicar pergunta / detectar duplicidade]
- [PLACEHOLDER: Diagrama de Sequência — Login]
- [PLACEHOLDER: Diagrama de Fluxo de Telas (Front-end)]
## Tabela de Rotas da API
[PLACEHOLDER: rotas ainda não implementadas/documentadas. Estrutura esperada, a preencher conforme o back-end avança:]
 
### Autenticação (`/`)
| Método | Rota | Descrição | Acesso |
| :--- | :--- | :--- | :--- |
| POST | `[PLACEHOLDER]` | Autentica o usuário e inicia a sessão | Público |
| POST | `[PLACEHOLDER]` | Cadastra um novo usuário | Público |
| POST | `[PLACEHOLDER]` | Encerra a sessão do usuário autenticado | Público |
 
### Disciplinas e Tópicos (`/disciplinas`)
| Método | Rota | Descrição | Acesso |
| :--- | :--- | :--- | :--- |
| GET | `[PLACEHOLDER]` | Lista disciplinas | [PLACEHOLDER] |
| GET | `[PLACEHOLDER]` | Lista tópicos de uma disciplina | [PLACEHOLDER] |
 
### Perguntas (`/perguntas`)
| Método | Rota | Descrição | Acesso |
| :--- | :--- | :--- | :--- |
| GET | `[PLACEHOLDER]` | Lista perguntas de um tópico | [PLACEHOLDER] |
| GET | `[PLACEHOLDER]` | Sugere perguntas parecidas (JSON, consumido via fetch) | [PLACEHOLDER] |
| POST | `[PLACEHOLDER]` | Publica uma nova pergunta | Autenticado |
| POST | `[PLACEHOLDER]` | Marca "tenho essa dúvida também" | Autenticado |
 
### Respostas (`/respostas`)
| Método | Rota | Descrição | Acesso |
| :--- | :--- | :--- | :--- |
| POST | `[PLACEHOLDER]` | Responde uma pergunta | Autenticado |
| PUT | `[PLACEHOLDER]` | Valida uma resposta (máx. 1 por pergunta) | [PLACEHOLDER: Professor/Monitor] |
 
### Administração / Painel do Professor (`/admin`)
| Método | Rota | Descrição | Acesso |
| :--- | :--- | :--- | :--- |
| GET | `[PLACEHOLDER]` | Retorna o termômetro de dúvidas (ranking de tópicos) | [PLACEHOLDER: Professor] |
| GET | `[PLACEHOLDER]` | Lista perguntas sem resposta | [PLACEHOLDER: Professor] |
 
## Guia de Navegação do Sistema
[PLACEHOLDER: telas ainda não implementadas. Estrutura esperada, a preencher conforme o front-end avança:]
 
### Área Pública
| Rota | Página | Descrição |
| :--- | :--- | :--- |
| `[PLACEHOLDER]` | Login | Formulário de autenticação |
| `[PLACEHOLDER]` | Cadastro | Formulário de registro |
 
### Área do Aluno Autenticado
| Rota | Página | Descrição |
| :--- | :--- | :--- |
| `[PLACEHOLDER]` | Início | Disciplinas do aluno e dúvidas em alta na turma |
| `[PLACEHOLDER]` | Tópico | Lista de perguntas do tópico + botão "Perguntar" |
| `[PLACEHOLDER]` | Nova Pergunta | Publicação com sugestão de perguntas parecidas |
| `[PLACEHOLDER]` | Pergunta | Discussão completa, resposta validada em destaque |
 
### Área do Professor (restrita)
| Rota | Página | Descrição |
| :--- | :--- | :--- |
| `[PLACEHOLDER]` | Painel do Professor | Termômetro de dúvidas, perguntas sem resposta |
 
### Fluxo de Navegação (visão geral)
```
[PLACEHOLDER: diagrama de fluxo de telas — ex.
Login ──► Início ──► Disciplina ──► Tópico ──► Pergunta
                                        │
                                        └──► Nova Pergunta ──► (sugestão de duplicidade)
]
```
 
## Prints do Sistema
[PLACEHOLDER: nenhuma tela implementada até o momento. Mínimo recomendado ao preencher: login, listagem/tópico com perguntas, painel do professor.]
 
## Guia de Execução
### Pré-Requisitos
- Node.js (versão [PLACEHOLDER] ou superior)
- NPM ou Yarn
- MySQL (versão [PLACEHOLDER]) rodando localmente ou acessível via `.env`
### Passo a Passo
1. Clonar o Repositório:
```bash
git clone [PLACEHOLDER: URL do repositório]
cd [PLACEHOLDER: nome-da-pasta]
```
2. Instalar as Dependências:
```bash
npm install
```
3. Configurar as variáveis de ambiente:
```bash
cp .env.example .env
# Preencher DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT
```
4. Rodar as migrations e seeds:
```bash
[PLACEHOLDER: comando de migration — ainda não definido]
[PLACEHOLDER: comando de seed — ainda não definido]
```
5. Executar em modo de desenvolvimento:
```bash
npm run dev
```
6. Executar os testes automatizados:
```bash
npm test
```
 
## Suíte de Testes do Sistema
[PLACEHOLDER: suíte ainda não escrita — mínimo de 10 testes exigido pelo checklist, cobrindo entidades, repositories e rotas.]
 
| Camada | Local | Cobertura |
| :--- | :--- | :--- |
| Entities | `src/entities/__tests__/` | [PLACEHOLDER] |
| Models (Repositories) | `src/models/__tests__/` | [PLACEHOLDER] |
| Services | `src/services/__tests__/` | [PLACEHOLDER: prioritário — validar resposta única, impedir voto duplicado em "tenho essa dúvida também", termômetro ordenando corretamente] |
| Middlewares | `src/middlewares/__tests__/` | [PLACEHOLDER] |
| Rotas | `src/routes/__tests__/` | [PLACEHOLDER] |
 
### Comandos
```bash
# Executar toda a suíte de testes
npm test
 
# Executar em modo watch (reexecuta ao salvar arquivos)
npx jest --watch
 
# Executar com relatório de cobertura
npx jest --coverage
```
 
**Configuração** — Definida em `jest.config.js`, na raiz do projeto.
 
---
 
## Situação Atual do Projeto
[PLACEHOLDER — este bloco existe porque, no momento da escrita, a equipe ainda não convergiu para uma única proposta. Remover esta seção assim que os pontos abaixo forem decididos.]
 
- **Nome do projeto:** em aberto entre `Fórum Escolar`, `Colmeia`, `Study Zone`, `Ágora`, `Elo S` e `SIFEPER`.
- **Problema e público-alvo:** ainda não há um enunciado único aprovado pela equipe (há pelo menos quatro propostas individuais divergentes).
- **Produto central do MVP:** em aberto entre "fórum de dúvidas por tópico" (recomendação da mentoria) e "grupo de estudos" (sugestão de um dos integrantes).
- **Banco de dados:** definido como MySQL.
- **Diferencial competitivo:** não formalizado por escrito.
