Documentação - Clínica Veterinária
# API Clinica Veterinaria
API REST simples para cadastro de animais e registro de servicos realizados, com persistencia de dados
em arquivos .json.
---
## Como executar
1. Crie o diretorio
$ cd api-clinica
2. Instale as dependencias
$ npm install
3. Inicie a API
$ node server.js
API disponível em http://localhost:3001
---
## Estrutura
api-clinica/
- db/
 - animais.json
 - servicos.json
- routes/
 - animais.js
 - servicos.js
Documentação - Clínica Veterinária
- scripts/reset.js
- server.js
- package.json
---
## Endpoints
- GET /animais
- POST /animais
Exemplo:
{
 "nome": "Bidu",
 "raca": "Beagle",
 "idade": 2,
 "dono": "Marcela",
 "cor": "Preto e branco"
}
- GET /servicos
- POST /servicos
Exemplo:
{
 "animalId": 1,
 "servico": "Consulta de retorno"
}
---
## Resetar dados
Documentação - Clínica Veterinária
$ node scripts/reset.js
---
## Requisitos
- Node.js 16+
- VS Code
- Postman ou navegador
---
# ecommerce-vet
Frontend React para gerenciamento de uma clínica veterinária.
---
## Tecnologias
- React
- JavaScript
- CSS
- Fetch API ou Axios
- API Node externa
- Arquitetura MVC adaptada
---
## Estrutura
Documentação - Clínica Veterinária
src/
- controllers/
- models/
- services/
- views/
 - AnimalForm.jsx
 - AnimalList.jsx
 - AnimalHistory.jsx
 - AnimalServicesForm.jsx
- App.jsx
- index.js
---
## Requisitos
- Node.js 16+
- API externa em http://localhost:3001
---
## Como executar
$ npm install
$ npm start
---
## API Integrada
- GET /animais
- POST /animais
Documentação - Clínica Veterinária
- GET /servicos
- POST /servicos
---
## Funcionalidades
- Cadastro de animais
- Listagem
- Registro de serviços
- Histórico por animal
---
## Licença
Open-source para fins educacionais ou comerciais