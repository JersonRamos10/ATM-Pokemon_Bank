var ctx = document.getElementById('transaccionesGrafico').getContext('2d');
var transaccionesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Depósitos', 'Retiros', 'Pagos de Servicio'],
        datasets: [{
            label: 'Número de transacciones',
            data: [1, 1, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
