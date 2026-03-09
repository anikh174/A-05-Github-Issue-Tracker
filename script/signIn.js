document.getElementById("signIn-btn").addEventListener("click", function () {
  //1- get the username input
  const usernameInput = document.getElementById("input-username");
  const username = usernameInput.value;

  //2- get the username input
  const passwordInput = document.getElementById("input-password");
  const password = passwordInput.value;

  //match username & password
  if (username == "admin" && password == "admin123") {
    //if value true
    alert("Login Successful");

    const mainSection = document.getElementById("main-section");
    const signIn = document.getElementById("sign-in");

    //  hidden section
    mainSection.classList.remove("hidden");

    // show section
    signIn.classList.add("hidden");
  } 
  else {
    //if value false
    alert("Login Failed");
    return;
  }
});