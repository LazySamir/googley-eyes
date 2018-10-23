const IV = require('../../app/index/indexView');
const IM = require('../../app/index/indexModel');
const chrome = require('sinon-chrome')
const model = new IM.IndexModel(chrome)
model.data = {'allData' : [{'url': "www.bbc.co.uk"}, {'url': "www.facebook.com"}]}
const view = new IV.IndexView(model)

describe("IndexView", function() {

  describe(".getHTML()", function() {

    it("returns html string of data", function() {
      expect(view.getHTML()).toEqual("<ul><li><div>www.bbc.co.uk</div></li><li><div>www.facebook.com</div></li></ul>")
    })
  })



})
