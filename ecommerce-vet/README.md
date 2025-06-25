# 🐶 ecommerce-vet

Frontend React para uma plataforma de gerenciamento de uma clínica veterinária. Este projeto consome uma API externa para persistência de dados relacionados a animais e serviços.

---

## 📦 Tecnologias utilizadas

- React
- JavaScript (ES6+)
- Fetch API (ou Axios)
- CSS (modular)
- Arquitetura MVC adaptada (Views + Controllers + Models + Services)
- API externa em Node.js (projeto separado)

---

## 📁 Estrutura de pastas

```
src/
├── controllers/        # Comunicação entre views e models
├── models/             # Lógica de dados (via API)
├── services/           # Módulo de requisições HTTP (api.js)
├── views/              # Componentes visuais da aplicação
│   ├── AnimalForm.jsx
│   ├── AnimalList.jsx
│   ├── AnimalHistory.jsx
│   └── AnimalServicesForm.jsx
├── App.jsx
└── index.js
```

---

## 🌐 Requisitos para rodar

- Node.js 16+
- API externa rodando em `http://localhost:3001`

---

## ▶️ Como executar o frontend

```bash
npm install
npm start

---

## 🔗 Integração com a API

O projeto se comunica com a API externa para:

- 📥 `GET /animais` – Listagem de animais
- 📤 `POST /animais` – Cadastro de novos animais
- 📥 `GET /servicos` – Histórico de serviços
- 📤 `POST /servicos` – Registro de novo serviço

---

## 📌 Funcionalidades

- Cadastro de novos animais
- Listagem de animais cadastrados
- Registro de serviços (exames, consultas, cirurgias, etc.)
- Consulta de histórico de serviços por animal
- Design modular com reutilização de componentes

---

## 📝 Licença

Este projeto é open-source e pode ser utilizado livremente para fins educacionais ou comerciais.
