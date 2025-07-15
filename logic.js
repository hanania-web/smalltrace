fetch('sl.json')
  .then(res => res.json())
  .then(links => {
    const visited = JSON.parse(localStorage.getItem("visited_links")) || {};
    const now = Date.now();
    const allowedInterval = 8.5 * 60 * 60 * 1000;

    const available = links.filter(link => {
      return !(link in visited) || (now - visited[link]) > allowedInterval;
    });

    if (available.length === 0) {
      window.location.href = "https://hanania-web.gethub.io/smalltrace";
      return;
    }

    const selected = available[Math.floor(Math.random() * available.length)];
    visited[selected] = now;
    localStorage.setItem("visited_links", JSON.stringify(visited));

    runCountdownAndRedirect(selected);
  });

function runCountdownAndRedirect(targetUrl) {
  const countdownEl = document.getElementById('countdown');
  const progressBar = document.getElementById('progress-bar');

  let duration = Math.floor(Math.random() * 5) + 5;
  let remaining = duration;
  countdownEl.textContent = remaining;

  const scrollInterval = setInterval(() => {
    window.scrollBy(0, Math.floor(Math.random() * 3) + 1);
  }, 120);

  const timerInterval = setInterval(() => {
    remaining--;
    countdownEl.textContent = remaining;
    const percent = ((duration - remaining) / duration) * 100;
    progressBar.style.width = percent + '%';

    if (remaining <= 0) {
      clearInterval(scrollInterval);
      clearInterval(timerInterval);
      window.location.href = targetUrl;
    }
  }, 1000);
}
