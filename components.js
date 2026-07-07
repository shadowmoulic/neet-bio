document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML('afterbegin', `<div class="topbar">
  <div class="brand" onclick="App.home()">
    <div class="mark">🧬</div>
    <h1>The Codex<span>NEET 2026 · Full Syllabus</span></h1>
  </div>
  <div class="spacer"></div>
  <div class="xp-pill"><span class="lvl-badge" id="lvlBadge">Lv 1</span> <b id="xpVal">0</b> XP</div>
  <button class="icon-btn" title="Reset all progress" onclick="App.resetAll()">⟳</button>
</div>`);
  document.body.insertAdjacentHTML('beforeend', `<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div class="mark" style="font-size: 28px; background: rgba(255,215,0,0.15); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; box-shadow: 0 4px 15px rgba(255,215,0,0.1);">🧬</div>
      <div class="brand-text" style="text-align: left;">
        <h3 style="margin: 0 0 4px 0; font-family: var(--serif); color: var(--ink); font-size: 20px;">The Naturalist's Codex</h3>
        <p style="margin: 0; font-size: 11px; color: var(--gold); text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.9;">NEET 2026 · Bio XI &amp; XII · Physics · Chemistry</p>
      </div>
    </div>
    <div class="footer-links">
      <div class="link-col">
        <h4>Explore</h4>
        <a href="/" onclick="App.home()">All Chapters</a>
        <a href="/" onclick="App.switchFilter('bio11')">Biology XI</a>
        <a href="/" onclick="App.switchFilter('bio12')">Biology XII</a>
        <a href="/" onclick="App.switchFilter('phy')">Physics</a>
        <a href="/" onclick="App.switchFilter('chem')">Chemistry</a>
        <a href="#" onclick="window.scrollTo(0,0)">Back to Top</a>
      </div>
      <div class="link-col">
        <h4>Legal</h4>
        <a href="/terms/">Terms of Service</a>
        <a href="/privacy/">Privacy Policy</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; ${new Date().getFullYear()} The Naturalist's Codex. All rights reserved.</p>
    <p>Built for deep understanding &amp; memory.</p>
  </div>
</footer>`);
});
