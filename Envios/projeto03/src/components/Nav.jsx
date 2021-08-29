import React from 'react';

export default function Nav() {
    return (
        <nav class="admin__nav">
        <ul class="menu">
            <li class="menu__item">
                <a class="menu__link" href="#">Dashboard</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#">Vendas</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#">Campanhas</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="#">Despesas</a>
            </li>
        </ul>
        </nav>
    );
}