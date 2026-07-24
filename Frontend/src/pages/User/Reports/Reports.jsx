import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  FileBarChart,
  FileText,
  Filter,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

const reportTypes = [
  "Traffic",
  "Route History",
  "Saved Routes",
  "Bus Tracking",
  "Notifications",
];

const reportPeriods = [
  "Today",
  "Last 7 days",
  "Last 30 days",
  "This month",
  "Custom",
];

const reportFormats = ["PDF", "CSV", "TXT"];

function Reports() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [formData, setFormData] = useState({
    title: "",
    type: "Traffic",
    period: "Last 7 days",
    format: "PDF",
  });

  useEffect(() => {
    const savedReports = localStorage.getItem("transitInsightReports");

    if (savedReports) {
      try {
        setReports(JSON.parse(savedReports));
      } catch {
        setReports([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "transitInsightReports",
      JSON.stringify(reports)
    );
  }, [reports]);

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesSearch =
        report.title.toLowerCase().includes(search.toLowerCase()) ||
        report.type.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        selectedFilter === "All" ||
        report.type === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [reports, search, selectedFilter]);

  const readyReports = reports.filter(
    (report) => report.status === "Ready"
  ).length;

  const generatedToday = reports.filter((report) => {
    const today = new Date().toDateString();
    const reportDate = new Date(report.createdAt).toDateString();

    return today === reportDate;
  }).length;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleGenerateReport = (event) => {
    event.preventDefault();

    const reportTitle =
      formData.title.trim() ||
      `${formData.type} Report`;

    const newReport = {
      id: Date.now(),
      title: reportTitle,
      type: formData.type,
      period: formData.period,
      format: formData.format,
      createdAt: new Date().toISOString(),
      status: "Ready",
      source: "User activity",
    };

    setReports((previousReports) => [
      newReport,
      ...previousReports,
    ]);

    setFormData((previousData) => ({
      ...previousData,
      title: "",
    }));
  };

  const handleDeleteReport = (reportId) => {
    setReports((previousReports) =>
      previousReports.filter(
        (report) => report.id !== reportId
      )
    );
  };

  const handleClearReports = () => {
    setReports([]);
  };

  const handleDownload = (report) => {
    const content = [
      "TransitInsight AI",
      "",
      `Report Title: ${report.title}`,
      `Report Type: ${report.type}`,
      `Report Period: ${report.period}`,
      `Format Selected: ${report.format}`,
      `Generated At: ${formatDate(report.createdAt)}`,
      `Source: ${report.source}`,
      "",
      "This report was generated from the current user's activity.",
      "Real report data will later be supplied by the FastAPI backend.",
    ].join("\n");

    const file = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const fileUrl = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");

    downloadLink.href = fileUrl;
    downloadLink.download = `${report.title
      .toLowerCase()
      .replaceAll(" ", "-")}.txt`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    URL.revokeObjectURL(fileUrl);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <FileBarChart size={18} />
                Personal analytics
              </div>

              <h1 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                My Reports
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Generate and manage reports based on your route searches,
                saved routes, traffic checks, bus tracking, and notification
                activity.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <ReportStatCard
            title="My Reports"
            value={reports.length}
            description="Reports created by this user"
            icon={FileText}
          />

          <ReportStatCard
            title="Ready Reports"
            value={readyReports}
            description="Available for download"
            icon={CheckCircle2}
          />

          <ReportStatCard
            title="Generated Today"
            value={generatedToday}
            description="Reports created today"
            icon={Clock3}
          />

          <ReportStatCard
            title="Report Categories"
            value={
              new Set(reports.map((report) => report.type)).size
            }
            description="Categories used by this user"
            icon={BarChart3}
          />
        </section>

        <section className="grid gap-8 xl:grid-cols-3">
          <form
            onSubmit={handleGenerateReport}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 xl:col-span-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  Create report
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  Generate New Report
                </h2>
              </div>

              <Plus size={24} className="text-cyan-400" />
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="report-title"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Report title
                </label>

                <input
                  id="report-title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Example: My weekly traffic report"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
                />
              </div>

              <div>
                <label
                  htmlFor="report-type"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Report type
                </label>

                <select
                  id="report-type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  {reportTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="report-period"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Report period
                </label>

                <select
                  id="report-period"
                  name="period"
                  value={formData.period}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  {reportPeriods.map((period) => (
                    <option key={period} value={period}>
                      {period}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="report-format"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Preferred format
                </label>

                <select
                  id="report-format"
                  name="format"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  {reportFormats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
            >
              <FileText size={18} />
              Generate Report
            </button>
          </form>

          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 xl:col-span-2">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  User activity
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  Report History
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search my reports"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 sm:w-64"
                  />
                </div>

                <div className="relative">
                  <Filter
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <select
                    value={selectedFilter}
                    onChange={(event) =>
                      setSelectedFilter(event.target.value)
                    }
                    className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-10 text-sm text-white outline-none focus:border-cyan-500 sm:w-48"
                  >
                    <option value="All">All report types</option>

                    {reportTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {reports.length > 0 && (
              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleClearReports}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
                >
                  <Trash2 size={16} />
                  Clear All Reports
                </button>
              </div>
            )}

            {filteredReports.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
                <FileText
                  size={42}
                  className="mx-auto text-slate-600"
                />

                <h3 className="mt-4 font-semibold text-white">
                  No user reports found
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Generate your first report using the form.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {filteredReports.map((report) => (
                  <article
                    key={report.id}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                          <FileText size={21} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-white">
                            {report.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                            <span>{report.type}</span>

                            <span>•</span>

                            <span>{report.period}</span>

                            <span>•</span>

                            <span>{report.format}</span>
                          </div>

                          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                            <CalendarDays size={14} />
                            {formatDate(report.createdAt)}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => handleDownload(report)}
                          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                        >
                          <Download size={16} />
                          Download
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteReport(report.id)
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
    </DashboardLayout>
  );
}

function ReportStatCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {value}
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {description}
      </p>
    </article>
  );
}

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleString();
}

export default Reports;
