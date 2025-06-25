import { getServicos, addServico } from "../services/api";

export const registrarServico = async (animalId, servico) => {
    try {
        const novoServico = {
            animalId: parseInt(animalId),
            servico
        };
        return await addServico(novoServico);
    } catch (error) {
        console.error("Erro ao registrar serviço:", error);
        return null;
    }
};

export const getTodosServicos = async () => {
    try {
        return await getServicos();
    } catch (error) {
        console.error("Erro ao buscar serviços:", error);
        return [];
    }
};

export const getServicosPorAnimal = async (animalId) => {
    try {
        const todos = await getServicos();
        return todos.filter((s) => s.animalId === parseInt(animalId));
    } catch (error) {
        console.error("Erro ao filtrar serviços por animal:", error);
        return [];
    }
};