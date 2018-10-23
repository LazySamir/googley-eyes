(function(exports) {
  function IndexView(model = new IndexModel()) {
    this.model = model
  }
  IndexView.prototype.getHTML = function(data) {
     var urlArray = data['allData']
     var output = "<ul>"

     for(var i = 0; i < urlArray.length; i++) {
       output += `<li><div>${urlArray[i]['url']}: ${this.model.convertDuration(urlArray[i]['duration'])}</div></li>`
     }
     output += "</ul>"
     return output
  }

  exports.IndexView = IndexView
})(this)
