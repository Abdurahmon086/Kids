function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

  elem.onclick = function() {
    animate({
      duration: 1000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        elem.style.width = progress * 100 + '%';
      }
    });
  };