/* eslint-disable prettier/prettier */
'use client'
import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'

export const TextGenerateEffect = ({
    words,
    filter = true,
    duration = 0.5,
}: {
    words: string
    className?: string
    filter?: boolean
    duration?: number
}) => {
    const [scope, animate] = useAnimate()
    const wordsArray = words.split(' ')
    useEffect(() => {
        animate(
            'span',
            {
                opacity: 1,
                filter: filter ? 'blur(0px)' : 'none',
            },
            {
                duration: duration || 1,
                delay: stagger(0.2),
            },
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope.current])

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={`${idx > 3 ? "text-primaryColor sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-tr sm:from-primaryColor sm:to-rose-300 text-5xl lg:text-7xl" : "text-black dark:text-white font-extrabold text-5xl lg:text-6xl"} opacity-0`}
                            style={{
                                filter: filter ? 'blur(10px)' : 'none',
                            }}
                        >
                            {word}{' '}
                        </motion.span>
                    )
                })}
            </motion.div>
        )
    }

    return (
        <div>
            <div className="mt-4">
                <div className="text-center lg:text-left md:text-balance leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    )
}
