export default function Projects() {
  const items = [
    {
      title: 'Interactive 3D Landing',
      desc: 'A playful hero with Spline and smooth scroll animations.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#',
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Beautiful charts, dark mode, and accessible components.',
      tags: ['React', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Portfolio Template',
      desc: 'Fast, responsive portfolio with modern aesthetics.',
      tags: ['Vite', 'Framer Motion'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        <p className="mt-2 text-slate-600">A few things I’ve built recently.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
              <div className="h-40 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 mb-4" />
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-700">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
