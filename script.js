const canvas = document.getElementById("canvas"),
    btn = document.querySelector("button"),
    context = canvas.getContext("2d"),
    size_min = 0.1,
    size_max = 1,
    snowColor = 'white';

let left_right = 0,
    left_right2 = 0,
    snowSped = 0.4,
    balls = [],
    images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg',];

let img_i = 0
document.body.addEventListener('click', () => {
    canvas.style.backgroundImage = `url(${images[img_i]})`
    canvas.classList.add('changB_G')
    setTimeout(() => {
        canvas.classList.remove('changB_G')
    }, 640);
    img_i++
    if (img_i >= images.length) {
        img_i = 0
    }
})

document.addEventListener('mousemove', (e) => {
    if (e.pageY > (window.innerHeight / 6)) {
        snowSped = Number('0.' + String(Math.ceil(e.pageY)).slice(0, 3))
    }

    if (e.pageX > (window.innerWidth / 2)) {
        left_right2 = random(0.1, 0.4)
    }
    else {
        left_right2 = random(-0.1, -0.4)
    }
})

// tarmacnel
function update() {
    balls.forEach(function (ball) {
        ball.update();
    });
}
// nkarel
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function (ball) {
        ball.draw();
    });
}
// anvej ptuyt
function loop() {
    requestAnimationFrame(loop);
    update();
    draw();

    // add snow
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
    bols()
}
loop();

function bols() {
    const ball = new Ball();
    balls.push(ball);
    left_right = random(-0.2, 0.2)
    left_right += left_right2
}

function Ball() {
    this.r = random(size_min, size_max);
    this.x = random((this.r) - 200, (canvas.width - this.r) + 200);
    this.y = 0

    this.xDelta = left_right;
    this.yDelta = snowSped;

    this.color = snowColor;

    this.update = function () {
        this.x += this.xDelta;
        this.y += this.yDelta;
    };

    this.draw = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();
    };
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

