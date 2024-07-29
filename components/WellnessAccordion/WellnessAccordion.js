import Accordion from 'react-bootstrap/Accordion';
import Style from "./WellnessAccordion.module.scss"

function WellnessAccordions() {
    return (


        <div className={Style.AccordWrapper}>
            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">

                    <Accordion.Header>In-house Certifications</Accordion.Header>
                    <Accordion.Body>
                        Opportunity to enhance your skillset and stay updated with in-demand technologies through universally valuable certifications. These certifications are funded by tkxel, so you are only focused on grabbing your interested courses instead of worrying about the costs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Sponsored Trainings & Workshops</Accordion.Header>
                    <Accordion.Body>
                        We enrich our professional learning culture through regular workshops aimed at empowering individuals to adopt emerging skills while promoting team cohesiveness.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Foreign Business & Exposure Trips</Accordion.Header>
                    <Accordion.Body>
                        With our offices in multiple geographical regions, we offer trips to our employees to different offices to give them exposure to different business markets.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
}

export default WellnessAccordions;