var controller = new IndexController();
controller.retrieveURLs();
let result = document.getElementById("url-container")
setTimeout(function() {
  controller.data = controller.model.data
  controller.injectHTML(result);
}, 50)
