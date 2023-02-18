const form = document.querySelector("form");
const personalInfo = document.querySelector(".personal-info");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const numberInput = document.querySelector(".number");

const selectPlan = document.querySelector(".select-plan");

const nextBtn1 = document.querySelector(".next1");
const backBtn1 = document.querySelector(".back1");
const planToggle = document.querySelector(".toggle");

const monthPlan = document.querySelector(".plans");
const yearPlan = document.querySelector(".year-plans");

const stepOne = document.querySelector("#step-one");
const stepTwo = document.querySelector("#step-two");
const stepThree = document.querySelector("#step-three");
const stepFour = document.querySelector("#step-four");

// function validatePersonalInfo() {
//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const number = numberInput.value.trim();

//   if (name === "") {
//     alert("Please enter your name");
//     return false;
//   }

//   if (!isValidEmail(email)) {
//     alert("Please enter a valid email address");
//     return false;
//   }

//   if (!isValidPhoneNumber(number)) {
//     alert("Please enter a valid phone number");
//     return false;
//   }

//   return true;
// }

// function isValidEmail(email) {
//   // Regular expression to validate email format
//   const emailRegex = /\S+@\S+\.\S+/;
//   return emailRegex.test(email);
// }

// function isValidPhoneNumber(number) {
//   // Regular expression to validate phone number format
//   const phoneRegex = /^\d{10}$/;
//   return phoneRegex.test(number);
// }

// nextBtn1.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (validatePersonalInfo()) {
//     personalInfo.classList.add("hide");
//     selectPlan.classList.remove("hide");
//     stepOne.classList.remove("active");
//     stepTwo.classList.add("active");
//   }
// });

const validatePersonalInfo = () => {
  let valid = true;

  // validate name
  const name = nameInput.value.trim();
  if (name === "") {
    nameInput.classList.add("error");
    nameInput.insertAdjacentHTML(
      "afterend",
      '<span class="error-message error">Please enter your name</span>'
    );
    valid = false;
  } else {
    nameInput.classList.remove("error");
    const errorMessage = nameInput.nextElementSibling;
    if (
      errorMessage !== null &&
      errorMessage.classList.contains("error-message")
    ) {
      errorMessage.remove();
    }
  }

  // validate email
  const email = emailInput.value.trim();
  if (email === "" || !isValidEmail(email)) {
    emailInput.classList.add("error");
    emailInput.insertAdjacentHTML(
      "afterend",
      '<span class="error-message error">Please enter a valid email address</span>'
    );
    valid = false;
  } else {
    emailInput.classList.remove("error");
    const errorMessage = emailInput.nextElementSibling;
    if (
      errorMessage !== null &&
      errorMessage.classList.contains("error-message")
    ) {
      errorMessage.remove();
    }
  }

  // validate phone number
  const number = numberInput.value.trim();
  if (number === "" || !isValidPhoneNumber(number)) {
    numberInput.classList.add("error");
    numberInput.insertAdjacentHTML(
      "afterend",
      '<span class="error-message error">Please enter a valid phone number</span>'
    );
    valid = false;
  } else {
    numberInput.classList.remove("error");
    const errorMessage = numberInput.nextElementSibling;
    if (
      errorMessage !== null &&
      errorMessage.classList.contains("error-message")
    ) {
      errorMessage.remove();
    }
  }

  return valid;
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (number) => {
  const numberRegex = /^[0-9]{10}$/;
  return numberRegex.test(number);
};

nextBtn1.addEventListener("click", (e) => {
  e.preventDefault();

  if (validatePersonalInfo()) {
    personalInfo.classList.add("hide");
    selectPlan.classList.remove("hide");
    stepOne.classList.remove("active");
    stepTwo.classList.add("active");
  }
});

backBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  personalInfo.classList.remove("hide");
  selectPlan.classList.add("hide");
  stepOne.classList.add("active");
  stepTwo.classList.remove("active");
});

const togglePlans = () => {
  if (yearPlan.classList.contains("hide")) {
    yearPlan.classList.remove("hide");
    monthPlan.classList.add("hide");
  } else if (monthPlan.classList.contains("hide")) {
    yearPlan.classList.add("hide");
    monthPlan.classList.remove("hide");
  }
};
planToggle.addEventListener("change", togglePlans);

const arcardMonth = document
  .querySelector(".arcade")
  .addEventListener("click", () => {
    console.log(arcardMonth.innerHTML);
  });
