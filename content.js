/* * 🔐 FAISHAL CHAUDHARY BYPASS v19.0 - STEP FIX 🚀
 * Fixes: Page changing instead of Step progressing
 */

(function() {
    // Session state
    let isBypassing = false;

    function startCorrectBypass() {
        isBypassing = true;
        console.log('⚡ Target: Proceed Buttons Only');

        // 1. Timer Fast-Forward (Safe speed to count steps)
        const _st = window.setTimeout;
        window.setTimeout = function(f, d) {
            let sD = (typeof d === 'number' && d > 1500) ? 1500 : d;
            return _st(f, sD);
        };

        // 2. Precise Button Scanner
        setInterval(() => {
            if (!isBypassing) return;

            // Sirf niche wale "PROCEED/VERIFY" buttons ko target karna
            // Pagination links (1, 2, Next ->) ko ignore karna
            const allBtns = document.querySelectorAll('button, a.btn, #proceed-btn, .btn-primary, center > a');
            
            allBtns.forEach(b => {
                const txt = (b.innerText || b.textContent || '').toLowerCase();
                
                // Sirf PROCEED aur VERIFY par dhyan dein, "Next" ko filter karein
                if ((txt.includes("proceed") || txt.includes("verify") || txt.includes("get link")) && !b.classList.contains('page-numbers')) {
                    
                    b.style.setProperty("border", "5px solid red", "important"); // Highlight for check
                    
                    // 2 second wait taaki step register ho
                    setTimeout(() => {
                        console.log('🎯 Clicking REAL Step Button:', txt);
                        b.click();
                    }, 2000);
                }
            });

            // Ad-popup bypass taaki timer na ruke
            document.querySelectorAll('div').forEach(p => {
                if (p.innerText.includes('Click on the ad') || p.innerText.includes('seconds')) {
                    p.style.display = 'none';
                }
            });
        }, 2000);

        // Scroll to bottom where the REAL button is
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    function injectUI() {
        if (document.getElementById('faishal-v19')) return;
        
        const ui = document.createElement('div');
        ui.id = 'faishal-v19';
        ui.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:2147483647;background:#00ff88;color:#000;padding:15px 25px;border-radius:50px;font-weight:900;cursor:pointer;box-shadow:0 0 20px rgba(0,255,136,0.8);border:2px solid #000;';
        ui.innerHTML = "🚀 FIX STEPS (FAISHAL)";
        
        ui.onclick = () => {
            ui.innerHTML = "⚡ STEP BYPASS ON";
            ui.style.background = "#ffcc00";
            startCorrectBypass();
        };
        document.body.appendChild(ui);
    }

    injectUI();
})();
