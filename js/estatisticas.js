
google.charts.load('current', {
    packages: ['geochart', 'corechart'],
    mapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' 
});


google.charts.setOnLoadCallback(drawMap);
google.charts.setOnLoadCallback(drawPieChart);


function drawMap() {
    const dataMap = google.visualization.arrayToDataTable([
        ['Country', 'Casos'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
        ['Greenland',200 ],
        ['Maldives', 13],
        ['lithuania', 97],
        ['Cambdoia', 52],
        ['Ethiopia', 9],
        ['Argentina', 151],
        ['Bolivia', 19],
        ['Cameroon', 27],
        ['Burkina Faso', 56],
        ['Bahrain', 184],
        ['Saudi Arabia', 376],
        ['Cape Verde', 1],
        ['Slovenia', 383],
        ['Guatemala', 16],
        ['Bosnia and Hazergovina', 90 ],
        ['Kuwait', 149],
        ['Spain', 21.990],
        ['Liberia', 3],
        ['Congo (Kinshasa)', 22],
        ['Pakistan', 725],
        ['Oman', 40],
        ['Marrocos', 50],
        ['Italy', 79],
        ['South Korea', 43],
        ['North Korea', 70],
        ['Japan', 97],
        ['China', 200],
        ['Morocco', 89],
        ['Afghanistan', 110],
        ['Albania', 90],
        ['Algeria', 150],
        ['Andorra', 100],
        ['Antigua and Barbuda', 80],
        ['angola,70',96]
     ]
        
    );

    const mapOptions = {
        region: 'world', 
        colorAxis: {
            resolution: 'continents', 
            colors: ['#fcebb6', '#5e412f'] 
        },
        backgroundColor: '#E0E0E0', 
        datalessRegionColor: '#f5f5f5' 
    };

    
    const map = new google.visualization.GeoChart(document.getElementById('mapa-covid'));
    map.draw(dataMap, mapOptions);
}


function drawPieChart() {
    const dataPie = google.visualization.arrayToDataTable([
        ['Country', 'Casos'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
        ['Greenland',200 ],
        ['Maldives', 13],
        ['lithuania', 97],
        ['Cambdoia', 52],
        ['Ethiopia', 9],
        ['Argentina', 151],
        ['Bolivia', 19],
        ['Cameroon', 27],
        ['Burkina Faso', 56],
        ['Bahrain', 184],
        ['Saudi Arabia', 376],
        ['Cape Verde', 1],
        ['Slovenia', 383],
        ['Guatemala', 16],
        ['Bosnia and Hazergovina', 90 ],
        ['Spain', 21.990],

     ]
       
    );

    const pieOptions = {
        title: 'Distribuição de Casos Confirmados por País',
        pieHole: 0.4, 
        colors: ['#fcebb6', '#5e412f', '#ffdc8a', '#ffba6b', '#e8c382'], 
        chartArea: { width: '90%', height: '80%' } 
    };

    
    const pieChart = new google.visualization.PieChart(document.getElementById('pizza-covid'));
    pieChart.draw(dataPie, pieOptions);
}


const dadosCovid = [
    { sigla: 'AC', estado: 'Acre', casos: 20000, mortes: 500, suspeitos: 300, descartados: 25000 },
    { sigla: 'AL', estado: 'Alagoas', casos: 150000, mortes: 3500, suspeitos: 5000, descartados: 200000 },
    { sigla: 'AP', estado: 'Amapá', casos: 30000, mortes: 800, suspeitos: 1500, descartados: 35000 },
    { sigla: 'AM', estado: 'Amazonas', casos: 250000, mortes: 8000, suspeitos: 12000, descartados: 200000 },
    { sigla: 'BA', estado: 'Bahia', casos: 500000, mortes: 12000, suspeitos: 20000, descartados: 600000 },
    { sigla: 'CE', estado: 'Ceará', casos: 300000, mortes: 10000, suspeitos: 25000, descartados: 400000 },
    { sigla: 'DF', estado: 'Distrito Federal', casos: 150000, mortes: 3000, suspeitos: 8000, descartados: 180000 },
    { sigla: 'ES', estado: 'Espírito Santo', casos: 100000, mortes: 2000, suspeitos: 5000, descartados: 120000 },
    { sigla: 'GO', estado: 'Goiás', casos: 200000, mortes: 5000, suspeitos: 10000, descartados: 250000 },
    { sigla: 'MA', estado: 'Maranhão', casos: 250000, mortes: 5000, suspeitos: 8000, descartados: 300000 },
    { sigla: 'MT', estado: 'Mato Grosso', casos: 150000, mortes: 4000, suspeitos: 7000, descartados: 180000 },
    { sigla: 'MS', estado: 'Mato Grosso do Sul', casos: 100000, mortes: 2000, suspeitos: 3000, descartados: 120000 },
    { sigla: 'MG', estado: 'Minas Gerais', casos: 400000, mortes: 10000, suspeitos: 15000, descartados: 500000 },
    { sigla: 'PA', estado: 'Pará', casos: 300000, mortes: 6000, suspeitos: 9000, descartados: 350000 },
    { sigla: 'PB', estado: 'Paraíba', casos: 100000, mortes: 2000, suspeitos: 4000, descartados: 120000 },
    { sigla: 'PR', estado: 'Paraná', casos: 500000, mortes: 12000, suspeitos: 20000, descartados: 600000 },
    { sigla: 'PE', estado: 'Pernambuco', casos: 200000, mortes: 5000, suspeitos: 10000, descartados: 250000 },
    { sigla: 'PI', estado: 'Piauí', casos: 80000, mortes: 2000, suspeitos: 3000, descartados: 90000 },
    { sigla: 'RJ', estado: 'Rio de Janeiro', casos: 600000, mortes: 18000, suspeitos: 25000, descartados: 700000 },
    { sigla: 'RN', estado: 'Rio Grande do Norte', casos: 100000, mortes: 3000, suspeitos: 4000, descartados: 120000 },
    { sigla: 'RS', estado: 'Rio Grande do Sul', casos: 500000, mortes: 13000, suspeitos: 20000, descartados: 600000 },
    { sigla: 'RO', estado: 'Rondônia', casos: 50000, mortes: 1000, suspeitos: 2000, descartados: 60000 },
    { sigla: 'RR', estado: 'Roraima', casos: 30000, mortes: 800, suspeitos: 1500, descartados: 35000 },
    { sigla: 'SC', estado: 'Santa Catarina', casos: 400000, mortes: 10000, suspeitos: 15000, descartados: 500000 },
    { sigla: 'SP', estado: 'São Paulo', casos: 2000000, mortes: 60000, suspeitos: 100000, descartados: 2500000 },
    { sigla: 'SE', estado: 'Sergipe', casos: 80000, mortes: 2000, suspeitos: 3000, descartados: 90000 },
    { sigla: 'TO', estado: 'Tocantins', casos: 30000, mortes: 600, suspeitos: 1000, descartados: 35000 }
];


function preencherTabela() {
    const tabela = document.getElementById('tabela-covid-brasil').getElementsByTagName('tbody')[0];
    
    dadosCovid.forEach(dado => {
        const novaLinha = tabela.insertRow();
        
        novaLinha.insertCell(0).innerText = dado.sigla;
        novaLinha.insertCell(1).innerText = dado.estado;
        novaLinha.insertCell(2).innerText = dado.casos.toLocaleString(); 
        novaLinha.insertCell(3).innerText = dado.mortes.toLocaleString();
        novaLinha.insertCell(4).innerText = dado.suspeitos.toLocaleString();
        novaLinha.insertCell(5).innerText = dado.descartados.toLocaleString();
    });
}


document.addEventListener('DOMContentLoaded', preencherTabela);




