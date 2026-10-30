# WebFlix

Plataforma de streaming de filmes feita em **Angular**. O site lista o catálogo de filmes, permite filtrar por gênero e reproduzir os vídeos direto no navegador, consumindo uma API REST.

O backend fica no repositório [WebFlix-api](https://github.com/joaopedroleonel/WebFlix-api): uma API REST em Spring Boot com MySQL, mais o Nginx que serve as capas e os vídeos.

## Funcionalidades

- **Catálogo de filmes:** cards com capa, título, gêneros e botão "Ler resumo" que expande a sinopse
- **Filtro por gênero:** dropdown com a lista de gêneros vinda da API, com opção "Todos"
- **Página do filme:** player de vídeo HTML5 com título, gêneros, descrição e botão "Voltar"
- **Loader global:** spinner exibido automaticamente durante qualquer requisição à API
- Tema escuro com Bootstrap

## Tecnologias

- [Angular 18](https://angular.dev/) com NgModules
- TypeScript
- RxJS
- SCSS
- [Bootstrap 5.3](https://getbootstrap.com/) (via CDN)
- Karma e Jasmine para testes unitários

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Home com banner e catálogo de filmes |
| `/video/:id` | Player e detalhes do filme |

## Estrutura

```
src/app/
├── core/
│   ├── services/api.service.ts     # requisições HTTP à API
│   └── url-api.ts                  # URLs da API e do servidor de arquivos
├── features/video/
│   ├── components/
│   │   ├── video-filter/           # dropdown de filtro por gênero
│   │   ├── video-list/             # grade de cards do catálogo
│   │   └── video-player/           # player de vídeo
│   └── interfaces/video.ts         # tipos VideoListI e GenreI
├── pages/
│   ├── home/                       # página inicial
│   └── video-page/                 # página do filme
└── shared/
    ├── components/
    │   ├── footer/
    │   └── loader-page/            # spinner de carregamento em tela cheia
    └── services/loader.service.ts  # estado do loader com BehaviorSubject
```

## Integração com a API

O site depende de dois serviços do repositório [WebFlix-api](https://github.com/joaopedroleonel/WebFlix-api), e os dois sobem juntos com Docker Compose:

- **API REST (Spring Boot):** fornece o catálogo, os gêneros e os dados de cada filme
- **Nginx:** serve os arquivos de capa (`.jpg`) e de vídeo (`.mp4`)

As URLs ficam em `src/app/core/url-api.ts` e por padrão apontam para as portas que o WebFlix-api usa localmente:

| Constante | Padrão | Uso |
| --- | --- | --- |
| `urlApi` | `http://localhost:5000/api` | Base da API REST |
| `urlServer` | `http://localhost:8080/archives/` | Nginx de onde são carregadas as capas e os vídeos |

A API devolve só o nome do arquivo em `imageUrl` e `videoUrl`, e o site monta a URL completa juntando esse nome com `urlServer`.

Endpoints consumidos:

| Método | Endpoint | Uso |
| --- | --- | --- |
| GET | `/Video/videoList` | Lista todos os filmes |
| GET | `/Genre` | Lista os gêneros para o filtro |
| GET | `/Video/genre?genreId={id}` | Lista os filmes de um gênero |
| GET | `/Video/{id}` | Detalhes e URL do vídeo de um filme |

Todas as chamadas passam pelo `ApiService`, que mostra o loader ao iniciar a requisição e o esconde ao terminar, com sucesso ou erro.

## Como rodar

### 1. Backend

Suba a API, o banco e o Nginx seguindo o [README do WebFlix-api](https://github.com/joaopedroleonel/WebFlix-api#readme). Com Docker:

```sh
git clone https://github.com/joaopedroleonel/WebFlix-api.git
cd WebFlix-api
docker compose up --build
```

### 2. Frontend

Requer [Node.js](https://nodejs.org/) 18.19+, 20.11+ ou 22+.

```sh
git clone https://github.com/joaopedroleonel/WebFlix-site.git
cd WebFlix-site
npm install
npm start
```

Acesse `http://localhost:4200`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm start` | Servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Build de produção em `dist/site` |
| `npm run watch` | Build de desenvolvimento em modo watch |
| `npm test` | Testes unitários com Karma |
