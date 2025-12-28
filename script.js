const professions = [
    "Network Engineer",
    "Web Developer",
    "UI/UX Developer"
];
let professionIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // ms per character
const delayBetween = 1500; // delay before next word

const professionElement = document.getElementById("professionText");

function typeProfession() {
    const currentText = professions[professionIndex];

    if (charIndex <= currentText.length) {
        professionElement.innerText = currentText.substring(0, charIndex);
        professionElement.style.opacity = 1; // fade in smoothly
        charIndex++;
        setTimeout(typeProfession, typingSpeed);
    } else {
        // Wait, then move to next profession
        setTimeout(() => {
            charIndex = 0;
            professionIndex = (professionIndex + 1) % professions.length;
            professionElement.style.opacity = 0; // fade out smoothly
            setTimeout(typeProfession, 300); // wait for fade out
        }, delayBetween);
    }
}

// // Start animation after page loads
document.addEventListener("DOMContentLoaded", typeProfession);


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("tZeVyJa2znGXcU9Pf");
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            emailjs.sendForm("service_oatgv32", "template_9yxhuko", this)
                .then(() => {
                    console.log("✅ Message sent successfully!");
                    this.reset();
                }, (error) => {
                    console.log("❌ Failed to send. Please try again.");
                    console.error(error);
                });
        });
    }
});