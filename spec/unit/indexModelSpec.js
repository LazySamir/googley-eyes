const IM = require('../../app/index/indexModel');

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
});
