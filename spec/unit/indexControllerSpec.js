// Need to read from localStorage - expect the output to be JSON key value pairs

"use strict";
var IC = require('../../app/indexController');
var IM = require('../../app/indexModel');
var IV = require('../../app/indexView');

var model = new IM.IndexModel()
var view = new IV.IndexView()
var controller = new IC.IndexController(model, view)

describe("IndexController", function() {
  it(".retrieveURLs invokes .queryLocalStorage", function() {
    spyOn(model, "queryLocalStorage");
    controller.retrieveURLs();
    expect(model.queryLocalStorage).toHaveBeenCalled();
  });

  it(".injectHTML invokes .getHTML", function() {
    spyOn(view, "getHTML");
    controller.URLs = {}
    var url_container = "<div></div>"
    controller.injectHTML(url_container);
    expect(view.getHTML).toHaveBeenCalledWith({});
  });

});
