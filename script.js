/* =========================================
   GESTÃO DE DADOS EXPANDIDA
   ========================================= */

const dadosNeymar = {
    biografia: {
        nascimento: "05 de fevereiro de 1992",
        local: "Mogi das Cruzes, São Paulo",
        timeAtual: "Al-Hilal (Arábia Saudita)"
    },
    carreira: [
        { periodo: "2009-2013", time: "Santos FC" },
        { periodo: "2013-2017", time: "FC Barcelona" },
        { periodo: "2017-2023", time: "Paris Saint-Germain" },
        { periodo: "2023-Atualmente", time: "Al-Hilal" }
    ],
    titulos: [
        "Libertadores 2011", "Champions League 2014/15", 
        "Ouro Olímpico 2016", "Copa das Confederações 2013",
        "Campeonatos Nacionais (Brasil, Espanha, França)"
    ]
};

// Função para renderizar a nova seção de detalhes
function renderDetalhes() {
    const infoContainer = document.getElementById('info-detalhada');
    
    infoContainer.innerHTML = `
        <div class="bio-card">
            <h3>Bio</h3>
            <p><strong>Nascido em:</strong> ${dadosNeymar.biografia.local}</p>
            <p><strong>Data:</strong> ${dadosNeymar.biografia.nascimento}</p>
            <p><strong>Clube Atual:</strong> ${dadosNeymar.biografia.timeAtual}</p>
        </div>
        <div class="titulos-card">
            <h3>Principais Títulos</h3>
            <ul>${dadosNeymar.titulos.map(t => `<li>🏆 ${t}</li>`).join('')}</ul>
        </div>
    `;
}

// Chame renderDetalhes() dentro do window.onload
