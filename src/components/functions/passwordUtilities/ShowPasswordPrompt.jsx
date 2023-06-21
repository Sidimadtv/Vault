export default function showPasswordPrompt() {
  const masterPassUI = document.getElementById('masterPassUI');
  const masterPassInput = document.getElementById('masterPasswordValue');
  masterPassUI.style.display = 'block';
  masterPassInput.focus()
}
