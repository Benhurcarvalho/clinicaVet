import { getAnimaisModel, adicionarAnimalModel } from "../models/AnimalModel";

export const buscarTodosOsAnimais = async () => {
    return await getAnimaisModel();
};

export const registrarNovoAnimal = async (dados) => {
    return await adicionarAnimalModel(dados);
};