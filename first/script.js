var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var fourthOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  window.location.href = "mailto:himanshupatidar0805@gmail.com";
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I know this will be weird  but I have to tell you something...",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 200 && frameNumber <400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I know this will be weird  but I have to tell you something...",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }
//------------------------------------------------------------------------------------------------------------------------------------------------------
  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 400) {
    opacity = 0;
  }
  if (frameNumber > 400 && frameNumber < 800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 400) {
      drawTextWithLineBreaks(
        [
          "Jab   mna terko first time mess k bhar dekha tab mera dimag m instantly ek song hit kiya tha",
          "but us time class k liya late ho rha tha tho etna dhyaan nhi diya mena",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "Jab   mna terko first time mess k bhar dekha tab mera dimag m instantly ek song hit kiya ",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 800 && frameNumber < 1100) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "but us time class k liya late ho rha tha tho etna dhyaan nhi diya mena",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "but us time class k liya late ho rha tha tho etna dhyaan nhi diya mena",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }
  //----------------------------------------------------------------------------------------------

  if (frameNumber == 1100) {
    opacity = 0;
  }
  if (frameNumber > 1100 && frameNumber < 1400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1000) {
      drawTextWithLineBreaks(
        [
          "Uske kuch dino baad coincidence Tu library m padhaai kar rhi thi or ",
          " Achanak mera bhi maan hua library ghumne ka ",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "Uske kuch dino baad coincidence Tu library m padhaai kar rhi thi or ",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

 if (frameNumber >= 1400 && frameNumber < 1700) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 1200) {
      drawTextWithLineBreaks(
        [
          " Achanak mera bhi maan hua library ghumne ka ",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        " Achanak mera bhi maan hova library ghumne ka ",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }

  ///////////////////////////////////////////////////////////////////////////////

  //----------------------------------------------------------------------------------------------

  if (frameNumber == 1700) {
    opacity = 0;
  }
  if (frameNumber > 1700 && frameNumber < 2500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 1600) {
      drawTextWithLineBreaks(
        [
          "mna terko dekha library m  or m bhi tera samne wali chair par baith kar padhai karne ",
          "ki acting  karne lag gya or fir merko teri notebook se tera name pta chal or fir sab details nikali teri ",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
       "ki acting  karne lag gya or mna terko dekhte library m tab m bhi tera samne wali chair par baith kar padhai karne ki acting  karne lag gya",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  ///////////////////////////////////////////////////////////////////////////////
  //----------------------------------------------------------------------------------------------

  if (frameNumber == 2500) {
    opacity = 0;
  }
  if (frameNumber > 2500 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      [
        " Usi ke kuch dino baad merko vo date abhi bhi Yad hai 11 dec mena first time bt karne ki ",
        "try ki tersa par tune 3 br naatak kiya m  aabi busy hu kar ke but mna meri self respect ko ",
      ],
      canvas.width / 2,
      canvas.height / 2 - 20,
      fontSize,
      lineHeight
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2500 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 1200) {
      drawTextWithLineBreaks(
        [
          "side m rakh kr last time try ki thi bt karne ko or aapne  5min  bt ki thi, i known vo  ",
        ],
        canvas.width / 2,
        canvas.height / 2 + 30,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "side m rakh kr last time try ki thi bt karne or aapne  5min  bt ki thi, i known vo ",
        canvas.width / 2,
        canvas.height / 2 + 90
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }
  if (frameNumber >= 2500 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;

    if (window.innerWidth < 1400) {
      drawTextWithLineBreaks(
        [
          "conversation acchi Nahin Gai thi but uska baad  Jaate time Samne se bye bola tune vah mere ",
        ],
        canvas.width / 2,
        canvas.height / 2 + 90,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "conversation acchi Nahin Gai thi but uska baad  Jaate time Samne se bye bola tune vah mere ",
        canvas.width / 2,
        canvas.height / 2 + 120
      );
    }

    thirdOpacity = secondOpacity + 0.01;
  }
  if (frameNumber >= 2500 && frameNumber < 3300) {
    context.fillStyle = `rgba(255, 255, 255, ${fourthOpacity})`;

    if (window.innerWidth < 1600) {
      drawTextWithLineBreaks(
        [
          "ko bahut Achcha Laga  or us din k baad se tuna jo side looks diya",
        ],
        canvas.width / 2,
        canvas.height / 2 + 170,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "ko bahut Achcha Laga  or us din k baad se tuna jo side looks diya ",
        canvas.width / 2,
        canvas.height / 2 +140
      );
    }

    fourthOpacity = thirdOpacity + 0.01;
  }
  ////////////////////////////////////////////////////////
  
  if (frameNumber == 3300) {
    opacity = 0;
  }
  if (frameNumber > 3300 && frameNumber < 3700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      [
        "uska baad se tu merko aachi lagne lag gyi or us k baad se maine tera pyaara sa nickname bhi rakh h",
        "Mera maan tho bahut kiya terse bt karne ka par mera shy nature k Karan baat karne ki try nhi ki. . ",
      ],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight
    );
    opacity = opacity + 0.01;
  }
//////////////////////////////////////////////////////////

  if (frameNumber == 3700) {
    opacity = 0;
  }
  if (frameNumber > 3700 && frameNumber < 4000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      [
        "mera maan to tha terko propose day k din yha sab kane ko  but teri exam aane wla the tho ",
        "Tu distrub hogi esliya mna nhi kiya  or merko  pta h yha sab padha kar tere reply kya aane or tu kya sochne ",
      ],
      canvas.width / 2,
      canvas.height / 2,
      fontSize,
      lineHeight
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 3700 && frameNumber < 4000) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    drawTextWithLineBreaks(
      [
        "wli h but merko bas aapni genuine feelings  express karni thi  Chahe result Kuchh Bhi Hai",
      ],
      canvas.width / 2,
      canvas.height / 2 + 90,
      fontSize,
      lineHeight
    );
    secondOpacity = secondOpacity + 0.01;
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  if (frameNumber == 4000) {
    opacity = 0;
  }
  if (frameNumber > 4000 && frameNumber < 4300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      [
        "My intentions are very pure. I just want you to be genuinely happy",
        " and consistently make you feel that you are loved,",
      ],
      canvas.width / 2,
      canvas.height / 2 - 20,
      fontSize,
      lineHeight
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 4000 && frameNumber < 4300) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    drawTextWithLineBreaks(
      [
        "I know that I am not perfect but trust me I will do the best I can for you",
        " and I will never give up on you",
      ],
      canvas.width / 2,
      canvas.height / 2 + 50,
      fontSize,
      lineHeight
    );
    secondOpacity = secondOpacity + 0.01;
  }



  ////////////////////////////////////////////////
  if (frameNumber == 4300) {
    opacity = 0;
  }
  if (frameNumber > 4300 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    drawTextWithLineBreaks(
      [
        "but  i can't  wait  to spend all the time  in the world to share with you ",
        "the world to share that love with you",
      ],
      canvas.width / 2,
      canvas.height / 2 + 20,
      fontSize,
      lineHeight
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 4500 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    drawTextWithLineBreaks(
      [
        "I like you so much ",
        " Will you be mine  ?",
      ],
      canvas.width / 2,
      canvas.height / 2 + 90,
      fontSize,
      lineHeight
    );
    secondOpacity = secondOpacity + 0.01;
    button.style.display = "block";
  }
}
function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);