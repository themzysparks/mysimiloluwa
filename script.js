function checkPassword() {
  const input = document.getElementById('passwordInput').value.trim();
  const status = document.getElementById('statusText');
  const authScreen = document.getElementById('authScreen');
  const loveNote = document.getElementById('loveNote');

  const correctPassword = "ILoveSimiloluwa";

  if (input === correctPassword) {
    status.textContent = "💘 Password correct! Opening love note...";
    setTimeout(() => {
      authScreen.classList.add('hidden');
      loveNote.classList.remove('hidden');
    }, 1200);
  } else {
    status.textContent = "💔 Oops! Wrong password. Try again or ask Temidayo 😉";
  }
}
