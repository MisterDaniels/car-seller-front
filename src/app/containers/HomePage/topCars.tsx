import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import { Car } from '../../components/Car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { SCREENS } from '../../constants/responsive';
import { useMediaQuery } from 'react-responsive';

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-4xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

export function TopCars() {

    const [ current, setCurrent ] = useState(0);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    const testCar1: ICar = {
        name: 'Honda Civic',
        mileage: '10k',
        thumbnailSrc: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: 'Auto',
        gas: 'Petrol'
    }

    const testCar2: ICar = {
        name: 'Audi S3',
        mileage: '10k',
        thumbnailSrc: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: 'Auto',
        gas: 'Petrol'
    }

    const testCar3: ICar = {
        name: 'Honda City 5 Seater',
        mileage: '20k',
        thumbnailSrc: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: 'Auto',
        gas: 'Petrol'
    }

    const cars = [
        <Car { ...testCar1 } />, 
        <Car { ...testCar2 } />, 
        <Car { ...testCar3 } />, 
        <Car { ...testCar1 } />, 
        <Car { ...testCar3 } />, 
        <Car { ...testCar1 } /> 
    ];

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return (
        <TopCarsContainer>
            <Title>Explore our top deals</Title>
            <CarsContainer>
                <Carousel 
                    value={ current } 
                    onChange={ setCurrent } 
                    slides={ cars }
                    plugins={[
                        'clickToChange',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        }
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                }
                            ]
                        }
                    }}
                />
                <Dots 
                    value={ current } 
                    onChange={ setCurrent } 
                    number={ numberOfDots } 
                />
            </CarsContainer>
        </TopCarsContainer>
    );
}