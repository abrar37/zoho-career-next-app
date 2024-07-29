import { Flag, Heart, Parking, Question, Tick, Coffee, Mess, Sports, Games, Bonus, Gym, Events } from "../../public/Svg/Svg";
import Image from "next/image";
import breakfast from '../../public/images/breakfast.png';
import master from '../../public/images/master.png';
import sponsored from '../../public/images/sponsored.png';

export const PRODEVELOPMENT = [
    {
        img: <Image src={breakfast} alt={breakfast} layout="responsive" />,
        heading: "Breakfast Breifing",
        desc: "Professional learning experience with a twist, our employee-wide Breakfast Briefing enables cross-departmental communication by bringing teams together from various domains to present ideas and engage in this knowledge-exchange session."
    },
    {
        img: <Image src={master} alt={master} layout="responsive" />,
        heading: "Master Classes",
        desc: "Targeting the leadership needs of managers at a strategic and tactical level, our knowledge-packed master classes equip managers with impactful skills, driven towards organizational success."
    },
    {
        img: <Image src={sponsored} alt={sponsored} layout="responsive" />,
        heading: "Sponsored Certifications",
        desc: "To help upskill our workforce and let them take charge of what they’d like to learn without worrying about the price tag, we fully fund universally valuable and in-demand certifications offered by leading institutions."
    },

]
export const MONTBENEFICIARY = [
    {
        img: "",
        heading: "Annual Bonus",
        desc: "Out of all financial targets we gain, our employees receive a fair share of celebrating as annual bonus."
    },
    {
        img: "",
        heading: "Leave Encashment",
        desc: "Annual leave encashment facility to financially compensate employees for extra effort they put in."
    },
    {
        img: "",
        heading: "Provident Fund ",
        desc: "tkxel's provident fund policy provide employees with lump sum payments at the time of exit from the company."
    },
    {
        img: "",
        heading: "Loan Faciliity ",
        desc: "A facility of loan for the employees with bearable payback deadlines and no hassle of interest."
    },

]
export const COMPANYSPONSORS = [

    {
        img: "",
        heading: "Cars",
        desc: "Your unique leadership skills and the ability to get things done never gets  unnoticed if you are a leader/manager at tkxel, we reward you with classy cars."
    },
    {
        img: "",
        heading: "Sports Bike",
        desc: "Always on the go to motivate our employees to put up exemplary efforts and acknowledging their top performances through rewarding them with Sports Bikes."
    },

]

export const MONETARY_VALUES = [
    {
        title: "Annual Bonus",
        desc: "Out of all the financial achievements we gain, our employees receive a fair share of celebrating them in the form of an annual bonus.",
    },
    {
        title: "Annual Leaves Encashment",
        desc: "To tackle or address any particular occasion where your presence is necessary or to have some days of rest to nurture your health and well.",
    },
    {
        title: "Provident Fund ",
        desc: "tkxel's provident fund policy provide employees with lump sum payments at the time of exit from their place of employment.",
    },
    {
        title: "Interest Free Loan Faciliity",
        desc: "A facility of loan for the employees with bearable payback deadlines and no hassle of interest.",
    },
];
