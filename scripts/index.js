const options = {
  controlColor: "#D1DE37",
  addCircle: false
};

const viewers = document.querySelectorAll(".image-compare");

viewers.forEach((element) => {
  let view = new ImageCompare(element, options).mount();
});