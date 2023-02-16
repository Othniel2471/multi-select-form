const form = document.querySelector("form");
const personalInfo = document.querySelector(".personal-info");
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

nextBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  personalInfo.classList.add("hide");
  selectPlan.classList.remove("hide");
  stepOne.classList.remove("active");
  stepTwo.classList.add("active");
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
    console.log("clicked");
  } else if (monthPlan.classList.contains("hide")) {
    yearPlan.classList.add("hide");
    monthPlan.classList.remove("hide");
    console.log("false");
  }
};
planToggle.addEventListener("change", togglePlans);
