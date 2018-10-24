const IM = require('../../app/index/indexModel');
const chrome = require("sinon-chrome")
const UP = require("../../app/index/urlParser")
const CDC = require("../../app/index/chartDataConverter")
const urlParser = { mapAllData: function() {} };
const chartDataConverter = { convertToPie: function() {} };

console.log(UP.UrlParser);

const model = new IM.IndexModel(chrome, urlParser, chartDataConverter);

describe("IndexModel", function() {

  describe(".getPieData()", function() {

    it("invokes .convertToPie()", function() {
      spyOn(chartDataConverter, "convertToPie")
      model.getPieData()
      expect(chartDataConverter.convertToPie).toHaveBeenCalled()
    });

  });

  describe(".queryLocalStorage()", function() {

    it("returns data from storage", function() {
      spyOn(chrome.storage.sync, "get")
      model.queryLocalStorage()
      expect(chrome.storage.sync.get.called).toEqual(true)
    });

    it("when fired invokes mapAllData()", function() {
      spyOn(urlParser, "mapAllData")
      chrome.storage.sync.get.yields({})
      model.queryLocalStorage()
      expect(urlParser.mapAllData).toHaveBeenCalled()
    })
  });

  describe("convertDuration", function(){
    it("converts milliseconds into hh:mm:ss format", function(){
      expect(model.convertDuration(5000)).toEqual("00:00:05")
    })

  })
});
