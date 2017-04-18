"use strict";
class airSlider {
    constructor(e) {
        //Element Description
        this.slider = document.querySelector('.air-slider');
        this.slider.children[0].classList.toggle('active-slide');
        //Slider Length
        this.length = document.querySelectorAll('.slide').length;
        //Sizes
        if(e.width == undefined){
            e.width = '100%';
        }
        if(e.height == undefined){
            e.height = '300px';
        }
        this.slider.style.maxWidth = e.width;
        this.slider.style.height = e.height;
        //Constrols
        var controls = document.createElement('div');
        controls.className = 'controls';
        controls.innerHTML = '<button id="prev"><</button><button id="next">></button>';
        this.slider.appendChild(controls);
        //Controls Listeners
        document.querySelector('#prev').addEventListener('click', function(){
            slider.prev();
        });
        document.querySelector('#next').addEventListener('click', function(){
            slider.next();
        });
        //AutoPlay
        if(e.autoPlay == true){
            this.autoPlayTime = e.autoPlayTime;
            if(this.autoPlayTime == undefined){
                this.autoPlayTime = 3000;
            }							
            setInterval(this.autoPlay, this.autoPlayTime);
        }
    }
    prev() {
        var currentSlide = document.querySelector('.active-slide'); 
        var prevSlide = document.querySelector('.active-slide').previousElementSibling;
        if(prevSlide == undefined){
            prevSlide = this.slider.children[this.length - 1];
        }
        currentSlide.className = 'slide';
        prevSlide.classList = 'slide active-slide'
    }
    next() {
        var currentSlide = document.querySelector('.active-slide'); 
        var nextSlide = document.querySelector('.active-slide').nextElementSibling;
        if(nextSlide.className == 'controls'){
            nextSlide = this.slider.children[0];
        }
        currentSlide.className = 'slide';
        nextSlide.classList = 'slide active-slide fadeIn'
    }
    autoPlay(){
        slider.next();
    }
}