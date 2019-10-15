(function() {
  const playPauseButton = document.querySelector('.main-view__play-pause');
  const video = document.querySelector('.main-view__video');
  const play = document.querySelector('.main-view__play');
  const pause = document.querySelector('.main-view__pause');

  if (!playPauseButton || !video || !play || !pause) {
    throw 'some elements was not found';
  }

  let videoIsPlaying = false;
  playPauseButton.addEventListener('click', () => {
    videoIsPlaying = !videoIsPlaying;

    if (videoIsPlaying) {
      play.setAttribute('hidden', true);
      pause.removeAttribute('hidden');

      video.play();
    } else {
      play.removeAttribute('hidden');
      pause.setAttribute('hidden', true);

      video.pause();
    }
  });
})();

(function() {
  const tryNowForm = document.querySelector('#tryNowForm');
  const tryNowSubmit = document.querySelector('#tryNowSubmit');

  if (!tryNowForm || !tryNowSubmit) {
    throw 'try now form is not found';
  }

  tryNowForm.addEventListener('input', (e) => {
    if (tryNowForm.checkValidity()) {
      tryNowSubmit.removeAttribute('disabled');
      tryNowSubmit.classList.remove('form-field_disabled');
    } else {
      tryNowSubmit.setAttribute('disabled', true);
      tryNowSubmit.classList.add('form-field_disabled');
    }
  });
})();
