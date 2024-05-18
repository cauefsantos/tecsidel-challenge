const setFailedEquip = e => {
  e.classList.remove('status-ok');

  e.innerHTML = 'Falha';
  e.classList.add('status-fail');
}

const setOkEquip = e => {
  e.classList.remove('status-fail');

  e.innerHTML = 'OK';
  e.classList.add('status-ok');
}

const activateButton = (e) => {
  const activeButton = document.querySelector('.active-button');
  const monitorTitle = document.getElementById('monitor-title');
  const detail = document.getElementById('detalhamento');

  if (activeButton) {
    activeButton.classList.remove('active-button');
  }

  if (detail.hidden) {
    detail.hidden = false;
  }

  if(e.classList.contains('status-fail')) {
    const failedEquip = document.getElementById('sensor-5_6');
    setFailedEquip(failedEquip);
  }

  if (e.classList.contains('status-ok')) {
    const okEquip = document.getElementById('sensor-5_6');
    setOkEquip(okEquip);
  }

  e.classList.add('active-button');

  monitorTitle.innerHTML = e.innerHTML;
}
