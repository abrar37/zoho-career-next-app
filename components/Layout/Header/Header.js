import styles from "./header.module.scss";
import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import Logo from "../../../public/images/tkxel-logo-blue.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={` ${styles.CareerNav}`}
      >
        <Container className="tk-container">
          <Navbar.Brand href="/" className={` p-0 m-0 ${styles.Logo}`}>
            <Image src={Logo} />
          </Navbar.Brand>
          {/* MOBILE NAVBAR */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`${styles.toggleBtn}`} />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="main-nav--wrapper navbar-expand-sm">
<li
                className={
                  router.pathname == "https://tkxel.com/upskill/" ? `${styles.active}` : ""
                }
              >
               	<Link href="https://tkxel.com/upskill/" passHref>
                  <a className="pt-0 pb-0 nav-link">Upskill</a>
                </Link>
              </li>

              <li
                className={
                  router.pathname == "/life-at-tkxel"
                    ? `${styles.active}`
                    : ""
                }
              >
                <Link href="/life-at-tkxel" passHref>
                  <a className="pt-0 pb-0 nav-link">Life at tkxel</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/benefits" ? `${styles.active}` : ""
                }
              >
                <Link href="/benefits" passHref>
                  <a className="pt-0 pb-0 nav-link">Benefits</a>
                </Link>
              </li>
              {/* <li
                className={
                  router.pathname == "/student-ambassador" ? `${styles.active}` : ""
                }
              >
                <Link href="/student-ambassador" passHref>
                  <a className="pt-0 pb-0 nav-link">Student Ambassador</a>
                </Link>
              </li> */}
            </Nav>
            <Nav>
              <div className={styles.authLinks}>
                <a
                  href="https://jobs.tkxel.com/candidateportal?source=career"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign In
                </a>
                |
                <a
                  href="https://tkxel.zohorecruit.com/candidateportal?register=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>
              </div>
              <Button
                variant="primary"
                className={styles.jobBtn}
                onClick={() => router.push("/jobs")}
              >
                View all Jobs
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
