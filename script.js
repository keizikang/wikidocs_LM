// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.txt')
        .then(response => response.text())
        .then(text => {
            // 파일 내용을 HTML에 표시
            const dataContentElement = document.getElementById('data-content');
            dataContentElement.textContent = text;

            // 데이터를 파싱
            const data = text.trim().split('\n').map(line => {
                const [date, number] = line.split(',');
                return { date, number: Number(number) };
            });

            // 그래프를 생성합니다.
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
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
            const dataContentElement = document.getElementById('data-content');
            dataContentElement.textContent = 'Error fetching the data.';
        });
});
