/* =========================================
   ELEMENTS
========================================= */

const intro =
    document.getElementById("intro");

const startBtn =
    document.getElementById("startBtn");

const site =
    document.getElementById("site");

const envelope =
    document.getElementById("envelope");

const envelopeHint =
    document.getElementById("envelopeHint");

const typedMessage =
    document.getElementById("typedMessage");

const next1 =
    document.getElementById("next1");

const next2 =
    document.getElementById("next2");

const next3 =
    document.getElementById("next3");

const yesBtn =
    document.getElementById("yesBtn");

const stillAngryBtn =
    document.getElementById("stillAngryBtn");

const finalReply =
    document.getElementById("finalReply");

const restartBtn =
    document.getElementById("restartBtn");

const musicBtn =
    document.getElementById("musicBtn");

const music =
    document.getElementById("music");

const floatingHearts =
    document.getElementById("floatingHearts");


/* =========================================
   PAGES
========================================= */

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("page5"),
    document.getElementById("page6")
];

const dots =
    document.querySelectorAll(".dot");


let currentPage = 0;
let envelopeOpened = false;
let typingTimer = null;
let musicPlaying = false;


/* =========================================
   HINGLISH MESSAGE
========================================= */

const message = `
Okay suno... 😭

Mujhe pata hai thodi si gussa ho tum mujhse.

Aur haan... friend ka naam mention karna aur VC na karna,
dono ka case mere against hai. 😭😂

But sach mein, mera tumhe irritate karne ka intention nahi tha.

Bas kabhi kabhi main bina soche kuch kar deta hoon,
aur phir baad mein sochta hoon —
"haan bhai, ye kya kar diya." 😭

Isliye ye meri taraf se ek proper sorry hai.

Ab itna bhi gussa mat ho yaar...
warna ye poori website banane ki mehnat waste ho jayegi. 😂🥲
`;


/* =========================================
   START
========================================= */

startBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        site.classList.remove("hidden");

        createFloatingHearts();

        showPage(0);

        startMusic();

    }, 700);

});


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(index) {

    pages.forEach((page, i) => {

        page.classList.toggle(
            "active",
            i === index
        );

    });

    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

    currentPage = index;

}


function nextPage() {

    if (currentPage < pages.length - 1) {

        showPage(currentPage + 1);

    }

}


/* =========================================
   ENVELOPE
========================================= */

envelope.addEventListener("click", openEnvelope);

envelope.addEventListener("keydown", (event) => {

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        event.preventDefault();

        openEnvelope();

    }

});


function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

    envelopeHint.textContent =
        "Bas ek second... 🥺";

    setTimeout(() => {

        showPage(1);

        typeMessage();

    }, 1200);

}


/* =========================================
   TYPEWRITER
========================================= */

function typeMessage() {

    clearInterval(typingTimer);

    typedMessage.textContent = "";

    next1.classList.add("hidden");

    let index = 0;

    typingTimer = setInterval(() => {

        if (index >= message.length) {

            clearInterval(typingTimer);

            next1.classList.remove("hidden");

            return;

        }

        typedMessage.textContent +=
            message[index];

        index++;

    }, 25);

}


/* =========================================
   NEXT BUTTONS
========================================= */

next1.addEventListener(
    "click",
    () => {

        showPage(2);

    }
);


next2.addEventListener(
    "click",
    () => {

        showPage(3);

    }
);


next3.addEventListener(
    "click",
    () => {

        showPage(4);

    }
);


/* =========================================
   FINAL YES
========================================= */

yesBtn.addEventListener(
    "click",
    () => {

        finalReply.textContent =
            "Yesss 😭💗 mujhe pata tha tum itni bhi gussa nahi ho.";

        createCelebration();

        setTimeout(() => {

            showPage(5);

        }, 1500);

    }
);


/* =========================================
   STILL ANGRY
========================================= */

stillAngryBtn.addEventListener(
    "click",
    () => {

        finalReply.textContent =
            "Accha ji 😭 thoda aur time le lo... main yahin hoon.";

        stillAngryBtn.textContent =
            "Abhi bhi? 😭";

    }
);


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener(
    "click",
    () => {

        envelopeOpened = false;

        envelope.classList.remove("open");

        envelopeHint.textContent =
            "Envelope pe click karo 👆";

        typedMessage.textContent = "";

        next1.classList.add("hidden");

        finalReply.textContent = "";

        stillAngryBtn.textContent =
            "Nahi 😤";

        showPage(0);

    }
);


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHearts() {

    setInterval(() => {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > .5
                ? "♡"
                : "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (10 + Math.random() * 18) + "px";

        const duration =
            6 + Math.random() * 7;

        heart.style.animationDuration =
            duration + "s";

        floatingHearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, duration * 1000);

    }, 700);

}


/* =========================================
   CELEBRATION
========================================= */

function createCelebration() {

    for (let i = 0; i < 30; i++) {

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
            "200";

        item.style.fontSize =
            (12 + Math.random() * 18) + "px";

        item.style.pointerEvents =
            "none";

        document.body.appendChild(item);

        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            100 + Math.random() * 300;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

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
                            scale(1.2)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        900 +
                        Math.random() * 700,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }
            );

        animation.finished.then(() => {

            item.remove();

        });

    }

}


/* =========================================
   MUSIC
========================================= */

function startMusic() {

    music.volume = .3;

    music.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.classList.add(
                "playing"
            );

            musicBtn.textContent = "♫";

        })
        .catch(() => {

            musicPlaying = false;

        });

}


musicBtn.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicBtn.classList.remove(
                "playing"
            );

            musicBtn.textContent = "♪";

        } else {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicBtn.classList.add(
                        "playing"
                    );

                    musicBtn.textContent =
                        "♫";

                })
                .catch(() => {

                    alert(
                        "Music file nahi mila. music/music.mp3 add karo."
                    );

                });

        }

    }
);