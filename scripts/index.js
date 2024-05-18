const activateButton = (e) => {
  const activeButton = document.querySelector('.active-button');
  const monitorTitle = document.getElementById('monitor-title');

  if (activeButton) {
    activeButton.classList.remove('active-button');
  }

  e.classList.add('active-button');

  monitorTitle.innerHTML = e.innerHTML;
}