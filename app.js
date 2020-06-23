//Mobile view hamburger navigation menu
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
// const submitButton = document.getElementById("submit-button");

//Event Listeners
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open"); //adds AND removes side nav bar
  burger.classList.toggle("toggle"); //changes burger shape and color
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open"); //closes nav menu after link selection
    burger.classList.toggle("toggle"); //changes burger color back to black
  });
});

// submitButton.addEventListener("click", submitNotify());

//Scroll to Top Button
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

// function submitNotify() {
//   preventDefault();
//   alert(
//     "Your information has been submitted and we will get back to you as soon as possible. Thank you! "
//   );
// }
