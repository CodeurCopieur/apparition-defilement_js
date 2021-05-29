const ratio = .5;
let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handlerIntersect = ( entries, observer ) => {
  entries.forEach(({intersectionRatio, target}) => {

   if(intersectionRatio > ratio) {
     target.classList.add('reveal-visible');
     observer.unobserve(target);
   }

  });
}

let observer = new IntersectionObserver(handlerIntersect, options);


let targets = document.querySelectorAll('.reveal');

targets.forEach( target => {
  observer.observe(target);
})
