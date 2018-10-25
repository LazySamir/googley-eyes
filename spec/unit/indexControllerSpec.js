"use strict";

const IC = require('../../app/index/indexController');
const model = { queryLocalStorage: function(){ return { allData: "urls" }},
               getPieData: function() {return { allData: "newUrls" }} };
const view = { getHTML: function(){}};
const controller = new IC.IndexController(model, view)

describe("IndexController", function() {

  describe(".retrieveURLs()", function() {

    it("invokes .queryLocalStorage() on indexModel", function() {
      spyOn(model, "queryLocalStorage");
      controller.retrieveURLs();
      expect(model.queryLocalStorage).toHaveBeenCalled();
    });

  });

  describe(".retrievePieData()", function() {
    it("invokes .getPieData() on indexModel", function() {
      spyOn(model, "getPieData");
      controller.retrievePieData();
      expect(model.getPieData).toHaveBeenCalled()
    })
  })

  describe(".injectHTML()", function() {
    let url_container = "<div></div>";
    let chart_container = "<div></div>";

    it("invokes .getHTML() on indexView", function() {
      spyOn(view, "getHTML");
      controller.injectHTML(url_container, chart_container);
      expect(view.getHTML).toHaveBeenCalledWith(controller.data);
    });

  });

});
