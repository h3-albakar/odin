function alertingHello() {
    return alert("Hello... u");
}

const btn = document.querySelector('button');
btn.addEventListener('click', alertingHello);

btn.addEventListener('click', function(e) {
    // e.target.style.backgroundColor = 'red';
    console.log(e.target);
    });