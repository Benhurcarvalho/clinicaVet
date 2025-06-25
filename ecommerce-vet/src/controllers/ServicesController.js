import {
    registrarServico,
    getServicosPorAnimal,
    getTodosServicos
} from "../models/ServicesModel";

// Registra um novo serviço para um animal
export const registrarNovoServico = (animalId, servico) => {
    return registrarServico(animalId, servico);
};

// Retorna os serviços de um animal específico
export const buscarServicosPorAnimal = (animalId) => {
    return getServicosPorAnimal(animalId);
};

// Retorna todos os serviços cadastrados
export const buscarTodosServicos = () => {
    return getTodosServicos();
};
