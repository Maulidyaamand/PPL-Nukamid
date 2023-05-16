function sendEmail() {
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('#message').value;

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Clear the form
        document.querySelector('.name').value = '';
        document.querySelector('.email').value = '';
        document.querySelector('#message').value = '';
        // Show success message or perform any other actions
      })
      .catch(error => {
        console.error(error);
        // Show error message or perform any other error handling
      });
  }