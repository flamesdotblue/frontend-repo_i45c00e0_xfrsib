import React from 'react';
import { Users, AlertTriangle, Bell, Compass, CheckCircle2 } from 'lucide-react';

export default function LiveTripDashboard() {
  return (
    <section id="live" className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold text-sky-900 sm:text-4xl">Live Headcount & Adaptation</h2>
        <p className="mt-2 text-sky-900/80">Real-time safety tools for teachers and chaperones, with one-tap alerts and rerouting.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Headcount */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
          <div className="mb-4 flex items-center gap-2">
            <div className="inline-flex items-center justify-center rounded-lg bg-sky-600 p-2 text-white">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-sky-900">Live Headcount</h3>
          </div>
          <div className="flex items-end gap-6">
            <div>
              <div className="text-4xl font-extrabold text-sky-900">58</div>
              <div className="text-sm text-sky-900/70">Present</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600">2</div>
              <div className="text-sm text-sky-900/70">To check-in</div>
            </div>
            <div className="ml-auto inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> All groups synced
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <button className="rounded-xl bg-sky-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-sky-700">Mark Group A</button>
            <button className="rounded-xl bg-sky-50 px-3 py-2 font-semibold text-sky-700 ring-1 ring-sky-100 hover:bg-sky-100">Mark Group B</button>
          </div>
        </div>

        {/* Reroute/Delay */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
          <div className="mb-4 flex items-center gap-2">
            <div className="inline-flex items-center justify-center rounded-lg bg-amber-500 p-2 text-white">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-sky-900">Reroute / Delay</h3>
          </div>
          <p className="text-sm text-sky-900/80">Bus delay 10 minutes. Suggesting alternate route with shorter walk time.</p>
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700">
              <Compass className="h-4 w-4" /> Accept reroute
            </button>
            <button className="rounded-xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-100 hover:bg-amber-100">Keep plan</button>
          </div>
        </div>

        {/* Broadcast */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
          <div className="mb-4 flex items-center gap-2">
            <div className="inline-flex items-center justify-center rounded-lg bg-violet-600 p-2 text-white">
              <Bell className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-sky-900">Notify Everyone</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="rounded-lg bg-violet-50 p-3 text-violet-900 ring-1 ring-violet-100">Update sent: “Arriving 10 mins later. Headcount at the fountain.”</div>
            <button className="w-full rounded-xl bg-violet-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-violet-700">Send quick update</button>
          </div>
        </div>
      </div>
    </section>
  );
}
