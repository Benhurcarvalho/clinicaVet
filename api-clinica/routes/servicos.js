const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../db/servicos.json");

// GET /servicos - Retorna todos os serviços
router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        const servicos = JSON.parse(data);
        res.json(servicos);
    } catch (err) {
        res.status(500).json({ error: "Erro ao ler os serviços." });
    }
});

// POST /servicos - Adiciona um novo serviço
router.post("/", (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        const servicos = JSON.parse(data);

        const novoServico = {
            id: Date.now(), // ID único simples
            animalId: parseInt(req.body.animalId),
            servico: req.body.servico
        };

        servicos.push(novoServico);

        fs.writeFileSync(filePath, JSON.stringify(servicos, null, 2));
        res.status(201).json(novoServico);
    } catch (err) {
        res.status(500).json({ error: "Erro ao salvar o serviço." });
    }
});

module.exports = router;
