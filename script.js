/* =====================================
   GET ELEMENTS
===================================== */

const intro =
    document.getElementById("intro");

const website =
    document.getElementById("website");

const startButton =
    document.getElementById("startButton");

const envelope =
    document.getElementById("envelope");

const envelopeInstruction =
    document.getElementById("envelopeInstruction");

const messageElement =
    document.getElementById("message");

const button2 =
    document.getElementById("button2");

const button3 =
    document.getElementById("button3");

const button4 =
    document.getElementById("button4");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const answer =
    document.getElementById("answer");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const hearts =
    document.getElementById("hearts");


/* =====================================
   SCREENS
===================================== */

const screens = [
    document.getElementById("screen1"),
    document.getElementById("screen2"),
    document.getElementById("screen3"),
    document.getElementById("screen4"),
    document.getElementById("screen5"),
    document.getElementById("screen6")
];

const dots =
    document.querySelectorAll(".progress-dot");


let currentScreen = 0;

let envelopeOpened = false;

let typing = false;

let musicPlaying = false;


/* =====================================
   MESSAGE
===================================== */

const apology = `Suno...

Mujhe pata hai thodi si gussa ho tum mujhse. 😭

Aur haan, friend ka naam mention karna aur VC na karna —
dono ka case mere against hai. 😂

But honestly, maine jaan ke kuch nahi kiya tha.
Tumhe irritate karna mera intention bilkul nahi tha.

Bas kabhi kabhi main bina soche kuch kar deta hoon
aur baad mein sochta hoon...

"bhai ye kya kar diya." 😭😂

Toh bas simple si baat hai...

Sorry yaar. 🥺

Ab thoda sa gussa kam kar do.
Itni mehnat se website banayi hai maine. 😂`;


/* =====================================
   SCREEN CHANGE
===================================== */

function showScreen(number) {

    screens.forEach((screen, index) => {

        screen.classList.toggle(
            "active",
            index === number
        );

    });

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === number
        );

    });

    currentScreen = number;

}


/* =====================================
   START WEBSITE
===================================== */

startButton.addEventListener(
    "click",
    function () {

        intro.classList.add("hide");

        website.classList.remove("hidden");

        createHearts();

        /*
         Browser audio policy:
         music starts after user interaction.
        */

        playMusic();

        setTimeout(() => {

            intro.style.display = "none";

        }, 700);

    }
);


/* =====================================
   ENVELOPE
===================================== */

envelope.addEventListener(
    "click",
    function () {

        if (envelopeOpened) {
            return;
        }

        envelopeOpened = true;

        envelope.classList.add("open");

        envelopeInstruction.textContent =
            "Okay... letter khul raha hai 🥺";

        setTimeout(() => {

            showScreen(1);

            typeApology();

        }, 1000);

    }
);


/* =====================================
   TYPEWRITER
===================================== */

function typeApology() {

    if (typing) {
        return;
    }

    typing = true;

    messageElement.textContent = "";

    let index = 0;

    const interval =
        setInterval(
            function () {

                messageElement.textContent +=
                    apology[index];

                index++;

                if (
                    index >= apology.length
                ) {

                    clearInterval(interval);

                    typing = false;

                }

            },
            22
        );

}


/* =====================================
   NAVIGATION
===================================== */

button2.addEventListener(
    "click",
    function () {

        showScreen(2);

    }
);


button3.addEventListener(
    "click",
    function () {

        showScreen(3);

    }
);


button4.addEventListener(
    "click",
    function () {

        showScreen(4);

    }
);


/* =====================================
   YES
===================================== */

yesButton.addEventListener(
    "click",
    function () {

        answer.textContent =
            "Yessss 😭💗 mujhe pata tha tum itni bhi gussa nahi ho.";

        celebrate();

        setTimeout(
            function () {

                showScreen(5);

            },
            1300
        );

    }
);


/* =====================================
   NO
===================================== */

noButton.addEventListener(
    "click",
    function () {

        answer.textContent =
            "Accha 😭 thoda aur gussa kar lo... phir maan jaana.";

        noButton.textContent =
            "Still angry? 😭";

        /*
         Move the button slightly,
         but never make it impossible
         to click.
        */

        noButton.style.transform =
            "translateX(15px)";

    }
);


/* =====================================
   MUSIC
===================================== */

function playMusic() {

    music.volume = 0.28;

    music.play()
        .then(
            function () {

                musicPlaying = true;

                musicButton.classList.add(
                    "playing"
                );

                musicButton.textContent =
                    "♫";

            }
        )
        .catch(
            function () {

                /*
                 Some browsers may still
                 block audio.

                 User can manually press
                 the music button.
                */

                musicPlaying = false;

                musicButton.textContent =
                    "♪";

            }
        );

}


musicButton.addEventListener(
    "click",
    function () {

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent =
                "♪";

        } else {

            music.play()
                .then(
                    function () {

                        musicPlaying = true;

                        musicButton.classList.add(
                            "playing"
                        );

                        musicButton.textContent =
                            "♫";

                    }
                )
                .catch(
                    function () {

                        alert(
                            "Music file check karo: music/music.mp3"
                        );

                    }
                );

        }

    }
);


/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts() {

    setInterval(
        function () {

            const heart =
                document.createElement("span");

            heart.className =
                "heart-particle";

            heart.textContent =
                Math.random() > .5
                    ? "♡"
                    : "♥";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.fontSize =
                10 +
                Math.random() * 16 +
                "px";

            const duration =
                6 +
                Math.random() * 6;

            heart.style.animationDuration =
                duration + "s";

            hearts.appendChild(heart);

            setTimeout(
                function () {

                    heart.remove();

                },
                duration * 1000
            );

        },
        800
    );

}


/* =====================================
   CELEBRATION
===================================== */

function celebrate() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const item =
            document.createElement("div");

        item.textContent =
            Math.random() > .5
                ? "💗"
                : "✨";

        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.zIndex =
            "100";

        item.style.pointerEvents =
            "none";

        item.style.fontSize =
            15 +
            Math.random() * 18 +
            "px";

        document.body.appendChild(item);

        const x =
            (Math.random() - .5) *
            500;

        const y =
            (Math.random() - .5) *
            500;

        const animation =
            item.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            scale(1)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        900 +
                        Math.random() * 600,

                    easing:
                        "ease-out"
                }
            );

        animation.finished.then(
            function () {

                item.remove();

            }
        );

    }

}