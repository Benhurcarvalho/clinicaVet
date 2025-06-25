const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../db/animais.json");

// GET /animais - Retorna todos os animais
router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        const animais = JSON.parse(data);
        res.json(animais);
    } catch (err) {
        res.status(500).json({ error: "Erro ao ler os animais." });
    }
});

// POST /animais - Adiciona um novo animal
router.post("/", (req, res) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        const animais = JSON.parse(data);

        const novoAnimal = {
            id: Date.now(),
            nome: req.body.nome || "Sem nome",
            raca: req.body.raca || "",
            idade: parseInt(req.body.idade) || null,
            dono: req.body.dono || "",
            cor: req.body.cor || ""
        };

        animais.push(novoAnimal);

        fs.writeFileSync(filePath, JSON.stringify(animais, null, 2));
        res.status(201).json(novoAnimal);
    } catch (err) {
        res.status(500).json({ error: "Erro ao salvar o animal." });
    }
});

module.exports = router;
