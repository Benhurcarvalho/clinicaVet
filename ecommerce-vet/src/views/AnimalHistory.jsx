import React, { useState, useEffect } from "react";
import { buscarTodosOsAnimais } from "../controllers/AnimalController";
import { buscarServicosPorAnimal } from "../controllers/ServicesController";
import "./AnimalHistory.css";

export default function AnimalHistory() {
    const [showHistory, setShowHistory] = useState(false);
    const [animalHistory, setAnimalHistory] = useState([]);

    const toggleHistory = () => setShowHistory((prev) => !prev);
    const buttonText = showHistory ? "Fechar histórico" : "Ver histórico";

    useEffect(() => {
        const carregarHistorico = async () => {
            const animais = await buscarTodosOsAnimais();
            const historico = await Promise.all(
                animais.map(async (animal) => {
                    const servicos = await buscarServicosPorAnimal(animal.id);
                    return {
                        id: animal.id,
                        nome: animal.nome,
                        servicos: servicos.map((s) => s.servico)
                    };
                })
            );
            setAnimalHistory(historico);
        };

        if (showHistory) {
            carregarHistorico();
        }
    }, [showHistory]);

    return (
        <div>
            {showHistory && (
                <div className="animal-history">
                    {animalHistory.length === 0 ? (
                        <p>Nenhum histórico disponível.</p>
                    ) : (
                        animalHistory.map((animal) => (
                            <div key={animal.id} className="history-card">
                                <h3>{animal.nome}</h3>
                                {animal.servicos.length === 0 ? (
                                    <p><em>Sem serviços registrados.</em></p>
                                ) : (
                                    <ul>
                                        {animal.servicos.map((servico, index) => (
                                            <li key={index}>{servico}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))
                    )}
                </div>
            )}

            <div className="form-instructions">
                <p>
                    Clique para {showHistory ? "ocultar" : "ver"} o histórico de serviços dos animais.
                </p>
                <button onClick={toggleHistory}>{buttonText}</button>
            </div>
        </div>
    );
}
