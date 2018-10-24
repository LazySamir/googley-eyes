const IV = require('../../app/index/indexView');
const IM = require('../../app/index/indexModel');
const chrome = require('sinon-chrome')
const urlParser = { mapAllData: function() {} };
const model = new IM.IndexModel(chrome, urlParser)
const data = {'allData' : [{'url': "www.bbc.co.uk", 'duration': 5000}, {'url': "www.facebook.com", 'duration': 12900}]}
const view = new IV.IndexView(model)

describe("IndexView", function() {

  describe(".getHTML()", function() {

    it("returns html string of data", function() {
      expect(view.getHTML(data)).toEqual("<ul><li><div>www.bbc.co.uk: 00:00:05</div></li><li><div>www.facebook.com: 00:00:12</div></li></ul>")
    })
  })
})
