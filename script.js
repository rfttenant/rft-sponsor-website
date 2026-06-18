const form = document.getElementById("sponsorForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function () {
  statusMessage.textContent = "Pengajuan berhasil dikirim. Terima kasih, tim kami akan meninjau proposal kamu.";

  setTimeout(() => {
    form.reset();
  }, 800);
});