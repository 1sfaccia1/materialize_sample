const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});



const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicator: false,
  height: 500,
  transition: 500,
  interval: 6000
});
