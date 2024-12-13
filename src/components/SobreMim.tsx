import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const SobreMim = () => {
  return (
    <section className="relative mt-20 md:mt-48 lg:mt-28 py-20" id="sobremim">
      <motion.h2
        className="absolute top-0 left-1/2 translate-x-[-50%] text-black dark:text-white text-center text-2xl lg:text-3xl
      font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:w-full after:h-[3px] after:bg-primaryColor "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Sobre Mim
      </motion.h2>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-6 gap-10 items-center">
        <motion.div
          className="xl:col-span-2"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/hero-removebg.png"
            alt="Image hero"
            width={400}
            height={400}
            quality={100}
            loading="lazy"
            className="shadow-sm rounded-lg"
          />
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0 xl:col-span-4"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-black dark:text-white text-lg lg:text-2xl xl:text-3xl font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            accusantium dolorum officiis consequuntur repudiandae dolores
            dolore! Mollitia, dolorum minus voluptate fugiat tempore et
            accusantium assumenda ipsa, a modi obcaecati magni Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Voluptates eligendi quam
            fugit quisquam at earum facilis nisi reprehenderit doloribus non
            cupiditate voluptatem, rem fuga nostrum provident, recusandae
            tempore. Quidem, quo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SobreMim
