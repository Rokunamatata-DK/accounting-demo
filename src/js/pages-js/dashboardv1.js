// Revenue Cards // 
$(document).ready(function () {
/* jQueryKnob */
$("#sparkline1").sparkline([14, 14, 4, 14, 10, 17, 14, 12, 9, 3, 9], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#fff',
    barSpacing: '5px',
    negBarColor: '#fff',
    width: '100%',
});
$("#sparkline2").sparkline([6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#fff',
    barSpacing: '5px',
    negBarColor: '#fff',
    width: '100%',
});
$("#sparkline3").sparkline([6, 10, 17, 14, 12, 2, 4, 5, 7, 2, 8], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#fff',
    barSpacing: '5px',
    negBarColor: '#fff',
    width: '100%',
});
$("#sparkline4").sparkline([5, 6, 7, 2, 0, 4, 2, 10, 17, 14, 12], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#fff',
    barSpacing: '5px',
    negBarColor: '#fff',
    width: '100%',
});
// AnCharts 4 Start visitor statistic // 
AmCharts.makeChart("visitor", {
type: "serial",
hideCredits: !0,
theme: "light",
dataDateFormat: "YYYY-MM-DD",
precision: 2,
valueAxes: [{
    id: "v1",
    title: "Visitors",
    position: "left",
    autoGridCount: !1,
    labelFunction: function (e) {
        return "$" + Math.round(e) + "M"
    }
}, {
    id: "v2",
    title: "New Visitors",
    gridAlpha: 0,
    position: "right",
    autoGridCount: !1
}],
graphs: [{
    id: "g3",
    valueAxis: "v1",
    lineColor: "#feb798",
    fillColors: "#feb798",
    fillAlphas: 1,
    type: "column",
    title: "Returning Visitor",
    valueField: "sales2",
    clustered: !1,
    columnWidth: .5,
    legendValueText: "$[[value]]M",
    balloonText: "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
}, {
    id: "g4",
    valueAxis: "v1",
    lineColor: "#fe9365",
    fillColors: "#fe9365",
    fillAlphas: 1,
    type: "column",
    title: "New visitor",
    valueField: "sales1",
    clustered: !1,
    columnWidth: .3,
    legendValueText: "$[[value]]M",
    balloonText: "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
}, {
    id: "g1",
    valueAxis: "v2",
    bullet: "round",
    bulletBorderAlpha: 1,
    bulletColor: "#FFFFFF",
    bulletSize: 5,
    hideBulletsCount: 50,
    lineThickness: 2,
    lineColor: "#0df3a3",
    type: "smoothedLine",
    title: "Last Month Visitor",
    useLineColorForBulletBorder: !0,
    valueField: "market1",
    balloonText: "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
}, {
    id: "g2",
    valueAxis: "v2",
    bullet: "round",
    bulletBorderAlpha: 1,
    bulletColor: "#FFFFFF",
    bulletSize: 5,
    hideBulletsCount: 50,
    lineThickness: 2,
    lineColor: "#fe5d70",
    dashLength: 5,
    title: "Average Visitor",
    useLineColorForBulletBorder: !0,
    valueField: "market2",
    balloonText: "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
}],
chartCursor: {
    pan: !0,
    valueLineEnabled: !0,
    valueLineBalloonEnabled: !0,
    cursorAlpha: 0,
    valueLineAlpha: .2
},
categoryField: "date",
categoryAxis: {
    parseDates: !0,
    dashLength: 1,
    minorGridEnabled: !0
},
legend: {
    useGraphSettings: !0,
    position: "top"
},
balloon: {
    borderThickness: 1,
    cornerRadius: 5,
    shadowAlpha: 0
},
dataProvider: [{
    date: "2013-01-16",
    market1: 71,
    market2: 75,
    sales1: 5,
    sales2: 8
}, {
    date: "2013-01-17",
    market1: 74,
    market2: 78,
    sales1: 4,
    sales2: 6
}, {
    date: "2013-01-18",
    market1: 78,
    market2: 88,
    sales1: 5,
    sales2: 2
}, {
    date: "2013-01-19",
    market1: 85,
    market2: 89,
    sales1: 8,
    sales2: 9
}, {
    date: "2013-01-20",
    market1: 82,
    market2: 89,
    sales1: 9,
    sales2: 6
}, {
    date: "2013-01-21",
    market1: 83,
    market2: 85,
    sales1: 3,
    sales2: 5
}, {
    date: "2013-01-22",
    market1: 88,
    market2: 92,
    sales1: 5,
    sales2: 7
}, {
    date: "2013-01-23",
    market1: 85,
    market2: 90,
    sales1: 7,
    sales2: 6
}, {
    date: "2013-01-24",
    market1: 85,
    market2: 91,
    sales1: 9,
    sales2: 5
}, {
    date: "2013-01-25",
    market1: 80,
    market2: 84,
    sales1: 5,
    sales2: 8
}, {
    date: "2013-01-26",
    market1: 87,
    market2: 92,
    sales1: 4,
    sales2: 8
}, {
    date: "2013-01-27",
    market1: 84,
    market2: 87,
    sales1: 3,
    sales2: 4
}, {
    date: "2013-01-28",
    market1: 83,
    market2: 88,
    sales1: 5,
    sales2: 7
}, {
    date: "2013-01-29",
    market1: 84,
    market2: 87,
    sales1: 5,
    sales2: 8
}, {
    date: "2013-01-30",
    market1: 81,
    market2: 85,
    sales1: 4,
    sales2: 7
}]
});
//Sales Per Day
var ctx = document.getElementById("sales-per-day").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Sep", "Nov", "Dec"],
    datasets: [{
        label: 'Sales',
        data: [90, 60, 50, 20, 40, 30, 20, 34, 45, 34, 12, 34],
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8",
        borderWidth: 1
    }, {
        label: 'Products',
        data: [30, 29, 15, 35, 20, 23, 10, 60, 50, 20, 40, 30],
        backgroundColor: "#F3F3F3",
        borderColor: "#F3F3F3",
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{}]
    },
    legend: {
        display: true,
        position: 'top',
        labels: {
            fontColor: '#F3F3F3',
            fontFamily: 'Circular Std Book',
            fontSize: 14,
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 14,
                fontFamily: 'Circular Std Book',
                fontColor: '#F3F3F3',
            }
        }],
        yAxes: [{
            ticks: {
                fontSize: 14,
                fontFamily: 'Circular Std Book',
                fontColor: '#F3F3F3',
            }
        }]
    }
}
});
//Visitors Per Day
var ctx = document.getElementById("visitors-per-day").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Sep", "Nov", "Dec"],
    datasets: [{
        label: 'Unique Visitors',
        data: [30, 29, 15, 35, 20, 23, 10, 60, 50, 20, 40, 30],
        backgroundColor: "#fd7e14",
        borderColor: "#fd7e14",
        borderWidth: 2
    }, {
        label: 'Regular Visitors',
        data: [90, 60, 50, 20, 40, 30, 20, 34, 45, 34, 12, 34],
        backgroundColor: "#F3F3F3",
        borderColor: "#F3F3F3",
        borderWidth: 2
    }]
},
options: {
    scales: {
        yAxes: [{}]
    },
    legend: {
        display: true,
        position: 'top',
        labels: {
            fontColor: '#F3F3F3',
            fontFamily: 'Circular Std Book',
            fontSize: 14,
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 14,
                fontFamily: 'Circular Std Book',
                fontColor: '#F3F3F3',
            }
        }],
        yAxes: [{
            ticks: {
                fontSize: 14,
                fontFamily: 'Circular Std Book',
                fontColor: '#F3F3F3',
            }
        }]
    }
}
});
//Orders Per Day
var ctx = document.getElementById("orders-per-day").getContext('2d');
ctx.height = 500;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Sep", "Nov", "Dec"],
        datasets: [{
            label: 'Unique Orders',
            data: [90, 60, 50, 20, 40, 30, 20, 34, 45, 34, 12, 34],
            backgroundColor: "#FF6384",
            borderColor: "#FF6384",
            borderWidth: 2
        }, {
            label: 'Regular Orders',
            data: [30, 29, 15, 35, 20, 23, 10, 60, 50, 20, 40, 30],
            backgroundColor: "#F3F3F3",
            borderColor: "#F3F3F3",
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{}]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#F3F3F3',
                fontFamily: 'Circular Std Book',
                fontSize: 14,
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                    fontColor: '#F3F3F3',
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Circular Std Book',
                    fontColor: '#F3F3F3',
                }
            }]
        }
    }
});
});

// Chart JS Charts
$(document).ready(function () {
    var ctx1 = document.getElementById('app-sale1').getContext("2d");
    var myChart = new Chart(ctx1, {
        type: 'line',
        data: amuntchart('#11c15b', [1, 15, 30, 15, 25, 35, 45, 20, 25, 30], 'transparent'),
        options: buildchartoption(),
    });
    var ctx2 = document.getElementById('app-sale2').getContext("2d");
    var myChart = new Chart(ctx2, {
        type: 'line',
        data: amuntchart('#448aff', [45, 30, 25, 35, 20, 35, 45, 20, 25, 1], 'transparent'),
        options: buildchartoption(),
    });
    var ctx3 = document.getElementById('app-sale3').getContext("2d");
    var myChart = new Chart(ctx3, {
        type: 'line',
        data: amuntchart('#ff5252', [1, 45, 24, 40, 20, 35, 10, 20, 45, 30], 'transparent'),
        options: buildchartoption(),
    });
    var ctx4 = document.getElementById('app-sale4').getContext("2d");
    var myChart = new Chart(ctx4, {
        type: 'line',
        data: amuntchart('#536dfe', [1, 15, 45, 15, 25, 35, 45, 20, 25, 30], 'transparent'),
        options: buildchartoption(),
    });
    function amuntchart(a, b, f) {
        if (f == null) {
            f = "rgba(0,0,0,0)";
        }
        return {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
            datasets: [{
                label: "",
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                fill: true,
                backgroundColor: f,
                data: b,
            }]
        };
    }
    function buildchartoption() {
        return {
            maintainAspectRatio: false,
            title: {
                display: !1
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: !1,
                labels: {
                    usePointStyle: !1
                }
            },
            responsive: !0,
            maintainAspectRatio: !0,
            hover: {
                mode: "index"
            },
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Month"
                    }
                }],
                yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: "Value"
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
            },
            elements: {
                point: {
                    radius: 4,
                    borderWidth: 12
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 5,
                    bottom: 0
                }
            }
        };
    }
});
// I-Check
$(document).ready(function () {
    $(document).ready(function () {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    });
});
// EmojioneArea
$(document).ready(function() {
    $("#send-text").emojioneArea({
      search: false,
      recentEmojis: false
    });
});
// Jquery Vector Map 
$(document).ready(function() {
    jQuery('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: null,
    color: '#00b3b3',
    hoverOpacity: 0.7,
    selectedColor: '#FFC107',
    enableZoom: true,
    showTooltip: true,
    values: data_array,
    scaleColors: ['#F8AC59', '#28A745'],
    normalizeFunction: 'polynomial',
    onRegionClick: function(element, country_code, country)
    {
        /* When you will click on country, the region has the code, you can find the data_array in jquery.vmap.sampledata.js
        + and other thing we have to set the code to LowerCase because in jquery.vmap.sampledata.js the country code is in lowercase
        */
        //Generate random sales numbers
        var sales = Math.floor(Math.random() * 100);
        $('.jqvmap-country-flag').attr('src', 'img/flag-icon-css/flags/4x3/' + country_code.toLowerCase() + '.svg');
        $('.jqvmap-country').html(country + ' - ' + '$' + sales.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    }
    });
});
// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".panel-box-title";
    var connect = "[class*=col]";
    $(element).sortable({
    handle: handle,
        connectWith: connect,
        tolerance: 'pointer',
        forcePlacehReturningerSize: true,
        opacity: 0.8
    })
    .disableSelection();
}