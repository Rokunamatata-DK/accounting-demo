// Chartsj JS Monthly View //
document.addEventListener("DOMContentLoaded", function (event) {
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config = {
type: 'line',
maxheight: '460px',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [ {
        label: 'Earnings',
        borderColor: 'rgba(78, 63, 108, 0.603)',
        backgroundColor: 'rgba(78, 63, 108, 0.603)',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
    }, {
        label: 'Downloads',
        borderColor: 'rgba(40, 167, 70, 0.719)',
        backgroundColor: 'rgba(40, 167, 70, 0.719)',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
    },{
        label: 'Page Views',
        borderColor: 'rgba(255, 99, 133, 0.548)',
        backgroundColor: 'rgba(255, 99, 133, 0.548)',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
    }, {
        label: 'Visual Figure',
        borderColor: 'rgba(255, 204, 86, 0.719)',
        backgroundColor: 'rgba(255, 204, 86, 0.719)',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true
    },
    tooltips: {
        mode: 'index',
    },
    hover: {
        mode: 'index'
    },
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
}
};
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};
});
//#endregion
// Chart Balance Bar //
var ctx = document.getElementById("chartjs_balance_bar").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    maxheight: '280px !important',
    data: {
        labels: ["Current", "1-30", "31-60", "61-90", "91+"],
        datasets: [{
            label: 'Aged Payables',
            data: [500, 1000, 1500, 3700, 2500],
            backgroundColor: "#0cc0de",
            borderColor: "#0cc0de",
            borderWidth: 2
        }, {
            label: 'Aged Receiables',
            data: [1000, 1500, 2500, 3500, 2500],
            backgroundColor: "#9ACD32",
            borderColor: "#9ACD32",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#71748d',
                fontFamily: 'Circular Std Book',
                fontSize: 14,
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                    fontColor: '#71748d',
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                    fontColor: '#71748d',
                }
            }]
        }
    }
});
// Gross Profit Margin //
Morris.Donut({
    element: 'morris_gross',
    width:'100%',
    height: '100%',
    data: [{
        value: 94,
        label: 'Budget'
    }, {
        value: 15,
        label: ''
    }],
    labelColor: '#0cc0de',
    colors: [
        '#0cc0de',
        '#80ccff'
    ],
    formatter: function (x) {
        return x + "%"
    }
});
// Net Profit Margin //
Morris.Donut({
    element: 'morris_profit',
    width:'100%',
    height: '100%',
    data: [{
        value: 93,
        label: 'Profit'
    }, {
        value: 15,
        label: ''
    }],
    labelColor: '#9ACD32',
    colors: [
        '#9ACD32',
        '#cce698'
    ],
    formatter: function (x) {
        return x + "%"
    }
});
//New Employee's
$('#new-employees').DataTable({
    select: {
        style: 'multi'
    },
    "bJQueryUI": true,
    "aoColumnDefs": [
        { "sWidth": "10%", "aTargets": [-1] }
    ]
});