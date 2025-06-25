import React, { useState, useEffect } from "react";
import { buscarTodosOsAnimais } from "../controllers/AnimalController";
import "./AnimalList.css";

export default function AnimalList() {
    const [showList, setShowList] = useState(false);
    const [animals, setAnimals] = useState([]);

    const buttonText = showList ? "Fechar lista" : "Abrir lista";

    // Carrega os dados da API apenas quando showList for true
    useEffect(() => {
        if (showList) {
            const carregarAnimais = async () => {
                const lista = await buscarTodosOsAnimais();
                setAnimals(lista);
            };
            carregarAnimais();
        }
    }, [showList]);

    return (
        <div>
            {showList && (
                <div className="animal-list">
                    {animals.length === 0 ? (
                        <p>Nenhum animal cadastrado.</p>
                    ) : (
                        <ul>
                            {animals.map((animal) => (
                                <li key={animal.id} className="animal-card">
                                    <h3>{animal.nome}</h3>
                                    <p><strong>Raça:</strong> {animal.raca || "Não informado"}</p>
                                    <p><strong>Idade:</strong> {animal.idade ? `${animal.idade} ano(s)` : "Não informado"}</p>
                                    <p><strong>Dono(a):</strong> {animal.dono?.trim() || "Não informado"}</p>
                                    <p><strong>Cor:</strong> {animal.cor || "Não informado"}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            <div className="form-instructions">
                <p>Clique para {showList ? "ocultar" : "ver"} os pets listados até agora.</p>
                <button onClick={() => setShowList((prev) => !prev)}>{buttonText}</button>
            </div>
        </div>
    );
}
