// The entered passwords are hidden until this function is run
export default function togglePassword(e) {

  // The element that was clicked on will be scanned for a 'reveal' attribute
  if (e.target.getAttribute('reveal') === 'false') {

    // If reveal was 'false' it will be toggled to 'true' and password will be revealed
    e.target.innerHTML = e.target.getAttribute('password');
    e.target.setAttribute('reveal', 'true');

    // The password will be hidden in 3 seconds
    setTimeout(() => {
      e.target.innerHTML = '************';
      e.target.setAttribute('reveal', 'false');
    }, 3000);

  } else {

    // Else, the opposite
    e.target.innerHTML = '************';
    e.target.setAttribute('reveal', 'false');
  }
}
