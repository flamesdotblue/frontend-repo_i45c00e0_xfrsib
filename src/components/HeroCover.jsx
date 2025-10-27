import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Map, Bell } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient to ensure text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-sky-100 backdrop-blur">
          <Rocket className="h-4 w-4" />
          Field trips, organized and fun
        </span>
        <h1 className="font-display text-4xl font-extrabold leading-tight text-sky-900 sm:text-5xl md:text-6xl">
          Plan, adapt, and manage multi-stop field trips
          <span className="block text-sky-600">with real-time coordination</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-sky-900/80 sm:text-lg">
          A kid-friendly app for teachers, chaperones, students, and parents—built to handle live updates, headcounts, rerouting, and offline moments gracefully.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#roles"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
          >
            <Map className="h-5 w-5" />
            Explore the flow
          </a>
          <a
            href="#live"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 shadow ring-1 ring-sky-100 transition hover:ring-sky-200"
          >
            <Bell className="h-5 w-5" />
            See live controls
          </a>
        </div>
      </div>
    </section>
  );
}
