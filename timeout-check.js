// aparece na página de design, por exemplo
function hasYellowTimeoutWarning() {
  return Boolean(document.getElementById('cc-warn-session-timeout-alert'));
}

// aparece na página principal, por exemplo
function hasWhiteTimeoutWarning() {
  const message = document.getElementsByClassName('oj-message-detail')[0];
  if (!message) return false;

  const text = message.innerText;
  if (!text) return false;

  return text.toLowerCase().indexOf('click ok to continue working') != -1;
}

setInterval(function() {
  if (hasYellowTimeoutWarning() || hasWhiteTimeoutWarning()) {
    window.location.reload();
  }
}, 10000);
