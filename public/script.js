(function () {
  console.log('hey');

  const submitPhoneNumberForm = (e) => {
    e.preventDefault();

    const phoneNumber = e.target.phone.value.replace(/\D/g, '');

    if (!phoneNumber) {
      return;
    }

    fetch(`api/send-sms/${phoneNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const phoneNumberForm = document.querySelector('#phoneNumberForm');
  phoneNumberForm.addEventListener('submit', submitPhoneNumberForm);
})();
