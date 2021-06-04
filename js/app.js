// const getRandomHex32 = () => {
//     const array = new Uint32Array(32);
//     window.crypto.getRandomValues(array);
//     const hex = getByteArrayAsHexString(array);
//     return hex;
//   };
  
//   window.localStorage.seed = getRandomHex32();
  

// const getAccountInfo = async (ix) => {
//     const url = 'https://kaliumapi.appditto.com/api';
//     const account = window.bananocoinBananojs.getBananoAccount("ban_3obcrgermjde7hpjub9abbyjgspjmp7kjdcpac4kyn4fx7cb45bnqnqf3s7b");
//     window.bananocoinBananojs.setBananodeApiUrl(url);
//     const accountInfo = await window.bananocoinBananojs.getAccountInfo(account, true);
//     return accountInfo;
// }

// getAccountInfo("").then((value) => console.log(value))


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlejs = particlesJS('particles-js',
  
{
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "js/banano.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 31.56640387635437,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.7,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);


async function getBalance(public_key) {
    const url = 'https://kaliumapi.appditto.com/api';
    await window.bananocoinBananojs.setBananodeApiUrl(url);
    const raw_balance = await window.bananocoinBananojs.getAccountBalanceRaw(public_key)
    const parts = await window.bananocoinBananojs.getBananoPartsFromRaw(raw_balance);
    return parts.banano;
}

async function displayBalance() {
    
    const public_key = document.getElementById("input_address").value;
    console.log(public_key)
    const balance = await getBalance(public_key);
    console.log(balance)
    document.getElementById("balance").innerHTML = balance;
    pJSDom[0].pJS.particles.number.value = balance;
    pJSDom[0].pJS.fn.particlesRefresh()
}

document.getElementById("submit").onclick = async () => {await displayBalance();};