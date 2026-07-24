import {
  BrainCircuit,
  MapPin,
  Navigation,
  Route,
} from "lucide-react";

function MapView({ selectedJourney }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-800 p-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            Journey preview
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Route Map
          </h2>
        </div>

        {selectedJourney && (
          <div className="rounded-xl bg-slate-950 px-4 py-3 text-sm text-slate-300">
            {selectedJourney.from} → {selectedJourney.to}
          </div>
        )}
      </div>

      <div className="relative min-h-[430px] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-[20%] h-px w-[75%] rotate-12 bg-cyan-400" />
          <div className="absolute left-[16%] top-[55%] h-px w-[65%] -rotate-12 bg-blue-400" />
          <div className="absolute left-[35%] top-[10%] h-[75%] w-px rotate-12 bg-slate-500" />
          <div className="absolute left-[65%] top-[8%] h-[78%] w-px -rotate-12 bg-slate-500" />
        </div>

        <div className="absolute left-[18%] top-[30%] rounded-full bg-emerald-500 p-3 text-white shadow-lg shadow-emerald-500/30">
          <MapPin size={22} />
        </div>

        <div className="absolute bottom-[24%] right-[18%] rounded-full bg-red-500 p-3 text-white shadow-lg shadow-red-500/30">
          <Navigation size={22} />
        </div>

        <div className="absolute left-[42%] top-[45%] rounded-full bg-cyan-500 p-3 text-white shadow-lg shadow-cyan-500/30">
          <Route size={22} />
        </div>

        <div className="relative flex min-h-[430px] items-center justify-center p-8">
          <div className="max-w-md rounded-3xl border border-cyan-500/20 bg-slate-900/90 p-7 text-center backdrop-blur">
            <BrainCircuit
              size={45}
              className="mx-auto text-cyan-400"
            />

            <h3 className="mt-4 text-xl font-bold text-white">
              Smart Map Preview
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              This temporary map will later be replaced with React Leaflet and
              OpenStreetMap route data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapView;
