function checkPassword() {
  const input = document.getElementById('passwordInput').value.trim(); // no .toLowerCase()
  const status = document.getElementById('statusText');
  const authScreen = document.getElementById('authScreen');
  const loveNote = document.getElementById('loveNote');

  const correctPassword = "ILoveSimiloluwa"; // You can change this if you want

  if (input === correctPassword) {
    status.textContent = "Password correct! Opening...";
    setTimeout(() => {
      authScreen.classList.add('hidden');
      loveNote.classList.remove('hidden');
    }, 1000);
  } else {
    status.textContent = "Wrong password. Ask Temidayo!";
  }
}
