"use strict";
$(document).ready(function () {
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
//Monthly And Daily Sales
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
// Pie Chart in Table JS */
$(document).ready(function() {
    $('span.pie').peity('pie',{
        fill: ["#1AB394", "#F2F2F2"]
    });
});
//Top Centered Navbar //
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 21.8,
    spaceBetween: 1,
    freeMode: true,
    grabCursor: true,
    slidesPerGroup: 4, loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//Top Centered Navbar RTL //
var swiper = new Swiper('.swiper-container-rtl', {
    slidesPerView: 19.5,
    spaceBetween: 1,
    freeMode: true,
    grabCursor: true,
    slidesPerGroup: 4, loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
