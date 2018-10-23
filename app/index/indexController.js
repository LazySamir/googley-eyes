(function(exports) {
  function IndexController(indexModel = new IndexModel(), indexView = new IndexView(), urlParser = new UrlParser()) {
    this.model = indexModel;
    this.view = indexView;
    this.urlParser = urlParser;
  }
  IndexController.prototype.retrieveURLs = function() {
    this.URLs = this.model.queryLocalStorage();
  }

  IndexController.prototype.injectHTML = function(htmlElement) {
    htmlElement.innerHTML = this.view.getHTML(this.URLs);
  }

  IndexController.prototype.parseUrls = function(allData) {
    this.urlParser.mapAllData(allData)
  }
  exports.IndexController = IndexController;
})(this)
