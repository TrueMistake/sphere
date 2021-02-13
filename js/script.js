function circle() {
    let sphere = document.querySelector('.sphere');
    for (let i = 1; i <= 12; i++) {
        let circle = document.createElement('div');
        circle.classList.add('circle', 'circle-' + i);
        circle.style.transform = `rotateY(${i * 15}deg)`;
        let col = `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`;
        spoke(circle, col);
        sphere.insertAdjacentElement('beforeEnd', circle);
    }
}

function spoke(el, col) {
    for (let i = 1; i <= 36; i++) {
        let div = document.createElement('div');
        div.classList.add('spoke','spoke-' + i);
        div.style.transform = `rotateZ(${i * 10}deg)`;
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.backgroundColor = `${col}`;
        div.insertAdjacentElement('beforeEnd', dot);
        el.insertAdjacentElement('beforeEnd', div);
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

circle();
