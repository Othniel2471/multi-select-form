const form = document.querySelector("form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const numberInput = document.querySelector(".number");

const personalInfo = document.querySelector(".personal-info");
const selectPlan = document.querySelector(".select-plan");
const addOns = document.querySelector(".add-ons");

const nextBtn1 = document.querySelector(".next1");
const backBtn1 = document.querySelector(".back1");
const planToggle = document.querySelector(".toggle");

const monthPlan = document.querySelector(".plans");
const yearPlan = document.querySelector(".year-plans");
const planOptions = document.querySelectorAll(".plan");
const nextBtn2 = document.querySelector(".next2");

const nextBtn3 = document.querySelector(".next3");
const backBtn2 = document.querySelector(".back2");

const stepOne = document.querySelector("#step-one");
const stepTwo = document.querySelector("#step-two");
const stepThree = document.querySelector("#step-three");
const stepFour = document.querySelector("#step-four");

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
  const numberRegex = /^[0-9]{11}$/;
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

nextBtn3.addEventListener("click", () => {
  // selectPlan.classList.add('hide')
  addOns.classList.add("hide");
});
backBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  addOns.classList.add("hide");
  selectPlan.classList.remove("hide");
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

const arcade = document.querySelectorAll(".arcade");
arcade.forEach((e) => {
  e.addEventListener("click", () => {
    const content = e.textContent.trim();
    // e.classList.toggle("active2");
    console.log(content);
  });
});

const advanced = document.querySelectorAll(".advanced");
advanced.forEach((e) => {
  e.addEventListener("click", () => {
    const content = e.textContent.trim();
    // e.classList.toggle("active2");
    console.log(content);
  });
});

const pro = document.querySelectorAll(".pro");
pro.forEach((e) => {
  e.addEventListener("click", () => {
    const content = e.textContent.trim();
    // e.classList.toggle("active2");
    console.log(content);
  });
});

planOptions.forEach((plan) => {
  nextBtn2.disabled = true;
  plan.addEventListener("click", () => {
    planOptions.forEach((otherPlan) => {
      otherPlan.classList.remove("selected");
    });
    plan.classList.add("selected");
    nextBtn2.disabled = false;
  });
});

nextBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  // alert("next step");
  selectPlan.classList.add("hide");
  stepTwo.classList.remove("active");
  stepThree.classList.add("active");
  addOns.classList.remove("hide");
});
