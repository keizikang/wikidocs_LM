// 데이터를 직접 정의합니다.
const data = [
{date: '2023-10-17', number: 1086 },
{date: '2023-11-23', number: 4030 },
{date: '2023-12-02', number: 5358 },
{date: '2024-01-03', number: 11900},
{date: '2024-02-16', number: 22367},
{date: '2024-04-16', number: 38444},
{date: '2024-05-09', number: 43512},
{date: '2024-05-22', number: 46583},
{date: '2024-05-26', number: 47483},
{date: '2024-06-06', number: 49817},
{date: '2024-06-09', number: 50269},
{date: '2024-06-11', number: 50608},
{date: '2024-06-13', number: 51004},
];

// 그래프를 생성합니다.
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: '숫자',
                data: data.map(entry => ({
                    x: entry.date,
                    y: entry.number
                })),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'YYYY-MM-DD',
                        displayFormats: {
                            day: 'YYYY-MM-DD'
                        }
                    },
                    title: {
                        display: true,
                        text: '날짜'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '숫자'
                    }
                }
            }
        }
    });
});
