"use strict";

const IC = require('../../app/index/indexController');
const model = { queryLocalStorage: function(){ return { allData: "urls" } } };
const view = { getHTML: function(){} };
const controller = new IC.IndexController(model, view)

describe("IndexController", function() {

  describe(".retrieveURLs()", function() {

    it("invokes .queryLocalStorage() on indexModel", function() {
      spyOn(model, "queryLocalStorage");
      controller.retrieveURLs();
      expect(model.queryLocalStorage).toHaveBeenCalled();
    });

  });

  describe(".injectHTML()", function() {

    it("invokes .getHTML() on indexView", function() {
      spyOn(view, "getHTML");
      let url_container = "<div></div>"
      controller.injectHTML(url_container);
      expect(view.getHTML).toHaveBeenCalledWith(controller.data);
    });

  });

});
