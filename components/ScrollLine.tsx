'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollLine() {
  const { scrollYProgress } = useScroll()

  // Map scroll progress to line height
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-zinc-100/50 z-0">
      <motion.div
        style={{ height }}
        className="w-full bg-[#044396] shadow-[0_0_15px_#044396] origin-top relative"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#044396] shadow-[0_0_10px_#044396]" />
      </motion.div>
    </div>
  )
}
