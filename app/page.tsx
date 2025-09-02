"use client";

import Image from "next/image";

const PROFILE = {
  name: "Achal Sharma",
  role: "Freelancer · Frontend Developer",
  location: "Dublin, Ireland",
  email: "achal@example.com",
  phone: "+353 87 000 0000",
  github: "https://github.com/yourname",
  linkedin: "https://www.linkedin.com/in/yourname/",
  instagram: "https://www.instagram.com/yourname/",
  twitter: "https://x.com/yourname",
  summary:
    "Freelancer (Web Developer), React developer. Skilled in crafting clean, responsive UIs with HTML, CSS, Tailwind, Bootstrap and Material UI. Comfortable with JavaScript/TypeScript, PHP, Python, C/C++ and SQL.",
  downloadCV: "#", // put a real link to your PDF when ready
};

const SKILLS = [
  "React","Next.js","TypeScript","JavaScript","Tailwind CSS","Bootstrap",
  "Material UI","HTML","CSS","Node.js","PHP","SQL","Python","C++"
];

const ABOUT = [
  { k: "Profile", v: "Website Developer & Freelancer" },
  { k: "Domain", v: "Software Development" },
  { k: "Education", v: "B.Sc. (H) Computer Science" },
  { k: "Languages", v: "English, Hindi" },
  { k: "Other Skills", v: "Automations, Communication, Time management" },
  { k: "Interests", v: "Traveling, Gaming, Teaching" },
];

const EXPERIENCE = [
  {
    title: "Freelancer · Website Administrator",
    org: "Holistic Homeopathy",
    period: "Sept 2024 – Present",
    bullets: [
      "Own updates and maintenance for performance & UX.",
      "Handle content updates, design improvements, troubleshooting.",
    ],
  },
  {
    title: "Associate Graphic Designer",
    org: "Seznik Lifestyle Pvt Ltd",
    period: "Jan – Aug 2024",
    bullets: [
      "Designed infographics, posts and meta ads.",
      "Built chat bots and simple automations.",
    ],
  },
  {
    title: "React JS Developer (Intern)",
    org: "Adisrestha",
    period: "Nov – Dec 2021",
    bullets: [
      "Developed modules and web pages in React.",
      "Collaborated in a small, fast-moving team.",
    ],
  },
];

const EDUCATION = [
  { degree: "MCA", school: "IGNOU, New Delhi", period: "2024 – 2026", note: "—" },
  { degree: "B.Sc. (H) Computer Science", school: "ARSD, University of Delhi", period: "2020 – 2023", note: "First class distinction" },
  { degree: "Higher Secondary (PCM)", school: "HPBOSE", period: "2019 – 2020", note: "93.6%" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-xl">{PROFILE.name}</a>
          <nav className="hidden md:flex items-center gap-2">
            <a href="#home" className="text-sm px-3 py-2 rounded-xl hover:bg-slate-100">Home</a>
            <a href="#about" className="text-sm px-3 py-2 rounded-xl hover:bg-slate-100">About</a>
            <a href="#resume" className="text-sm px-3 py-2 rounded-xl hover:bg-slate-100">Resume</a>
            <a href="#contact" className="text-sm px-3 py-2 rounded-xl hover:bg-slate-100">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a className="text-sm px-3 py-2 rounded-xl border hover:bg-slate-50" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-sm px-3 py-2 rounded-xl border hover:bg-slate-50" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-slate-500">Hello!</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-2">I'm {PROFILE.name}</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`} className="px-4 py-2 rounded-xl bg-black text-white text-sm">Message me</a>
              <a href={PROFILE.downloadCV} download className="px-4 py-2 rounded-xl border text-sm">Download CV</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span>{PROFILE.location}</span>
              <span>{PROFILE.phone}</span>
              <span>{PROFILE.email}</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border">
            <div className="aspect-video w-full bg-slate-100 flex items-center justify-center">
              {/* Replace with your image if you want */}
              <span className="text-slate-400">Your Photo / Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
        <p className="text-slate-600 mt-2 max-w-3xl">{PROFILE.summary}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-3xl border">
            <div className="p-6 border-b"><h3 className="font-semibold">Quick Info</h3></div>
            <ul className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {ABOUT.map(row => (
                <li key={row.k} className="p-3 rounded-xl bg-slate-50 border">
                  <span className="text-slate-500">{row.k}:</span>{" "}
                  <span className="ml-1 font-medium">{row.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border">
            <div className="p-6 border-b"><h3 className="font-semibold">Skills</h3></div>
            <div className="p-6 flex flex-wrap gap-2">
              {SKILLS.map(s => (
                <span key={s} className="rounded-xl bg-slate-100 border px-3 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Resume</h2>
        <p className="text-slate-600 mt-2">A snapshot of my experience and education.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-3xl border">
            <div className="p-6 border-b"><h3 className="font-semibold">Experience</h3></div>
            <div className="p-6 space-y-6">
              {EXPERIENCE.map(job => (
                <div key={job.title}>
                  <div className="font-medium">{job.title} · <span className="text-slate-600">{job.org}</span></div>
                  <div className="text-xs text-slate-500 mt-1">{job.period}</div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-5">
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border">
            <div className="p-6 border-b"><h3 className="font-semibold">Education</h3></div>
            <div className="p-6 space-y-4">
              {EDUCATION.map(ed => (
                <div key={ed.degree}>
                  <div className="font-medium">{ed.degree} · <span className="text-slate-600">{ed.school}</span></div>
                  <div className="text-xs text-slate-500">{ed.period}{ed.note ? ` · ${ed.note}` : ""}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href={PROFILE.downloadCV} download className="px-4 py-2 rounded-xl border text-sm inline-flex items-center">Download CV</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Me</h2>
        <p className="text-slate-600 mt-2">Below are the details to reach out to me!</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-3xl border p-6 space-y-3 text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border">{PROFILE.location}</div>
            <div className="p-4 rounded-2xl bg-slate-50 border">{PROFILE.phone}</div>
            <div className="p-4 rounded-2xl bg-slate-50 border">{PROFILE.email}</div>
            <div className="p-4 rounded-2xl bg-slate-50 border">
              <div className="text-slate-600 mb-2">Find me on</div>
              <div className="flex gap-3">
                <a className="px-3 py-1 rounded-xl border text-xs" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="px-3 py-1 rounded-xl border text-xs" href={PROFILE.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a className="px-3 py-1 rounded-xl border text-xs" href={PROFILE.twitter} target="_blank" rel="noreferrer">X/Twitter</a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border p-6 space-y-3">
            <input className="w-full border rounded-xl px-3 py-2" placeholder="Full Name *" />
            <input className="w-full border rounded-xl px-3 py-2" placeholder="Email *" type="email" />
            <input className="w-full border rounded-xl px-3 py-2" placeholder="Phone Number" />
            <input className="w-full border rounded-xl px-3 py-2" placeholder="Subject *" />
            <textarea className="w-full border rounded-xl px-3 py-2" placeholder="Message *" rows={6} />
            <button className="px-4 py-2 rounded-xl bg-black text-white text-sm">Send Message</button>
            <p className="text-xs text-slate-500">Form is static in this demo. Use the email button above.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href={`mailto:${PROFILE.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
