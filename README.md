#### Comandos
- npm init
  -- cria o package.json iniciando o projeto
- npm i -g typescript
  -- instala o typescript globalmente para poder utilizá-lo em vários projetos
- tsc --init 
  -- cria o arquivo tsconfig.json para a configuração do typescript
- criar as pastas src e dist
  -- na pasta src fica os códigos typescript
  -- na pasta dist fica os códigos compilados para ser distribuído
- cria o arquivo index.ts dentro de src
- configurar o typescript
- npm i -D @types/node
  -- acrescenta mais funcionalidades ao typescript
  -- criou a pasta node_modules
- tsc -w
  -- cria o arquivo dist/index.js e monitora as alterações no projeto
- node dist/index.js
  -- executa o arquivo criado pelo comando acima
- npm i validator
- npm i --save-dev @types/validator
- npm install -g nodemon
  -- executa um comando específico toda vez que altero o código
  -- nodemon dist/index.js -> toda vez que alterar o código ele executa: node dist/index.js
- npm i -g ts-node
  -- roda arquivos typescripts diretamente, sem alterar o dist/index.js
  -- script: nodemon src/index.ts => detecta que é typescript e roda: ts-node src/index.ts
- npm i express
  -- para fazer o roteamento
- npm i @types/express
- Teoria das rotas
  -- rotas estáticas e rotas dinâmicas
  -- server.get() server.post()
  server.get('/', (req, res)=>{
    //req -> requisição
    //res -> controle da resposta
  }
  server.get('/noticia/:slug', (req, res)=>{
    //req -> requisição
    let slug: string = req.params.slug
    //res -> controle da resposta
    res.send(`Noticia: ${slug}`)
  })

- server.use('/static',express.static('public'));
  -- acessa a url, começando com static: http://localhost:3000/static/css/style.css
- server.use(express.static('public'));
  -- para o conteúdo da pasta public fica acessível pela url
  -- procura a pasta public a partir da pasta de onde deu o comando para iniciar o servidor
  -- crio na raiz do projeto a pasta public
  -- dentro da pasta public crio a pasta css
  -- dentro de css coloco o arquivo style.css
  
- console.log(path.join(__dirname));
  -- //vai da raiz do hd até a pasta aonde se encontra o server.ts

- npm i mustache-express
- npm i -D @types/mustache-express
- configurando a engine:
```
import mustache from 'mustache-express';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
```
- script: "start-dev": "nodemon -e ts,json,mustache src/server.ts" => para monitorar a extensões especificadas
- criar o arquivo home.mustache -> com o html da página dentro de src/views/
- no arquivo de rotas:
```
router.get('/', (req: Request, res: Response)=>{
  res.render('home');
})
```
  -- renderiza o que tá no arquivo home.mustache

- renderiza variaveis que estão no index.ts
```
router.get('/', (req: Request, res: Response)=>{
  res.render('home', { user: "Rangel" });
})
```
```
No home.mustache
Opa, tudo bem, {{user}}?
```
- condicional e loop
```
res.render('home', {
  user: "Rangel",
  showWelcome: false,
  age,
  showOld,
  products: [{title: 'Produto X', price: 10},{title: 'Produto y', price: 20},{title: 'Produto Z', price: 30}]
});
```

```
{{#showOld}}
  Como vai a vida?
{{/showOld}}
<hr/>

<ul>
  {{#pruducts}}
    <li>{{title}} - R$ {{price}}</li>
  {{/products}}
</ul>  
```
