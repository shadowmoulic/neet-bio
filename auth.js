const SUPA_URL = 'https://qbgubcicjqkgowxgrmmp.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZ3ViY2ljanFrZ293eGdybW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDQzMTksImV4cCI6MjA5ODkyMDMxOX0.U8ILE_4Y89k9K3AQkOgNqDpYunwzDm4jBMWv1yPlE24';

let supabaseClient = null;
try {
  if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPA_URL, SUPA_KEY);
  } else if (window.supabase) {
    supabaseClient = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  } else {
    alert("Supabase SDK failed to load. Are you connected to the internet?");
  }
} catch (e) {
  alert("Failed to initialize Supabase: " + e.message);
  console.error("Failed to initialize Supabase:", e);
}

const Auth = (function () {
  let currentUser = null;
  let currentRole = null; // 'free' or 'paid'
  let currentPlan = null; // 'class11', 'class12', 'both'

  // Inject Modals into DOM
  document.addEventListener("DOMContentLoaded", () => {
    // Inject styles in head to prevent any rendering/bleeding issues
    const styleEl = document.createElement('style');
    styleEl.textContent = `
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
        .premium-box { text-align: center; border: 1px solid rgba(255, 215, 0, 0.3); box-shadow: 0 0 40px rgba(255, 215, 0, 0.1), 0 20px 40px rgba(0,0,0,0.6); position: relative; overflow: hidden; }
        .premium-box::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 60%); pointer-events: none; }
        .premium-icon { font-size: 54px; margin-bottom: 12px; filter: drop-shadow(0 0 15px rgba(255,215,0,0.5)); }
        .premium-desc { color: var(--ink-dim); font-size: 14px; margin-bottom: 24px; line-height: 1.5; }
        .premium-title { font-family: var(--serif); font-size: 28px; font-weight: 700; margin-bottom: 10px; background: linear-gradient(to right, #ffd700, #ffb800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        @keyframes popIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .pricing-highlight { 
          animation: popIn 0.3s ease-out;
          margin-bottom: 15px; padding: 14px; 
          background: linear-gradient(145deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05)); 
          border: 1px solid rgba(255,215,0,0.4); 
          color: #fff; border-radius: 10px; 
          font-size: 14px; text-align: center; line-height: 1.5;
          box-shadow: inset 0 0 20px rgba(255,215,0,0.05);
        }
        .pricing-highlight b { color: var(--gold); font-size: 16px; }
        
        /* Responsive Topbar Auth */
        @media(max-width: 600px) {
          #authContainer .btn { padding: 6px 10px; font-size: 11.5px; white-space: nowrap; }
          .auth-role-text { display: none; }
        }
    `;
    document.head.appendChild(styleEl);

    document.body.insertAdjacentHTML('beforeend', `
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
              <label>Phone Number (Optional)</label>
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
            <div class="auth-form-group login-only" style="text-align:center; margin-top: 8px">
              <button type="button" onclick="Auth.forgotPassword()" style="background:none;border:none;color:var(--gold);font-size:13px;cursor:pointer;text-decoration:underline">Forgot password?</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Premium Modal -->
      <div class="modal-overlay" id="premiumModal">
        <div class="modal-box premium-box" style="max-width: 450px;">
          <button class="modal-close" onclick="Auth.hidePremiumModal()">&times;</button>
          <div class="premium-icon">👑</div>
          <h2 class="premium-title">Unlock Premium</h2>
          <p class="premium-desc">Select your plan to unlock chapters, flashcards, and boss battles.</p>
          
          <div style="margin: 20px 0; text-align: left; position: relative; z-index: 2;">
            <label style="display:block; margin-bottom: 6px; font-weight: bold; color: var(--ink-dim); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Select Plan</label>
            <select id="planType" class="auth-input" style="margin-bottom: 16px; background: rgba(0,0,0,0.2); border-color: rgba(255,255,255,0.1);" onchange="Auth.updatePricingText()">
              <option value="class11">Class 11 Only</option>
              <option value="class12">Class 12 Only</option>
              <option value="both" selected>Both Classes</option>
            </select>
            
            <label style="display:block; margin-bottom: 6px; font-weight: bold; color: var(--ink-dim); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Billing Cycle</label>
            <select id="billingCycle" class="auth-input" style="margin-bottom: 16px; background: rgba(0,0,0,0.2); border-color: rgba(255,255,255,0.1);" onchange="Auth.updatePricingText()">
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>

            <label style="display:block; margin-bottom: 6px; font-weight: bold; color: var(--ink-dim); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Coupon Code</label>
            <input type="text" id="couponCode" class="auth-input" style="background: rgba(0,0,0,0.2); border-color: rgba(255,255,255,0.1);" placeholder="Enter coupon (optional)" oninput="Auth.updatePricingText()">
          </div>

          <div id="pricingText" class="pricing-highlight">
            Loading pricing...
          </div>

          <button class="btn btn-primary auth-btn" id="payBtn" onclick="Auth.payWithRazorpay()">Unlock Now</button>
          <div class="auth-error" id="premiumError" style="margin-top:10px;"></div>
          <p style="font-size:12px; color:var(--ink-faint); margin-top:16px">Secure recurring billing via Razorpay.</p>
        </div>
      </div>

      <!-- Signup Prompt Modal -->
      <div class="modal-overlay" id="signupPromptModal">
        <div class="modal-box premium-box">
          <button class="modal-close" onclick="Auth.hideSignupPromptModal()">&times;</button>
          <div class="premium-icon">🔒</div>
          <h2 class="modal-title" style="margin-bottom: 10px">Signup to see it</h2>
          <p class="premium-desc">You need a free account to unlock this chapter and track your mastery.</p>
          <button class="btn btn-primary auth-btn" onclick="Auth.hideSignupPromptModal(); Auth.switchTab('signup'); Auth.showAuthModal()">Sign Up Now</button>
          <button class="btn btn-ghost auth-btn" onclick="Auth.hideSignupPromptModal(); Auth.switchTab('login'); Auth.showAuthModal()">Already have an account? Login</button>
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
    document.getElementById('authPhone').required = false; // Optional

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
    updatePricingText();
  }

  function hidePremiumModal() {
    document.getElementById('premiumModal').classList.remove('active');
  }

  function showSignupPromptModal() {
    document.getElementById('signupPromptModal').classList.add('active');
  }

  function hideSignupPromptModal() {
    document.getElementById('signupPromptModal').classList.remove('active');
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
      if (!supabaseClient) {
        throw new Error("Cannot connect to Supabase. Check your internet connection or ad-blocker.");
      }

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
    currentPlan = null;
    updateTopBarUI();
    // If they were inside a chapter, take them back home
    if (window.App && typeof window.App.home === 'function') {
      window.App.home();
    }
  }

  async function fetchRole(userId) {
    // Fetch role and plan_type from neet_users
    try {
      if (!supabaseClient) return { role: 'free', plan: null };
      const { data, error } = await supabaseClient
        .from('neet_users')
        .select('role, plan_type')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data ? { role: data.role, plan: data.plan_type } : { role: 'free', plan: null };
    } catch (e) {
      console.error("Failed to fetch role", e);
      return { role: 'free', plan: null }; // default to free on failure
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
        const details = await fetchRole(currentUser.id);
        currentRole = details.role;
        currentPlan = details.plan;

        // Perform IP Verification
        try {
          const ipRes = await fetch('/api/verify-ip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: session.access_token, userId: currentUser.id })
          });
          const ipData = await ipRes.json();
          if (!ipRes.ok || !ipData.allowed) {
            alert(ipData.message || 'Device limit reached. Logging out.');
            await logout();
            return;
          }
        } catch(ipErr) {
          console.error("Failed to verify IP:", ipErr);
        }

      } else {
        currentUser = null;
        currentRole = null;
        currentPlan = null;
      }
    } catch (err) {
      console.error("Refresh session failed", err);
      currentUser = null;
      currentRole = null;
      currentPlan = null;
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
    // Re-render priority pills or other auth-dependent UI
    if (window.App && typeof window.App.softUpdateGrid === 'function') {
      window.App.softUpdateGrid();
    }
  }

  async function forgotPassword() {
    const email = document.getElementById('authEmail').value.trim();
    const errEl = document.getElementById('authError');

    if (!email) {
      errEl.textContent = 'Enter your email above first, then click Forgot password.';
      errEl.style.display = 'block';
      return;
    }

    if (!supabaseClient) {
      errEl.textContent = 'Cannot connect to server.';
      errEl.style.display = 'block';
      return;
    }

    errEl.style.display = 'none';
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email);

    if (error) {
      errEl.textContent = error.message;
      errEl.style.display = 'block';
    } else {
      errEl.style.color = 'var(--ok)';
      errEl.textContent = '✅ Reset link sent! Check your email inbox.';
      errEl.style.display = 'block';
      // Reset colour after a moment so next errors show red
      setTimeout(() => { errEl.style.color = ''; }, 6000);
    }
  }

  function showPremiumError(msg) {
    const el = document.getElementById('premiumError');
    if (el) {
      el.textContent = msg;
      el.style.display = msg ? 'block' : 'none';
    }
  }

  function updatePricingText() {
    const planEl = document.getElementById('planType');
    const cycleEl = document.getElementById('billingCycle');
    const couponEl = document.getElementById('couponCode');
    const textEl = document.getElementById('pricingText');

    if (!planEl || !cycleEl || !couponEl || !textEl) return;

    const plan = planEl.value; // 'class11', 'class12', 'both'
    const cycle = cycleEl.value; // 'monthly', 'yearly'
    const coupon = couponEl.value.trim();

    let firstMonth = 0;
    let recurring = 0;

    if (plan === 'both') {
      if (cycle === 'monthly') {
        firstMonth = 1239;
        recurring = 689;
      } else {
        firstMonth = 12390;
        recurring = 12390;
      }
    } else {
      if (cycle === 'monthly') {
        firstMonth = 789;
        recurring = 459;
      } else {
        firstMonth = 7890;
        recurring = 7890;
      }
    }

    if (coupon === 'NEET@100#') {
      textEl.innerHTML = `🎁 <b>100% FREE for the first month!</b><br>You will be charged ₹${recurring} starting from month 2.`;
    } else if (coupon === 'NEET@1#') {
      textEl.innerHTML = `🧪 <b>Test Mode:</b> First month is exactly ₹1!<br>You will be charged ₹${recurring} starting from month 2.`;
    } else {
      if (cycle === 'monthly') {
        textEl.innerHTML = `You will pay <b>₹${firstMonth}</b> today for the first month.<br>Then <b>₹${recurring}/month</b> onwards.`;
      } else {
        textEl.innerHTML = `You will be billed <b>₹${recurring}</b> every year.`;
      }
    }
  }

  async function payWithRazorpay() {
    showPremiumError('');
    if (!currentUser) {
      showPremiumError('Please login/signup first.');
      Auth.switchTab('signup');
      Auth.showAuthModal();
      return;
    }

    const payBtn = document.getElementById('payBtn');
    if (payBtn) {
      payBtn.disabled = true;
      payBtn.textContent = 'Processing...';
    }

    try {
      const planType = document.getElementById('planType').value;
      const billingCycle = document.getElementById('billingCycle').value;
      const coupon = document.getElementById('couponCode').value.trim();

      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planType,
          billingCycle,
          coupon
        })
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData.error || 'Failed to initiate order.');
      }

      const options = {
        key: orderData.key,
        subscription_id: orderData.subscription_id,
        name: "The Naturalist's Codex",
        description: "Premium Subscription",
        handler: async function (response) {
          try {
            showPremiumError('Verifying payment...');
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_subscription_id: response.razorpay_subscription_id,
                razorpay_signature: response.razorpay_signature,
                userId: currentUser.id,
                planType
              })
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              throw new Error(verifyData.error || 'Signature verification failed.');
            }

            alert('🎉 Subscription Successful! Welcome to Premium.');
            hidePremiumModal();
            await refreshSession();
          } catch (verifyErr) {
            showPremiumError('Verification failed: ' + verifyErr.message);
          } finally {
            if (payBtn) {
              payBtn.disabled = false;
              payBtn.textContent = 'Unlock Now';
            }
          }
        },
        prefill: {
          name: currentUser.user_metadata?.full_name || '',
          email: currentUser.email || '',
          contact: currentUser.user_metadata?.phone || ''
        },
        theme: {
          color: "#0e1c17"
        },
        modal: {
          ondismiss: function () {
            showPremiumError('Payment cancelled.');
            if (payBtn) {
              payBtn.disabled = false;
              payBtn.textContent = 'Unlock Now';
            }
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        showPremiumError('Payment failed: ' + (response.error.description || 'Unknown error'));
        if (payBtn) {
          payBtn.disabled = false;
          payBtn.textContent = 'Unlock Now';
        }
      });
      rzp.open();
    } catch (err) {
      showPremiumError(err.message);
      if (payBtn) {
        payBtn.disabled = false;
        payBtn.textContent = 'Unlock Now';
      }
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
    showSignupPromptModal, hideSignupPromptModal, forgotPassword,
    showPremiumError,
    getCurrentUser: () => currentUser,
    getCurrentRole: () => currentRole,
    getCurrentPlan: () => currentPlan,
    payWithRazorpay, updatePricingText
  };
})();
