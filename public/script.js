(function () {
  const resultContainer = document.querySelector('#result');

  const submitPhoneNumberForm = (e) => {
    e.preventDefault();

    const phoneNumber = e.target.phone.value.replace(/\D/g, '');

    if (!phoneNumber) {
      return;
    }

    fetch(`api/send-sms/${phoneNumber}`)
      .then((response) => response.json())
      .then(() => {
        resultContainer.textContent = `Success! Sent text message to: ${phoneNumber}`;
        resultContainer.classList.remove('hidden');
      })
      .catch(() => {
        resultContainer.textContent = `Error. Unable to send text message to: ${phoneNumber}`;
        resultContainer.classList.remove('hidden');
      });
  };

  const phoneNumberForm = document.querySelector('#phoneNumberForm');
  phoneNumberForm.addEventListener('submit', submitPhoneNumberForm);
})();
