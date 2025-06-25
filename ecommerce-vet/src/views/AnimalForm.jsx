import React, { useState } from "react";
import { registrarNovoAnimal } from "../controllers/AnimalController";
import "./AnimalForm.css";

export default function AnimalForm() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nome: "",
        raca: "",
        idade: "",
        dono: "",
        cor: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Chama o controller para registrar o novo animal
        const novoAnimal = registrarNovoAnimal(formData);
        console.log("Animal registrado:", novoAnimal);

        alert(`Animal "${novoAnimal.nome}" cadastrado com sucesso!`);

        // Limpa o formulário
        setFormData({
            nome: "",
            raca: "",
            idade: "",
            dono: "",
            cor: ""
        });

        setShowForm(false);
    };

    return (
        <div>
            {!showForm ? (
                <div className="form-instructions">
                    <p>Preencha os campos para cadastrar um novo animal.</p>
                    <p>Todos os campos são obrigatórios, exceto Raça e Cor.</p>
                    <button onClick={() => setShowForm(true)}>Cadastrar Novo Animal</button>
                </div>
            ) : (
                <form className="animal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome do animal:</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Raça:</label>
                        <input
                            type="text"
                            name="raca"
                            value={formData.raca}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Idade:</label>
                        <input
                            type="number"
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label>Nome do dono(a):</label>
                        <input
                            type="text"
                            name="dono"
                            value={formData.dono}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Cor:</label>
                        <input
                            type="text"
                            name="cor"
                            value={formData.cor}
                            onChange={handleChange}
                        />
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit">Cadastrar</button>
                        <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                    </div>
                </form>
            )}
        </div>
    );
}
