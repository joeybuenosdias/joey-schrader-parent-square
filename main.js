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
                name: 'Adam Elementary',
                postCount: 90,
            },
            {
                name: 'Alvin Elementary',
                postCount: 45,
            },
            {
                name: 'Arellanes Elementary',
                postCount: 40,
            },
            {
                name: 'Arellanes Junior High',
                postCount: 25,
            },
            {
                name: 'Battles Elementary',
                postCount: 82,
            },
            {
                name: 'Bonita Elementary',
                postCount: 28,
            },
            {
                name: 'El Camino Junior High',
                postCount: 92,
            },
            {
                name: 'Fairlawn Elementary',
                postCount: 20,
            },
            {
                name: 'Fessler Junior High',
                postCount: 91,
            },
            {
                name: 'Jimenez Elementary',
                postCount: 275,
            },
            {
                name: 'Kunst Junior High',
                postCount: 245,
            },
            {
                name: 'Liberty Elementary',
                postCount: 85,
            },
            {
                name: 'Miller Isaac',
                postCount: 60,
            },
            {
                name: 'Oakley Calvin',
                postCount: 110,
            },
            {
                name: 'Onitervos Elementary',
                postCount: 165,
            },
            {
                name: 'Rice William',
                postCount: 40,
            },
            {
                name: 'Robert Bruce Elementary',
                postCount: 96,
            },
            {
                name: 'Sanchez Elementary',
                postCount: 21,
            },
            {
                name: 'Taylor Elementary',
                postCount: 220,
            },
            {
                name: 'Tunnell Martin Luther',
                postCount: 160,
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

const schoolPostNames = usageData.schoolPostDistribution.schools.map(school => school.name)
const schoolPostCounts = usageData.schoolPostDistribution.schools.map(school => school.postCount)

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
        datasets: [{
            data: schoolPostCounts,
            backgroundColor: 'rgb(0, 153, 0)',
        }]
    },
    options: {
        title: {
            display: true,
            text: 'BY SCHOOL'
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {
                        return value % 100 !== 0 ? null : value
                    }
                }
            }],
            xAxes: [{
                labels: schoolPostNames,
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                    fontSize: 10,
                }
            }]
        },
    }
})