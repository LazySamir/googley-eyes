(function(exports) {
  function Clock() {};

  Clock.prototype.getNewTime = function() {
    let date = new Date();
    let s = this.addZero(date.getSeconds());
    let m = this.addZero(date.getMinutes());
    let h = this.addZero(date.getHours());
    return [h, m, s];
  };

  Clock.prototype.addZero = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  };

  Clock.prototype.getNewDate = function() {
    let date = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric"}
    return date.toLocaleDateString('en-GB', options);
  }

  exports.Clock = Clock;
})(this);
