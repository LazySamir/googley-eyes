"use strict";

const IC = require('../../app/index/indexController');
const model = { queryLocalStorage: function(){ return { allData: "urls" } } };
const view = { getHTML: function(){} };
const urlParser = { mapAllData: function() {} }
const controller = new IC.IndexController(model, view, urlParser)

describe("IndexController", function() {

  describe(".retrieveURLs()", function() {

    it("invokes .queryLocalStorage() on indexModel", function() {
      spyOn(model, "queryLocalStorage").and.returnValue({ allData: "urls" });
      controller.retrieveURLs(urlParser.mapAllData);
      expect(model.queryLocalStorage).toHaveBeenCalled();
    });

    it("invokes .mapAllData() on urlParser", function() {
      spyOn(urlParser, "mapAllData");
      controller.retrieveURLs(urlParser.mapAllData);
      expect(urlParser.mapAllData).toHaveBeenCalledWith("urls");
    })

  });

  describe(".injectHTML()", function() {

    it("invokes .getHTML() on indexView", function() {
      spyOn(view, "getHTML");
      // controller.data = {"urls"}
      let url_container = "<div></div>"
      controller.injectHTML(url_container);
      expect(view.getHTML).toHaveBeenCalledWith(controller.data);
    });

  });

});
