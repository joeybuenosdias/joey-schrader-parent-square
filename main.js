console.log('hello world')

const usageData = {
    overallPostDistribution: {
        categories: [
            {
                title: '6 District Posts',
                postCount: 6,
            },
            {
                title: '341 School Posts',
                postCount: 341,
            },
            {
                title: '1,300 Class Posts',
                postCount: 1300,
            },
            {
                title: '259 Group Posts',
                postCount: 259,
            },
        ],
        authors: {
            totalCount: 207,
            topFive: [
                {
                    name: 'Shandee Bayne',
                    school: 'Jimenez Elementary School',
                    count: 40,
                },
                {
                    name: 'Lisette Murillo',
                    school: 'Kuntz Junior High School',
                    count: 40,
                },
                {
                    name: 'Rosa Ruiz',
                    school: 'Liberty Elementary School',
                    count: 33,
                },
                {
                    name: 'Nora Jacobs',
                    school: 'Onitervos Elementary School',
                    count: 29,
                },
                {
                    name: 'Adriana Garcia',
                    school: 'Onitervos Elementary School',
                    count: 26,
                },
            ],
        }
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
                name: 'El Camino High',
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
                name: 'Robert Bruce',
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
}

const overallTitles = usageData.overallPostDistribution.categories.map(cat => cat.title)
const overallCounts = usageData.overallPostDistribution.categories.map(cat => cat.postCount)
const schoolPostNames = usageData.schoolPostDistribution.schools.map(school => school.name)
const schoolPostCounts = usageData.schoolPostDistribution.schools.map(school => school.postCount)
const authors = usageData.overallPostDistribution.authors.topFive.map(author => author)

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: overallTitles,
        datasets: [{
            data: overallCounts,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(0, 153, 0)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
            ]
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 10,
                fontSize: 10,
                padding: 2,
            }
        }
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

var ctx3 = document.getElementById('myChart3');
const label = document.createElement('div')
label.innerHTML = `<div><h3 style="margin: 0;">${usageData.overallPostDistribution.authors.totalCount}</h3> <span style="font-size: 10px;">AUTHORS</span></div>`
label.className = 'text-center'
ctx3.prepend(label)

authors.forEach(author => {
    const card = document.createElement('div')
    card.className = 'card d-flex align-items-center justify-content-center'

    const cardContent = document.createElement('div')
    cardContent.style = 'width: 100px; height: 100px;'
    cardContent.className = 'd-flex align-items-center justify-content-center'

    const cardBubble = document.createElement('div')
    cardBubble.style = `width: ${author.count * 1.6}px; height: ${author.count * 1.6}px; background-color: green; border-radius: 1000px; color: white;`
    cardBubble.className = 'bubble d-flex align-items-center justify-content-center'

    const cardName = document.createElement('p')
    cardName.style = 'font-size: 10px; color: green;'
    cardName.className = 'text-truncate mb-0 font-weight: bold;'

    const cardSchool = document.createElement('p')
    cardSchool.style = 'font-size: 10px; overflow: hidden; padding: 8px; height: 40px;'
    cardSchool.className = 'text-center mb-0'

    cardBubble.innerHTML = author.count
    cardName.innerHTML = author.name
    cardSchool.innerHTML = author.school

    cardContent.appendChild(cardBubble)
    card.appendChild(cardContent)
    card.appendChild(cardName)
    card.appendChild(cardSchool)
    ctx3.appendChild(card)
});
console.log('ctx3', ctx3)