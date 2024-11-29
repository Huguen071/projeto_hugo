let slideIndex = 0;
const showSlides = () => {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
};
showSlides();
const tabs = document.getElementsByClassName("tabButton");
const contents = document.getElementsByClassName("tabs");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
      contents[j].style.display = "none";
    }
    this.classList.add("active");
    contents[i].style.display = "block";
  });
}
document.querySelector('.fa-bars').addEventListener('click', function () {
  const topnav = document.getElementById('myTopnav');
  if (topnav.className === 'topnav') {
      topnav.className += ' responsive';
  } else {
      topnav.className = 'topnav';
  }
});