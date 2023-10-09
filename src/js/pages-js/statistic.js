$(document).ready(function () {
    var sparklineCharts = function () {
        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#17a2b8',
            fillColor: "#ffffff"
        });
        $("#sparkline2").sparkline([24, 43, 43, 55, 44, 62, 44, 72], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#17a2b8',
            fillColor: "#ffffff"
        });
        $("#sparkline3").sparkline([74, 43, 23, 55, 54, 32, 24, 12], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#dc3545',
            fillColor: "#ffffff"
        });
        $("#sparkline4").sparkline([24, 43, 33, 55, 64, 72, 44, 22], {
            type: 'line',
            width: '100%',
            height: '60',
            lineColor: '#dc3545',
            fillColor: "#ffffff"
        });
        $("#sparkline5").sparkline([1, 4], {
            type: 'pie',
            width: '100%',
            height: '100%',
            sliceColors: ['#17a2b8', '#dcdcdc']
        });
        $("#sparkline6").sparkline([5, 3], {
            type: 'pie',
            width: '100%',
            height: '100%',
            sliceColors: ['#17a2b8', '#dcdcdc']
        });
        $("#sparkline7").sparkline([2, 2], {
            type: 'pie',
            width: '100%',
            height: '100%',
            sliceColors: ['#dc3545', '#dcdcdc']
        });
        $("#sparkline8").sparkline([2, 3], {
            type: 'pie',
            width: '100%',
            height: '100%',
            sliceColors: ['#dc3545', '#dcdcdc']
        });
    };
    var sparkResize;
    $(window).resize(function (e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineCharts, 500);
    });
    sparklineCharts();
});