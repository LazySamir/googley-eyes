var controller = new IndexController();
controller.retrieveURLs();

let urlContainer = document.getElementById("url-container")
let chartContainer = document.getElementById("chart-container")
setTimeout(function() {
  controller.data = controller.model.data
  controller.retrievePieData()

  controller.injectHTML(urlContainer, chartContainer);

  var chart = new CanvasJS.Chart("chart-container", {
    theme: "light2",
  	exportEnabled: true,
  	animationEnabled: true,

    data: [{
  		type: "pie",
  		startAngle: 25,
  		toolTipContent: "<b>{label}</b>: {y}%",
  		indexLabelFontSize: 12,
  		indexLabel: "{label} - {y}%",
  		dataPoints: controller.pieData
  	}]
  });
  chart.render();

}, 100)
