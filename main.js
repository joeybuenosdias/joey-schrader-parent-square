console.log('hello world')

const usageData = {
    overallPostDistribution: {
        district: 6,
        school: 341,
        class: 1300,
        group: 259,
    },
    schoolPostDistribution: {
        schools: [
            {
                name: 'Adam Elementary School',
                postCount: 90,
            },
            {
                name: 'Alvin Elementary School',
                postCount: 45,
            },
            {
                name: 'Arellanes Elementary',
                postCount: 40,
            },
        ]
    },
    authors: {
        totalCount: 207,
        topFive: [
            {
                rank: 1,
                name: 'Shandee Bayne',
                school: 'Jimenez Elementary School'
            },
            {
                rank: 2,
                name: 'Lisette Murillo',
                school: 'Kuntz Junior High School'
            },
            {
                rank: 3,
                name: 'Rosa Ruiz',
                school: 'Liberty Elementary School'
            },
            {
                rank: 4,
                name: 'Nora Jacobs',
                school: 'Onitervos Elementary School'
            },
            {
                rank: 5,
                name: 'Adriana Garcia',
                school: 'Onitervos Elementary School'
            },
        ],
    }
}

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [120, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            weight: 100,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});

var ctx2 = document.getElementById('myChart2');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [120, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            weight: 100,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});