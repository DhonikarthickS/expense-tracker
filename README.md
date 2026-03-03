Live link : https://expense-tracker-ui-phi.vercel.app

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>💰 Personal Finance Tracker — README</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;600;700;900&display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #0d0f1a;
    --surface: #13162a;
    --card: #1a1e35;
    --border: #2a2f52;
    --accent1: #00e5ff;
    --accent2: #ff4bac;
    --accent3: #7c5cfc;
    --accent4: #00ff99;
    --accent5: #ffb800;
    --text: #e8eaf6;
    --muted: #8892b0;
    --code-bg: #0a0c1a;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Animated starfield background */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 15%, rgba(0,229,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 85% 25%, rgba(255,75,172,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 70%, rgba(124,92,252,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 80%, rgba(0,255,153,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 20% 90%, rgba(255,184,0,0.4) 0%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 24px;
    position: relative;
    z-index: 1;
  }

  /* ── HEADER ── */
  .hero {
    text-align: center;
    margin-bottom: 48px;
    animation: fadeDown 0.7s ease both;
  }

  .hero h1 {
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 900;
    letter-spacing: -1px;
    background: linear-gradient(135deg, var(--accent1) 0%, var(--accent3) 50%, var(--accent2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 24px;
    text-shadow: none;
  }

  /* ── BADGES ── */
  .badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 48px;
    animation: fadeUp 0.7s 0.1s ease both;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 16px;
    border-radius: 999px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    border: 1.5px solid transparent;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }
  .badge:hover { transform: translateY(-3px); }

  .badge-react   { background: rgba(0,229,255,0.1); border-color: var(--accent1); color: var(--accent1); box-shadow: 0 0 12px rgba(0,229,255,0.2); }
  .badge-express { background: rgba(255,255,255,0.05); border-color: #ffffff55; color: #fff; }
  .badge-mongo   { background: rgba(0,255,153,0.1); border-color: var(--accent4); color: var(--accent4); box-shadow: 0 0 12px rgba(0,255,153,0.2); }
  .badge-clerk   { background: rgba(124,92,252,0.1); border-color: var(--accent3); color: var(--accent3); box-shadow: 0 0 12px rgba(124,92,252,0.2); }
  .badge-vercel  { background: rgba(255,184,0,0.1); border-color: var(--accent5); color: var(--accent5); box-shadow: 0 0 12px rgba(255,184,0,0.2); }

  /* ── DIVIDER ── */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 36px 0;
  }

  /* ── SECTION HEADINGS ── */
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2 .label {
    background: linear-gradient(135deg, var(--accent1), var(--accent3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 14px;
    color: var(--accent2);
  }

  /* ── CARD ── */
  .card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px 32px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
    animation: fadeUp 0.6s ease both;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent1), var(--accent3), var(--accent2));
  }

  /* ── HIGHLIGHTS LIST ── */
  .highlights {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 12px;
  }

  .highlights li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 0.92rem;
    color: var(--muted);
    transition: border-color 0.2s, color 0.2s;
  }
  .highlights li:hover { border-color: var(--accent1); color: var(--text); }

  .highlights li .icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

  /* ── TECH TABLE ── */
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  th {
    background: rgba(0,229,255,0.08);
    color: var(--accent1);
    padding: 12px 18px;
    text-align: left;
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    border-bottom: 1px solid var(--border);
  }

  td {
    padding: 14px 18px;
    border-bottom: 1px solid var(--border);
    color: var(--text);
  }

  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(255,255,255,0.02); }

  /* ── STEPS ── */
  .steps { counter-reset: step; list-style: none; }

  .steps li {
    counter-increment: step;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 14px;
    color: var(--muted);
    font-size: 0.93rem;
    line-height: 1.6;
  }

  .steps li::before {
    content: counter(step);
    min-width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent3), var(--accent2));
    color: #fff;
    font-weight: 700;
    font-size: 0.78rem;
    font-family: 'Space Mono', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .steps li strong { color: var(--text); }

  /* ── CODE BLOCK ── */
  pre {
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent3);
    border-radius: 10px;
    padding: 16px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 0.82rem;
    color: var(--accent4);
    overflow-x: auto;
    margin: 14px 0;
  }

  .env-key { color: var(--accent1); }
  .env-val { color: var(--accent5); }

  /* ── BASH BLOCK ── */
  .bash-block {
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent4);
    border-radius: 10px;
    padding: 14px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 0.82rem;
    color: var(--accent4);
    margin: 12px 0;
  }

  .bash-block span { color: var(--muted); }

  /* ── URL TAG ── */
  .url-tag {
    display: inline-block;
    background: rgba(0,229,255,0.08);
    border: 1px solid var(--accent1);
    color: var(--accent1);
    border-radius: 8px;
    padding: 5px 14px;
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    margin: 8px 0;
  }

  /* ── FEATURES GRID ── */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 14px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 16px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s;
  }

  .feature-item:hover {
    border-color: var(--accent4);
    background: rgba(0,255,153,0.05);
    transform: translateY(-2px);
  }

  .feature-item .check {
    color: var(--accent4);
    font-size: 1rem;
    flex-shrink: 0;
  }

  /* ── FUTURE GRID ── */
  .future-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  .future-item {
    background: var(--surface);
    border: 1px dashed var(--border);
    border-radius: 10px;
    padding: 16px;
    font-size: 0.88rem;
    color: var(--muted);
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .future-item:hover {
    border-color: var(--accent5);
    color: var(--text);
    background: rgba(255,184,0,0.05);
  }

  /* ── TWO-COL DEPLOY ── */
  .deploy-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 600px) { .deploy-grid { grid-template-columns: 1fr; } }

  .deploy-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .deploy-card.backend::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--accent3), var(--accent1));
  }

  .deploy-card.frontend::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--accent2), var(--accent5));
  }

  .deploy-card h3 { margin-bottom: 16px; }
  .deploy-card .deploy-title { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 14px; }

  /* ── LOCAL DEV ── */
  .local-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 600px) { .local-grid { grid-template-columns: 1fr; } }

  .local-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 22px;
    position: relative;
    overflow: hidden;
  }

  .local-card.backend::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: var(--accent1);
  }

  .local-card.frontend::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: var(--accent2);
  }

  .runs-on {
    font-size: 0.82rem;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    margin-top: 6px;
  }
  .runs-on span { color: var(--accent5); }

  /* ── BOTTOM CARDS ── */
  .bottom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 600px) { .bottom-grid { grid-template-columns: 1fr; } }

  .bottom-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s;
  }
  .bottom-card:hover { transform: translateY(-4px); }

  .bottom-card .big-emoji { font-size: 2.4rem; display: block; margin-bottom: 10px; }
  .bottom-card p { color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
  .bottom-card strong { color: var(--text); }

  /* ── STAR BANNER ── */
  .star-banner {
    text-align: center;
    padding: 36px;
    background: linear-gradient(135deg, rgba(124,92,252,0.15), rgba(255,75,172,0.15));
    border: 1px solid rgba(124,92,252,0.3);
    border-radius: 18px;
    margin-top: 32px;
  }

  .star-banner p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text);
  }

  .star-banner .star { font-size: 2rem; }

  /* ── ANIMATIONS ── */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .card:nth-child(1) { animation-delay: 0.05s; }
  .card:nth-child(2) { animation-delay: 0.12s; }
  .card:nth-child(3) { animation-delay: 0.18s; }
  .card:nth-child(4) { animation-delay: 0.24s; }
  .card:nth-child(5) { animation-delay: 0.30s; }
</style>
</head>
<body>
<div class="container">

  <!-- HERO -->
  <div class="hero">
    <h1>💰 Personal Finance Tracker</h1>
    <div class="badges">
      <span class="badge badge-react">⚛️ React · Frontend</span>
      <span class="badge badge-express">🚀 Express · Backend</span>
      <span class="badge badge-mongo">🍃 MongoDB · Database</span>
      <span class="badge badge-clerk">🔐 Clerk · Auth</span>
      <span class="badge badge-vercel">▲ Vercel · Deployed</span>
    </div>
  </div>

  <div class="divider"></div>

  <!-- OVERVIEW -->
  <div class="card">
    <h2><span class="label">🚀 Project Overview</span></h2>
    <p style="color:var(--muted); margin-bottom:20px; line-height:1.7;">
      A <strong style="color:var(--text)">secure and modern Personal Finance Tracking Application</strong>
      built using <strong style="color:var(--accent1)">React + Clerk Authentication</strong> with a powerful
      <strong style="color:var(--accent4)">Express &amp; MongoDB backend</strong>.
    </p>
    <h3>✨ Key Highlights</h3>
    <ul class="highlights">
      <li><span class="icon">🔐</span> Secure authentication using Clerk</li>
      <li><span class="icon">💸</span> Add, Edit, Delete expenses (CRUD)</li>
      <li><span class="icon">📊</span> Monthly expense aggregation</li>
      <li><span class="icon">🌐</span> Full-stack deployment on Vercel</li>
    </ul>
  </div>

  <!-- TECH STACK -->
  <div class="card">
    <h2><span class="label">🛠️ Tech Stack</span></h2>
    <table>
      <thead>
        <tr>
          <th>Frontend</th><th>Backend</th><th>Database</th><th>Auth</th><th>Deploy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>⚛️ React</td>
          <td>🚀 Express</td>
          <td>🍃 MongoDB</td>
          <td>🔐 Clerk</td>
          <td>▲ Vercel</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- DEPLOYMENT -->
  <div class="card">
    <h2><span class="label">🌐 Deployment Guide</span></h2>
    <div class="deploy-grid">

      <div class="deploy-card backend">
        <div class="deploy-title">🔹 Backend (Server)</div>
        <ol class="steps">
          <li>Push the <strong>server</strong> folder to GitHub</li>
          <li>Create a new project on <strong>Vercel</strong></li>
          <li>Import your GitHub repository</li>
          <li>Set <strong>Root Directory</strong> → <code style="color:var(--accent1)">server</code></li>
          <li>Add environment variable:</li>
        </ol>
        <pre><span class="env-key">MONGO_URI</span>=<span class="env-val">your_mongodb_connection_string</span></pre>
        <p style="font-size:0.85rem; color:var(--muted); margin-bottom:6px;">🎉 Backend live at:</p>
        <div class="url-tag">https://your-project-name.vercel.app</div>
      </div>

      <div class="deploy-card frontend">
        <div class="deploy-title">🔹 Frontend (Client)</div>
        <ol class="steps">
          <li>Update <strong>client/.env.production</strong>:</li>
        </ol>
        <pre><span class="env-key">VITE_API_BASE_URL</span>=<span class="env-val">https://your-backend.vercel.app</span></pre>
        <ol class="steps" style="counter-reset: step 1;">
          <li>Create a new Vercel project</li>
          <li>Import your GitHub repository</li>
          <li>Set <strong>Root Directory</strong> → <code style="color:var(--accent2)">client</code></li>
          <li>Add environment variable:</li>
        </ol>
        <pre><span class="env-key">VITE_CLERK_PUBLISHABLE_KEY</span>=<span class="env-val">your_clerk_key</span></pre>
      </div>

    </div>
  </div>

  <!-- LOCAL DEV -->
  <div class="card">
    <h2><span class="label">💻 Local Development</span></h2>
    <div class="local-grid">

      <div class="local-card backend">
        <h3 style="color:var(--accent1);">🔸 Backend Setup</h3>
        <div class="bash-block">
          <span>$ </span>cd server<br/>
          <span>$ </span>npm install<br/>
          <span>$ </span>npm start
        </div>
        <p class="runs-on">📍 Runs on: <span>http://localhost:3001</span></p>
      </div>

      <div class="local-card frontend">
        <h3 style="color:var(--accent2);">🔸 Frontend Setup</h3>
        <div class="bash-block">
          <span>$ </span>cd client<br/>
          <span>$ </span>npm install<br/>
          <span>$ </span>npm run dev
        </div>
        <p class="runs-on">📍 Runs on: <span>http://localhost:5173</span></p>
        <p class="runs-on">🔗 Connects to: <span>http://localhost:3001</span></p>
      </div>

    </div>
  </div>

  <!-- FEATURES -->
  <div class="card">
    <h2><span class="label">📊 Features</span></h2>
    <div class="features-grid">
      <div class="feature-item"><span class="check">✅</span> Secure Authentication (Clerk)</div>
      <div class="feature-item"><span class="check">✅</span> Expense CRUD Operations</div>
      <div class="feature-item"><span class="check">✅</span> Monthly Expense Aggregation</div>
      <div class="feature-item"><span class="check">✅</span> RESTful API Architecture</div>
      <div class="feature-item"><span class="check">✅</span> Production Deployment Ready</div>
    </div>
  </div>

  <!-- FUTURE -->
  <div class="card">
    <h2><span class="label">🚀 Future Enhancements</span></h2>
    <div class="future-grid">
      <div class="future-item">📈 Charts &amp; Analytics Dashboard</div>
      <div class="future-item">📅 Budget Planning Feature</div>
      <div class="future-item">📱 Fully Responsive UI</div>
      <div class="future-item">🌍 Multi-Currency Support</div>
    </div>
  </div>

  <!-- CONTRIBUTING + SUPPORT -->
  <div class="bottom-grid" style="margin-top:0;">
    <div class="bottom-card">
      <span class="big-emoji">🤝</span>
      <h3 style="color:var(--accent3); margin-bottom:8px;">Contributing</h3>
      <p>Contributions are welcome!<br/><strong>Fork the repo</strong> and submit a pull request.</p>
    </div>
    <div class="bottom-card">
      <span class="big-emoji">⭐</span>
      <h3 style="color:var(--accent5); margin-bottom:8px;">Support</h3>
      <p>If you like this project, give it a <strong>⭐ on GitHub!</strong></p>
    </div>
  </div>

  <div class="star-banner">
    <span class="star">⭐</span>
    <p>Built with ❤️ using React · Express · MongoDB · Clerk · Vercel</p>
  </div>

</div>
</body>
</html>


