// Need to read from localStorage - expect the output to be JSON key value pairs

"use strict";

const IC = require('../../app/indexController');
const IM = require('../../app/indexModel');
const IV = require('../../app/indexView');

const model = { queryLocalStorage: function(){} };
const view = { getHTML: function(){} };
const controller = new IC.IndexController(model, view)

describe("IndexController", function() {

  it(".retrieveURLs invokes .queryLocalStorage", function() {
    spyOn(model, "queryLocalStorage");
    controller.retrieveURLs();
    expect(model.queryLocalStorage).toHaveBeenCalled();
  });

  it(".injectHTML invokes .getHTML", function() {
    spyOn(view, "getHTML");
    controller.URLs = {}
    let url_container = "<div></div>"
    controller.injectHTML(url_container);
    expect(view.getHTML).toHaveBeenCalledWith({});
  });

});
