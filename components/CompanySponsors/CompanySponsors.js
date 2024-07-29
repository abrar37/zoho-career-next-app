import React from "react";
import { COMPANYSPONSORS } from "../Arrays/Cards";
import { SectionCard } from "../SectionCard/SectionCard";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./CompanySponsors.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import car from '../../public/images/car.png';

const CompanySponsors = () => {
    const router = useRouter();
    return (
        <div className="tk-container" id="sponsor">
            <div className={`${styles.ProDevWrapper} `}>
                <SectionHeading
                    headwrapper={styles.ProHead}
                    SecHeading={styles.ProContainer}
                    btnhide={false}
                    style_p={`${styles.ProDevPara} `}
                    heading="Company Sponsored Vehicles"
                    desc="tkxel facilitates your dream of owning a vehicle by facilitating you with the required finances as much as possible either by financing your requirements to a calculated extent or by providing you with a complete company-sponsored vehicle."
                />
                <Image src={car} alt={car} width={""} height={""} />
                <div className={`  row gx-0  ${styles.ProDevSec}`}>
                    {COMPANYSPONSORS.map((value, index) => (
                        <SectionCard
                            styleclass={`${styles.ProDevCard}  col-lg-6 col-sm-6 col-xs-12`}
                            img={value.img}
                            heading={value.heading}
                            desc={value.desc}
                            key={index}
                        />
                    ))}
                </div>
                {/* <div className={`${styles.Btn}`}>
          <Button
            variant="outline-primary"
            onClick={() => router.push("/events-and-culture")}
          >
            See our culture & events
          </Button>
        </div> */}
            </div>
        </div>
    );
};

export default CompanySponsors;
