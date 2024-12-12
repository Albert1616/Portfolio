import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'motion/react'

const SobreMim = () => {
  // const ref = useRef(null)
  // const isInView = useInView(ref, { once: true })
  // const animations = useAnimation()

  // useEffect(() => {
  //   if (isInView) {
  //     animations.start('visible')
  //   }
  // }, [isInView])

  return (
    <motion.section
      className="py-36 md:py-48 lg:px-16 lg:py-32"
    // variants={{
    //   hidden: { opacity: 0, y: 75 },
    //   visible: { opacity: 1, y: 0 },
    // }}
    // initial="hidden"
    // animate={animations}
    // transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="md:grid md:grid-cols-2 gap-8">
        <div className="place-self-center">
          <Image
            src="/hero-removebg.png"
            alt="Image hero"
            width={500}
            height={500}
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col mt-5 md:place-self-center">
          <p className="text-black dark:text-white text-lg lg:text-xl font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            accusantium dolorum officiis consequuntur repudiandae dolores
            dolore! Mollitia, dolorum minus voluptate fugiat tempore et
            accusantium assumenda ipsa, a modi obcaecati magni Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Voluptates eligendi quam
            fugit quisquam at earum facilis nisi reprehenderit doloribus non
            cupiditate voluptatem, rem fuga nostrum provident, recusandae
            tempore. Quidem, quo.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default SobreMim
