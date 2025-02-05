import React from 'react'
import {motion} from 'framer-motion'
import RootLayout from '../layout/RootLayout'
import Search from '../components/Search'

const Hero = () => {
  const variants = {
    hidden:{opacity:0, y:-800},
    visible:{opacity:1, y:0, transition:{duration:1}}
  }
  return (
    <motion.div
    className='w-full flex-1 h-screen bg-[url("./assets/herobg.png")] bg-cover bg-no-repeat bg-top relative'

    initial='hidden'
    animate= 'visible'
    exit='hidden'
    variants={variants}
    transition={{duration:0.85, ease:'easeInOut'}}
    >
     <RootLayout className="absolute top-0 left-0 w-full h-full py-[9ch] bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-center justify-start flex-col text-center ">

     <div className="space-y-2">
      <motion.p className="text-lg text-neutral-500 font-medium"
      initial={{opacity:0,y:-800}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-800}}
      transition={{duration:1.5,ease:'easeInOut'}}
      >
        Get your bus tickets
      </motion.p>
      <motion.h1
      className="text-5xl text-neutral-800 font-bold"
      initial={{opacity:0,y:-800}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-800}}
      transition={{duration:1.25,ease:'easeInOut'}}>
        Find Best Bus For You!

      </motion.h1>
     </div>

     {/* Search */}
     <Search/>

     </RootLayout>
    </motion.div>

  )
}

export default Hero
