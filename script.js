const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const form = document.getElementById("sponsorForm");
const statusMessage = document.getElementById("statusMessage");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

/* Scroll reveal animation */
const revealItems = document.querySelectorAll(".reveal-section");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

/* Hover tilt effect */
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

/* Detail popup for support/menu cards */
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.querySelector(".modal-close");

function openModal(title, desc, images = "") {
  if (!modal) return;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;

  const gallery = document.getElementById("modalGallery");
  if (gallery) {
    gallery.innerHTML = "";
    const imageList = images ? images.split("|").filter(Boolean) : [];
    imageList.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${title} preview`;
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
      });
      gallery.appendChild(img);
    });
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".popup-trigger").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    openModal(
      item.dataset.title || "RFT Tenant",
      item.dataset.desc || "Detail kolaborasi RFT Tenant.",
      item.dataset.images || ""
    );
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  modal.querySelector(".modal-btn")?.addEventListener("click", closeModal);
}

/* Image lightbox for menu preview */
const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImage");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    lightboxImg.src = "";
  }, 200);
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeLightbox();
  }
});

/* Form success popup */
const successPopup = document.createElement("div");
successPopup.className = "form-success-popup";
successPopup.textContent = "Proposal terkirim. Tim RFT Tenant akan meninjau pengajuan kamu.";
document.body.appendChild(successPopup);

if (form) {
  form.addEventListener("submit", () => {
    statusMessage.textContent = "Proposal berhasil dikirim. Terima kasih, tim RFT Tenant akan meninjau pengajuan kamu.";
    successPopup.classList.add("active");

    setTimeout(() => {
      successPopup.classList.remove("active");
    }, 3400);

    setTimeout(() => {
      form.reset();
    }, 900);
  });
}
