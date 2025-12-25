function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (u === "admin" && p === "1234") {
    window.location.href = "menu.html";
  } else {
    msg.innerText = "Username or password is incorrect!";
  }
}
