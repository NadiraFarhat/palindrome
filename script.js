const txtInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  result.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'text-input';
  pTag.innerHTML = resultMsg;
  result.appendChild(pTag);

  // Show the result.
  result.classList.remove('hidden');
};

checkBtn.addEventListener('click', () => {
  checkForPalindrome(txtInput.value);
  txtInput.value = '';
});

txtInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(txtInput.value);
    txtInput.value = '';
  }
});
