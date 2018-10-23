(function(exports) {
  function IndexView(model) {
    this.model = model
  }
  IndexView.prototype.getHTML = function() {
     var urlArray = this.model.data['allData']
     var output = "<ul>"

     for(var i = 0; i < urlArray.length; i++) {
       output += `<li><div>${urlArray[i]['url']}: ${this.model.convertDuration(urlArray[i]['duration'])}</div></li>`
     }
     output += "</ul>"
     return output
  }

  exports.IndexView = IndexView
})(this)
