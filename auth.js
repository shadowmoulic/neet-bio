let supabaseClient = null;
try {
  if (window.supabase) {
    supabaseClient = window.supabase.createClient(window.ENV.SUPABASE_URL, window.ENV.SUPABASE_ANON_KEY);
  } else {
    console.warn("Supabase SDK failed to load. Authentication will be disabled.");
  }
} catch (e) {
  console.error("Failed to initialize Supabase:", e);
}

const Auth = (function() {
  let currentUser = null;
  let currentRole = null; // 'free' or 'paid'

  // Inject Modals into DOM
  document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML('beforeend', `
      <style>
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(14,28,23,0.9); backdrop-filter: blur(8px);
          display: none; place-items: center; z-index: 1000;
          padding: 20px;
        }
        .modal-overlay.active { display: grid; }
        .modal-box {
          background: var(--panel); border: 1px solid var(--line);
          border-radius: var(--r); padding: 30px; width: 100%; max-width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5); position: relative;
        }
        .modal-close {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: var(--ink-dim);
          font-size: 24px; cursor: pointer;
        }
        .modal-close:hover { color: var(--ink); }
        .modal-title { font-family: var(--serif); font-size: 24px; font-weight: 600; margin-bottom: 20px; text-align: center; }
        .auth-tabs { display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid var(--line2); padding-bottom: 10px; }
        .auth-tab { flex: 1; background: none; border: none; color: var(--ink-dim); font-size: 16px; font-weight: 600; padding: 8px; cursor: pointer; transition: 0.2s; }
        .auth-tab.active { color: var(--gold); border-bottom: 2px solid var(--gold); margin-bottom: -11px; }
        .auth-form-group { margin-bottom: 16px; position: relative; }
        .auth-form-group label { display: block; font-size: 12px; color: var(--ink-dim); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.1em; }
        .auth-input { width: 100%; background: var(--bg); border: 1px solid var(--line2); border-radius: 8px; padding: 12px; color: var(--ink); font-size: 15px; }
        .auth-input:focus { outline: none; border-color: var(--gold); }
        .pwd-toggle { position: absolute; right: 12px; top: 34px; background: none; border: none; color: var(--ink-dim); cursor: pointer; font-size: 16px; }
        .auth-btn { width: 100%; margin-top: 10px; justify-content: center; }
        .auth-error { color: var(--bad); font-size: 13px; margin-top: 10px; text-align: center; display: none; }
        
        /* Specific fields for signup */
        .signup-only { display: none; }
        .signup-mode .signup-only { display: block; }

        /* Premium Modal Specifics */
        .premium-box { text-align: center; }
        .premium-icon { font-size: 48px; margin-bottom: 16px; }
        .premium-desc { color: var(--ink-dim); font-size: 14px; margin-bottom: 24px; }
        
        /* Responsive Topbar Auth */
        @media(max-width: 600px) {
          #authContainer .btn { padding: 6px 10px; font-size: 11.5px; }
          .auth-role-text { display: none; }
        }
      </style>

      <!-- Auth Modal -->
      <div class="modal-overlay" id="authModal">
        <div class="modal-box" id="authModalBox">
          <button class="modal-close" onclick="Auth.hideAuthModal()">&times;</button>
          <div class="auth-tabs">
            <button class="auth-tab active" id="tabLogin" onclick="Auth.switchTab('login')">Login</button>
            <button class="auth-tab" id="tabSignup" onclick="Auth.switchTab('signup')">Sign Up</button>
          </div>
          
          <form id="authForm" onsubmit="Auth.handleAuthSubmit(event)">
            
            <div class="auth-form-group signup-only">
              <label>Full Name</label>
              <input type="text" id="authName" class="auth-input">
            </div>

            <div class="auth-form-group signup-only">
              <label>Phone Number</label>
              <input type="tel" id="authPhone" class="auth-input">
            </div>

            <div class="auth-form-group">
              <label>Email</label>
              <input type="email" id="authEmail" class="auth-input" required>
            </div>
            
            <div class="auth-form-group">
              <label>Password</label>
              <input type="password" id="authPassword" class="auth-input" required>
              <button type="button" class="pwd-toggle" onclick="Auth.togglePassword()">👁️</button>
            </div>
            
            <button type="submit" class="btn btn-primary auth-btn" id="authSubmitBtn">Login</button>
            <div class="auth-error" id="authError"></div>
          </form>
        </div>
      </div>

      <!-- Premium Modal -->
      <div class="modal-overlay" id="premiumModal">
        <div class="modal-box premium-box">
          <button class="modal-close" onclick="Auth.hidePremiumModal()">&times;</button>
          <div class="premium-icon">👑</div>
          <h2 class="modal-title" style="margin-bottom: 10px">Unlock Premium</h2>
          <p class="premium-desc">Upgrade to premium to access all chapters, flashcards, and boss battles.</p>
          <a href="https://topmate.io/sayak_moulic/2149801" target="_blank" class="btn btn-primary auth-btn" style="text-decoration:none">Get Premium Subscription</a>
          <p style="font-size:12px; color:var(--ink-faint); margin-top:16px">Once paid, your account will be manually upgraded.</p>
        </div>
      </div>
    `);
    updateTopBarUI();
  });

  let authMode = 'login'; // 'login' or 'signup'

  function switchTab(mode) {
    authMode = mode;
    document.getElementById('tabLogin').classList.toggle('active', mode === 'login');
    document.getElementById('tabSignup').classList.toggle('active', mode === 'signup');
    document.getElementById('authModalBox').classList.toggle('signup-mode', mode === 'signup');
    
    // Toggle required fields
    document.getElementById('authName').required = (mode === 'signup');
    document.getElementById('authPhone').required = (mode === 'signup');

    document.getElementById('authSubmitBtn').textContent = mode === 'login' ? 'Login' : 'Sign Up';
    document.getElementById('authError').style.display = 'none';
  }

  function togglePassword() {
    const input = document.getElementById('authPassword');
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  function showAuthModal() {
    document.getElementById('authModal').classList.add('active');
  }

  function hideAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authEmail').value = '';
    document.getElementById('authPassword').value = '';
    document.getElementById('authName').value = '';
    document.getElementById('authPhone').value = '';
  }

  function showPremiumModal() {
    document.getElementById('premiumModal').classList.add('active');
  }

  function hidePremiumModal() {
    document.getElementById('premiumModal').classList.remove('active');
  }

  function showError(msg) {
    const el = document.getElementById('authError');
    el.textContent = msg;
    el.style.display = 'block';
  }

  async function handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value;
    const phone = document.getElementById('authPhone').value;
    const btn = document.getElementById('authSubmitBtn');
    
    btn.disabled = true;
    btn.textContent = 'Loading...';
    document.getElementById('authError').style.display = 'none';

    try {
      if (authMode === 'signup') {
        const { data, error } = await supabaseClient.auth.signUp({ 
          email, 
          password,
          options: {
            data: {
              full_name: name,
              phone: phone
            }
          }
        });
        if (error) throw error;
        // Check if email confirmation is required
        if (data.user && data.user.identities && data.user.identities.length === 0) {
           showError("Email already in use.");
        } else {
           // Successfully signed up and logged in (if email confirm is off)
           await refreshSession();
           hideAuthModal();
        }
      } else {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await refreshSession();
        hideAuthModal();
      }
    } catch (err) {
      showError(err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = authMode === 'login' ? 'Login' : 'Sign Up';
    }
  }

  async function logout() {
    if (supabaseClient) await supabaseClient.auth.signOut();
    currentUser = null;
    currentRole = null;
    updateTopBarUI();
    // If they were inside a chapter, take them back home
    if(window.App && typeof window.App.home === 'function') {
      window.App.home();
    }
  }

  async function fetchRole(userId) {
    // Fetch role from neet_users
    try {
      if (!supabaseClient) return 'free';
      const { data, error } = await supabaseClient
        .from('neet_users')
        .select('role')
        .eq('id', userId)
        .single();
        
      if (error) throw error;
      return data ? data.role : 'free';
    } catch (e) {
      console.error("Failed to fetch role", e);
      return 'free'; // default to free on failure
    }
  }

  async function refreshSession() {
    try {
      if (!supabaseClient) throw new Error("Supabase client missing");
      const { data: { session }, error } = await supabaseClient.auth.getSession();
      if (error) {
        console.error("Session error:", error);
      }
      if (session && session.user) {
        currentUser = session.user;
        currentRole = await fetchRole(currentUser.id);
      } else {
        currentUser = null;
        currentRole = null;
      }
    } catch (err) {
      console.error("Refresh session failed", err);
      currentUser = null;
      currentRole = null;
    }
    updateTopBarUI();
  }

  function updateTopBarUI() {
    // We update components.js injected topbar here
    const topbar = document.querySelector('.topbar');
    if (!topbar) {
      // If it doesn't exist yet, wait and try again
      setTimeout(updateTopBarUI, 50);
      return;
    }
    
    let authContainer = document.getElementById('authContainer');
    if (!authContainer) {
      authContainer = document.createElement('div');
      authContainer.id = 'authContainer';
      authContainer.style.display = 'flex';
      authContainer.style.gap = '10px';
      authContainer.style.alignItems = 'center';
      topbar.appendChild(authContainer);
    }

    if (currentUser) {
      authContainer.innerHTML = `
        <span class="auth-role-text" style="font-size: 12px; color: var(--ink-dim)">Role: <b style="color:var(--gold);text-transform:uppercase">${currentRole}</b></span>
        <button class="btn btn-ghost btn-sm" onclick="Auth.logout()">Logout</button>
      `;
    } else {
      authContainer.innerHTML = `
        <button class="btn btn-ghost btn-sm" onclick="Auth.switchTab('login'); Auth.showAuthModal()">Login</button>
        <button class="btn btn-primary btn-sm" onclick="Auth.switchTab('signup'); Auth.showAuthModal()">Sign Up</button>
      `;
    }
  }

  // Initial check
  if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      refreshSession();
    });
  } else {
    // If supabase failed to load, still update UI to show error or default state
    updateTopBarUI();
  }

  return {
    switchTab, togglePassword, showAuthModal, hideAuthModal, 
    handleAuthSubmit, logout, showPremiumModal, hidePremiumModal,
    getCurrentUser: () => currentUser,
    getCurrentRole: () => currentRole
  };
})();
