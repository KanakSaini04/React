import React, { useState, useEffect } from 'react';
import './index.css';
import AdBanner from './AdBanner';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const submitFB = () => {
    const n = document.getElementById('fb-name').value.trim();
    const e = document.getElementById('fb-email').value.trim();
    const m = document.getElementById('fb-msg').value.trim();
    const t = document.getElementById('fb-type').value;

    if (!n || !e || !m) {
      alert('Please fill in your name, email, and message to continue.');
      return;
    }

    const s = encodeURIComponent('CodexCraft Inquiry from ' + n);
    const b = encodeURIComponent('Name: ' + n + '\nEmail: ' + e + '\nService: ' + (t || 'Not specified') + '\n\nMessage:\n' + m);

    window.open('mailto:contact@codexcraft.in?subject=' + s + '&body=' + b);
    document.getElementById('succ').style.display = 'block';

    setTimeout(() => {
      document.getElementById('fb-name').value = '';
      document.getElementById('fb-email').value = '';
      document.getElementById('fb-msg').value = '';
      document.getElementById('fb-type').value = '';
    }, 1000);
  };

  // Interactive card hover effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="nav-wrapper">
        <div className="w">
          <nav className="nav">
            <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Codex<span>Craft</span>
            </div>
            <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
              <a onClick={() => scrollTo('services')}>Services</a>
              <a onClick={() => scrollTo('testing')}>Testing</a>
              <a onClick={() => scrollTo('process')}>Process</a>
              <a onClick={() => scrollTo('about')}>About</a>
            </div>
            <button className="nav-btn" onClick={() => scrollTo('contact')}>Get in touch</button>
            <button className="menu-btn" onClick={toggleMenu}>☰</button>
          </nav>
        </div>
      </div>

      <div className="w">
        <section className="hero">
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            Android App Developer & App Tester
          </div>
          <h1>Build Your Own<br /><span>Android App</span></h1>
          <p>Fast, clean, and functional Android apps for your business or idea — plus professional app testing services to ensure standard market-level quality.</p>
          <div className="btn-row">
            <a className="btn btn-p" onClick={() => scrollTo('contact')}>Start Your App</a>
            <a className="btn btn-g" onClick={() => scrollTo('services')}>View Packages</a>
          </div>
        </section>

        <AdBanner 
          dataAdSlot="xxxxxxxxxx" 
          width={728} 
          height={90} 
        />

        <section className="sec" id="services">
          <h2 className="sec-title">Service Packages</h2>
          <p className="sec-sub">Choose the plan that perfectly fits your idea, timeline, and budget.</p>
          <div className="cards">
            <div className="card">
              <div className="cbadge">Starter</div>
              <h3>Basic App</h3>
              <div className="sub">Simple ideas & MVPs</div>
              <ul>
                <li>2–3 screens</li>
                <li>Clean UI design</li>
                <li>Basic functionality</li>
                <li>APK delivery</li>
              </ul>
              <div className="delivery">Delivery: 3 weeks</div>
            </div>
            <div className="card feat">
              <div className="cbadge pop">Most Popular</div>
              <h3>Standard App</h3>
              <div className="sub">Growing projects</div>
              <ul>
                <li>5–8 screens</li>
                <li>API integration</li>
                <li>Improved UI/UX</li>
                <li>Source code included</li>
              </ul>
              <div className="delivery">Delivery: 2 months</div>
            </div>
            <div className="card">
              <div className="cbadge">Premium</div>
              <h3>Premium App</h3>
              <div className="sub">Full-feature apps</div>
              <ul>
                <li>Advanced UI design</li>
                <li>Custom features</li>
                <li>Scalable structure</li>
                <li>Priority support</li>
              </ul>
              <div className="delivery">Delivery: 6 months</div>
            </div>
          </div>
          <p style={{ fontSize: '15px', fontWeight: 500, color: '#64748b', marginTop: '2.5rem', textAlign: 'center' }}>
            Custom requirements? <a href="mailto:contact@codexcraft.in" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Contact me directly.</a>
          </p>
        </section>

        <div className="divider"></div>

        <section className="sec" id="testing">
          <h2 className="sec-title">Hire me as an app tester</h2>
          <p className="sec-sub">I test your Android app thoroughly across real devices before it goes live.</p>
          <div className="tester-wrap">
            <div className="tester-card">
              <div className="tcard-head">
                <div className="tcard-icon nt">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="2" fill="#AFA9EC" />
                    <rect x="14" y="3" width="7" height="7" rx="2" fill="#AFA9EC" />
                    <rect x="3" y="14" width="7" height="7" rx="2" fill="#AFA9EC" />
                    <rect x="14" y="14" width="7" height="7" rx="2" fill="#534AB7" />
                  </svg>
                </div>
                <div>
                  <div className="tcard-label nt">Non-technical</div>
                  <div className="tcard-name">Functional Testing</div>
                </div>
              </div>
              <div className="tcard-items">
                <div className="tcard-item">Functional testing — does every feature work exactly as expected?</div>
                <div className="tcard-item">UI/UX testing — layout, readability, user flow, and visual clarity</div>
                <div className="tcard-item">Negative testing — what happens with wrong inputs or edge cases?</div>
              </div>
            </div>
            <div className="tester-card tech">
              <div className="tcard-head">
                <div className="tcard-icon t">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 8L2 12L5 16" stroke="#5DCAA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 8L22 12L19 16" stroke="#5DCAA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 3L9 21" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="tcard-label t">Technical</div>
                  <div className="tcard-name">Deep Testing</div>
                </div>
              </div>
              <div className="tcard-items">
                <div className="tcard-item t-item">Performance testing — speed, memory limits, and battery usage</div>
                <div className="tcard-item t-item">Security basics — local data exposure and input validation checks</div>
                <div className="tcard-item t-item">Responsiveness — multiple screen sizes and varied Android OS versions</div>
              </div>
            </div>
          </div>
        </section>

        <AdBanner 
          dataAdSlot="xxxxxxxxxx" 
          width={300} 
          height={250} 
        />

        <section className="sec" style={{ paddingTop: '2rem' }}>
          <h2 className="sec-title">Types of Apps I Build</h2>
          <p className="sec-sub">Standard market-level Android apps engineered for real-world use cases.</p>
          <div className="types">
            <div className="type-pill">Finance & budgeting</div>
            <div className="type-pill">Business utility tools</div>
            <div className="type-pill">Automation workflows</div>
            <div className="type-pill">Calculators & utilities</div>
            <div className="type-pill">Custom specific ideas</div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="sec" id="process">
          <h2 className="sec-title">How it works</h2>
          <p className="sec-sub">A transparent, simple 4-step process taking you from an idea to a live APK.</p>
          <div className="process">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <h4>Share your idea</h4>
                <p>Tell me what you want to build — key features, target users, and design references.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <h4>Plan & design</h4>
                <p>I map out the screens and user flow — you approve everything before development starts.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <h4>Development</h4>
                <p>Writing clean code, testing on real devices, and building for long-term performance.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-text">
                <h4>APK delivered</h4>
                <p>Final production APK + complete source code sent to you. Standard revisions included.</p>
              </div>
            </div>
          </div>
        </section>

        <AdBanner 
          dataAdSlot="xxxxxxxxxx" 
          dataAdLayout="in-article" 
          dataAdFormat="fluid" 
        />

        <section className="sec" id="about">
          <h2 className="sec-title">Contact & Feedback</h2>
          <p className="sec-sub">I build standard market-level Android apps. Got a project or feedback? Let me know.</p>
          <div className="fb">
            <div className="form-group">
              <label>Your name</label>
              <input type="text" id="fb-name" placeholder="Rahul / Alex" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" id="fb-email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label>What are you looking for?</label>
              <select id="fb-type">
                <option value="">Select a service...</option>
                <option>Basic App — 3 weeks</option>
                <option>Standard App — 2 months</option>
                <option>Premium App — 6 months</option>
                <option>App Testing (Non-technical)</option>
                <option>App Testing (Technical)</option>
                <option>App Testing (Both)</option>
                <option>Just giving feedback</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your message or feedback</label>
              <textarea id="fb-msg" placeholder="Share your idea, questions, or specific project requirements..."></textarea>
            </div>
            <button className="submit" onClick={submitFB}>Send Message →</button>
            <div className="success" id="succ">Message details opened in your email client. I'll reply within 24 hours.</div>
          </div>
        </section>

        <div className="cta" id="contact">
          <h2>Have an idea? Let's build it.</h2>
          <p>Android apps, testing services, business utilities — whatever it is, I'll help you ship something real and functional.</p>
          <div className="btn-row">
            <a className="btn btn-p" onClick={() => scrollTo('about')}>Start Your Project</a>
            <a className="btn btn-g" onClick={() => scrollTo('testing')}>Hire Me as Tester</a>
          </div>
          <div className="contact-row">
            <span>contact@codexcraft.in</span>
            <span>Available for Freelance</span>
            <span>WhatsApp on request</span>
          </div>
        </div>

        <div className="footer">
          <p style={{ margin: '0 0 10px 0' }}>© 2026 CodexCraft · Premium Android App Development & Testing · codexcraft.in</p>
          <a href="/privacy-qrforge" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
        </div>
      </div>
    </>
  );
};

export default App;