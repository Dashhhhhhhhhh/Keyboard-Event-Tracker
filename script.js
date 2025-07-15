document.addEventListener("keydown", function(event) {
    const display = document.getElementById("display");
    display.textContent = `You pressed: ${event.key}`;
    const code = document.getElementById("code");
    code.textContent = `Key Code: ${event.code}`;
    const numeric = document.getElementById("numeric");
    numeric.textContent = `Numeric Value: ${event.keyCode}`;

        document.body.classList.remove("flash");

        void document.body.offsetWidth;

        document.body.classList.add("flash");
});
  document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("display").textContent = "Press any Key...";
  document.getElementById("code").textContent = "Press any Key...";
  document.getElementById("numeric").textContent = "Press any Key...";

});



