document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML('afterbegin', `<div class="topbar">
  <div class="brand" onclick="App.home()">
    <div class="mark">N</div>
    <h1>The Naturalist's Codex<span>Class 11 Bio · Ch 3–6</span></h1>
  </div>
  <div class="spacer"></div>
  <div class="xp-pill"><span class="lvl-badge" id="lvlBadge">Lv 1</span> <b id="xpVal">0</b> XP</div>
  <button class="icon-btn" title="Reset all progress" onclick="App.resetAll()">⟳</button>
</div>`);
  document.body.insertAdjacentHTML('beforeend', `<footer>
  <b>The Naturalist's Codex</b> — an active-recall study app for NCERT Class 11 Biology, Chapters 3–6.<br>
  Built for understanding & memory. Progress is saved on this device.
</footer>`);
});
