import { getAnimais, addAnimal } from "../services/api";

export const getAnimaisModel = async () => {
    return await getAnimais();
};

export const adicionarAnimalModel = async (animal) => {
    return await addAnimal(animal);
};

