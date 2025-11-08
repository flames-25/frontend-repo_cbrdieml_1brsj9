import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Let’s work together</h2>
            <p className="mt-3 text-slate-700">Have an idea or a project in mind? I’d love to help you make it real.</p>
            <div className="mt-6 p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
              <Mail className="h-5 w-5 text-indigo-600" />
              <a href="mailto:you@example.com" className="font-medium text-slate-900 hover:underline">you@example.com</a>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-slate-700">Name</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project..." />
            </div>
            <button type="button" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
