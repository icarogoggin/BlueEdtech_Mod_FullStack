import React from 'react';

export default function Header() {
    return (
        <header className="admin__header">
        <a href="#" className="logo">
        <h1>Meu Dashboard</h1>
        </a>
        <div className="toolbar">
        <button className="btn btn--primary">Adicionar Venda</button>
        <a href="#" className="logout">
            Log Out
        </a>
        </div>
        </header>
    );
}