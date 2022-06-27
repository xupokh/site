"use strict"

window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const content = document.querySelector('.parallax__container');
        const background = document.querySelector('.images-parallax__background');
        const downtown = document.querySelector('.images-parallax__downtown');
        const highlight = document.querySelector('.images-parallax__highlight');

        const forBackground = 40;
        const forDowntown = 20;
        const forHighlight = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            background.style.cssText = `transform: translate(${positionX / forBackground}%,${positionY / forBackground}%);`;
            downtown.style.cssText = `transform: translate(${positionX / forDowntown}%,${positionY / forDowntown}%);`;
            highlight.style.cssText = `transform: translate(${positionX / forHighlight}%,${positionY / forHighlight}%);`;

            requestAnimationFrame(setMouseParallaxStyle);

        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {

            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;            
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });
    }
}