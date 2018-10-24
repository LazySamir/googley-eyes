(function(exports) {
  function IndexController(indexModel = new IndexModel(), indexView = new IndexView()) {
    this.model = indexModel;
    this.view = indexView;
    this.data = {}
  }
  IndexController.prototype.retrieveURLs = function() {
    this.data = this.model.queryLocalStorage();
  }

  IndexController.prototype.injectHTML = function(htmlElement) {
    htmlElement.innerHTML = this.view.getHTML(this.data);
  }

  exports.IndexController = IndexController;
})(this)
