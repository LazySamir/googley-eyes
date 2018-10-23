(function(exports) {
  function IndexController(indexModel = new IndexModel(), indexView = new IndexView()) {
    this.model = indexModel;
    this.view = indexView;
  }
  IndexController.prototype.retrieveURLs = function() {
    this.URLs = this.model.queryLocalStorage();
  }

  IndexController.prototype.injectHTML = function(htmlElement) {
    htmlElement.innerHTML = this.view.getHTML(this.URLs);
  }

  exports.IndexController = IndexController;
})(this)
