export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I’m a front-end developer focused on building elegant, fast, and accessible web apps. I love blending clean UI, motion, and 3D to create memorable digital experiences. I work with React, TypeScript, Tailwind, and Three.js/Spline.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">React & Vite</div>
            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">Tailwind CSS</div>
            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">Framer Motion</div>
            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">Spline / Three.js</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50">
            <h3 className="font-semibold text-slate-900">What I Do</h3>
            <p className="mt-2 text-slate-700 text-sm">Design, develop, and ship responsive web apps with delightful micro-interactions.</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-cyan-50">
            <h3 className="font-semibold text-slate-900">How I Work</h3>
            <p className="mt-2 text-slate-700 text-sm">I iterate quickly, communicate clearly, and focus on high-quality results.</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-amber-50 to-rose-50">
            <h3 className="font-semibold text-slate-900">Tools I Love</h3>
            <p className="mt-2 text-slate-700 text-sm">React, Tailwind, Radix, Framer Motion, Spline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
