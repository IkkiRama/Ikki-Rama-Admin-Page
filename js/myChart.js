// tabel pengunjung dalam satu tahun
let pengunjungDalamSatuTahun = document.querySelector('#pengunjungDalamSatuTahun').getContext('2d')


let pengunjungDalamSatuTahunChart = new Chart(pengunjungDalamSatuTahun, {
    type: 'line', //bar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
        datasets: [


            {
                label: 'Digital Goods',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Electronics',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {

        tooltips: {
            display: false
        },

        plugins: {

            legend: {
                position: 'right',
                display: false,


                labels: {
                    color: 'red',

                    font: {
                        size: 18
                    }
                }
            },

            title: {
                display: false,
                text: 'Sales: 1 Jan, 2014 - 30 Jul, 2014',
                font: {
                    size: 16,
                    weight: 700
                },
                color: '#000',
                padding: {
                    bottom: 20
                }
            }

        }
    }
});