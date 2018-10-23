// Need to read from localStorage - expect the output to be JSON key value pairs

"use strict";

const IC = require('../../app/indexController');
const model = { queryLocalStorage: function(){ return "urls" } };
const view = { getHTML: function(){} };
const controller = new IC.IndexController(model, view)

describe("IndexController", function() {

  describe(".retrieveURLs()", function() {

    it("invokes .queryLocalStorage() on indexModel", function() {
      spyOn(model, "queryLocalStorage");
      controller.retrieveURLs();
      expect(model.queryLocalStorage).toHaveBeenCalled();
    });

    it("assigns the result to this.URLs", function() {
      controller.retrieveURLs();
      expect(controller.data).toEqual("urls");
    });

  });

  describe(".injectHTML()", function() {

    it("invokes .getHTML() on indexView", function() {
      spyOn(view, "getHTML");
      controller.URLs = "urls"
      let url_container = "<div></div>"
      controller.injectHTML(url_container);
      expect(view.getHTML).toHaveBeenCalledWith("urls");
    });

  });

});
