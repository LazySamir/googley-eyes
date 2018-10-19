var controller = new IndexController();
controller.retrieveURLs();
let result = document.getElementById("url_container")
controller.injectHTML();
