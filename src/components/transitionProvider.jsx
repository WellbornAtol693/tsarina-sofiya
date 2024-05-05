'use client';

import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  // Extract the last part of the pathName (excluding the leading '/')
  const lastPathSegment = pathName.substring(1);

  return (
    <div
    	key={pathName}
    	className='w-screen h-screen fixed bg-gradient-to-b from-indigo-400 to-violet-600'
    >
      {/* Overlay div */}
      <AnimatePresence mode='wait'>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Display the last path segment */}
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {lastPathSegment}
        </motion.div>
        {/* Another overlay div */}
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
      </AnimatePresence>
      {/* Navbar */}
      <div className='h-24'>
        <Navbar />
      </div>
      {/* Content */}
      <div className='h-[calc(100vh-6rem)]'>{children}</div>
    </div>
  );
};

export default TransitionProvider;

