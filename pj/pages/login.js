document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById('toggle-password');
    const password = document.getElementById('password');
    const loginForm = document.getElementById('login-form');
    const resetForm = document.getElementById('reset-form');
    const resetPasswordBtn = document.getElementById('reset-password-btn');
    const backToLoginBtn = document.getElementById('back-to-login');
    const loginButton = document.getElementById('login-button');
    const resetPasswordButton = document.getElementById('reset-password-button');
  
    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
      const type = password.type === 'password' ? 'text' : 'password';
      password.type = type;
    });
  
    // Show reset password form
    resetPasswordBtn.addEventListener('click', () => {
      loginForm.style.display = 'none';
      resetForm.style.display = 'block';
    });
  
    // Show login form
    backToLoginBtn.addEventListener('click', () => {
      loginForm.style.display = 'block';
      resetForm.style.display = 'none';
    });
  
    // Login button logic
    loginButton.addEventListener('click', () => {
      const email = document.querySelector('.email').value;
      const userPassword = password.value;
      // Perform login logic here
      console.log('Logging in with', email, userPassword);
    });
  
    // Reset password logic
    resetPasswordButton.addEventListener('click', () => {
      const resetEmail = document.querySelector('.reset-email').value;
      // Perform reset password logic here
      console.log('Password reset for', resetEmail);
    });
  });
  
