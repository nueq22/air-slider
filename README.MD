# air-slider
#### It's simple, lightweight responsive slider without jquery. Only 3kB. SASS Included.
1. Add slider styles
```html
<link rel="stylesheet" href="air-slider/air-slider.min.css">
```
2. Add slider markup
```html
<div class="air-slider">
  <div class="slide">
    <img src="img/image1.jpg" alt="slide1"/>
  </div>
  <div class="slide">
    <img src="img/image2.jpeg" alt="slide2"/>
  </div>
  <div class="slide">
    <img src="img/image3.jpeg" alt="slide3"/>
  </div>
</div>
```
3. Add slider script and init slider
```html
<script src="air-slider/air-slider.min.js"></script>
<script>
  var slider = new airSlider({
    autoPlay: true,
    width: '600px',
    height: '300px'
  });
</script>
```
#### Parameters list
1. ```autoPlay```: true/false (default - false);
2. ```autoPlayTime```: value in milliseconds (default - 3000);
3. ```width```: any css width (%, px, vw, rem...);
4. ```height```: any css height (%, px, vh, rem...);
