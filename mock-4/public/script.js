function downloadButtonHandler() {
  alert('Starting download');
}

const firstDownloadButton = document.querySelector('#download-button-1');

firstDownloadButton.addEventListener('click', downloadButtonHandler);
