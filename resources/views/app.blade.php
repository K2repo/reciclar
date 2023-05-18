<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>


        <meta charset="utf-8">
        <title>Admin perfil</title>
        <meta content="Admin perfil" property="og:title">
        <meta content="Admin perfil" property="twitter:title">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="Webflow" name="generator">
        {{-- <link href="css/normalize.css" rel="stylesheet" type="text/css">
        <link href="css/webflow.css" rel="stylesheet" type="text/css">
        <link href="css/reciclar.webflow.css" rel="stylesheet" type="text/css"> --}}
        <style>@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afc"] {-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afe"] {-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afd"] {width:100%;opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115b00"] {opacity:0;display:none;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afc"] {-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afe"] {-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afd"] {width:100%;opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115b00"] {opacity:0;display:none;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afc"] {-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afe"] {-webkit-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115afd"] {width:100%;opacity:1;}html.w-mod-js:not(.w-mod-ix) [data-w-id="1d3f39d6-72fe-3645-0358-349d01115b00"] {opacity:0;display:none;}}</style>
        <link href="https://fonts.googleapis.com" rel="preconnect">
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script type="text/javascript">WebFont.load({  google: {    families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic"]  }});</script>
        <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
        <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
        <link href="/images/favicon.png" rel="shortcut icon" type="/image/x-icon">
        <link href="/images/webclip.png" rel="apple-touch-icon">




        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

    </head>
    <body class="font-sans antialiased">
        @inertia
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63ce9356440ed765930e720f" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="js/webflow.js" type="text/javascript"></script>
        <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
        <script src="https://unpkg.com/split-type"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
        <script>
      window.addEventListener("DOMContentLoaded", (event) => {
        setTimeout(() => {
          $("[js-line-animation]").each(function (index) {
                  gsap.set($(this), { autoAlpha: 1 });
            let textEl = $(this);
            let textContent = $(this).text();
            let tl;
            function splitText() {
              new SplitType(textEl, { types: "lines", tagName: "span" });
              textEl.find(".line").each(function (index) {
                let lineContent = $(this).html();
                $(this).html("");
                $(this).append(`<span class="line-inner" style="display: block;">${lineContent}</span>`);
              });
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textEl,
                  start: "top bottom",
                  end: "bottom bottom",
                  toggleActions: "none play none reset"
                }
              });
              tl.fromTo(textEl.find(".line-inner"), { yPercent: 100 }, { yPercent: 0, duration: 0.3, stagger: { amount: 0.5, ease: "power1.out" } });
            }
            splitText();
            let windowWidth = window.innerWidth;
            window.addEventListener("resize", function () {
              if (windowWidth !== window.innerWidth) {
                windowWidth = window.innerWidth;
                tl.kill();
                textEl.text(textContent);
                splitText();
              }
            });
          });
        }, 700);
      });
      </script>
        <script>
      let transitionTrigger = $(".transition-trigger");
      let introDurationMS = 0;
      let exitDurationMS = 1200;
      let excludedClass = "no-transition";
      // On Page Load
      if (transitionTrigger.length > 0) {
          transitionTrigger.click();
          $("body").addClass("no-scroll-transition");
          setTimeout(() => {$("body").removeClass("no-scroll-transition");}, introDurationMS);
      }
      // On Link Click
      $("a").on("click", function (e) {
        if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 &&
            !$(this).hasClass(excludedClass) && $(this).attr("target") !== "_blank" && transitionTrigger.length > 0) {
          e.preventDefault();
              $("body").addClass("no-scroll-transition");
          let transitionURL = $(this).attr("href");
          transitionTrigger.click();
          setTimeout(function () {window.location = transitionURL;}, exitDurationMS);
        }
      });
      // On Back Button Tap
      window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
      // Hide Transition on Window Width Resize
      setTimeout(() => {$(window).on("resize", function () {
      setTimeout(() => {$(".transition").css("display", "none");}, 50);});
      }, introDurationMS);
      </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous"></script>
        <script>
      SmoothScroll({
        animationTime    : 2000,
        stepSize         : 80,
        accelerationDelta : 100,
        accelerationMax   : 3,
        keyboardSupport   : true,
        arrowScroll       : 50,
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,
        touchpadSupport   : true,
      })
      </script>
    </body>
</html>
