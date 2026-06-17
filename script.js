const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("volunteerForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("message").innerHTML =
    "✅ Registration Successful! Thank you for joining NayePankh Foundation.";

    form.reset();
});