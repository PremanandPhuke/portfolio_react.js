import React from 'react';
import HyperText from './ui/hyper-text';
import { RainbowButton } from './ui/rainbow-button';

export default function () {
    return (
        <>
            <div className=' flex items-center text-white w-full p-5'>
                <div className='flex justify-start p-5 flex-initial w-full'>
                    <HyperText
                        className="text-xl font-bold text-white dark:text-black "
                        text="Premanand Phuke"
                    />
                </div>
                <div className='flex justify-end  p-5 flex-initial w-full'>
                <RainbowButton>Contact</RainbowButton>
                </div>
            </div>
        </>
    )
}