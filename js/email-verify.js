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

        //send slack notification
        try {
            // NOTE: embedding a Slack webhook URL in client-side code makes it visible to anyone who views
            // the page source. For production, proxy this request through a server to keep the webhook secret.
            const slackWebhookUrl = 'https://hooks.slack.com/services/';
            const payload = { text: `New AnkitButi.com Site visitor: ${email} — ${window.location.href}` };

            // use fetch; don't block the UI on success/failure
            fetch(slackWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).then(response => {
                // Slack returns 200 OK on success; we can log for debugging
                if (!response.ok) console.warn('Slack webhook responded with', response.status);
            }).catch(err => {
                // CORS or network errors can happen when calling Slack from the browser
                console.error('Error sending Slack notification:', err);
            });
        } catch (err) {
            console.error('Slack notification failed:', err);
        }

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