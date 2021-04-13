toggleInterruption = (elName) => {
  let dialog = document.querySelector(elName);
  const html = document.querySelector('html');

  dialog.hasAttribute('open')
  ? dialog.removeAttribute("open")
  : (dialog.removeAttribute("open"),
    dialog.setAttribute("open", true))
}
