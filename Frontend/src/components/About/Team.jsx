import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Mail,
  UserCircle2,
} from "lucide-react";

const team = [
  {
    name: "Bhaskar Das",
    role: "Project Lead & Full Stack Developer",
    image: null,
    skills: "React • Python • AI • Machine Learning",
    github: "#",
    linkedin: "#",
    email: "mailto:bhaskar@example.com",
  },
  {
    name: "Sarup Majumder",
    role: "Frontend Developer",
    image: null,
    skills: "React • Tailwind CSS • UI/UX",
    github: "#",
    linkedin: "#",
    email: "mailto:sarup@example.com",
  },
  {
    name: "Subhendu Sekhar Das",
    role: "Backend Developer",
    image: null,
    skills: "FastAPI • PostgreSQL • REST API",
    github: "#",
    linkedin: "#",
    email: "mailto:subhendu@example.com",
  },
];

function Team() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            OUR TEAM
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              People Behind TransitInsight AI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We are passionate developers working together to build an
            AI-powered smart public transportation platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 ring-4 ring-cyan-500/20">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <UserCircle2 size={80} className="text-cyan-400" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {member.name}
              </h3>

              <p className="mt-2 font-semibold text-cyan-300">
                {member.role}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {member.skills}
              </p>

              <div className="mt-8 flex justify-center gap-5">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} code profile`}
                  className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-cyan-500 hover:text-white"
                >
                  <Code2 size={20} />
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} professional profile`}
                  className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-blue-600 hover:text-white"
                >
                  <BriefcaseBusiness size={20} />
                </a>

                <a
                  href={member.email}
                  aria-label={`Email ${member.name}`}
                  className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-emerald-500 hover:text-white"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
