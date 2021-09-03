import React from 'react';
// Quando tentei usar Link do router ele retornou error: invariant failed: you should not use <link> outside a <router> import { Link } from 'react-router-dom' 

export default function Nav() {
    return (
        <nav class="admin__nav">
        <ul class="menu">
            <li class="menu__item">
                <a class="menu__link" href="/dashboard">Dashboard</a>
            </li>
            <li class="menu__item">
            <a class="menu__link" href="/vendas">Vendas</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="/campanhas">Campanhas</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="/despesas">Despesas</a>
            </li>
        </ul>
        </nav>
    );
}