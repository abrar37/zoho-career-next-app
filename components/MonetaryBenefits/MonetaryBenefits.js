import React from "react";
import { MONTBENEFICIARY } from "../Arrays/Cards";
import { SectionCard } from "../SectionCard/SectionCard";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./MonetaryBenefits.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import workshop from '../../public/images/workshop.png';

const MonetaryBenefits = () => {
    const router = useRouter();
    return (
        <div className="tk-container" id="mont">
            <div className={`${styles.ProDevWrapper} `}>
                <SectionHeading
                    headwrapper={styles.ProHead}
                    SecHeading={styles.ProContainer}
                    btnhide={false}
                    style_p={`${styles.ProDevPara} `}
                    heading="Monetary Benefits"
                    desc="We have the right financial incentives to encourage our employees to meet their goals. And these are in place with the primary aim of addressing our employees' social–security and physiological needs."
                />
                <Image src={workshop} alt={workshop} width={""} height={""} />
                <div className={`  row gx-0  ${styles.ProDevSec}`}>
                    {MONTBENEFICIARY.map((value, index) => (
                        <SectionCard
                            styleclass={`${styles.ProDevCard}  col-lg-3 col-sm-6 col-xs-12`}
                            img={value.img}
                            heading={value.heading}
                            desc={value.desc}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonetaryBenefits;
