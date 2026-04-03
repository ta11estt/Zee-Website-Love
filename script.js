// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Move NO button
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "I knew it ❤️";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";

    finalText.style.display = "block";

    // First message (letter)
    finalText.innerHTML = `
    I don’t think I say this enough, but I really love you… a lot.

    You’ve become such a calm and beautiful part of my life.
    Talking to you just feels easy, natural… like something I never want to lose.

    It’s not just about big moments,
    it’s the little things with you that mean everything to me.

    I don’t want anything complicated…
    I just want you, your time, your presence, your smile.

    And honestly… I want this to last.
    `;

    // Add second question after a pause
    setTimeout(() => {
        finalText.innerHTML += `<br><br><strong>So… will you be my forever?</strong>`;
    }, 2500);
});