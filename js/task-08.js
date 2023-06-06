const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleDisplayReport);

function handleDisplayReport(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
      alert('Attention! Fill in all fields before "Login", please ;)');
      return;
    };

    const formData = new FormData(e.currentTarget);
    formData.forEach((value, textContent) => {
        console.log(textContent, value);
    });  
  e.currentTarget.reset();
}

