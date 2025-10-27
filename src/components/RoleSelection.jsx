import React from 'react';
import { User, Users, ShieldCheck, UserCircle } from 'lucide-react';

const roles = [
  {
    key: 'teacher',
    title: 'Teacher',
    desc: 'Plan itineraries, manage permissions, adapt schedules, and monitor headcounts in real time.',
    icon: ShieldCheck,
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    key: 'parent',
    title: 'Parent',
    desc: 'Give digital consent, receive notifications, and follow the trip timeline safely.',
    icon: UserCircle,
    accent: 'from-emerald-500 to-lime-500',
  },
  {
    key: 'chaperone',
    title: 'Chaperone',
    desc: 'Track your group, do headcounts at each stop, and coordinate with the teacher.',
    icon: Users,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    key: 'student',
    title: 'Student',
    desc: 'See the schedule, check-in, and stay on track with emoji-friendly prompts and guidance.',
    icon: User,
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function RoleSelection() {
  return (
    <section id="roles" className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold text-sky-900 sm:text-4xl">Pick your role</h2>
        <p className="mt-2 text-sky-900/80">Each role gets a tailored, kid-friendly workspace.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r) => (
          <div
            key={r.key}
            className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100 transition hover:shadow-md"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${r.accent} opacity-20 blur-2xl`} />
            <div className="relative z-10 flex h-full flex-col">
              <div className={`mb-4 inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-br ${r.accent} p-3 text-white shadow-sm`}>
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-sky-900">{r.title}</h3>
              <p className="mt-1 text-sm text-sky-900/80">{r.desc}</p>
              <a
                href="#itinerary"
                className="mt-4 inline-flex items-center gap-2 self-start rounded-lg bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-100"
              >
                Continue
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
