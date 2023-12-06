const num1 = document.querySelectorAll(".num-btn");
console.log(num1[1]);

num1.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});
