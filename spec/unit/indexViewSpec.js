const IV = require('../../app/index/indexView');
const IM = require('../../app/index/indexModel');
const chrome = require('sinon-chrome')
const urlParser = { mapAllData: function() {} };
const model = new IM.IndexModel(chrome, urlParser);
const data = [{'url': "www.bbc.co.uk", 'duration': 5000}, {'url': "www.facebook.com", 'duration': 12900}]
const view = new IV.IndexView(model)

describe("IndexView", function() {

  describe(".getHTML()", function() {

    it("returns html string of data", function() {
      expect(view.getHTML(data)).toEqual('<table id="domain-time-table"><tr><th>Domain</th><th>Time</th></tr><tr><td>www.bbc.co.uk</td><td>00:00:05</td></tr><tr><td>www.facebook.com</td><td>00:00:12</td></tr></table>')
    });

  });

});
