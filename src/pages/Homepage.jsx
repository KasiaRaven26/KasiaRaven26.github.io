/** @format */

import { Header } from "../components/ui/header/header";
import { Footer } from "../components/ui/footer";
import { Overlay } from "../components/ui/overlay";
import classes from "../assets/styles/Homepage.module.css";
import { Button } from "src/components/button";
import ScrollAnimation from "react-animate-on-scroll";

export function Homepage() {
  return (
    <>
      <ScrollAnimation duration={0.3} animateIn="fadeIn">
        <div className="hero">
          <Header className={classes.header} />
          <div className="hero-contents">
            <ScrollAnimation delay={600} animateIn="fadeIn" animateOnce="true">
              <Overlay />
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>

      <section id="section-1">
        <img
          className="section-1-image"
          src="../public/images/secondpicture2.jpg"
          alt=""
        />

        <ScrollAnimation delay={500} animateIn="fadeIn" animateOnce="true">
          <div className={classes.paragraphRight}>
            <h1>WHAT WE OFFER</h1>
            <div className={classes.links}>
              <a
                className={classes.arrowLink}
                href="/what-we-do#development-consultancy"
              >
                Development Consultancy
              </a>
              {/* <Link
            className={classes.arrowLink}
            to={"/what-we-do#development-consultancy"}
          >
            Development Consultancy
          </Link> */}

              <a
                className={classes.arrowLink}
                href="/what-we-do#Development-Opportunities-Sourcing"
              >
                Development Opportunities Sourcing
              </a>
              <a
                className={classes.arrowLink}
                href="/what-we-do#Development-Project-Management"
              >
                Development Project Management
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section id="section-2">
        <ScrollAnimation delay={500} animateIn="fadeIn" animateOnce="true">
          <div className={classes.paragraphLeft}>
            <div className={classes.links}>
              <a
                className={classes.arrowLink}
                href="/what-we-do#development-consultancy"
              >
                Market Analysis
              </a>
              <a
                className={classes.arrowLink}
                href="/what-we-do#RedevelopmentDevelopment-Project"
              >
                Redevelopment-Development Project
              </a>
              <a
                className={classes.arrowLink}
                href="/what-we-do#Property-Management"
              >
                Property Management
              </a>
              <a
                className={classes.arrowLink}
                href="/what-we-do#Legal&Notarial-Services"
              >
                Legal & Notarial Services
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <img
          className="section-2-image"
          src="../public/images/thirdpicture.jpg"
          alt=""
        />
      </section>
      <div>
        <ScrollAnimation delay={500} animateIn="fadeIn" animateOnce="true">
          <h1 className={classes.headerHome}>
            YOUR GATEWAY TO SUCCESSFUL REAL ESTATE INVESTMENTS IN GREECE
          </h1>
        </ScrollAnimation>
      </div>
      <section id="section-3">
        <img
          className="section-3-hero"
          src="../public/images/posh.jpg"
          alt=""
        />

        <div className={classes.paragraphCenter}>
          <Button>LET'S TALK</Button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
