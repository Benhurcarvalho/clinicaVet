import React from "react";
import "./App.css";
import AnimalForm from "./views/AnimalForm";
import AnimalList from "./views/AnimalList";
import AnimalHistory from "./views/AnimalHistory";
import AnimalServicesForm from "./views/AnimalServicesForm";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Clínica Veterinária PetVida 🐾</h1>
        <p>Bem-vindo(a) ao sistema de gestão da sua clínica</p>
      </header>

      <main className="main">
        <section className="section">
          <h2>➕ Cadastro de Animais</h2>
          <AnimalForm />
        </section>

        <section className="section">
          <h2>➕ Cadastro de Serviço</h2>
          <AnimalServicesForm />
        </section>

        <section className="section">
          <h2>📋 Lista de Animais Cadastrados</h2>
          <AnimalList />
        </section>

        <section className="section">
          <h2>📑 Histórico de Serviços</h2>
          <AnimalHistory />
        </section>
      </main>

      <footer className="footer">
        <small>&copy; {new Date().getFullYear()} Clínica PetVida - Todos os direitos reservados</small>
      </footer>
    </div>
  );
}
