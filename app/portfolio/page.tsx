import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function PortfolioPage() {
  return (
    <div className="container">
      {/* <!--=============== NAVIGATION MENU ===============--> */}
      <div className="menu">
        <a href="#welcome-section" className="menu-icon">
          <HomeIcon className="h-[25px]" />
        </a>
        <a href="#about" className="menu-icon">
          <UserIcon className="h-[25px]" />
        </a>
        <a href="#projects" className="menu-icon">
          <CodeBracketIcon className="h-[25px]" />
        </a>
        <a href="#experience" className="menu-icon">
          <BriefcaseIcon className="h-[25px]" />
        </a>
        <a href="#contact" className="menu-icon">
          <EnvelopeIcon className="h-[25px]" />
        </a>
      </div>
      {/* <!--=============== MAIN "WINDOW" ===============--> */}
      <div className="portfolio">
        {/* <!--=============== HEADER SECTION ===============--> */}
        <section className="header">
          <img className="header-img" src="./images/Myself.jpg" alt="" />
          <h1>Ali Asghar Sedighian</h1>
          <h2>Frontend Developer</h2>
          <div className="detail">
            <div className="detail-call">
              <p>(+98)903-6070804</p>
            </div>
            <div className="detail-mail">
              <p>
                <a>as.sedighian@gmail.com</a>
              </p>
            </div>
            <div className="detail-location">
              <p>Tehran, IR</p>
            </div>
            <div className="detail-military-service">
              <p>Military Service: Served(2020-2022)</p>
            </div>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/ali-asghar-sedighian-53b80b25b/"
              target="_blank"
              className="fab fa-linkedin-in"
              id="profile-link"
            ></a>
            <a
              href="https://github.com/aliasgharsedighian"
              target="_blank"
              className="fab fa-github"
            ></a>
          </div>
          <a href="" className="cta">
            DownIoad CV
          </a>
        </section>
        {/* <!--=============== CONTENT SECTION ===============--> */}
        <div className="content">
          {/* <!--=============== HOME ===============--> */}
          <section className="content-card home" id="welcome-section">
            <h1>Hello, I am Ali Asghar Sedighian</h1>
          </section>
          {/* <!--=============== ABOUT ME ===============--> */}
          <section className="content-card about" id="about">
            <h1>About me</h1>
            <div className="about-item about-me">
              <p>
                Front-End Developer. Passionate about learning and development
                with a desire to apply skills on a large development team. Eager
                to tackle more complex problems and continue to find ways to
                maximize user efficiency
              </p>
            </div>
            <div className="col-2">
              <div className="about-item skills">
                <h1>Skills</h1>
                <span className="skill">HTML</span>
                <span className="skill">Responsive CSS</span>
                <span className="skill">JavaScript</span>
                <span className="skill">ReactJS</span>
                <span className="skill">NextJS</span>
                <span className="skill">TypeScript</span>
                <span className="skill">Git</span>
                <span className="skill">Restful API</span>
                <span className="skill">TailwindCss</span>
                <span className="skill">PWA</span>
                <span className="skill">Sass</span>
                <span className="skill">Jest</span>
              </div>
              <div className="about-item languages">
                <h1>Education</h1>
                <p>Bachelor of Science</p>
                <p>Islamic Azad University f Parand</p>
                <div>
                  <p>2013-2018</p>
                </div>
                <h1>Languages</h1>

                <div className="language">
                  <p>english</p>
                  <span className="bar">
                    <span className="english"></span>
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* <!--=============== PROJECTS ===============--> */}
          <section className="content-card projects" id="projects">
            <h1>Projects</h1>
            <div className="col-2 project-list">
              <div className="project-tile">
                <img
                  src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822"
                  alt=""
                />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tile">
                <img
                  src="https://shots.codepen.io/nietoperq/pen/GRBOjyV-512.webp?version=1674084446"
                  alt=""
                />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 2</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tile">
                <img
                  src="https://shots.codepen.io/nietoperq/pen/dyjWxgX-512.webp?version=1673554073"
                  alt=""
                />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 3</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tile">
                <img
                  src="https://shots.codepen.io/nietoperq/pen/vYagdwo-512.webp?version=1673549480"
                  alt=""
                />
                <div className="overlay">
                  <div className="project-description">
                    <h3>Project 4</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi aperiam voluptate accusamus velit omnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://github.com/nietoperq">see more...</a>
          </section>
          {/* <!--=============== EXPERIENCE ===============--> */}
          <section className="content-card experience" id="experience">
            <h1>Experience</h1>
            <div className="timeline">
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-date">2023 - now</div>
                  <div className="timeline-content">
                    <h3>Kasbotech</h3>
                    <p>
                      Created two responsive Exchange site for this Company and
                      coding one App
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2019 - 2020</div>
                  <div className="timeline-content">
                    <h3>AroosTajmahal</h3>
                    <p>
                      Design and Implemented a new site for this Company and
                      support for a limited time and Setting up an online store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--=============== CONTACT ===============--> */}
          <section className="content-card contact" id="contact">
            <h1>Contact</h1>
            <form
              className="form"
              id="form"
              action="https://www.freecodecamp.com/email-submit"
            >
              <div className="input-box">
                <input
                  type="text"
                  className="text-input"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  className="text-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-box">
                <input
                  type="subject"
                  className="text-input"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="input-box">
                <textarea
                  name="text"
                  className="message"
                  placeholder="Message..."
                ></textarea>
              </div>
              <div className="input-box">
                <input
                  type="submit"
                  className="submit-btn"
                  id="submit"
                  value="submit"
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
