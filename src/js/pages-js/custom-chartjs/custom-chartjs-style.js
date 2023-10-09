(function(window, document, $, undefined) {
    "use strict";
    $(function() {
            if ($('#chartjs_line').length) {
                var ctx = document.getElementById('chartjs_line').getContext('2d');
                var myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            datasets: [{
                                label: 'Almonds',
                                data: [12, 19, 3, 17, 6, 3, 7],
                                backgroundColor: "#17a2b8",
                                borderColor: "#1E90FF",
                                borderWidth: 2
                            }, {
                                label: 'Cashew',
                                data: [2, 29, 5, 5, 2, 3, 10],
                                backgroundColor: "#fd7e14",
                                borderColor: "#D2691E",
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
        }
        if ($('#chartjs_bar').length) {
            var ctx = document.getElementById("chartjs_bar").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["M", "T", "W", "R", "F", "S", "S"],
                    datasets: [{
                        label: 'Almonds',
                        data: [12, 19, 3, 17, 28, 24, 7],
                       backgroundColor: "#17a2b8",
                                borderColor: "#17a2b8",
                        borderWidth: 2
                    }, {
                        label: 'Cashew',
                        data: [30, 29, 5, 5, 20, 3, 10],
                       backgroundColor: "#e83e8c",
                                borderColor: "#e83e8c",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                        }]
                    },
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
        }
        if ($('#chartjs_radar').length) {
            var ctx = document.getElementById("chartjs_radar");
            var myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    datasets: [{
                        label: 'Almonds',
                       backgroundColor: "#17a2b8",
                                borderColor: "rgba(89, 105, 255,0.7)",
                        data: [12, 19, 3, 17, 28, 24, 7],
                        borderWidth: 2
                    }, {
                        label: 'Cashew',
                         backgroundColor: "#fd7e14",
                                borderColor: "#D2691E",
                        data: [30, 29, 5, 5, 20, 3, 10],
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
            }
            });
        }
        if ($('#chartjs_polar').length) {
            var ctx = document.getElementById("chartjs_polar").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    datasets: [{
                        backgroundColor: [
                            "#007bff",
                            "#e83e8c",
                            "#17a2b8",
                            "#ffc107",
                            "#28a745",
                            "#6610f2",
                            "#dc3545"
                        ],
                        data: [12, 19, 3, 17, 28, 24, 7]
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
            }
            });
        }
        if ($('#chartjs_pie').length) {
            var ctx = document.getElementById("chartjs_pie").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    datasets: [{
                        backgroundColor: [
                            "#007bff",
                            "#e83e8c",
                            "#17a2b8",
                            "#ffc107",
                            "#28a745",
                            "#6610f2",
                            "#dc3545"
                        ],
                        data: [12, 19, 3, 17, 28, 24, 7]
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
            }
            });
        }
        if ($('#chartjs_doughnut').length) {
            var ctx = document.getElementById("chartjs_doughnut").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    datasets: [{
                        backgroundColor: [
                            "#007bff",
                            "#e83e8c",
                            "#17a2b8",
                            "#ffc107",
                            "#28a745",
                            "#6610f2",
                            "#dc3545"
                        ],
                        data: [12, 19, 3, 17, 28, 24, 7]
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
            }
        });
    }
});
})(window, document, window.jQuery);