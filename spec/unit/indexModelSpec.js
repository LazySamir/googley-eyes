const IM = require('../../app/indexModel');

const chrome = {
  storage: {
    sync: {
    get: function(){}
    }
  }
}

const model = new IM.IndexModel(chrome)

describe("IndexModel", function() {

  describe(".queryLocalStorage()", function() {

    it("returns data from storage", function() {
      spyOn(chrome.storage.sync, "get")
      model.queryLocalStorage()
      expect(chrome.storage.sync.get).toHaveBeenCalled()
    });
  });

  describe("convertDuration", function(){
    it("converts milliseconds into hh:mm:ss format", function(){
      expect(model.convertDuration(5000)).toEqual("00:00:05")
    })

  })
});
