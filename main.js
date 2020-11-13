/** mock data */
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
}

/** 'Overall' section code */
const overallTitles = usageData.overallPostDistribution.categories.map(category => category.title)
const overallCounts = usageData.overallPostDistribution.categories.map(category => category.postCount)
const overallDistroCanvas = document.getElementById('overall-distro')
const overallDistroChart = new Chart(overallDistroCanvas, {
    type: 'doughnut',
    data: {
        labels: overallTitles,
        datasets: [{
            data: overallCounts,
            backgroundColor: [
                'rgb(255, 99, 132)',
                '#5cb85c',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
            ]
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 50,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            position: 'right',
            fullWidth: false,
            labels: {
                boxWidth: 10,
                fontSize: 10,
                padding: 15,
            }
        }
    }
})

/** 'By school' section code */
const schoolPostNames = usageData.overallPostDistribution.schools.map(school => school.name)
const schoolPostCounts = usageData.overallPostDistribution.schools.map(school => school.postCount)
const schoolDistroCanvas = document.getElementById('school-distro')
const schoolDistroChart = new Chart(schoolDistroCanvas, {
    type: 'bar',
    data: {
        datasets: [{
            data: schoolPostCounts,
            backgroundColor: '#5cb85c',
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
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
                    callback: function(value) {
                        return value.length > 15 ? `${value.substring(0, 12)}...` : value
                    }
                }
            }]
        },
    }
})

/** 'Top 5 authors' section code */
const authors = usageData.overallPostDistribution.authors.topFive.map(author => author)
const topFiveSum = usageData.overallPostDistribution.authors.topFive.reduce((prev, curr) => prev + curr.count, 0)
const topAuthorsFunnel = document.getElementById('top-authors-funnel')
const label = document.createElement('div')
label.innerHTML = `<div><h3 class="text-center m-0 mr-md-3">${usageData.overallPostDistribution.authors.totalCount}</h3> <span style="font-size: 10px;">AUTHORS</span></div>`
topAuthorsFunnel.prepend(label)

function bubbleSizer(count, sum) {
    return (count / sum) * 300
}

authors.forEach(author => {
    const card = document.createElement('div')
    card.style = 'width: 150px;'
    card.className = 'd-flex align-items-center justify-content-center card border-0'

    const cardContent = document.createElement('div')
    cardContent.style = 'width: 100px; height: 100px;'
    cardContent.className = 'd-flex align-items-center justify-content-center'

    const cardBubble = document.createElement('div')
    cardBubble.style = `width: ${bubbleSizer(author.count, topFiveSum)}%; height: ${bubbleSizer(author.count, topFiveSum)}%; max-height: 100px; max-width: 100px; min-height: 25px; min-width: 25px;`
    cardBubble.className = 'd-flex align-items-center justify-content-center rounded-circle text-white bg-success'

    const cardName = document.createElement('p')
    cardName.style = 'font-size: 10px;'
    cardName.className = 'text-success mb-0'

    const cardSchool = document.createElement('p')
    cardSchool.style = 'font-size: 10px; height: 40px;'
    cardSchool.className = 'text-center mb-0 p-1'

    cardBubble.innerHTML = author.count
    cardName.innerHTML = author.name
    cardSchool.innerHTML = author.school

    cardContent.appendChild(cardBubble)
    card.appendChild(cardContent)
    card.appendChild(cardName)
    card.appendChild(cardSchool)
    topAuthorsFunnel.appendChild(card)
});