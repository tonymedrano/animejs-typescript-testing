/*
 * Filename: /Users/tonymedrano/Desktop/DEVELOPMENT/animejs-typescript-testing/src/components/jumping-plane/jumping-plane.ts
 * Path: /Users/tonymedrano/Desktop/DEVELOPMENT/animejs-typescript-testing
 * Created Date: Tuesday, February 5th 2019, 9:22:19 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


import * as anime from '../../../node_modules/animejs/lib/anime.js';

export function fitElementToParent(el:any, padding:any) {
    let timeout:any = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }
  
  const advancedStaggeringAnimation = (function() {
  
    let staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    let dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
    let dotsFragment = document.createDocumentFragment();
    let grid = [20, 10];
    let cell = 55;
    let numberOfElements = grid[0] * grid[1];
    let animation:any;
    let paused = true;
    
    fitElementToParent(staggerVisualizerEl, 0);
  
    for (var i = 0; i < numberOfElements; i++) {
      var dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotsFragment.appendChild(dotEl);
    }
  
    dotsWrapperEl.appendChild(dotsFragment);
  
    var index = anime.random(0, numberOfElements-1);
    var nextIndex = 0;
  
    anime.set('.stagger-visualizer .cursor', {
      translateX: anime.stagger(-cell, {grid: grid, from: index, axis: 'x'}),
      translateY: anime.stagger(-cell, {grid: grid, from: index, axis: 'y'}),
      translateZ: 0,
      scale: 1.5,
    });
  
    function play() {
  
      paused = false;
      if (animation) animation.pause();
  
      nextIndex = anime.random(0, numberOfElements-1);
  
      animation = anime.timeline({
        easing: 'easeInOutQuad',
        complete: play
      })
      .add({
        targets: '.stagger-visualizer .cursor',
        keyframes: [
          { scale: .75, duration: 120}, 
          { scale: 2.5, duration: 220},
          { scale: 1.5, duration: 450},
        ],
        duration: 300
      })
      .add({
        targets: '.stagger-visualizer .dot',
        keyframes: [
          {
            translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
            translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
            duration: 100
          }, {
            translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
            translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
            scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
            duration: 225
          }, {
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 1200,
          }
        ],
        delay: anime.stagger(80, {grid: grid, from: index})
      }, 30)
      .add({
        targets: '.stagger-visualizer .cursor',
        translateX: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'x'}) },
        translateY: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'y'}) },
        scale: 1.5,
        easing: 'cubicBezier(.075, .2, .165, 1)'
      }, '-=800')
  
      index = nextIndex;
  
    }
  
    play();
  
  })();