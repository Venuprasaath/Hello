// Add click event to each card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        console.log(`You clicked on ${card.querySelector('h3').textContent}`);
    });
});
