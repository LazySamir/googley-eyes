(function(exports) {
  function IndexModel(browser = chrome) {
    this.browser = browser
    this.data
  }
  IndexModel.prototype.queryLocalStorage = function() {
    this.browser.storage.sync.get(null, function(data) {
      this.data = data
    })
  }

  exports.IndexModel = IndexModel
})(this)
