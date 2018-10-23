(function(exports) {
  function IndexController(indexModel = new IndexModel(), indexView = new IndexView(), urlParser = new UrlParser()) {
    this.model = indexModel;
    this.view = indexView;
    this.urlParser = urlParser;
    this.data = {}
  }
  IndexController.prototype.retrieveURLs = function(callback) {
    console.log(callback)
    let localStorage = this.model.queryLocalStorage();
    console.log(localStorage)
    this.data = callback(localStorage.allData)
  }

  IndexController.prototype.injectHTML = function(htmlElement) {
    htmlElement.innerHTML = this.view.getHTML(this.data);
  }

  function parseUrls(allData) {
    this.urlParser.mapAllData(allData)
  }

  exports.IndexController = IndexController;
})(this)
