
$(document).ready(function () {
    /* jQueryKnob */
    $("#sparkline1").sparkline([14, 14, 4, 14, 10, 17, 14, 12, 9, 3, 9], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#17a2b8',
    barSpacing: '5px',
    negBarColor: '#17a2b8',
    width: '100%',
});
$("#sparkline2").sparkline([6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#21b143',
    barSpacing: '5px',
    negBarColor: '#21b143',
    width: '100%',
});
$("#sparkline3").sparkline([6, 10, 17, 14, 12, 2, 4, 5, 7, 2, 8], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#dc3545',
    barSpacing: '5px',
    negBarColor: '#dc3545',
    width: '100%',
});
$("#sparkline4").sparkline([5, 6, 7, 2, 0, 4, 2, 10, 17, 14, 12], {
    type: 'bar',
    barWidth: 4,
    height: '40px',
    barColor: '#ffc107',
    barSpacing: '5px',
    negBarColor: '#ffc107',
    width: '100%',
});
// Total Earning
Morris.Bar({
    element: 'morris-total-earning',
    data: [{
        y: '2006',
        Sale: 100,
        Rent: 90,
        c: 60
    }, {
        y: '2007',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2008',
        Sale: 50,
        Rent: 40,
        c: 30
    }, {
        y: '2009',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2010',
        Sale: 50,
        Rent: 40,
        c: 30
    }, {
        y: '2011',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2012',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2013',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2014',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2015',
        Sale: 75,
        Rent: 65,
        c: 40
    }, {
        y: '2016',
        Sale: 100,
        Rent: 90,
        c: 40
    }, {
        y: '2017',
        Sale: 100,
        Rent: 90,
        c: 40
    }, {
        y: '2018',
        Sale: 100,
        Rent: 90,
        c: 40
    }],
    xkey: 'y',
    ykeys: ['Sale', 'Rent', 'c'],
    labels: ['Total Revenue', 'Affiliate Revenue', 'Revenue Per User'],
    barColors: ['#006DF0', '#933EC5', '#65b12d'],
    hideHover: 'auto',
    barSizeRatio: 0.45,
    gridLineColor: 'none',
    resize: true
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
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
});
});
// Products Sales
function dashboardEcharts() {
    /*circle chart*/
    var myChart = echarts.init(document.getElementById('pie-chart'));
    var idx = 1;
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

$(window).on('resize', function () {
    dashboardEcharts();
});
//Employees table
$(document).ready(function () {
    $('#employees-table').DataTable();
});