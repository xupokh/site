"use strict"

window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const content = document.querySelector('.parallax__container');
        const background = document.querySelector('.images-parallax__background');
        const downtown = document.querySelector('.images-parallax__downtown');
        const highlight = document.querySelector('.images-parallax__highlight');
        const right = document.querySelector('.images-parallax__right');
        const left = document.querySelector('.images-parallax__left');

        const forBackground = 40;
        const forDowntown = 20;
        const forHighlight = 10;
        const forRight = 15;
        const forLeft = 30;
        const speed = 0.15;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            background.style.cssText = `transform: translate(${positionX / forBackground * 3}%,${positionY / forBackground}%);`;
            downtown.style.cssText = `transform: translate(${positionX / forDowntown * 5}%,${positionY / forDowntown}%);`;
            highlight.style.cssText = `transform: translate(${positionX / forHighlight * 2}%,${positionY / forHighlight}%);`;
            right.style.cssText = `transform: translate(${positionX / forRight * 2}%,${positionY / forRight}%);`;
            left.style.cssText = `transform: translate(${positionX / forLeft * 2}%,${positionY / forLeft}%);`;
            
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