(function(exports) {
  function IndexController(indexModel = new IndexModel(), indexView = new IndexView()) {
    this.model = indexModel;
    this.view = indexView;
    this.data = {}
    this.pieData = {}
  }
  IndexController.prototype.retrieveURLs = function() {
    this.data = this.model.queryLocalStorage();
    console.log("retrieveURLs piedata " + this.pieData);
    console.log("retrieveURLs data " + this.data);
  }

  IndexController.prototype.retrievePieData = function() {
    this.pieData = this.model.getPieData(this.data);
    console.log("retrievePieData piedata " + this.pieData);
    console.log("retrievePieData data " + this.data);
  }

  IndexController.prototype.injectHTML = function(urlContainer, chartContainer) {
    urlContainer.innerHTML = this.view.getHTML(this.data);
    chartContainer.innerHTML = this.view.displayPie(this.pieData);
    console.log("injectHTML piedata " + this.pieData);
    console.log("injectHTML data " + this.data);
  }

  exports.IndexController = IndexController;
})(this)
