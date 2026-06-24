import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <span className="logo">MagnetLab</span>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#cta">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <h1>Attract the Future with AI</h1>
        <p>
          We help businesses implement, integrate, and master artificial
          intelligence — so you can focus on what matters most.
        </p>
        <a href="#services" className="btn btn-primary">
          Explore Our Services
        </a>
      </header>

      <section id="about" className="about">
        <h2>What We Do</h2>
        <p>
          MagnetLab is an AI implementation and training company. We work with
          teams of all sizes to adopt AI tools, build custom solutions, and
          develop the skills needed to thrive in an AI-driven world. Whether
          you're just getting started or looking to scale, we meet you where you
          are.
        </p>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">&#x2699;</div>
            <h3>AI Implementation</h3>
            <p>
              We integrate AI into your existing workflows — from automating
              repetitive tasks to deploying intelligent systems that save time
              and money.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">&#x1F393;</div>
            <h3>Team Training</h3>
            <p>
              Hands-on workshops and courses designed to upskill your team on
              the latest AI tools, prompting techniques, and best practices.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">&#x1F4CA;</div>
            <h3>Strategy Consulting</h3>
            <p>
              We help you build a clear AI roadmap — identifying high-impact
              opportunities and creating a plan that aligns with your business
              goals.
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Let's talk about how AI can transform your business. Reach out today
          for a free consultation.
        </p>
        <a href="mailto:hello@magnetlab.ai" className="btn btn-secondary">
          Contact Us
        </a>
      </section>

      <footer className="footer">
        <p>&copy; 2026 MagnetLab. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
