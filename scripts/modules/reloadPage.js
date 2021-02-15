// Reload page - triggered by button, then fetches and renders again
function clickComboBtn() {
  let comboBtn = document.getElementById('comboBtn');
  comboBtn.addEventListener('click', function () {
    location.reload();
  });
}

clickComboBtn();
export { clickComboBtn };
