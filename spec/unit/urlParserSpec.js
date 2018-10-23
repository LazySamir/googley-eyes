const U = require("../../app/index/urlParser");

describe("UrlParser", function() {

  let urlParser = new U.UrlParser();

  describe(".parseUrl()", function() {

    it("returns the domain name of the url", function() {
      expect(urlParser.parseUrl("https://github.com/LazySamir/googley-eyes/pull/53")).toEqual("https://github.com")
    });

  })

})
