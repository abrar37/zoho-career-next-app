import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import WellnessAccordions from "../WellnessAccordion/WellnessAccordion";
import styles from "./skilDevelopment.module.scss";
import skillsImg from "../../public/images/environment.png";
import Image from "next/image";
function SkilDevelopment() {
    return (
        <div className={`${styles.skillsWrapper} tk-container`} id="development">


            <div className="row gx-0">
                <div className={`${styles.devContent} col-lg-6 col-md-12`}>
                    <SectionHeading
                        headwrapper={styles.SkillContent}
                        heading="Skills Development
            Program"
                        desc="Always on the go for equipping our employees with the right skill
            set & enabling them to be the change enablers in the community. "
                    />
                    <WellnessAccordions />
                    {/* <ul className="list-group list-group-flush">
                        <li className="list-group-item">In-house Certifications</li>
                        <li className="list-group-item">Sponsored Trainings & Workshops</li>
                        <li className="list-group-item">Foreign Business & Exposure Trips</li>
                        <li className="list-group-item">Coding Competitions .i.e Codex</li>
                        <li className="list-group-item">In-House Gym Facility</li>
                        <li className="list-group-item">Community - Awareness</li>
                    </ul> */}
                </div>
                <div className="col-lg-6 col-md-12 envir">
                    <Image src={skillsImg} alt={skillsImg} layout="responsive" />
                </div>
            </div>
        </div>
    );
}

export default SkilDevelopment;
