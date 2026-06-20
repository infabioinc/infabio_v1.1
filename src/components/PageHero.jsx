import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, accent, description, image, children }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="relative z-10">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-light leading-[1.05] text-textMain md:text-7xl lg:text-[5.5rem]">
              {title} <span className="text-brand italic">{accent}</span>
            </h1>
            <p className="mt-7 max-w-2xl font-sans text-base font-light leading-8 text-textBody md:text-lg">{description}</p>
            {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_30px_80px_var(--glass-shadow)] md:min-h-[480px]">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-brandBlue via-brandOrange to-brandBlue" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
