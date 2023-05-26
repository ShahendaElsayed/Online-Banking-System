function register(username, password) {
    // Check the username and password against your authentication logic
    if (username === 'admin' && password === 'admin') {
      // Redirect to the admin page if the credentials are valid
      window.location.href = 'applyforloan.html';
    } else if (username === 'client' && password === 'client') {
      // Redirect to the user page if the credentials are valid
      window.location.href = 'CreateAccount.html';
    } else  if(username === 'banker' && password === 'banker'){
      // Redirect to an error page if the credentials are invalid
      window.location.href = 'applyforloan.html';
    }

  }

  function changeForm() {
    console.log("hey");
    document.getElementById("notforget").style.display = "none";
    document.getElementById("forget").style.display = "flex";   
    ;
  
  }
   function submitForm(a,b) {
   
      var newPassword = document.getElementById("newPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      console.log("baraa");
      // Perform validation
      if (newPassword !== confirmPassword) {
        console.log("heyy");
        alert("Passwords do not match");
        return;
      }
      if (a === 'admin' && b=== 'admin') {
        // Redirect to the admin page if the credentials are valid
        window.location.href = 'applyforloan.html';
      } else if (a === 'client' && b === 'client') {
        // Redirect to the user page if the credentials are valid
        window.location.href = 'CreateAccount.html';
      } else  if(a === 'banker' && b === 'banker'){
        // Redirect to an error page if the credentials are invalid
        window.location.href = 'applyforloan.html';
      }

    }