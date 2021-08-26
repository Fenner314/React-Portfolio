export const hiddenY = () => {
    const mobile = window.matchMedia('(max-width: 500px)');
    if (mobile.matches) {
        document.body.classList.add('noY');
    } else {
        document.body.classList.remove('noY');
    }
}

export const typeWriter = () => {
    const hello = () => {
        const text = ['Hello,'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.hello').textContent = letter;
            setTimeout(type, 50);
        }())
    }
    const im = () => {
        const text = ['I\'m '];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.im').textContent = letter;
            setTimeout(type, 50);
        }())
    }
    const jacob = () => {
        const text = ['Jacob'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.getElementById('jacob').textContent = letter;
            setTimeout(type, 50);
        }())
    }
    const period = () => {
        const text = ['.'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.period').textContent = letter;
            setTimeout(type, 50);
        }())
    }
    const dev = () => {
        const text = ['Front End Web Developer'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.dev').textContent = letter;
            setTimeout(type, 40);
        }())
    }
    hello();
    setTimeout(im, 800);
    setTimeout(jacob, 1000);
    setTimeout(period, 1250);
    setTimeout(dev, 1800);
    
}