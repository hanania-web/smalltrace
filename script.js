
let seconds = 5;
const countdownEl = document.getElementById("countdown");
const actionBtn = document.getElementById("actionBtn");

const interval = setInterval(() => {
  seconds--;
  if (countdownEl) countdownEl.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(interval);

    if (actionBtn) {
      actionBtn.classList.remove("disabled");

      // Auto Scroll ringan
      const scrollInterval = setInterval(() => {
        window.scrollBy(0, 1);
      }, 60);

      // Klik otomatis setelah scroll sebentar
      setTimeout(() => {
        clearInterval(scrollInterval);
        
        // Daftar referer alami
const referers = [
  "https://www.google.com/search?q=video+18+trending",
  
"https://www.reddit.com/r/nsfw/",
  "https://www.quora.com/What-are-some-of-the-best-adult-sites",
  "https://twitter.com/search?q=18+video",
  "https://pinterest.com/pin/viral-video-18/",

"https://www.reddit.com/r/nsfw/",
  "https://www.quora.com/What-are-some-of-the-best-adult-sites",
  "https://www.medium.com/@adultreviews/viral-video",
  "https://www.tumblr.com/tagged/adult-content",
  
"https://www.4chan.org/b/"  
];

// Pilih random referer
const fakeReferer = referers[Math.floor(Math.random() * referers.length)];       

        // Menggunakan window.open dengan referer fake sebagai pengalihan alami
        const win = window.open("", "_blank");
if (win) {
  win.opener = null;
  win.location = actionBtn.href + "?ref=" + encodeURIComponent(fakeReferer);
}
      }, 5000);
    }
  }
}, 1000);
