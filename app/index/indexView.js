(function(exports) {
  function IndexView(model = new IndexModel()) {
    this.model = model
  }
  IndexView.prototype.getHTML = function(data) {
    let output = "<ul>"
    for(let i = 0; i < data.length; i++) {
     output += `<li><div>${data[i]['url']}: ${this.model.convertDuration(data[i]['duration'])}</div></li>`
    }
    output += "</ul>"
    return output
  }

  exports.IndexView = IndexView
})(this)
