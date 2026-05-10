import { motion } from 'framer-motion'

const marqueeItems = [
  'Cyber Security',
  'Software Development',
  'Digital Marketing',
  'Legal Support',
  'Cyber Investigation',
  'Education & Training',
]

const MarqueeContent = () => {
  return (
    <div className="flex items-center shrink-0">
      {marqueeItems.map((item, index) => (
        <div key={index} className="flex items-center mx-8 shrink-0">
          <img
            src="/Logo.png"
            alt="CRCCF logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
          />

          <span className="mx-4 text-[#0C1A3A] font-bold text-xl sm:text-2xl tracking-wide uppercase whitespace-nowrap">
            {item}
          </span>

          <img
            src="/Logo.png"
            alt="CRCCF logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
          />
        </div>
      ))}
    </div>
  )
}

const CompanyMarquee = ({ direction = 'left' }) => {
  const isRight = direction === 'right'

  return (
    <div className="overflow-hidden w-full bg-blue-50/50 py-4 border-y border-blue-100">
      <motion.div
        className="flex w-max"
        animate={{
          x: isRight ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </div>
  )
}

export default CompanyMarquee
