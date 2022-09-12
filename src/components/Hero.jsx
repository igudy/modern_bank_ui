import { discount, robot } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';
import React, { Component } from 'react'
// import Typical from 'react-typical'
import Typewriter from 'typewriter-effect';


const Hero = () =>
    (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <img src={ discount } alt="discount" className='w-[32px] h-[32px]'/>
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white'>
                            {/* 20% Discount For 1 Month Account */}
                            <Typewriter onInit={(typewriter) => {
                                typewriter.pauseFor(10)
                                .typeString('20% Discount For 1 Month Account')
                                .pauseFor(100)
                                .deleteChars(32)
                                .typeString('<strong>30%</strong> Discount For 6 Months Account')
                                .pauseFor(100)
                                .deleteChars(35)
                                .typeString('<strong> <span style="color: lightblue;"> 50% Discount</span> For 1 Year Account</strong>')
                                .pauseFor(2000)
                                .start()                   
                     }}
                    />
                        </span>

                        {/* <Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                        '20% Discount For 1 Month Account',
                        1000,
                        '50% Discount for 1 Year Account',
                        10000
                        ]}
                        />
                        </span> */}
                        {/* Discount For {" "}
                        <span className='text-white'>
                        </span> */}
                    </p>
                </div>

                <div className='text-5xl text-white text-bold'>

                </div>


                {/* The Next Generation Payment Part */}
                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px]'>
                        The Next <br className='sm:block hidden' />{" "}
                        <span className='text-gradient'>Generation</span>{" "}
                    </h1>

                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div>
                </div>

                <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                    Payment Method.
                </h1>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>
            
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                    <img src={robot} alt="billing" className="w-[100%] relatinve z-[5]" />
                    <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
                    <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
                    <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
                </div>
        </section>
    )

export default Hero