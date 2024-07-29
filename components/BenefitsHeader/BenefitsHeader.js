import styles from "./BenefitsHeader.module.scss";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-scroll";

const BenefitsHeader = () => {
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

                <div className={`${styles.header} sub-header w-100`}>
                    <Navbar.Collapse className={styles.SubMenu} id="responsive-navbar-nav">
                        <Nav className="mx-auto my-0">
                            <li>
                                <Link passHref activeClass="active" smooth spy to="mont">
                                    <a className="pt-0 pb-0 nav-link">Monetary Benefits</a>
                                </Link>
                            </li>
                            <li>
                                <Link passHref activeClass="active" smooth spy to="wellness" >
                                    <a className="pt-0 pb-0 nav-link">Employee Wellness</a>
                                </Link>
                            </li>
                            <li>
                                <Link passHref activeClass="active" smooth spy to="sponsor">
                                    <a className="pt-0 pb-0 nav-link">Sponsored Vehicles</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="development">
                                    <a className="pt-0 pb-0 nav-link">Development Opportunities</a>
                                </Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Navbar>
            <div className={styles.DropSubMenu}>
                <DropdownButton id="dropdown-item-button" title="Benefits">
                    <Dropdown.ItemText>Benefits</Dropdown.ItemText>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button"><li className={router.pathname == "#mont" ? `${styles.active}` : ""}>
                        <Link href="#mont" passHref>
                            <a className="pt-0 pb-0 nav-link">Monetary Benefits</a>
                        </Link>
                    </li></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button"><li className={router.pathname == "#wellness" ? `${styles.active}` : ""}>
                        <Link href="#wellness" passHref>
                            <a className="pt-0 pb-0 nav-link">Employee Wellness</a>
                        </Link>
                    </li></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button"><li className={router.pathname == "#sponsor" ? `${styles.active}` : ""}>
                        <Link href="#sponsor" passHref>
                            <a className="pt-0 pb-0 nav-link">Sponsored Vehicles</a>
                        </Link>
                    </li></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="button"><li className={router.pathname == "#development" ? `${styles.active}` : ""}>
                        <Link href="#development" passHref>
                            <a className="pt-0 pb-0 nav-link">Development Opportunities</a>
                        </Link>
                    </li></Dropdown.Item>
                </DropdownButton>
            </div>

        </>

    );
};

export default BenefitsHeader;
