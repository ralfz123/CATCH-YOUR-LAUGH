// Reload page - triggered by button, then reloads page
function clickReloadBtn() {
  let reloadBtn = document.getElementById('reloadBtn');
  reloadBtn.addEventListener('click', function () {
    location.reload();
  });
}

clickReloadBtn();
export { clickReloadBtn };
