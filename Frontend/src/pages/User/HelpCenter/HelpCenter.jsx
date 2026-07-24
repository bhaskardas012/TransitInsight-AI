import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

function HelpCenter() {
  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Help Center
        </h1>

        <p className="mt-3 text-slate-400">
          Frequently asked questions and support options will appear here.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default HelpCenter;
