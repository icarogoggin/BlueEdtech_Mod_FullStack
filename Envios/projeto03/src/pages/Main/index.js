import React from 'react'

export default function Main() {
    return (
        <main class="admin__main">
            <h2>Dashboard</h2>
            <div class="dashboard">
                <div class="dashboard__item">
                    <div class="card">
                        <strong>2.123</strong> Vendas
                    </div>
                </div>
                <div class="dashboard__item">
                    <div class="card">
                        <strong>R$123.123</strong> Faturamento
                    </div>
                </div>
                <div class="dashboard__item dashboard__item--full">
                    <div class="card">
                        <img
                            src="https://image.shutterstock.com/image-vector/chart-column-graph-infographic-element-260nw-1902512638.jpg"
                            alt="grafico"
                        />
                        <img
                            src="https://image.shutterstock.com/image-vector/chart-column-graph-infographic-element-260nw-1902512638.jpg"
                            alt="grafico"
                        />
                        <img
                            src="https://image.shutterstock.com/image-vector/chart-column-graph-infographic-element-260nw-1902512638.jpg"
                            alt="grafico"
                        />
                        <img
                            src="https://image.shutterstock.com/image-vector/chart-column-graph-infographic-element-260nw-1902512638.jpg"
                            alt="grafico"
                        />
                    </div>
                </div>
                <div class="dashboard__item dashboard__item--col">
                    <div class="card">A</div>
                </div>
                <div class="dashboard__item dashboard__item--col">
                    <div class="card">B</div>
                </div>
                <div class="dashboard__item dashboard__item--col">
                    <div class="card">C</div>
                </div>
                <div class="dashboard__item dashboard__item--col">
                    <div class="card">D</div>
                </div>
            </div>
        </main>
    )
}
