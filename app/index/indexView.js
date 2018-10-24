(function(exports) {
  function IndexView(model = new IndexModel()) {
    this.model = model
  }
  IndexView.prototype.getHTML = function(data) {
    let output = '<table id="domain-time-table"><tr><th>Domain</th><th>Time</th></tr>'
    for(let i = 0; i < data.length; i++) {
     output += `<tr><td>${data[i]['url']}</td><td>${this.model.convertDuration(data[i]['duration'])}</td></tr>`
    }
    output += "</table>"
    return output
  }

  IndexView.prototype.displayPie = function(pieData) {
    return pieData;
  }

  exports.IndexView = IndexView
})(this)
