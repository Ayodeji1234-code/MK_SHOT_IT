
import { useState } from "react";
import { type FormEvent } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const date = formData.get("date") as string;
    const message = formData.get("message") as string;

    const serviceNames: Record<string, string> = {
      birthday: "Birthday Shoot",
      events: "Event Coverage",
      content: "Content Creation",
      other: "Other",
    };

    const whatsappMessage = `
📸 *NEW BOOKING REQUEST*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone / WhatsApp:* ${phone}

🎯 *Service:* ${serviceNames[service] || service}
📅 *Preferred Date:* ${date}

📝 *Shoot Details:*
${message}

━━━━━━━━━━━━━━━━
Sent from MK_SHOT_IT portfolio website.
    `.trim();

    const whatsappUrl =
      `https://wa.me/2348159485952?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  };

  return (
    <div className="site">

      {/* =========================
          NAVBAR
      ========================== */}
      <header className="navbar">

        <a href="#" className="logo" onClick={closeMenu}>
          MK<span>_</span>SHOT<span>_</span>IT
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="nav-book"
            onClick={closeMenu}
          >
            Book a Shoot
            <span className="arrow">↗</span>
          </a>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </header>


      {/* =========================
          HERO
      ========================== */}
      <main>

        <section className="hero">

          <div className="hero-grid"></div>

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="eyebrow-line"></span>
              PROFESSIONAL MOBILE VIDEOGRAPHER
            </div>

            <h1>
              Every moment.
              <br />
              <span>Captured.</span>
            </h1>

            <p className="hero-description">
              I create cinematic visuals that capture emotion,
              atmosphere and the moments that deserve to be remembered.
            </p>

            <div className="hero-actions">

              <a
                href="#work"
                className="primary-button"
              >
                Explore My Work
                <span className="arrow">↗</span>
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Book a Shoot
              </a>

            </div>

          </div>


          {/* HERO IMAGE */}
          <div className="hero-visual">

            <div className="visual-glow"></div>

            <div className="visual-frame">

              <div className="visual-top">
                <span>MK_SHOT_IT</span>
                <span>01 / 10</span>
              </div>

              <div className="visual-image">

                <img
                  src="/images/cinematography-portfolio.jpeg"
                  alt="MK_SHOT_IT cinematography portfolio"
                />

                <div className="play-button">
                  ▶
                </div>

              </div>

              <div className="visual-bottom">

                <span>
                  CINEMATOGRAPHY PORTFOLIO
                </span>

                <span className="camera-symbol">
                  ◉
                </span>

              </div>

            </div>

          </div>


          <div className="hero-scroll">
            <span>↓</span>
            <span>SCROLL TO EXPLORE</span>
          </div>

        </section>


        {/* =========================
            INTRODUCTION
        ========================== */}
        <section className="intro" id="about">

          <div className="section-label">
            <span>01</span>
            INTRODUCTION
          </div>

          <div className="intro-content">

            <div className="intro-image">

              <img
                src="/images/introduction.jpeg"
                alt="MK_SHOT_IT introduction"
              />

            </div>

            <div className="intro-text">

              <h2>
                Visual stories
                <span> with purpose.</span>
              </h2>

              <p>
                MK_SHOT_IT is a professional mobile videography
                brand focused on transforming real moments into
                memorable visual stories.
              </p>

              <p>
                From intimate celebrations to energetic events
                and creative brand content, every frame is created
                with attention to detail, emotion and storytelling.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SERVICES
        ========================== */}
        <section className="services" id="services">

          <div className="section-heading">

            <div className="section-label">
              <span>02</span>
              SERVICES
            </div>

            <h2>
              What I
              <span> shoot.</span>
            </h2>

          </div>


          <div className="service-grid">

            {/* Birthday */}
            <div className="service-card">

              <span className="service-number">
                01
              </span>

              <h3>
                Birthday Shoots
              </h3>

              <p>
                Capture the atmosphere, emotions and unforgettable
                moments from your special day.
              </p>

              <span className="service-icon">
                ↗
              </span>

            </div>


            {/* Events */}
            <div className="service-card">

              <span className="service-number">
                02
              </span>

              <h3>
                Events
              </h3>

              <p>
                Professional event coverage designed to preserve
                every important moment and experience.
              </p>

              <span className="service-icon">
                ↗
              </span>

            </div>


            {/* Content */}
            <div className="service-card">

              <span className="service-number">
                03
              </span>

              <h3>
                Content Creation
              </h3>

              <p>
                Short-form visual content created for creators,
                brands and social media.
              </p>

              <span className="service-icon">
                ↗
              </span>

            </div>

          </div>

        </section>


        {/* =========================
            SELECTED WORK
        ========================== */}
        <section className="work" id="work">

          <div className="section-label">
            <span>03</span>
            SELECTED WORK
          </div>

          <div className="work-heading">

            <h2>
              The moments
              <span> speak.</span>
            </h2>

            <p>
              A selection of creative work, technical skills
              and visual projects from MK_SHOT_IT.
            </p>

          </div>


          <div className="portfolio-grid">

            {/* CAMERA */}
            <article className="portfolio-card portfolio-large">

              <img
                src="/images/camera.jpeg"
                alt="Camera and videography equipment"
              />

              <div className="portfolio-overlay">

                <div className="portfolio-meta">
                  <span>01</span>
                  <span>VIEW PROJECT ↗</span>
                </div>

                <h3>
                  Camera
                </h3>

                <p>
                  Visual storytelling through the lens.
                </p>

              </div>

            </article>


            {/* CINEMATOGRAPHY */}
            <article className="portfolio-card">

              <img
                src="/images/cinematography.jpeg"
                alt="Cinematography project"
              />

              <div className="portfolio-overlay">

                <div className="portfolio-meta">
                  <span>02</span>
                  <span>VIEW PROJECT ↗</span>
                </div>

                <h3>
                  Cinematography
                </h3>

                <p>
                  Composition, movement and cinematic visual direction.
                </p>

              </div>

            </article>


            {/* SOUND DESIGN */}
            <article className="portfolio-card">

              <img
                src="/images/sound-design.jpeg"
                alt="Sound design project"
              />

              <div className="portfolio-overlay">

                <div className="portfolio-meta">
                  <span>03</span>
                  <span>VIEW PROJECT ↗</span>
                </div>

                <h3>
                  Sound Design
                </h3>

                <p>
                  Creating atmosphere through intentional sound.
                </p>

              </div>

            </article>


            {/* LIGHT DESIGN */}
            <article className="portfolio-card">

              <img
                src="/images/light-design.jpeg"
                alt="Lighting design project"
              />

              <div className="portfolio-overlay">

                <div className="portfolio-meta">
                  <span>04</span>
                  <span>VIEW PROJECT ↗</span>
                </div>

                <h3>
                  Light Design
                </h3>

                <p>
                  Using light to shape mood, depth and visual identity.
                </p>

              </div>

            </article>


            {/* BRANDING */}
            <article className="portfolio-card portfolio-large">

              <img
                src="/images/branding-projects.jpeg"
                alt="MK_SHOT_IT branding project"
              />

              <div className="portfolio-overlay">

                <div className="portfolio-meta">
                  <span>05</span>
                  <span>VIEW PROJECT ↗</span>
                </div>

                <h3>
                  Branding Projects
                </h3>

                <p>
                  Creating visuals that communicate identity.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* =========================
            ABOUT ME
        ========================== */}
        <section className="about-section">

          <div className="section-label">
            <span>04</span>
            ABOUT ME
          </div>

          <div className="about-grid">

            <div className="about-image">

              <img
                src="/images/about-me.jpeg"
                alt="MK_SHOT_IT owner"
              />

            </div>

            <div className="about-content">

              <h2>
                Behind the
                <span> camera.</span>
              </h2>

              <p>
                Every great visual starts with someone who
                understands the story behind the moment.
              </p>

              <p>
                MK_SHOT_IT combines creativity, technical
                understanding and a passion for visual storytelling
                to create content that feels authentic and engaging.
              </p>

              <a
                href="#contact"
                className="primary-button"
              >
                Work With Me
                <span className="arrow">↗</span>
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================== */}
        <section className="skills-section">

          <div className="section-label">
            <span>05</span>
            SKILLS & EXPERTISE
          </div>

          <div className="skills-grid">

            <div className="skills-image">

              <img
                src="/images/skills.jpeg"
                alt="Skills and expertise"
              />

            </div>

            <div className="skills-content">

              <h2>
                Built around
                <span> creativity.</span>
              </h2>

              <div className="skill-list">

                <div>
                  <span>01</span>
                  Cinematography
                </div>

                <div>
                  <span>02</span>
                  Mobile Videography
                </div>

                <div>
                  <span>03</span>
                  Sound Design
                </div>

                <div>
                  <span>04</span>
                  Light Design
                </div>

                <div>
                  <span>05</span>
                  Video Storytelling
                </div>

                <div>
                  <span>06</span>
                  Content Creation
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            PORTFOLIO FEATURE
        ========================== */}
        <section className="feature-section">

          <div className="feature-image">

            <img
              src="/images/cinematography-portfolio.jpeg"
              alt="Welcome to the MK_SHOT_IT cinematography portfolio"
            />

          </div>

          <div className="feature-content">

            <span>
              MK_SHOT_IT
            </span>

            <h2>
              Welcome to my
              <br />
              <span>cinematography portfolio.</span>
            </h2>

            <p>
              Explore the ideas, techniques and visual stories
              behind my work.
            </p>

            <a
              href="#contact"
              className="primary-button"
            >
              Start a Project
              <span className="arrow">↗</span>
            </a>

          </div>

        </section>


        {/* =========================
            BOOK A SHOOT
        ========================== */}
        <section className="contact" id="contact">

          <div className="section-label">
            <span>06</span>
            BOOK A SHOOT
          </div>

          <div className="contact-layout">

            {/* LEFT SIDE */}
            <div className="contact-intro">

              <p className="contact-eyebrow">
                LET'S CREATE SOMETHING
              </p>

              <h2>
                Your moment.
                <span> My lens.</span>
              </h2>

              <p className="contact-description">
                Whether it's a birthday, special event or creative
                content project, let's turn your vision into visuals
                worth remembering.
              </p>

              <div className="contact-direct">

                <p>Prefer WhatsApp?</p>

                <a
                  href="https://wa.me/2348159485952"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                  <span>↗</span>
                </a>

              </div>

            </div>


            {/* BOOKING FORM */}
            <form
              className="booking-form"
              onSubmit={handleBookingSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="phone">
                    PHONE / WHATSAPP
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234..."
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="service">
                    SERVICE
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="birthday">
                      Birthday Shoot
                    </option>

                    <option value="events">
                      Event Coverage
                    </option>

                    <option value="content">
                      Content Creation
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="date">
                  PREFERRED DATE
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  TELL ME ABOUT YOUR SHOOT
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your event, location, ideas and what you need..."
                  required
                />

              </div>


              <button
                type="submit"
                className="booking-submit"
              >
                SEND BOOKING REQUEST
                <span>↗</span>
              </button>

            </form>

          </div>

        </section>


        {/* =========================
            THANK YOU
        ========================== */}
        <section className="thank-you-section">

          <img
            src="/images/thank-you.jpeg"
            alt="Thank you for visiting MK_SHOT_IT"
          />

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================== */}
      <footer>

        <div className="footer-brand">
          MK<span>_</span>SHOT<span>_</span>IT
        </div>

        <p>
          Capturing every moment.
        </p>

        <div className="footer-bottom">

          <span>
            © 2026 MK_SHOT_IT
          </span>

          <span>
            Professional Mobile Videographer
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;

