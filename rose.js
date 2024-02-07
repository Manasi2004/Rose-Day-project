
const roseDayWishes = [
    "Happy Rose Day! May your life be as beautiful and fragrant as a rose.",
    "Wishing you a day filled with love, happiness, and roses!",
    "Sending you a virtual rose and lots of love on this special day!",
    "Roses are red, violets are blue. On this Rose Day, I'm sending all my love to you!",
    "Happy Rose Day! May your heart bloom with joy and your life be filled with roses.",
    "Just like a rose, you brighten my day with your presence. Happy Rose Day!",
    "Wishing you a day filled with roses, smiles, and sweet moments. Happy Rose Day!",
    "Roses are the perfect way to express love. Sending you a bunch of virtual roses on this special day!"
];


function generateWish() {
    const randomIndex = Math.floor(Math.random() * roseDayWishes.length);
    const wish = roseDayWishes[randomIndex];
    const messageElement = document.getElementById('message');
    messageElement.style.transition = 'opacity 1s ease-in-out'; 
    messageElement.style.opacity = '0';
    setTimeout(() => {
        messageElement.innerHTML = `<span class="special-wish">${wish}</span>`; 
        messageElement.style.opacity = '1'; 
    }, 1000); 
}

document.getElementById('generateButton').addEventListener('click', generateWish);
