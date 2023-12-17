// Registrace GSAP ScrollTrigger pluginu
gsap.registerPlugin(ScrollTrigger);

// Funkce pro rozdělení textu do samostatných slov obalených ve span elementech
function splitText(selector) {
  let element = document.querySelector(selector);
  let text = element.innerText;
  let splitText = text.split(" ");
  element.innerHTML = "";

  for (let i = 0; i < splitText.length; i++) {
    let span = document.createElement("span");
    span.innerText = splitText[i] + (i !== splitText.length - 1 ? " " : "");
    element.appendChild(span);
  }
}

// Animace pro USP
gsap.from(".pd-feature", {
  scrollTrigger: { trigger: ".pd-feature", start: "top bottom-=50" },
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

// Animace kouře
gsap.from(".pd-smoke", {
  scrollTrigger: ".pd-smoke",
  scale: 0.95,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// Aplikování rozdělení textu na titulky
splitText(".pd-title");
splitText(".pd-subtitle");

// Časová osa pro animace titulku a podtitulku
const tl = gsap.timeline();
tl.from(".pd-title span", {
  duration: 1,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.inOut",
})
  .from(
    ".pd-subtitle span",
    {
      duration: 0.8,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.inOut",
    },
    "-=1"
  )
  .from(
    ".pd-cta",
    {
      duration: 1,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      ease: "power2.inOut",
    },
    "-=1"
  );

function handleLanguageChange(newLang) {
  console.log("Jazyk byl změněn na: " + newLang);
}
