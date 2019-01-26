document.addEventListener("DOMContentLoaded", function(event) { //non-jQuery equivalent of docready function

    console.log( "ready!" );

    var foodHours = 1;
    var hydrHours = 0.5;
    var exerHours = 1;
    var mediaHours = 1;
    var workHours = 3;
    var studyHours = 2.5;
    var comutHours = 1;
    var incompHours = 2; 

    var chart = document.getElementById("wheelChart");
    console.log(chart);
    var pieChart = new Chart(chart, {
        type: 'doughnut',
        data: {
            labels: ["Food Prep", "Hydration", "Exercise", "Media", "Work", "Studying", "Commute", "Incomplete"],
            datasets: [{
                label: '# of Votes',
                data: [foodHours, hydrHours, exerHours, mediaHours, workHours, studyHours, comutHours, incompHours],
                backgroundColor: [
                    '#DF7000', //food
                    '#42EBF4', //hydration
                    '#D50000', //exercise
                    '#7200CA', //media
                    '#E8E000', //work
                    '#36CA00', //study
                    '#AAAAAA', //commute
                    'rgba(0, 0, 0, 0)', //incomplete(transparent)
                ],
                borderColor: [
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'white',
                    'rgba(0, 0, 0, 0)',
                ],
                borderWidth: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
             rotation: Math.PI * -0.5 //default; starting at the beginning of the first section in the array(eg. food prep)

        }
    })
});