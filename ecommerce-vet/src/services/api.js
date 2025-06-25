const API_BASE = "http://localhost:3001";

// -------- Animais --------
export async function getAnimais() {
    const res = await fetch(`${API_BASE}/animais`);
    return res.json();
}

export async function addAnimal(animal) {
    const res = await fetch(`${API_BASE}/animais`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(animal),
    });
    return res.json();
}

// -------- Serviços --------
export async function getServicos() {
    const res = await fetch(`${API_BASE}/servicos`);
    return res.json();
}

export async function addServico(servico) {
    const res = await fetch(`${API_BASE}/servicos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servico),
    });
    return res.json();
}
