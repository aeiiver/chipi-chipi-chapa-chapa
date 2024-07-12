window.onload = function() {
  let vid = document.getElementById('vid');

  if (vid.canPlayType && vid.canPlayType('video/webm') == '') {
    alert('I died. Your browser is unable to play videos.');
    let warn_banner = document.createElement('div');
    warn_banner.innerHTML = 'I died. Your browser is unable to play videos.';
    warn_banner.classList.add('warn');
    vid.before(warn_banner);
    return;
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
