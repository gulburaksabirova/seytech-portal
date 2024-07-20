document.addEventListener('DOMContentLoaded', ()=>{
    const fortunes = [
        "You will have a great day!",
        "A surprise gift is on its way to you.",
        "Success is in your future.",
        "You will meet someone special soon.",
        "Happiness and prosperity await you.",
        "Adventure is coming your way.",
        "You will achieve your goals.",
        "An unexpected opportunity will arise",
        "You will make a new friend.",
        "Good fortune is headed your way."
    ];

    const fortuneElement = document.getElementById('fortune');
    const revealButton = document.getElementById('reveal-button');

    revealButton.addEventListener('click', ()=>{
        const randomIndex = Math.floor(Math.random()* fortunes.length);
        fortuneElement.textContent = fortunes[randomIndex];
    });
});