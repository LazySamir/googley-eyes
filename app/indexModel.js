(function(exports) {
  function IndexModel() {
  }
  IndexModel.prototype.queryLocalStorage = function() {

    return [{'url': "www.bbc.co.uk", 'duration': 10000}]
  }

  exports.IndexModel = IndexModel
})(this)
