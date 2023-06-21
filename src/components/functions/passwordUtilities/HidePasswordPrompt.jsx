export default function hidePasswordPrompt() {
  const masterPassUI = document.getElementById('masterPassUI');
  masterPassUI.style.display = 'none';
  masterPassUI.setAttribute('clicked-for', '');
}
