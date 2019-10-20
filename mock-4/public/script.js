function downloadButtonHandler() {
  alert('Starting download');
}

const firstDownloadButton = document.querySelector('#download-button-1');
const secondDownloadButton = document.querySelector('#download-button-2');

if (!firstDownloadButton || !secondDownloadButton) {
  throw 'some download button was not found';
}

firstDownloadButton.addEventListener('click', downloadButtonHandler);
secondDownloadButton.addEventListener('click', downloadButtonHandler);
