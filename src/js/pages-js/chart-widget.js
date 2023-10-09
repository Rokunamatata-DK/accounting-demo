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
    $("#sparkline5").sparkline([14, 14, 4, 14, 10, 17, 14, 12, 9, 3, 9], {
        type: 'bar',
        barWidth: 4,
        height: '40px',
        barColor: '#17a2b8',
        barSpacing: '5px',
        negBarColor: '#17a2b8',
        width: '100%',
    });
    $("#sparkline6").sparkline([6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4], {
        type: 'bar',
        barWidth: 4,
        height: '40px',
        barColor: '#21b143',
        barSpacing: '5px',
        negBarColor: '#21b143',
        width: '100%',
    });
    $("#sparkline7").sparkline([6, 10, 17, 14, 12, 2, 4, 5, 7, 2, 8], {
        type: 'bar',
        barWidth: 4,
        height: '40px',
        barColor: '#dc3545',
        barSpacing: '5px',
        negBarColor: '#dc3545',
        width: '100%',
    });
    $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 10, 17, 14, 12], {
        type: 'bar',
        barWidth: 4,
        height: '40px',
        barColor: '#ffc107',
        barSpacing: '5px',
        negBarColor: '#ffc107',
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
        title: "old Visitor",
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
    labels: ["M", "T", "W", "R", "F", "S", "S"],
    datasets: [{
        label: 'Sales $',
        data: [90, 60, 50, 20, 40, 30, 20],
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8",
        borderWidth: 2
    }, {
        label: 'Products',
        data: [30, 29, 15, 35, 20, 23, 10],
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
//Visitors Per Day
var ctx = document.getElementById("visitors-per-day").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["M", "T", "W", "R", "F", "S", "S"],
    datasets: [{
        label: 'Unique Visitors',
        data: [90, 60, 50, 20, 40, 30, 20],
        backgroundColor: "#fd7e14",
        borderColor: "#fd7e14",
        borderWidth: 2
    }, {
        label: 'Regular Visitors',
        data: [30, 29, 15, 35, 20, 23, 10],
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
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["M", "T", "W", "R", "F", "S", "S"],
        datasets: [{
            label: 'Unique Orders',
            data: [90, 60, 50, 20, 40, 30, 20],
            backgroundColor: "#FF6384",
            borderColor: "#FF6384",
            borderWidth: 2
        }, {
            label: 'Regular Orders',
            data: [30, 29, 15, 35, 20, 23, 10],
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
//Visitors Chart Widget
$(document).ready(function(){
    var a, i = [{
        date: "2012-01-01",
        distance: 227,
        townName: "New York",
        townName2: "New York",
        townSize: 25,
        latitude: 40.71,
        duration: 408
    }, {
        date: "2012-01-02",
        distance: 371,
        townName: "Washington",
        townSize: 14,
        latitude: 38.89,
        duration: 482
    }, {
        date: "2012-01-03",
        distance: 433,
        townName: "Wilmington",
        townSize: 6,
        latitude: 34.22,
        duration: 562
    }, {
        date: "2012-01-04",
        distance: 345,
        townName: "Jacksonville",
        townSize: 7,
        latitude: 30.35,
        duration: 379
    }, {
        date: "2012-01-05",
        distance: 480,
        townName: "Miami",
        townName2: "Miami",
        townSize: 10,
        latitude: 25.83,
        duration: 501
    }, {
        date: "2012-01-06",
        distance: 386,
        townName: "Tallahassee",
        townSize: 7,
        latitude: 30.46,
        duration: 443
    }, {
        date: "2012-01-07",
        distance: 348,
        townName: "New Orleans",
        townSize: 10,
        latitude: 29.94,
        duration: 405
    }, {
        date: "2012-01-08",
        distance: 238,
        townName: "Houston",
        townName2: "Houston",
        townSize: 16,
        latitude: 29.76,
        duration: 309
    }, {
        date: "2012-01-09",
        distance: 218,
        townName: "Dalas",
        townSize: 17,
        latitude: 32.8,
        duration: 287
    }, {
        date: "2012-01-10",
        distance: 349,
        townName: "Oklahoma City",
        townSize: 11,
        latitude: 35.49,
        duration: 485
    }, {
        date: "2012-01-11",
        distance: 603,
        townName: "Kansas City",
        townSize: 10,
        latitude: 39.1,
        duration: 890
    }, {
        date: "2012-01-12",
        distance: 534,
        townName: "Denver",
        townName2: "Denver",
        townSize: 18,
        latitude: 39.74,
        duration: 810
    }, {
        date: "2012-01-13",
        townName: "Salt Lake City",
        townSize: 12,
        distance: 425,
        duration: 670,
        latitude: 40.75,
        alpha: .4
    }, {
        date: "2012-01-14",
        latitude: 36.1,
        duration: 470,
        townName: "Las Vegas",
        townName2: "Las Vegas",
        bulletClass: "lastBullet"
    }, {
        date: "2012-01-15"
    }];
    AmCharts.makeChart("crm-statistic", {
        type: "serial",
        theme: "light",
        dataDateFormat: "YYYY-MM-DD",
        dataProvider: i,
        addClassNames: !0,
        startDuration: 1,
        marginLeft: 0,
        categoryField: "date",
        categoryAxis: {
            parseDates: !0,
            minPeriod: "DD",
            autoGridCount: !1,
            gridCount: 50,
            gridAlpha: .1,
            gridColor: "#FFFFFF",
            axisColor: "#555555",
            dateFormats: [{
                period: "DD",
                format: "DD"
            }, {
                period: "WW",
                format: "MMM DD"
            }, {
                period: "MM",
                format: "MMM"
            }, {
                period: "YYYY",
                format: "YYYY"
            }]
        },
        valueAxes: [{
            id: "a1",
            title: "Student",
            gridAlpha: 0,
            axisAlpha: 0
        }, {
            id: "a2",
            position: "right",
            gridAlpha: 0,
            axisAlpha: 0,
            labelsEnabled: !1
        }, {
            id: "a3",
            title: "",
            position: "left",
            gridAlpha: 0,
            axisAlpha: 0,
            lineAlpha: 0,
            fontSize: 0,
            inside: !0
        }],
        graphs: [{
            id: "g1",
            valueField: "distance",
            title: "distance",
            type: "column",
            fillAlphas: .9,
            valueAxis: "a1",
            balloonText: "[[value]] miles",
            legendValueText: "[[value]] mi",
            legendPeriodValueText: "total: [[value.sum]] mi",
            lineColor: "#01a9ac",
            alphaField: "alpha"
        }, {
            id: "g2",
            valueField: "latitude",
            classNameField: "bulletClass",
            title: "latitude/city",
            type: "line",
            valueAxis: "a2",
            lineColor: "#303549",
            lineThickness: 2,
            dashLength: 8,
            legendValueText: "[[value]]/[[description]]",
            descriptionField: "townName",
            bullet: "round",
            bulletSizeField: "townSize",
            bulletBorderColor: "#01a9ac",
            bulletBorderAlpha: 1,
            bulletBorderThickness: 2,
            bulletColor: "#0ac282",
            labelText: "[[townName2]]",
            labelPosition: "right",
            balloonText: "latitude:[[value]]",
            showBalloon: !0,
            animationPlayed: !0
        }, {
            id: "g3",
            title: "duration",
            valueField: "duration",
            type: "line",
            type: "smoothedLine",
            valueAxis: "a3",
            lineColor: "#fe5d70",
            balloonText: "[[value]]",
            lineThickness: 2,
            legendValueText: "[[value]]",
            bullet: "round",
            bulletBorderColor: "#fe5d70",
            bulletBorderThickness: 1,
            bulletBorderAlpha: 1,
            dashLengthField: "dashLength",
            animationPlayed: !0
        }]
    });
});
//Monthly And Daily Sales
$(document).ready(function(){
$("#sparkline-revenue1").sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
    type: 'line',
    width: '100%',
    height: '100',
    lineColor: '#4DC3C5',
    fillColor: '#4DC3C5',
    lineWidth: 2,
    spotColor: undefined,
    minSpotColor: undefined,
    maxSpotColor: undefined,
    highlightSpotColor: undefined,
    highlightLineColor: undefined,
    resize:true
});
$("#sparkline-revenue2").sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
    type: 'line',
    width: '100%',
    height: '100',
    lineColor: '#FEB393',
    fillColor: '#FEB393',
    lineWidth: 2,
    spotColor: undefined,
    minSpotColor: undefined,
    maxSpotColor: undefined,
    highlightSpotColor: undefined,
    highlightLineColor: undefined,
    resize:true
});
$("#sparkline-revenue3").sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
    type: 'line',
    width: '100%',
    height: '100',
    lineColor: '#53D4A7',
    fillColor: '#53D4A7',
    lineWidth: 2,
    spotColor: undefined,
    minSpotColor: undefined,
    maxSpotColor: undefined,
    highlightSpotColor: undefined,
    highlightLineColor: undefined,
    resize:true
});
});
// Chartsj JS Monthly View //
document.addEventListener("DOMContentLoaded", function (event) {
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var config = {
        type: 'line',
        maxheight: '460px',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
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
            }, {
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
        var ctx = document.getElementById('monthly-views').getContext('2d');
        window.myLine = new Chart(ctx, config);
    };
});
//#endregion
// Chart Balance Bar //
var ctx = document.getElementById("chartjs_balance_bar").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    maxheight: '300px',
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
    height: '300px',
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
    height: '300px',
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
$(document).ready(function(){
// Monthly Earnings Chart // 
var ctx = document.getElementById("monthly-earning").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    maxheight: '300px',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'dataset - big points',
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: '#DC3545',
            borderColor: '#DC3545',
            fill: false,
            borderDash: [5, 5],
            pointRadius: 15,
            pointHoverRadius: 10,
        }, {
            label: 'dataset - individual point sizes',
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: '#28A745',
            borderColor: '#28A745',
            fill: false,
            borderDash: [5, 5],
            pointRadius: [2, 4, 6, 18, 0, 12, 20],
        }, {
            label: 'dataset - large pointHoverRadius',
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: '#17A2B8',
            borderColor: '#17A2B8',
            fill: false,
            pointHoverRadius: 30,
        }, {
            label: 'dataset - large pointHitRadius',
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: '#FFC107',
            borderColor:  '#FFC107',
            fill: false,
            pointHitRadius: 20,
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: true
        }
    }
});
// //#endregion
});
//Current Month And Current Year Earnings
$(document).ready(function(){
    $("#current-month-and-year").sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
        type: 'line',
        width: '100%',
        height: '100',
        lineColor: '#25d5f2',
        fillColor: '#25d5f2',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });
});
// Products Sales
function dashboardEcharts() {
    /*circle chart*/
    var myChart = echarts.init(document.getElementById('pie-chart'));
    var option_dt = {
        timeline: {
            show: true,
            data: ['06-16', '05-16', '04-16'],
            label: {
                formatter: function (s) {
                    return s.slice(0, 5);
                }
            },
            x: 10,
            y: null,
            x2: 10,
            y2: 0,
            width: 250,
            height: 50,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#eaeaea",
            borderWidth: 0,
            padding: 5,
            controlPosition: "left",
            autoPlay: true,
            loop: true,
            playInterval: 2000,
            lineStyle: {
                width: 1,
                color: "#bdbdbd",
                type: ""
            },
        },
        options: [
            {
                color: ['#6f42c1', '#FC6180', '#93BE52', '#FFB64D', '#01a9ac', '#69CEC6'],
                title: {
                    text: '',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    show: false,
                    x: 'left',
                    orient: 'vertical',
                    padding: 0,
                    data: ['Micromax', 'Xolo', 'Lenevo', 'Sony', 'Others']
                },
                toolbox: {
                    show: false,
                    color: ['#4680ff', '#4680ff', '#4680ff', '#4680ff'],
                    feature: {
                        mark: { show: false },
                        dataView: { show: false, readOnly: true },
                        magicType: {
                            show: true,
                            itemSize: 12,
                            itemGap: 12,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '10%',
                                    width: '80%',
                                    funnelAlign: 'center',
                                    max: 50
                                },
                                pie: {
                                    roseType: 'none',
                                }
                            }
                        },
                        restore: { show: false },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: '06-16',
                        type: 'pie',
                        radius: [15, '70%'],
                        roseType: 'radius',
                        center: ['50%', '45%'],
                        width: '50%',       // for funnel
                        itemStyle: {
                            normal: { label: { show: true }, labelLine: { show: true } },
                            emphasis: { label: { show: false }, labelLine: { show: false } }
                        },
                        data: [{ value: 35, name: 'Micromax' }, { value: 16, name: 'Xolo' }, { value: 27, name: 'Lenevo' }, { value: 29, name: 'Sony' }, { value: 12, name: 'Others' }]
                    }
                ]
            },{
                series: [
                    {
                        name: '05-16',
                        type: 'pie',
                        data: [{ value: 42, name: 'Micromax' }, { value: 51, name: 'Xolo' }, { value: 39, name: 'Lenevo' }, { value: 25, name: 'Sony' }, { value: 9, name: 'Others' }]
                    }
                ]
            },{
                series: [
                    {
                        name: '04-16',
                        type: 'pie',
                        data: [{ value: 29, name: 'Micromax' }, { value: 16, name: 'Xolo' }, { value: 24, name: 'Lenevo' }, { value: 19, name: 'Sony' }, { value: 5, name: 'Others' }]
                    }
                ]
            },
        ] // end options object
    };
    myChart.setOption(option_dt);
}
$(document).ready(function () {
    dashboardEcharts();
});
// New Users DONUT CHART
var ctx = document.getElementById("new-users").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    width: '100%',
    height: '292px',
    data: {
        labels: ["Satisfied", "Unsatisfied", " NA"],
        datasets: [{
            backgroundColor: [
                "#01a9ac",
                "#FE9365",
                "#65b12d"
            ],
            data: [75, 16, 9]
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});
$(document).ready(function(){
    jQuery('#site-visitor-by-location').vectorMap({
        map: 'world_en',
        backgroundColor: null,
        color: '#21b143',
        hoverOpacity: 0.7,
        selectedColor: '#1de9b6',
        enableZoom: true,
        showTooltip: true,
        values: data_array,
        scaleColors: ['#1de9b6', '#03a9f5'],
        normalizeFunction: 'polynomial'
    });
});
