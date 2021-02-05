// Reload page - triggered by button, then reloads page
let reloadButton = document.getElementById('reloadButton');

function clickReloadButton() {
  reloadButton.addEventListener('click', function reloadPage() {
    location.reload();
  });
}

clickReloadButton();
export { clickReloadButton };
