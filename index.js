window.onload = function() {
  let vid = document.getElementById('vid');

  if (!vid.canPlayType) {
    alert('I died');
  }

  addEventListener('keyup', evt => {
    let code = evt.code;
    if (code == 'Space') {
      if (vid.paused || vid.ended) {
        vid.play();
      } else {
        vid.pause();
      }
    }
  });

  vid.addEventListener('click', _ => {
    if (vid.paused || vid.ended) {
      vid.play();
    } else {
      vid.pause();
    }
  });
}
