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

  exports.Clock = Clock;
})(this);
