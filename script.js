particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 199
        , "density": {
          "enable": true
          , "value_area": 800
        }
      }
      , "color": {
        "value": "#ffffff"
      }
      , "shape": {
        "type": "circle"
        , "stroke": {
          "width": 0
          , "color": "#000000"
        }
        , "polygon": {
          "nb_sides": 5
        }
        , "image": {
          "src": "img/github.svg"
          , "width": 100
          , "height": 100
        }
      }
      , "opacity": {
        "value": 0.5
        , "random": false
        , "anim": {
          "enable": false
          , "speed": 1
          , "opacity_min": 0.1
          , "sync": false
        }
      }
      , "size": {
        "value": 3
        , "random": true
        , "anim": {
          "enable": false
          , "speed": 40
          , "size_min": 0.1
          , "sync": false
        }
      }
      , "line_linked": {
        "enable": false
        , "distance": 150
        , "color": "#ffffff"
        , "opacity": 0.4
        , "width": 1
      }
      , "move": {
        "enable": true
        , "speed": 6
        , "direction": "none"
        , "random": false
        , "straight": false
        , "out_mode": "out"
        , "bounce": false
        , "attract": {
          "enable": false
          , "rotateX": 600
          , "rotateY": 1200
        }
      }
    }
    , "interactivity": {
      "detect_on": "canvas"
      , "events": {
        "onhover": {
          "enable": true
          , "mode": "grab"
        }
        , "onclick": {
          "enable": true
          , "mode": "push"
        }
        , "resize": true
      }
      , "modes": {
        "grab": {
          "distance": 140
          , "line_linked": {
            "opacity": 1
          }
        }
        , "bubble": {
          "distance": 400
          , "size": 40
          , "duration": 2
          , "opacity": 8
          , "speed": 3
        }
        , "repulse": {
          "distance": 200
          , "duration": 0.4
        }
        , "push": {
          "particles_nb": 4
        }
        , "remove": {
          "particles_nb": 2
        }
      }
    }
    , "retina_detect": true
  });

        function displayHelloWorld() {
            document.body.innerHTML = '<div id="content" style="cursor: pointer;">stop stealing kid!</div>';
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault(); 
                displayHelloWorld();
            }

            // Check if the key pressed is 'U' and Ctrl key is also pressed
            if (event.key === 'u' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                displayHelloWorld();
            }

            if (event.key === 'i' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault(); 
                displayHelloWorld();
            }

            if (event.key === 'F12' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                displayHelloWorld();
            }
        });
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault(); 
            displayHelloWorld();
        });


        document.getElementById('content').addEventListener('click', function() {
            alert('stop stealing kid!');
        });

        function setText(text) {
            document.getElementById('md5_value').innerText = text;
            }
            
            function generateMd5() {
            if (!window.DisableDevtool) {
            alert('DisableDevtool not ready');
            return;
            }
            let key = document.getElementById('md5_key').value;
            if (!key) {
            alert('Key is empty');
            return;
            }
            setText(DisableDevtool.md5(key));
            }
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  