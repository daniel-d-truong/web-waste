$({ Counter: 0 }).animate({
  Counter: $('.Count').text()
}, {
  duration: 1000,
  easing: 'swing',
  step: function() {
    $('.Count').text(Math.ceil(this.Counter));
  }
});