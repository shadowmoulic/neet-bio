document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML('afterbegin', `<div class="topbar">
  <div class="brand" onclick="App.home()">
    <div class="mark">N</div>
    <h1>NEET Bio<span>Class 11 Bio · Ch 3–6</span></h1>
  </div>
  <div class="spacer"></div>
  <div class="xp-pill"><span class="lvl-badge" id="lvlBadge">Lv 1</span> <b id="xpVal">0</b> XP</div>
  <button class="icon-btn" title="Reset all progress" onclick="App.resetAll()">⟳</button>
</div>`);
  document.body.insertAdjacentHTML('beforeend', `<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand">
      <div class="mark">N</div>
      <div class="brand-text">
        <h3>NEET Bio</h3>
        <p>The Naturalist's Codex</p>
      </div>
    </div>
    <div class="footer-links">
      <div class="link-col">
        <h4>Explore</h4>
        <a href="#" onclick="App.home()">All Chapters</a>
        <a href="#" onclick="window.scrollTo(0,0)">Back to Top</a>
      </div>
      <div class="link-col">
        <h4>Legal</h4>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; ${new Date().getFullYear()} NEET Bio. All rights reserved.</p>
    <p>Built for deep understanding & memory.</p>
  </div>
</footer>`);
});
