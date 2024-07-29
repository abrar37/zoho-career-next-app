import Accordion from 'react-bootstrap/Accordion';
import Style from "./SkillsAccordions.module.scss"

function SkillAccordions() {
    return (
        <div className={Style.AccordHeader}>
            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">

                    <Accordion.Header>Health Insurance</Accordion.Header>
                    <Accordion.Body>
                        For all the health-related expenses, tkxel has you and your immediate family members covered with a complete health insurance package.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Safe Corner - Mental Wellbeing Program</Accordion.Header>
                    <Accordion.Body>
                        When work seems hectic, work relations seem complicated, life gets stressful and nothing seems to work out, our psychotherapist will help you get back on track.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>WeFit Program</Accordion.Header>
                    <Accordion.Body>
                        A full-fledged employee fitness and well-being initiative powered by an expert team of Nutritionist, Physiotherapist and Sports Massage Therapist to keep you fit, steady, and motivated at work place and in sports.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>In-House Gym Facility</Accordion.Header>
                    <Accordion.Body>
                        An exquisite gym space with a dedicated instructor so that you can channel your time at the workplace into your physical fitness as well.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
}

export default SkillAccordions;