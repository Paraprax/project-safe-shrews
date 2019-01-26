var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var color = Chart.helpers.color;
var config = {
  type: 'radar',
  data: {
    labels: [
      // 'Eating',
      // 'Drinking',
      // 'Sleeping',
      // 'Designing',
      // 'Coding',
      // 'Cycling',
      // 'Running'
    ],
    datasets: [{
      label: 'Percent Complete',
      borderColor: window.chartColors.white,
      backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
      pointBackgroundColor: window.chartColors.yellow,
      data: [
        // randomScalingFactor(),
        // randomScalingFactor(),
        // randomScalingFactor(),
        // randomScalingFactor(),
        // randomScalingFactor(),
        // randomScalingFactor(),
        // randomScalingFactor()
      ]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Goalden - Daily Summary'
    },
    elements: {
      line: {
        tension: 0.0,
      }
    },
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20,
      },
      gridLines: {
        color: "black",
        lineWidth: 1
      },
      angleLines: {
        display: false
      },
      pointLabels: {
        fontSize: 20,
        fontColor: "black"
      }
    }
  }
};

window.onload = function() {
  window.myRadar = new Chart(document.getElementById('canvas'), config);
};

function resetChart() {
  config.data.labels = [];
  config.data.datasets.forEach(function(dataset) {
    dataset.data = [];
  });
}

function initChart() {
  resetChart();
  $( "td[id^='taskName']" ).each(function( index ) {
      var elemId = $(this).attr('data-id');
      config.data.labels.push($(this).html());
      config.data.datasets.forEach(function(dataset) {
        var taskTarget = parseFloat($("#taskTarget-" + elemId).html());
        var taskCompleted = parseFloat($("#taskCompleted-" + elemId).html());
        dataset.data.push(Math.round(100 * taskCompleted/taskTarget));
      });
  });
  window.myRadar.update();
}

initChart();
