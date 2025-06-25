import React, { useState, useEffect } from "react";
import { registrarNovoServico } from "../controllers/ServicesController";
import { buscarTodosOsAnimais } from "../controllers/AnimalController";
import "./AnimalServicesForm.css";

export default function AnimalServicesForm() {
    const [form, setForm] = useState({
        animalId: "",
        servico: ""
    });

    const [animais, setAnimais] = useState([]);
    const [mensagem, setMensagem] = useState("");

    // Carrega os animais da API ao montar o componente
    useEffect(() => {
        async function carregarAnimais() {
            const lista = await buscarTodosOsAnimais();
            setAnimais(lista);
        }
        carregarAnimais();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.animalId || !form.servico.trim()) {
            setMensagem("Preencha todos os campos.");
            return;
        }

        const registro = await registrarNovoServico(form.animalId, form.servico.trim());

        if (registro) {
            const nomeAnimal =
                animais.find((a) => a.id === parseInt(form.animalId))?.nome || "Desconhecido";

            setMensagem(`Serviço registrado com sucesso para ${nomeAnimal}!`);
            setForm({ animalId: "", servico: "" });
        } else {
            setMensagem("Erro ao registrar o serviço. Tente novamente.");
        }
    };

    return (
        <form className="animal-services-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Selecione o animal:</label>
                <select
                    name="animalId"
                    value={form.animalId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Escolha um animal</option>
                    {animais.map((animal) => (
                        <option key={animal.id} value={animal.id}>
                            {animal.nome || `Animal ${animal.id}`}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Serviço realizado:</label>
                <input
                    type="text"
                    name="servico"
                    value={form.servico}
                    onChange={handleChange}
                    placeholder="Ex: Exame de sangue, Consulta de rotina..."
                    required
                />
            </div>

            <button type="submit">Registrar Serviço</button>

            {mensagem && <p className="mensagem">{mensagem}</p>}
        </form>
    );
}
