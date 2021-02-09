// Reload page - triggered by button, then reloads page
let reloadBtn = document.getElementById('reloadBtn');

function clickReloadBtn() {
  reloadBtn.addEventListener('click', function () {
    location.reload();
  });
}

clickReloadBtn();
export { clickReloadBtn };
