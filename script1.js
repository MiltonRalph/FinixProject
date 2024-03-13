// const p = document.querySelector('main p')
const h1 = document.querySelector('h1');

const textAnim = () => {
  const len = h1.textContent.length;
  let s;
  s = h1.style;
  s.width = len - 'ch';
  s.animationTimingFunction = 'steps(' + len + '), steps(1)';
};
textAnim();
