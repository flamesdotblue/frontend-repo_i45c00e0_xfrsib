import React from 'react';
import HeroCover from './components/HeroCover';
import RoleSelection from './components/RoleSelection';
import ItineraryBuilder from './components/ItineraryBuilder';
import LiveTripDashboard from './components/LiveTripDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500" />
            <span className="font-display text-xl font-extrabold text-sky-900">FieldTrip Flow</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-sky-900/80 sm:flex">
            <a href="#roles" className="hover:text-sky-900">Roles</a>
            <a href="#itinerary" className="hover:text-sky-900">Itinerary</a>
            <a href="#live" className="hover:text-sky-900">Live</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-12 px-6 pb-16">
        <HeroCover />
        <RoleSelection />
        <ItineraryBuilder />
        <LiveTripDashboard />
      </main>

      <footer className="border-t border-sky-100 bg-sky-50/50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-sky-900/70">
          <p>
            Built for teachers, chaperones, students, and parents to keep field trips safe, adaptive, and delightful—even with spotty connectivity.
          </p>
        </div>
      </footer>
    </div>
  );
}
