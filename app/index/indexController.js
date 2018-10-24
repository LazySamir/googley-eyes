(function(exports) {
  function IndexController(indexModel = new IndexModel(), indexView = new IndexView()) {
    this.model = indexModel;
    this.view = indexView;
    this.data = {}
    this.pieData = {}
  }
  IndexController.prototype.retrieveURLs = function() {
    this.data = this.model.queryLocalStorage();
  }

  IndexController.prototype.retrievePieData = function() {
    this.pieData = this.model.getPieData(this.data);
  }

  IndexController.prototype.injectHTML = function(urlContainer, chartContainer) {
    urlContainer.innerHTML = this.view.getHTML(this.data);
    chartContainer.innerHTML = this.view.displayPie(this.pieData);
  }

  exports.IndexController = IndexController;
})(this)
