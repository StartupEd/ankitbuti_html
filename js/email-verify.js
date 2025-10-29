// Email verification popup logic
function createEmailVerificationOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'email-verify-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        try {
            // Don't call Slack webhook directly from the browser (exposes secret and often blocked by CORS).
            // Instead POST to a server-side proxy at /api/slack which will forward to Slack using a secret env var.
            const proxyUrl = '/api/slack';
            const payload = { email: email, page: window.location.href };

            fetch(proxyUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).then(async response => {
                if (!response.ok) {
                    const text = await response.text().catch(() => '');
                    console.warn('Slack proxy responded with', response.status, text);
                }
            }).catch(err => {
                console.error('Error calling Slack proxy:', err);
            });
        } catch (err) {
            console.error('Slack notification failed:', err);
        }

    popup.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: #1f2937; font-size: 1.5rem; font-weight: bold;">Welcome to Ankit Buti's Website.</h2>
        <p style="margin-bottom: 1.5rem; color: #4b5563;">Please enter your email to continue reading.</p>
        <form id="email-verify-form">
            <input type="email" id="verify-email" placeholder="Enter your email" required
                style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #d1d5db; border-radius: 4px; outline: none;">
            <button type="submit" style="background: #1f2937; color: white; padding: 0.75rem 1.5rem; border-radius: 4px; border: none; cursor: pointer; width: 100%;">
                Continue
            </button>
        </form>
    `;

    overlay.appendChild(popup);
    // lock scrolling and mark main content as inert/hidden to assistive tech
    const mainContent = document.querySelector('main') || document.querySelector('body > div');
    if (mainContent) {
        mainContent.style.filter = 'blur(6px)';
        mainContent.style.pointerEvents = 'none';
        mainContent.setAttribute('aria-hidden', 'true');
        // try to set inert when supported
        try {
            if ('inert' in HTMLElement.prototype) mainContent.inert = true;
        } catch (e) {
            /* ignore if inert not supported */
        }
    }
    // disable page scroll
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    document.body.appendChild(overlay);

    const form = document.getElementById('email-verify-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('verify-email').value;
        localStorage.setItem('verified-email', email);

        //send notification, save to db and call event on google analytics to track email - todo1
        //send magic link / otp to truly verify the email address - todo2
        //conver this to a server app - todo3

        // restore page state
        if (mainContent) {
            mainContent.style.filter = '';
            mainContent.style.pointerEvents = '';
            mainContent.removeAttribute('aria-hidden');
            try {
                if ('inert' in HTMLElement.prototype) mainContent.inert = false;
            } catch (e) {
                /* ignore */
            }
        }
        document.body.style.overflow = prevBodyOverflow || '';
        document.documentElement.style.overflow = prevHtmlOverflow || '';
        overlay.remove();
    });

    return overlay;
}

function checkEmailVerification() {
    const verifiedEmail = localStorage.getItem('verified-email');
    if (!verifiedEmail) {
        createEmailVerificationOverlay();
    }
}

// Run email verification check when the page loads
document.addEventListener('DOMContentLoaded', checkEmailVerification);