Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Montadoras'
    },
    xAxis: {
        categories: ['BMW', 'Chevrolet', 'Citroen', 'Fiat', 'Ford', 'Honda', 'Hyndai', 'Iveco', 'Jepp', 'Renaut']
    },
    yAxis: {
        title: {
            text: 'Porcentagem (%)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },
    series: [ {
        name: 'Dados',
        data: [5, 7.5, 20, 27.5, 9, 19.5, 13.3, 16.6, 12.2,9.7]
    }]
});