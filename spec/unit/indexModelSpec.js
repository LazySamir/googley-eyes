const IM = require('../../app/indexModel');
const model = new IM.IndexModel()

describe("IndexModel", function() {

  describe(".queryLocalStorage()", function() {

    it("returns data from storage", function() {
      var result = [{'url': "www.bbc.co.uk", 'duration': 10000}]
      expect(model.queryLocalStorage()).toEqual(result);
    });


  });



});
