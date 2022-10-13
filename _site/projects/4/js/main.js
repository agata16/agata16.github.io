document.addEventListener('DOMContentLoaded', function() {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

Chart.defaults.global.defaultFontSize = 16;
var ctx = document.getElementById('belbinChart');
var belbinChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Joanna', 'Honorata', 'Karolina', 'Ilona', 'Agata', 'Paulina'],
        datasets: [{
            label: 'Praktyczny organizator',
            data: [12, 9, 16, 14, 14, 12.5],
            backgroundColor: 'rgba(49, 8, 31, 0.5)',
            borderColor: 'rgba(49, 8, 31, 1)',
            borderWidth: 1
        }, {
            label: 'Naturalny lider',
            data: [7, 11, 8, 5, 8, 8],
            backgroundColor: 'rgba(44, 39, 57, 0.5)',
            borderColor: 'rgba(44, 39, 57, 1)',
            borderWidth: 1
        }, {
            label: 'Człowiek akcji',
            data: [14, 8, 8, 15, 7, 9],
            backgroundColor: 'rgba(38, 70, 83, 0.5)',
            borderColor: 'rgba(38, 70, 83, 1)',
            borderWidth: 1
        }, {
            label: 'Siewca',
            data: [3, 10, 0, 3, 5, 5],
            backgroundColor: 'rgba(42, 157, 143, 0.5)',
            borderColor: 'rgba(42, 157, 143, 1)',
            borderWidth: 1
        }, {
            label: 'Człowiek kontaktów',
            data: [10, 10, 13, 8, 3, 10],
            backgroundColor: 'rgba(138, 177, 125, 0.5)',
            borderColor: 'rgba(138, 177, 125, 1)',
            borderWidth: 1
        }, {
            label: 'Sędzia',
            data: [7, 5, 3, 3, 6, 8],
            backgroundColor: 'rgba(233, 196, 106, 0.5)',
            borderColor: 'rgba(233, 196, 106, 1)',
            borderWidth: 1
        }, {
            label: 'Człowiek grupy',
            data: [0, 16, 6, 17, 10, 0],
            backgroundColor: 'rgba(244, 162, 97, 0.5)',
            borderColor: 'rgba(244, 162, 97, 1)',
            borderWidth: 1
        }, {
            label: 'Perfekcjonista',
            data: [17, 1, 16, 5, 17, 19.5],
            backgroundColor: 'rgba(231, 111, 81, 0.5)',
            borderColor: 'rgba(231, 111, 81, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })