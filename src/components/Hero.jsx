import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="max-w-2xl py-20">
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-700">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance work
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Hi, I’m <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            A creative developer crafting delightful, modern web experiences with React, 3D, and playful interactions.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-300 bg-white/80 backdrop-blur text-slate-800 font-medium hover:bg-white transition">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
