import React from 'react';
import style from './Ambassador.module.scss'
import industry from '../../public/images/industry.svg';
import mentor from '../../public/images/mentorship.svg';
import social from '../../public/images/social-events.svg';
import learning from '../../public/images/learningcom.svg';
import webinar from '../../public/images/webinar.svg';
import Image from "next/image";

const AmbassadorCard  = () =>{
    return (
        <div className={style.AmbCardWrapper}>
            <div className={`${style.container}`}>
            <h2 className={`${style.top}`}>What’s in it for you?</h2>
            </div>
            
            <div className={`${style.container} row`}>
                <div className={`${style.cardbox} col-lg-4 col-md-6 col-sm-12`}>
                    <div className={style.number}>
                        <span>1</span>
                    </div>
                    <div className={style.icon}>
                        <Image src={mentor} alt={mentor} />
                    </div>

                    <div className={style.content}>
                        <h3>Industry Exposure</h3>
                        <p>
                            Get learning experiences outside the classroom environment and work with industrial professionals.
                        </p>
                    </div>

                </div>
                <div className={`${style.cardbox} col-lg-4 col-md-6 col-sm-12`}>
                    <div className={style.number}>
                        <span>2</span>
                    </div>

                    <div className={style.icon}>
                        <Image src={industry} alt={industry} />
                    </div>
                    <div className={style.content}>
                        <h3>Mentorship</h3>
                        <p>
                            Get guidance provided by the knowledgeable and experienced mentors.
                        </p>
                    </div>

                </div>
                <div className={`${style.cardbox} col-lg-4 col-md-6 col-sm-12`}>
                    <div className={style.number}>
                        <span>3</span>
                    </div>
                    <div className={style.icon}>
                        <Image src={social} alt={social} />
                    </div>
                    <div className={style.content}>
                        <h3>Social Events</h3>
                        <p>
                            Become a part of our events, shows and social functions.
                        </p>
                    </div>

                </div>
                <div className={`${style.cardbox} col-lg-4 col-md-6 col-sm-12`}>
                    <div className={style.number}>
                        <span>4</span>
                    </div>
                    <div className={style.icon}>
                        <Image src={learning} alt={learning} />
                    </div>
                    <div className={style.content}>
                        <h3>Learning ventures</h3>
                        <p>
                            Get access to our training programs, contests, competitions and much more.        
                        </p>
                    </div>

                </div>
                <div className={`${style.cardbox} col-lg-4 col-md-6 col-sm-12`}>
                    <diV className={style.number}>
                        <span>5</span>
                    </diV>
                    <div className={style.icon}>
                        <Image src={webinar} alt={webinar} />
                    </div>
                    <div className={style.content}>
                        <h3>Webinars</h3>
                        <p>
                            Share your feedback, ask questions, and get engaged with large audiences.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default AmbassadorCard

