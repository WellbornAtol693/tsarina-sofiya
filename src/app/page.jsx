'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-48'>
        {/* Image Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/IMG_0472.png' alt='' fill className='object-contain'/>
        </div>
        {/* Text Container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* Title */}
          <h1 className='text-4xl md:text-6xl font-bold'>
            The Architect of the Matrix presents: THE CAROLINGIAN CODE.
          </h1>
          {/* Description*/}
          <p className='md:text-xl'>
            The greatest virus programmed as a Admin Override to perfect the Matrix. <br /> Use to influence and rizz baddies &apos;s leader in Advanced technological
            research and development.
          </p>
          {/* Buttons */}
          <div className='flex w-full gap-4'>
            <Link href="https:www.regattagrove.com">
              <button className='p-4 rounded-lg ring-1 ring-black text-white bg-indigo-500'>Activate Blondes</button>
            </Link>
            <Link href="https:www.regattagrove.com">
              <button className='p-4 rounded-lg ring-1 ring-black'>Activate Brunettes</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;