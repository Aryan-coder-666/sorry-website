/* =========================================
   SETTINGS
========================================= */

const settings = {

    typeSpeed: 35,

    message:
        "I know that sometimes saying sorry isn't enough. I wanted to slow down, think about everything, and put the things I couldn't say properly into this little page. I don't expect a button to fix everything. I just wanted you to know that I understand, I'm genuinely sorry, and I hope this message at least makes you smile a little."

};


/* =========================================
   ELEMENTS
========================================= */

const intro =
    document.getElementById("intro");

const website =
    document.getElementById("website");

const enterBtn =
    document.getElementById("enterBtn");

const envelope =
    document.getElementById("envelope");

const openHint =
    document.getElementById("openHint");

const typeText =
    document.getElementById("typeText");

const messageNext =
    document.getElementById("messageNext");

const memoryNext =
    document.getElementById("memoryNext");

const heartNext =
    document.getElementById("heartNext");

const yesBtn =
    document.getElementById("yesBtn");

const maybeBtn =
    document.getElementById("maybeBtn");

const choiceMessage =
    document.getElementById("choiceMessage");

const restartBtn =
    document.getElementById("restartBtn");

const musicBtn =
    document.getElementById("musicBtn");

const music =
    document.getElementById("music");

const sections = {

    letter:
        document.getElementById("letterSection"),

    message:
        document.getElementById("messageSection"),

    memories:
        document.getElementById("memoriesSection"),

    heart:
        document.getElementById("heartSection"),

    final:
        document.getElementById("finalSection"),

    ending:
        document.getElementById("endingSection")

};


/* =========================================
   STATE
========================================= */

let currentSection = 0;

let typingTimer = null;

let musicPlaying = false;


/* =========================================
   ENTER WEBSITE
========================================= */

enterBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        website.classList.remove("hidden");

        showSection("letter");

        createParticles();

        tryStartMusic();

    }, 900);

});


/* =========================================
   SECTION SYSTEM
========================================= */

const sectionOrder = [
    "letter",
    "message",
    "memories",
    "heart",
    "final",
    "ending"
];


function showSection(name) {

    Object.values(sections).forEach(section => {

        section.classList.remove("active");

    });

    setTimeout(() => {

        sections[name].classList.add("active");

    }, 50);


    currentSection =
        sectionOrder.indexOf(name);

    updateProgress();

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const dots =
        document.querySelectorAll(".progress-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSection
        );

    });

}


/* =========================================
   ENVELOPE
========================================= */

let envelopeOpened = false;

function openEnvelope() {

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

    openHint.textContent =
        "Opening...";

    setTimeout(() => {

        showSection("message");

        startTyping();

    }, 1400);

}


envelope.addEventListener(
    "click",
    openEnvelope
);


envelope.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);


/* =========================================
   TYPEWRITER
========================================= */

function startTyping() {

    clearInterval(typingTimer);

    typeText.innerHTML = "";

    messageNext.classList.remove("show");

    let index = 0;


    const cursor =
        document.createElement("span");

    cursor.className = "cursor";

    typeText.appendChild(cursor);


    typingTimer = setInterval(() => {

        if (
            index >=
            settings.message.length
        ) {

            clearInterval(typingTimer);

            cursor.remove();

            messageNext.classList.add("show");

            return;

        }


        const character =
            settings.message[index];

        typeText.insertBefore(
            document.createTextNode(character),
            cursor
        );

        index++;

    }, settings.typeSpeed);

}


/* =========================================
   NEXT BUTTONS
========================================= */

messageNext.addEventListener(
    "click",
    () => {

        showSection("memories");

    }
);


memoryNext.addEventListener(
    "click",
    () => {

        showSection("heart");

    }
);


heartNext.addEventListener(
    "click",
    () => {

        showSection("final");

    }
);


/* =========================================
   FINAL BUTTON
========================================= */

yesBtn.addEventListener(
    "click",
    () => {

        choiceMessage.textContent =
            "That's all I wanted to hear. Thank you. ♡";

        createCelebration();

        setTimeout(() => {

            showSection("ending");

        }, 1600);

    }
);


/* =========================================
   MAYBE BUTTON
========================================= */

maybeBtn.addEventListener(
    "click",
    () => {

        choiceMessage.textContent =
            "That's okay. Take your time. ♡";

        maybeBtn.textContent =
            "Okay ♡";

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

        typeText.innerHTML = "";

        messageNext.classList.remove("show");

        choiceMessage.textContent = "";

        maybeBtn.textContent =
            "I'll think about it";

        showSection("letter");

    }
);


/* =========================================
   PARTICLES
========================================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    container.innerHTML = "";


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.setProperty(
            "--duration",
            (5 + Math.random() * 10) + "s"
        );


        particle.style.animationDelay =
            (-Math.random() * 10) + "s";


        const size =
            1 + Math.random() * 3;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";


        container.appendChild(
            particle
        );

    }

}


/* =========================================
   CELEBRATION
========================================= */

function createCelebration() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const item =
            document.createElement("div");

        item.textContent =
            Math.random() > 0.5
                ? "♡"
                : "✦";


        item.style.position =
            "fixed";

        item.style.zIndex =
            "100";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.color =
            Math.random() > 0.5
                ? "#ff9fbe"
                : "#d5c7ff";

        item.style.fontSize =
            (12 + Math.random() * 20) +
            "px";

        item.style.pointerEvents =
            "none";


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() * 300;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


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
                    1000 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );


        document.body.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 2000);

    }

}


/* =========================================
   MUSIC
========================================= */

function tryStartMusic() {

    music.volume = 0.35;

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
                        "Add music/music.mp3 to enable music."
                    );

                });

        }

    }
);