/* =========================
   PROJECT PREVIEW
========================= */
const projectLinks = document.querySelectorAll(".project-link");
const previewBox = document.querySelector(".project-preview");
const previewImage = document.querySelector(".project-preview__image");

const previewMap = {
  shopify: "preview-shopify",
  landing: "preview-landing",
  ui: "preview-ui",
  qa: "preview-qa",
};

if (projectLinks.length && previewBox && previewImage) {
  projectLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const previewKey = link.dataset.preview;

      previewImage.className = "project-preview__image";
      previewImage.classList.add(previewMap[previewKey]);

      previewBox.classList.add("is-visible");
    });

    link.addEventListener("mouseleave", () => {
      previewBox.classList.remove("is-visible");
    });
  });
}

/* =========================
   REVEAL ON SCROLL
========================= */
const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

/* =========================
   TYPING EFFECT
========================= */
const typingText = document.getElementById("typing-text");
const typingCursor = document.querySelector(".typing-cursor");

const finalTitle = `Hey, I'm Rodrigo —
Frontend Developer`;

let charIndex = 0;

function typeTitle() {
  if (!typingText) return;

  if (charIndex < finalTitle.length) {
    const currentChar = finalTitle.charAt(charIndex);

    if (currentChar === "\n") {
      typingText.innerHTML += "<br>";
    } else {
      typingText.innerHTML += currentChar;
    }

    charIndex++;
    setTimeout(typeTitle, 60);
  } else if (typingCursor) {
    typingCursor.classList.add("is-done");
  }
}

window.addEventListener("load", () => {
  if (typingText) {
    typingText.innerHTML = "";
    typeTitle();
  }
});