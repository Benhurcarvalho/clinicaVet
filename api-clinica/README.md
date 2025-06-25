# 🐾 API Clínica Veterinária

API REST simples para cadastro de animais e registro de serviços realizados, com persistência de dados em arquivos `.json`.

---

## 🚀 Como executar

### 1. Crie o diretório
```bash
cd api-clinica
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie a API
```bash
node server.js
```

A API ficará disponível em:  
📍 `http://localhost:3001`

---

## 📂 Estrutura

```bash
api-clinica/
├── db/
│   ├── animais.json       # Dados persistentes dos animais
│   └── servicos.json      # Histórico de serviços
├── routes/
│   ├── animais.js         # Rotas relacionadas aos animais
│   └── servicos.js        # Rotas relacionadas aos serviços
├── scripts/
│   └── reset.js           # Script para limpar os dados (opcional)
├── server.js              # Arquivo principal da API
├── package.json
```

---

## 📬 Endpoints disponíveis

### 🐶 Animais

- `GET /animais` – Lista todos os animais
- `POST /animais` – Adiciona um novo animal  
  Exemplo de corpo:
  ```json
  {
    "nome": "Bidu",
    "raca": "Beagle",
    "idade": 2,
    "dono": "Marcela",
    "cor": "Preto e branco"
  }
  ```

### 🛠️ Serviços

- `GET /servicos` – Lista todos os serviços realizados
- `POST /servicos` – Registra um novo serviço  
  Exemplo de corpo:
  ```json
  {
    "animalId": 1,
    "servico": "Consulta de retorno"
  }
  ```

---

## ♻️ Resetar os dados

Se quiser apagar todos os dados e recomeçar do zero:

```bash
node scripts/reset.js
```

---

## 📌 Requisitos

- Node.js 16+ instalado
- Editor de texto (VS Code recomendado)
- Navegador para testar (ou usar ferramentas como Postman/Insomnia)

---

## ✨ Licença

Este projeto é open-source e pode ser utilizado livremente para fins educacionais ou comerciais.
