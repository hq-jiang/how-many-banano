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
        "value": 5,
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

function generateResponse (balance){
    let response = {}
    switch (true) {
        case balance <= 10:
            response = `
            You are a <a href="https://en.wikipedia.org/wiki/Pygmy_marmoset">pygmy marmoset</a> <br>
            Poor monkey, you are low on Potassium. No wonder you are the smallest monkey in the world <br>
            <img src="assets/pygmy_marmoset.jpg" alt="Pygmy marmoset" title="Pygmy marmoset"> <br>
            For free Bananos visit: <br>
            <a href="https://bananofaucet.cc">bananofaucet.cc</a> <br>
            <a href="https://faucet.prussia.dev">faucet.prussia.dev</a> <br>
            <a href="https://bananominer.com/">bananominer.com</a> <br>
            `;
            break;
        case balance < 50:
            response = `
            You are a <a href="https://en.wikipedia.org/wiki/Squirrel_monkey">squirrel monkey</a> <br>
            Did you get lost in the jungle? <br>
            <img src="assets/squirrel_monkey.jpg" alt="Squirrel monkey" title="Squirrel monkey"> <br>
            You can still grow with free Bananos: <br>
            <a href="https://bananofaucet.cc">bananofaucet.cc</a> <br>
            <a href="https://faucet.prussia.dev">faucet.prussia.dev</a> <br>
            <a href="https://bananominer.com/">bananominer.com</a> <br>
            `
            break;
        case balance == 69:
            response = `
            You are a <a href="https://en.wikipedia.org/wiki/Bonobo">Bonobo</a> <br>
            <img src="assets/bonobo.jpg" alt="Bonobo" title="Bonobo"> <br>
            You are known to get a lot of action. Nice!<br>
            `
            break;
        case balance < 100:
            response = `
            You are a <a href="https://en.wikipedia.org/wiki/Spider_monkey">spider monkey</a> <br>
            Did you get lost in the jungle? <br>
            <img src="assets/spider_monkey.jpg" alt="Spider monkey" title="Squirrel monkey"> <br>
            You can still grow with free Bananos: <br>
            <a href="https://bananofaucet.cc">bananofaucet.cc</a> <br>
            <a href="https://faucet.prussia.dev">faucet.prussia.dev</a> <br>
            <a href="https://bananominer.com/">bananominer.com</a> <br>
            `
            break;
        case balance < 500:
            response = `
            You are a <a href="https://en.wikipedia.org/wiki/Rhesus_macaque">rhesus macaque</a> <br>
            Remember, apes strong together<br>
            <img src="assets/rhesus_macaque.jpg" alt="Rhesus macaque" title="Rhesus macaque"> <br>
            `
            break;
        case balance < 1000:
            response = `
            You are a <a href="https://en.wikipedia.org/wiki/Proboscis_monkey">Proboscis monkey</a> <br>
            <img src="assets/proboscis_monkey.jpg" alt="Proboscis monkey" title="Proboscis monkey"> <br>
            I hope it will get even bigger, ... I mean you Banano balance.
            `
            break;
        case balance < 5000:
            response = `
            You are an <a href="https://en.wikipedia.org/wiki/Orangutan">Orangutan</a> <br>
            <img src="assets/orangutan.jpg" alt="Orangutan" title="Orangutan"> <br>
            Wise monkey, lead the way.
            `
            break;
        case balance < 10000:
            response = `
            You are an <a href="https://en.wikipedia.org/wiki/Gorilla">Gorilla</a> <br>
            <img src="assets/gorilla.jpg" alt="Gorilla" title="Gorilla"> <br>
            Great one, you have our respect. You have a really big ... Banano balance.
            `
            break;
        case balance < 1000000:
            response = `
            You are the monkey that sits this throne. <br>
            Small monkeys come to you for a loan. <br>
            How you got here, noone knows. <br>
            We'd like to say, congrats ... and fuck you<br>

    
            <img src="assets/pile.png" alt="Gorilla" title="Your pile of Bananos"> <br>
            Consider sharing some :)
            `
            break;
        case balance >= 1000000:
            response = `
            Are you by chance <a href="https://foldingathome.org/">Folding@Home</a>? <br>
            Because we love this project! <br>
            If you are a person then congrats <br>
            ... and fuck you!<br>

            Consider sharing some :)
            `
            break;
    }
    return response;
}


function calcParticles(balance) {
    if (balance < 10) {
        return balance;
    } else if (balance < 100) {
        return Math.floor(10 + balance/2);
    } else if (balance < 10000) {
        return Math.floor(60 + balance/50);
    } else {
        return Math.floor(260 + 50 * Math.log10(balance))
    };
}

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
    let balance = await getBalance(public_key);
    // balance = 50;
    document.getElementById("balance").innerHTML = `You have ${balance} Bananos`;
    pJSDom[0].pJS.particles.number.value = calcParticles(balance);
    pJSDom[0].pJS.fn.particlesRefresh()
    document.getElementById("response").innerHTML = generateResponse(balance);

}

document.getElementById("submit").onclick = async () => {await displayBalance();};