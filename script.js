window.onload = function() {
    rollDice();
};

document.getElementById('rollButton').addEventListener('click', rollDice);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('rollButton').click();
    }
});

function rollDice() {
    const die1 = document.getElementById('die1');
    const die2 = document.getElementById('die2');

    const faces = [
        {x: 0, y: 0}, // Face 1
        {x: 90, y: 0}, // Face 2
        {x: 0, y: -90}, // Face 3
        {x: 0, y: 90}, // Face 4
        {x: -90, y: 0}, // Face 5
        {x: 180, y: 0} // Face 6
    ];

    let randomFace1 = faces[Math.floor(Math.random() * faces.length)];
    let randomFace2 = faces[Math.floor(Math.random() * faces.length)];

    die1.style.transform = `rotateX(${randomFace1.x}deg) rotateY(${randomFace1.y}deg)`;
    die2.style.transform = `rotateX(${randomFace2.x}deg) rotateY(${randomFace2.y}deg)`;

    document.getElementById('result1').value = faces.indexOf(randomFace1) + 1;
    document.getElementById('result2').value = faces.indexOf(randomFace2) + 1;

    document.getElementById('rollButton').focus();
}