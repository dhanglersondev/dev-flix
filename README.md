# Dev Flix

> Aplicação React para explorar filmes em cartaz, visualizar detalhes e salvar favoritos localmente.

## 📌 Sobre o projeto

O **Dev Flix** é uma aplicação web em React que consome a API do **The Movie Database (TMDB)** para exibir filmes em cartaz e permitir que o usuário:

- veja a lista dos filmes mais recentes em exibição;
- aceda aos detalhes de um filme específico;
- salve filmes como favoritos no `localStorage` do navegador;
- remova filmes da lista de favoritos;
- abra o trailer do filme diretamente em uma nova aba.

O projeto foi estruturado com React Router para navegação entre páginas e usa `react-toastify` para feedback visual ao salvar/remover filmes.

## ✨ Funcionalidades

- **Home**: lista os filmes em cartaz com imagem e botão para acessar detalhes.
- **Detalhes do filme**: exibe título, capa, sinopse, avaliação média e ações para favoritar ou abrir trailer.
- **Favoritos**: lista os filmes salvos pelo usuário, com opção de remover e visualizar detalhes.
- **Tratamento de rota inválida**: página de erro para caminhos não encontrados.
- **Persistência local**: favoritos são armazenados no `localStorage`.
- **Feedback visual**: notificações de sucesso/aviso ao favoritar ou remover filmes.

## 🛠️ Tecnologias utilizadas

- React 19
- React Router DOM
- Axios
- React Toastify
- Create React App

## 📥 Pré-requisitos

Antes de começar, certifique-se de que você tenha instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/)

## 🚀 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/dev-flix.git
   cd dev-flix
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação em modo de desenvolvimento:

   ```bash
   npm start
   ```

4. Acesse no navegador:

   ```text
   http://localhost:3000
   ```

## 🧪 Scripts disponíveis

- `npm start` — inicia o projeto localmente.
- `npm run build` — cria a versão de produção.
- `npm test` — executa a suíte de testes (se houver).
- `npm run eject` — expõe a configuração do CRA (ação irreversível).

## 🗂️ Estrutura do projeto

```text
src/
├── components/
│   └── Header.js
├── layout/
│   └── DefaultLayout.js
├── pages/
│   ├── Error/
│   ├── Favoritos/
│   ├── Filme/
│   └── Home/
├── services/
│   └── api.js
├── App.js
├── routes.js
└── index.js
```

## 🔄 Fluxo de funcionamento

1. Ao carregar a aplicação, a Home faz uma requisição para a API do TMDB para buscar filmes em cartaz.
2. Cada filme é exibido com imagem e um link para a rota `/filme/:id`.
3. A página de detalhes busca os dados completos do filme pela ID.
4. O botão **Favoritar** salva o filme no `localStorage` e mostra uma notificação.
5. A página **Favoritos** exibe a lista salva e permite remover itens.

## 🌐 Integração com a API

A base da API está configurada em `src/services/api.js`, utilizando o endpoint padrão do TMDB.

> Observação: o projeto atualmente utiliza a chave da API diretamente no código. Para um cenário mais profissional, recomenda-se mover esta chave para variáveis de ambiente.

## 📝 Observações importantes

- Os favoritos são mantidos apenas no navegador do usuário, por meio do `localStorage`.
- O build de produção foi validado com sucesso via `npm run build`.
- O projeto ainda pode ser melhorado com:
  - paginação da lista de filmes;
  - busca por título;
  - tratamento mais completo de erros de API;
  - uso de variáveis de ambiente para a chave do TMDB.

## 👤 Autor

Desenvolvido como projeto de estudo e demonstração de consumo de API com React.