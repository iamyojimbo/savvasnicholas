var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json' // the path to the animation json
});