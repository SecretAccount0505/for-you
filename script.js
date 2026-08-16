/* ==========================================================
   FOR YOU — 100 REASONS
   Complete experience controller
========================================================== */


/* ==========================================================
   100 REASONS
   ----------------------------------------------------------
   You can rewrite these later.
   DO NOT change the structure.
========================================================== */

const reasons = [

    {
        title: "Your smile.",
        text: "There's something about your smile that can completely change my day."
    },

    {
        title: "The way you make me laugh.",
        text: "You somehow manage to make me laugh even when I wasn't expecting to."
    },

    {
        title: "How comfortable I feel around you.",
        text: "I can be completely myself around you without feeling like I have to pretend."
    },

    {
        title: "The little things you do.",
        text: "It's the tiny things you probably don't even notice that make you so special."
    },

    {
        title: "The way you care.",
        text: "You have a way of making the people you care about feel genuinely important."
    },

    {
        title: "Your personality.",
        text: "There are so many little parts of your personality that I couldn't imagine being without."
    },

    {
        title: "The memories we've made.",
        text: "Every memory with you feels like something worth keeping forever."
    },

    {
        title: "You make ordinary days better.",
        text: "Even an ordinary day somehow feels different when you're part of it."
    },

    {
        title: "The way you listen.",
        text: "You make me feel like what I have to say actually matters."
    },

    {
        title: "Your sense of humour.",
        text: "I love the way your sense of humour somehow matches mine."
    },

    {
        title: "Your kindness.",
        text: "You can be incredibly kind in ways you probably don't even realise."
    },

    {
        title: "The way you remember things.",
        text: "I love when you remember tiny details that I didn't expect you to remember."
    },

    {
        title: "Your voice.",
        text: "Hearing your voice can instantly make things feel a little better."
    },

    {
        title: "The way you get excited.",
        text: "I love seeing you get genuinely excited about things you care about."
    },

    {
        title: "How much you mean to me.",
        text: "Sometimes I don't think you realise just how important you are to me."
    },

    {
        title: "The conversations we have.",
        text: "I could talk to you for ages and still feel like there is more to say."
    },

    {
        title: "Your honesty.",
        text: "I appreciate that I can trust you to be honest with me."
    },

    {
        title: "The way you make me feel understood.",
        text: "You understand parts of me that I don't always know how to explain."
    },

    {
        title: "Your little reactions.",
        text: "The tiny expressions you make are some of my favourite things."
    },

    {
        title: "The way you care about people.",
        text: "Seeing how much you care about the people around you makes me admire you."
    },

    {
        title: "Your confidence.",
        text: "I love seeing you be yourself without worrying about what everyone else thinks."
    },

    {
        title: "Your determination.",
        text: "When you really want something, I love seeing how determined you can be."
    },

    {
        title: "The way you cheer me up.",
        text: "You have a ridiculous ability to make bad days feel less bad."
    },

    {
        title: "Your patience.",
        text: "I appreciate the patience you have with me more than I probably say."
    },

    {
        title: "Your laugh.",
        text: "Your laugh is one of those sounds that I could never get tired of hearing."
    },

    {
        title: "The way you say certain things.",
        text: "There are little phrases and ways you say things that have somehow become favourites of mine."
    },

    {
        title: "Your weird side.",
        text: "I love that you can be completely weird around me and I can be weird right back."
    },

    {
        title: "How you make me feel safe being myself.",
        text: "Being able to be genuinely myself around someone is something I value more than I can explain."
    },

    {
        title: "Your imagination.",
        text: "I love the way your mind works and the things you come up with."
    },

    {
        title: "The way you care about the little details.",
        text: "You notice things that other people might completely miss."
    },

    {
        title: "Your ability to surprise me.",
        text: "You somehow still manage to surprise me in the best ways."
    },

    {
        title: "How much fun you are.",
        text: "Even doing something completely random with you can turn into a memory."
    },

    {
        title: "The way you support me.",
        text: "Knowing that you're there for me means more than I can properly put into words."
    },

    {
        title: "Your thoughtfulness.",
        text: "You think about how other people feel, and that says a lot about you."
    },

    {
        title: "Your little habits.",
        text: "Even the random little things you do have somehow become things I love."
    },

    {
        title: "The way you make me feel important.",
        text: "You have a way of making me feel like I actually matter to you."
    },

    {
        title: "Your energy.",
        text: "You bring an energy into my life that I genuinely wouldn't want to lose."
    },

    {
        title: "The way you can turn a conversation into an adventure.",
        text: "Somehow our conversations can go from completely normal to completely ridiculous."
    },

    {
        title: "Your curiosity.",
        text: "I love how interested you can get when something genuinely catches your attention."
    },

    {
        title: "The way you make me feel lucky.",
        text: "Sometimes I randomly realise how lucky I am to have you."
    },

    {
        title: "Your silly moments.",
        text: "Some of my favourite moments are the ones where neither of us is taking anything seriously."
    },

    {
        title: "The way you know me.",
        text: "You know sides of me that not everyone gets to see."
    },

    {
        title: "Your generosity.",
        text: "I love how willing you are to give your time and attention to people you care about."
    },

    {
        title: "The way you encourage me.",
        text: "You make me want to keep going when things get difficult."
    },

    {
        title: "Your ability to make me forget about everything else.",
        text: "When I'm talking to you, everything else can disappear for a while."
    },

    {
        title: "The way you react to good news.",
        text: "Seeing you get happy about something makes me happy too."
    },

    {
        title: "Your creativity.",
        text: "I love seeing the things your mind comes up with."
    },

    {
        title: "The way you make memories special.",
        text: "Even simple moments can become memories I want to remember."
    },

    {
        title: "Your honesty with your feelings.",
        text: "I appreciate when you let me see what you're really thinking and feeling."
    },

    {
        title: "The way you make me smile without trying.",
        text: "Sometimes I realise I'm smiling just because I'm talking to you."
    },

    {
        title: "Your sense of adventure.",
        text: "I love the idea of experiencing new things with you."
    },

    {
        title: "The way you make time for me.",
        text: "Even when you're busy, I appreciate every moment you choose to spend with me."
    },

    {
        title: "Your little messages.",
        text: "Sometimes one message from you can completely change my mood."
    },

    {
        title: "The way you understand my humour.",
        text: "You somehow understand jokes that probably shouldn't be funny."
    },

    {
        title: "Your ability to make boring things fun.",
        text: "You can make even the most boring situation entertaining."
    },

    {
        title: "The way you care when I'm struggling.",
        text: "I never take for granted the way you show up when I need someone."
    },

    {
        title: "Your optimism.",
        text: "I love the hopeful side of you."
    },

    {
        title: "The way you make me feel appreciated.",
        text: "You remind me that the things I do can actually mean something."
    },

    {
        title: "Your little compliments.",
        text: "The compliments you give me stay in my head for much longer than you probably realise."
    },

    {
        title: "Your ability to forgive.",
        text: "I appreciate the understanding you can show when things don't go perfectly."
    },

    {
        title: "Your ambition.",
        text: "I love seeing you have things you're passionate about and want to achieve."
    },

    {
        title: "The way you make me want to be better.",
        text: "Being around you makes me want to become a better version of myself."
    },

    {
        title: "Your randomness.",
        text: "I genuinely never know what you're going to say next."
    },

    {
        title: "The way you make me feel heard.",
        text: "You don't just listen to respond; you actually make me feel heard."
    },

    {
        title: "Your ability to brighten a room.",
        text: "You can change the atmosphere around you without even trying."
    },

    {
        title: "The way you remember our moments.",
        text: "I love knowing that our memories matter to you too."
    },

    {
        title: "Your softness.",
        text: "There's a gentleness to the way you can care about someone that I really love."
    },

    {
        title: "The way you think about me.",
        text: "You make me feel seen and understood in a way that's truly special."
    },

    {
        title: "Your resilience.",
        text: "I admire how you keep moving forward when things aren't easy."
    },

    {
        title: "The way you make me feel wanted.",
        text: "Being reminded that you actually want me in your life means everything."
    },

    {
        title: "Your ability to make small moments matter.",
        text: "You have a way of turning tiny moments into memories."
    },

    {
        title: "The way you celebrate things with me.",
        text: "I love being able to share exciting moments with you."
    },

    {
        title: "Your openness.",
        text: "I appreciate the trust behind the things you choose to share with me."
    },

    {
        title: "The way you make me feel less alone.",
        text: "Knowing I have someone I can talk to makes a huge difference."
    },

    {
        title: "Your sense of humour when things go wrong.",
        text: "You can somehow find something funny even when everything goes completely off plan."
    },

    {
        title: "The way you notice when something is wrong.",
        text: "You can sometimes tell when I'm not okay before I even say anything."
    },

    {
        title: "Your enthusiasm.",
        text: "I love when you get completely invested in something you care about."
    },

    {
        title: "The way you make me feel special.",
        text: "You have a way of making me feel like I'm not just another person in your life."
    },

    {
        title: "Your little jokes.",
        text: "The jokes that only make sense to us are some of my favourites."
    },

    {
        title: "Your ability to make me forget the time.",
        text: "Hours can pass when I'm talking to you and somehow it feels like minutes."
    },

    {
        title: "The way you can be serious and silly.",
        text: "I love that you can switch between deep conversations and absolute nonsense."
    },

    {
        title: "Your loyalty.",
        text: "Knowing that you care about the people close to you means a lot to me."
    },

    {
        title: "The way you make me feel understood without many words.",
        text: "Sometimes you don't even need to say much for me to know you understand."
    },

    {
        title: "Your excitement about the future.",
        text: "I love hearing you talk about the things you want to experience."
    },

    {
        title: "The way you make me laugh at myself.",
        text: "You have a talent for making me realise when I'm being ridiculous."
    },

    {
        title: "Your little surprises.",
        text: "Even the smallest unexpected things from you can mean a lot."
    },

    {
        title: "The way you make conversations feel easy.",
        text: "Talking to you never feels like I have to force something to say."
    },

    {
        title: "Your ability to make me feel valued.",
        text: "You remind me that I have a place in your life."
    },

    {
        title: "The way you care about the future.",
        text: "I love that you think about where you're going and what matters to you."
    },

    {
        title: "Your little expressions.",
        text: "I could probably recognise half of your reactions without you saying anything."
    },

    {
        title: "The way you make me feel calm.",
        text: "Sometimes just talking to you makes everything feel a little less overwhelming."
    },

    {
        title: "Your ability to make things memorable.",
        text: "You somehow make moments stick in my head."
    },

    {
        title: "The way you make me proud.",
        text: "Seeing you do things you're proud of makes me genuinely happy for you."
    },

    {
        title: "Your individuality.",
        text: "You have your own way of doing things, and I wouldn't want you to change that."
    },

    {
        title: "The way you make me feel connected to you.",
        text: "Even when we're apart, you can still make me feel close to you."
    },

    {
        title: "Your little acts of kindness.",
        text: "Small kind things can say more than huge gestures ever could."
    },

    {
        title: "The way you make me feel appreciated for being myself.",
        text: "I never want to take for granted how nice it is to feel accepted."
    },

    {
        title: "Your ability to make me curious.",
        text: "There's always another part of you I want to understand."
    },

    {
        title: "The way you make me look forward to things.",
        text: "Having something involving you to look forward to can make an ordinary day better."
    },

    {
        title: "Your patience with my nonsense.",
        text: "Honestly, the amount of nonsense you tolerate from me deserves its own reason."
    },

    {
        title: "The way you make me feel lucky.",
        text: "Out of all the people in the world, I'm grateful our paths crossed."
    },

    {
        title: "The person you are becoming.",
        text: "I love seeing you grow, change and become more yourself."
    },

    {
        title: "The person you already are.",
        text: "You don't need to become someone else to be amazing."
    },

    {
        title: "Everything we haven't experienced yet.",
        text: "I love knowing there are still so many memories we haven't made."
    },

    {
        title: "Our future memories.",
        text: "Some of my favourite memories are the ones we haven't even made yet."
    },

    {
        title: "Because I can be completely honest with you.",
        text: "I value having someone I can talk to honestly."
    },

    {
        title: "Because you matter to me.",
        text: "More than a simple sentence on a website could ever explain."
    },

    {
        title: "Because you make my life different.",
        text: "My life genuinely wouldn't be the same without you in it."
    },

    {
        title: "Because you're my favourite person.",
        text: "You're someone I want beside me through all the random parts of life."
    },

    {
        title: "Because I love our little world.",
        text: "The jokes, conversations, memories and moments that belong to us mean so much to me."
    },

    {
        title: "Because of all the things I haven't mentioned.",
        text: "There are hundreds of tiny reasons that never made this list."
    },

    {
        title: "Because I could keep going.",
        text: "Even after 100 reasons, I could probably sit here and think of another hundred."
    },

    {
        title: "Because you're special to me.",
        text: "There isn't really a complicated explanation for this one."
    },

    {
        title: "Because you're part of my life.",
        text: "And I'm genuinely grateful that you are."
    },

    {
        title: "Because I love you.",
        text: "That's the simplest reason of all, and probably the most important."
    }

];


/* ==========================================================
   REASON VALIDATION
========================================================== */

if (reasons.length < 100) {

    console.error(
        `Only ${reasons.length} reasons were provided.`
    );

} else if (reasons.length > 100) {

    console.warn(
        `${reasons.length} reasons provided. Using the first 100.`
    );

    reasons.length = 100;

}

console.log(
    `Website loaded with ${reasons.length} reasons.`
);


/* ==========================================================
   ELEMENTS
========================================================== */

const intro =
    document.getElementById("intro");

const reasonsScreen =
    document.getElementById("reasons");

const finalScreen =
    document.getElementById("final");

    const milestoneScreen =
    document.getElementById("milestone");

const milestoneNumber =
    document.getElementById("milestoneNumber");

const milestoneTitle =
    document.getElementById("milestoneTitle");

const milestoneText =
    document.getElementById("milestoneText");

const milestoneContinue =
    document.getElementById("milestoneContinue");

const beginButton =
    document.getElementById("beginButton");

const nextButton =
    document.getElementById("nextButton");

const previousButton =
    document.getElementById("previousButton");

const restartButton =
    document.getElementById("restartButton");

const letterButton =
    document.getElementById("letterButton");

const letterContinue =
    document.getElementById("letterContinue");

const finalIntro =
    document.getElementById("finalIntro");

const letter =
    document.getElementById("letter");

const finalMessage =
    document.getElementById("finalMessage");

const reasonCard =
    document.getElementById("reasonCard");

const reasonNumber =
    document.getElementById("reasonNumber");

const reasonTitle =
    document.getElementById("reasonTitle");

const reasonText =
    document.getElementById("reasonText");

const counter =
    document.getElementById("counter");

const progress =
    document.getElementById("progress");

const particles =
    document.getElementById("particles");

/* ==========================================================
   MUSIC
========================================================== */

const backgroundMusic =
    document.getElementById(
        "backgroundMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

const musicIcon =
    document.getElementById(
        "musicIcon"
    );

const musicLabel =
    document.getElementById(
        "musicLabel"
    );

let musicPlaying = false;


/* ==========================================================
   MUSIC CONTROLLER
========================================================== */

async function toggleMusic() {

    if (!musicPlaying) {

        try {

            await backgroundMusic.play();

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

            musicIcon.textContent = "♫";

            musicLabel.textContent =
                "Playing";

        } catch (error) {

            console.log(
                "Music could not start:",
                error
            );

        }

    } else {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.classList.remove(
            "playing"
        );

        musicIcon.textContent = "♫";

        musicLabel.textContent =
            "Sound";

    }

}


musicButton.addEventListener(
    "click",
    toggleMusic
);

/* ==========================================================
   STATE
========================================================== */

let currentReason = 0;

let isChanging = false;

/* ==========================================================
   MILESTONES
========================================================== */

const milestones = {

    25: {
        number: "25",
        title: "25 already?",
        text: "And somehow I still have so much more to say."
    },

    50: {
        number: "50",
        title: "Halfway.",
        text: "50 reasons down. And I still haven't run out."
    },

    75: {
        number: "75",
        title: "We're getting close.",
        text: "But honestly, I could probably keep going forever."
    }

};


/* ==========================================================
   HELPERS
========================================================== */

function formatNumber(value) {

    return String(value).padStart(2, "0");

}


function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(screenElement => {

            screenElement.classList.remove("active");

        });

    screen.classList.add("active");

}

/* ==========================================================
   FINAL PHASE CONTROLLER
========================================================== */

function showFinalPhase(phase) {

    document
        .querySelectorAll(".final-phase")
        .forEach(element => {

            element.classList.remove("active");

        });

    phase.classList.add("active");

}


/* ==========================================================
   UPDATE REASON
========================================================== */

function updateReason() {

    const reason =
        reasons[currentReason];

    if (!reason) {
        return;
    }

    reasonNumber.textContent =
        `REASON ${formatNumber(currentReason + 1)}`;

    reasonTitle.textContent =
        reason.title;

    reasonText.textContent =
        reason.text;

    counter.textContent =
        `${formatNumber(currentReason + 1)} / 100`;

    const percentage =
        ((currentReason + 1) / 100) * 100;

    progress.style.width =
        `${percentage}%`;

    previousButton.disabled =
        currentReason === 0;

}


/* ==========================================================
   CHANGE REASON
========================================================== */

function changeReason(direction) {

    if (isChanging) {
        return;
    }

    const newIndex =
        currentReason + direction;

    if (
        newIndex < 0 ||
        newIndex >= reasons.length
    ) {
        return;
    }

    isChanging = true;

    reasonCard.style.opacity = "0";

    reasonCard.style.transform =
        direction > 0
            ? "translateX(45px)"
            : "translateX(-45px)";


    setTimeout(() => {

        currentReason =
            newIndex;

        updateReason();

        reasonCard.style.transform =
            direction > 0
                ? "translateX(-45px)"
                : "translateX(45px)";


        requestAnimationFrame(() => {

            reasonCard.style.opacity = "1";

            reasonCard.style.transform =
                "translateX(0)";

        });


        setTimeout(() => {

            isChanging = false;

        }, 300);

    }, 220);

}


/* ==========================================================
   NEXT
========================================================== */

function nextReason() {

    if (
        currentReason >=
        reasons.length - 1
    ) {

        showScreen(finalScreen);

        return;
    }


    const nextNumber =
        currentReason + 2;


    if (
        milestones[nextNumber]
    ) {

        showMilestone(
            nextNumber
        );

        return;
    }


    changeReason(1);

}

/* ==========================================================
   SHOW MILESTONE
========================================================== */

function showMilestone(number) {

    const milestone =
        milestones[number];

    if (!milestone) {
        return;
    }

    milestoneNumber.textContent =
        milestone.number;

    milestoneTitle.textContent =
        milestone.title;

    milestoneText.textContent =
        milestone.text;

    showScreen(milestoneScreen);

}


/* ==========================================================
   PREVIOUS
========================================================== */

function previousReason() {

    changeReason(-1);

}


/* ==========================================================
   START
========================================================== */

function startExperience() {

    currentReason = 0;

    updateReason();

    showScreen(reasonsScreen);

    if (!musicPlaying) {

        backgroundMusic
            .play()
            .then(() => {

                musicPlaying = true;

                musicButton.classList.add(
                    "playing"
                );

                musicLabel.textContent =
                    "Playing";

            })
            .catch(() => {

                console.log(
                    "Music requires manual activation."
                );

            });

    }

}


/* ==========================================================
   RESTART
========================================================== */

function restartExperience() {

    currentReason = 0;

    updateReason();

    showFinalPhase(finalIntro);

    showScreen(intro);

}


/* ==========================================================
   BUTTON EVENTS
========================================================== */

beginButton.addEventListener(
    "click",
    startExperience
);

nextButton.addEventListener(
    "click",
    nextReason
);

previousButton.addEventListener(
    "click",
    previousReason
);

restartButton.addEventListener(
    "click",
    restartExperience
);

milestoneContinue.addEventListener(
    "click",
    () => {

        currentReason =
            Number(
                milestoneNumber.textContent
            ) - 1;

        updateReason();

        showScreen(reasonsScreen);

    }
);


/* ==========================================================
   KEYBOARD
========================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !reasonsScreen.classList.contains("active")
        ) {
            return;
        }

        if (event.key === "ArrowRight") {

            nextReason();

        }

        if (event.key === "ArrowLeft") {

            previousReason();

        }

    }
);


/* ==========================================================
   TOUCH SWIPING
========================================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchEndX - touchStartX;

        if (
            Math.abs(difference) < 50
        ) {
            return;
        }

        if (
            !reasonsScreen.classList.contains("active")
        ) {
            return;
        }

        if (difference < 0) {

            nextReason();

        } else {

            previousReason();

        }

    },
    {
        passive: true
    }
);


/* ==========================================================
   PARTICLES
========================================================== */

function createParticles() {

    const amount = 50;

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 14}s`;

        particle.style.animationDelay =
            `${Math.random() * -20}s`;

        const size =
            1 + Math.random() * 3;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particles.appendChild(
            particle
        );

    }

}


/* ==========================================================
   INITIALISE
========================================================== */

createParticles();

updateReason();


/* ==========================================================
   SECRET STAR INTERACTION
========================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.classList.contains("star") &&
            !event.target.classList.contains("intro-star") &&
            !event.target.classList.contains("final-star")
        ) {
            return;
        }

        createBurst(
            event.clientX,
            event.clientY
        );

    }
);


function createBurst(x, y) {

    for (let i = 0; i < 12; i++) {

        const particle =
            document.createElement("div");

        particle.textContent = "✦";

        particle.style.position =
            "fixed";

        particle.style.left =
            `${x}px`;

        particle.style.top =
            `${y}px`;

        particle.style.zIndex =
            "999";

        particle.style.pointerEvents =
            "none";

        particle.style.color =
            "#d9a7ba";

        particle.style.fontSize =
            `${8 + Math.random() * 10}px`;

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            30 + Math.random() * 70;

        const endX =
            Math.cos(angle) * distance;

        const endY =
            Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${endX}px),
                            calc(-50% + ${endY}px)
                        )
                        scale(0)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    700 + Math.random() * 400,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );

        document.body.appendChild(
            particle
        );

        setTimeout(
            () => particle.remove(),
            1200
        );

    }

}

/* ==========================================================
   FINAL EXPERIENCE
========================================================== */

letterButton.addEventListener(
    "click",
    () => {

        showFinalPhase(letter);

    }
);


letterContinue.addEventListener(
    "click",
    () => {

        showFinalPhase(finalMessage);

        createFinalBurst();

    }
);

/* ==========================================================
   FINAL BURST
========================================================== */

function createFinalBurst() {

    const symbols = [
        "✦",
        "✧",
        "·"
    ];

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.zIndex =
            "999";

        particle.style.pointerEvents =
            "none";

        particle.style.color =
            "#d9a7ba";

        particle.style.fontSize =
            `${8 + Math.random() * 16}px`;

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            80 +
            Math.random() *
            220;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(1)",

                    opacity: 1,

                    offset: 0.15
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(0)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    1200 +
                    Math.random() * 900,

                easing:
                    "cubic-bezier(.16,.8,.3,1)"
            }
        );

        document.body.appendChild(
            particle
        );

        setTimeout(
            () => particle.remove(),
            2200
        );

    }

}

/* ==========================================================
   CURSOR GLOW
========================================================== */

const cursorGlow =
    document.getElementById(
        "cursorGlow"
    );


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);

/* ==========================================================
   LOADING EXPERIENCE
========================================================== */

const loadingScreen =
    document.getElementById(
        "loadingScreen"
    );

const loaderProgress =
    document.getElementById(
        "loaderProgress"
    );


window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            loaderProgress.style.width =
                "100%";

        }, 100);


        setTimeout(() => {

            loadingScreen.classList.add(
                "hidden"
            );

        }, 1300);

    }
);