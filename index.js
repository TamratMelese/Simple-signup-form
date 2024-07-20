const buttonTwo = document.querySelector(".btn");

const form = document.querySelector(".form");

const firstName = document.querySelector("#input-fname");
const firstNamePara = document.querySelector(".fNamePara");

const lastName = document.querySelector("#input-lname");
const lastNamePara = document.querySelector(".lNamePara");

const email = document.querySelector("#email-form");
const emailPara = document.querySelector(".emailPara");

const password = document.querySelector("#password-form");
const passwordPara = document.querySelector(".passwordPara");

const iconone = document.querySelector(".icon-one");
const icontwo = document.querySelector(".icon-two");
const iconthree = document.querySelector(".icon-three");
const iconFour = document.querySelector(".icon-four");

const thirdInput = document.querySelector(".third-input");
// let emailPlaceholder = document.getElementById("email");
// emailPlaceholder.placeholder = "email@example/com";

const checkEmail =
  /^([A-Z a-z 0-9\-_.*]+)@([A-Za-z]+)\.([a-z]{2,5})(\.[a-z]{1,3})?$/;
const passwordCheck =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9])[a-zA-Z0-9?!@#$%^&\*\.]{8,}$/;

form.addEventListener("submit", (event) => {
  if (firstName.value === "" || null) {
    event.preventDefault();
    iconone.style.opacity = "100%";
    firstNamePara.innerHTML = "FirstName can not be empty.";
  } else {
    iconone.style.opacity = "0%";
    firstNamePara.innerHTML = "";
  }

  if (lastName.value === "" || null) {
    event.preventDefault();
    icontwo.style.opacity = "100%";
    lastNamePara.innerHTML = "Last Name can not be empty.";
  } else {
    icontwo.style.opacity = "0%";
    lastNamePara.innerHTML = "";
  }

  if (email.value === "" || null) {
    document.getElementsByName("email")[0].placeholder = "email@example/com";
    thirdInput.classList.add("red");
    event.preventDefault();
    iconthree.style.opacity = "100%";
    emailPara.innerHTML = "Email can not be empty";
  } else if (!email.value.match(checkEmail)) {
    document.getElementsByName("email")[0].placeholder = "email@example/com";

    event.preventDefault();
    iconthree.style.opacity = "100%";
    emailPara.innerHTML = "Looks like this is not a valid email address.";
  } else {
    iconthree.style.opacity = "o%";
    emailPara.innerHTML = "";
  }

  if (password.value === "" || null) {
    event.preventDefault();
    iconFour.style.opacity = "100%";
    passwordPara.innerHTML = "Password can not be empty.";
    event.preventDefault();
    iconFour.style.opacity = "100%";
  } else if (password.value.length <= 7) {
    event.preventDefault();
    iconFour.style.opacity = "100%";
    passwordPara.innerHTML = "Password can't be lower than 8 and above 20.";
  } else if (!password.value.match(passwordCheck)) {
    event.preventDefault();
    iconFour.style.opacity = "100%";
    passwordPara.innerHTML =
      "Password must contain alphabets, integers and symbols.";
  } else {
    iconFour.style.opacity = "0%";
    passwordPara.innerHTML = "";
  }
});
