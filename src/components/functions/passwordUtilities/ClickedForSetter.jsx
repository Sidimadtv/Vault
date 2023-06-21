export default function clickedForSetter(clickedForName) {
  const masterPassUI = document.getElementById('masterPassUI');
  masterPassUI.setAttribute('clicked-for', clickedForName);
  return true;
}
