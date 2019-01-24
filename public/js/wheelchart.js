document.addEventListener("DOMContentLoaded", function(event) { //non-jQuery equivalent of docready function

    console.log( "ready!" );

    var chart = document.getElementById("wheelChart");
    console.log(chart);
    let pieChart = new Chart(chart, {
        type: 'doughnut',
        data: {
            labels: ["Food Prep", "Hydration", "Exercise", "Media", "Work", "Studying", "Commute", "Incomplete"],
            datasets: [{
                label: '# of Votes',
                data: [1, 0.5, 1, 1, 3, 2.5, 1, 2],
                backgroundColor: [
                    '#DF7000', //food
                    '#00ABDF', //hydration
                    '#D50000', //exercise
                    '#7200CA', //media
                    '#E8E000', //work
                    '#36CA00', //study
                    '#354A84', //commute
                    '#FFFFFF', //incomplete
                ],
                borderColor: [
                    'white'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                 animateScale: true
             },
             rotation: Math.PI * -0.5 //default; starting at the beginning of the first section in the array(eg. food prep)

        }
    })
});