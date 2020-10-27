function animatePreloader() {
  const preloader = new TimelineMax();
  preloader
    .fromTo(
      '#overlay-1 h1',
      1,
      { y: 0, autoAlpha: 1 },
      { y: -40, autoAlpha: 0 },
    )
    .fromTo(
      '#overlay-1',
      2,
      { top: 0, ease: Power2.easeInOut },
      { top: '-110%', ease: Expo.easeInOut },
      '-=0.5',
    );
  preloader.fromTo(
    '#overlay-2',
    2,
    { top: 0, ease: Power2.easeInOut },
    { top: '-110%', ease: Expo.easeInOut },
    '-=1.7',
  );
}
function headerAnimations() {
  const header = new TimelineMax();
  header
    .fromTo(
      '.header-top__left',
      1,
      { x: -100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1 },
      '+=2',
    )
    .fromTo(
      '.header-top__right',
      1,
      { x: 100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1 },
      '-=1',
    )
    .fromTo(
      '.hero-top h6',
      1,
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      '-=1',
    )
    .staggerFromTo(
      '.slogan',
      0.7,
      { opacity: 0 },
      { opacity: 1, ease: Expo.easeInOut },
      0.3,
      '-=1.5',
    )
    .staggerFromTo(
      '.hero-top h1 .char',
      0.3,
      { y: 20, opacity: 0, scale: 0 },
      { y: 0, opacity: 1, scale: 1, ease: Back.easeOut.config(3) },
      0.05,
      '-=1',
    )
    .fromTo(
      '.hero-top p',
      1,
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      '-=1',
    )
    .fromTo(
      '.main-header__image',
      2,
      { x: 20, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, ease: Back.easeOut.config(4) },
      '-=1.3',
    )

    .staggerFromTo(
      '.hero-projects li',
      1,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(3) },
      0.1,
      '-=1.5',
    )

    .fromTo(
      '.hero-bottom__description h2',
      1,
      { y: -20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      '-=1.5',
    )
    .fromTo(
      '.hero-bottom__description p',
      1,
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      '-=1.5',
    )
    .fromTo(
      '.hero-bottom__more',
      1,
      { x: 20, autoAlpha: 0 },
      { x: 0, autoAlpha: 1 },
      '-=1.5',
    )
    .fromTo(
      '.scroll',
      1,
      { y: 20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1 },
      '-=1.5',
    );
}
function projectsAnimation() {
  let controller = new ScrollMagic.Controller();
  let animateIn = new TimelineMax();

  animateIn.staggerFromTo(
    '.project',
    1,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, ease: Back.easeOut.config(3) },
    0.2,
  );

  //   animateIn
  //     .fromTo(
  //       $('.project-overlay'),
  //       2,
  //       { skewX: 30, scale: 1.5 },
  //       {
  //         skewX: 0,
  //         xPercent: 100,
  //         transformOrigin: '0% 100%',
  //         ease: Power4.easeOut,
  //       },
  //     )

  //     .from(
  //       $('.project-footer'),
  //       0.3,
  //       { autoAlpha: 0, y: 30, ease: Power4.easeOut },
  //       '-=0.9',
  //     );

  // Scroll Magic

  new ScrollMagic.Scene({
    triggerElement: '.projects',
    offset: -100,
    reverse: false,
  })
    .addIndicators()
    .setTween(animateIn)
    .addTo(controller);
}
function servicesAnimation() {
  let controller = new ScrollMagic.Controller();
  let animateIn = new TimelineMax();

  animateIn
    .fromTo(
      '.s-services .section-header',
      1,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
    )
    .fromTo(
      '.services-left p',
      1,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      '-=0.5',
    )
    .staggerFromTo(
      '.services-right li',
      1,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(3) },
      0.2,
      '-=1',
    );

  //   animateIn
  //     .fromTo(
  //       $('.project-overlay'),
  //       2,
  //       { skewX: 30, scale: 1.5 },
  //       {
  //         skewX: 0,
  //         xPercent: 100,
  //         transformOrigin: '0% 100%',
  //         ease: Power4.easeOut,
  //       },
  //     )

  //     .from(
  //       $('.project-footer'),
  //       0.3,
  //       { autoAlpha: 0, y: 30, ease: Power4.easeOut },
  //       '-=0.9',
  //     );

  // Scroll Magic

  new ScrollMagic.Scene({
    triggerElement: '.s-services',
    offset: -100,
    reverse: false,
  })
    .addIndicators()
    .setTween(animateIn)
    .addTo(controller);
}

function responsibilityAnimation() {
  let controller = new ScrollMagic.Controller();
  let animateIn = new TimelineMax();

  animateIn
    .fromTo(
      '.s-responsibility .section-header',
      1,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1 },
    )
    .fromTo(
      '.s-responsibility .responsibility-right',
      1,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=1',
    );

  new ScrollMagic.Scene({
    triggerElement: '.s-responsibility',
    offset: -100,
    reverse: false,
  })
    .addIndicators()
    .setTween(animateIn)
    .addTo(controller);
}

//

function getSliderLength() {
  const CustomGlideLength = function (Glide, Components, Events) {
    return {
      mount() {
        Events.emit('slider.length', Components.Sizes.length);
        console.log('Console log', Components.Sizes.length);
      },
    };
  };
  const glide = new Glide('.glide').mount({ CustomGlideLength });
  glide.on('slider.length', (length) => {
    console.log('Event length', length);
  });
  glide.on(['mount.after', 'run'], () => {
    const currentIndex = glide.index;
    console.log(currentIndex);
  });

  $('.glide__arrow--left').on('click', function () {
    glide.go('<');
  });

  $('.glide__arrow--right').on('click', function () {
    glide.go('>');
  });

  glide.mount();
}

function navigationMenuAnimations() {
  $('.toggle-button').on('click', function () {
    const navigationMenu = new TimelineMax();
    $('.nav-fullscreen').addClass('visible');
    $(this).addClass('close');
    $('button.search').addClass('hidden');
    let ctx = $(this);
    $(this).attr('disabled', true);
    if (!$(this).hasClass('active')) {
      navigationMenu
        .fromTo(
          '.nav-fullscreen',
          2,
          { left: '-110%', ease: Power2.easeInOut },
          {
            left: 0,
            ease: Expo.easeInOut,
            onComplete: function () {
              $(ctx).attr('disabled', false);
              $(ctx).addClass('active');
            },
          },
          '-=0.5',
        )
        .staggerFromTo(
          '.nav-menu li',
          0.5,
          { y: 20, opacity: 0, scale: 0 },
          { y: 0, opacity: 1, scale: 1, ease: Back.easeOut.config(1.2) },
          0.09,
          '-=0.9',
        )
        .staggerFromTo(
          '.nav-socials-top li',
          1,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, ease: Power2.easeInOut },
          0.05,
          '-=1',
        )
        .staggerFromTo(
          '.nav-socials-bottom .socials li',
          1,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, ease: Power2.easeInOut },
          0.05,
          '-=1',
        )
        .fromTo(
          '.nav-fullscreen .copyright-text',
          2,
          { autoAlpha: 0, ease: Power2.easeInOut },
          { autoAlpha: 1, ease: Expo.easeInOut },
          '-=2',
        )
        .fromTo(
          '.header-top__middle',
          2,
          { y: -100, autoAlpha: 0, ease: Power2.easeInOut },
          { y: 0, autoAlpha: 1, ease: Expo.easeInOut },
          '-=2.5',
        );
      // $(this).addClass('active');
      // $(this).attr('disabled', false);
    } else {
      $('.nav-fullscreen').removeClass('visible');
      $(this).attr('disabled', true);

      $(this).removeClass('close');
      $('button.search').removeClass('hidden');
      navigationMenu
        .fromTo(
          '.nav-fullscreen',
          2,
          { left: 0, ease: Power2.easeInOut },
          {
            left: '-110%',
            ease: Expo.easeInOut,
            onComplete: function () {
              $(ctx).attr('disabled', false);
              $(ctx).removeClass('active');
            },
          },
          '',
        )

        .staggerFromTo(
          '.nav-menu li',
          1,
          { y: 0, opacity: 1, scale: 1, ease: Back.easeOut.config(1.2) },
          { y: -20, opacity: 0, scale: 0 },
          0.09,
          '-=2',
        )

        .fromTo(
          '.header-top__middle',
          2,
          { autoAlpha: 1, ease: Power2.easeInOut },
          { autoAlpha: 0, ease: Expo.easeInOut },
          '-=2.5',
        );
      // $(this).removeClass('active');
      // $(this).attr('disabled', false);
    }
  });
}

$(function () {
  Pace.on('done', function () {
    Splitting({ target: $('.hero-top h1') });
    animatePreloader();
    headerAnimations();
  });

  navigationMenuAnimations();

  // animatePreloader();
  // headerAnimations();
  // projectsAnimation();

  if ($('body').hasClass('home')) {
    projectsAnimation();
    servicesAnimation();
    responsibilityAnimation();
  }

  if ($('body').hasClass('project-details')) {
    getSliderLength();
  }

  // barbaInit();
  // $('.toggle-button').on('click', function () {
  //   alert(1);
  // });
});
let lastScrollTop = 0;
$(window).scroll(function () {
  if (!$('.nav-fullscreen').hasClass('visible')) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('.header-top').removeClass('fixed').addClass('hide');
    } else {
      $('.header-top').addClass('fixed').removeClass('hide');
    }
    lastScrollTop = st;
  }
});
