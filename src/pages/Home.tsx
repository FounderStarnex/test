import { motion } from "framer-motion";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const skills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Node.js",
    "Cloudflare",
  ];

  const projects = [
    {
      title: "个人导航站",
      desc: "简洁静态导航页面，部署在 Cloudflare Pages",
      link: "#",
    },
    {
      title: "模拟交易小应用",
      desc: "前端金融模拟demo，K线交互页面",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-16">
      {/* Hero */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=dev"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Your Name</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            前端爱好者，喜欢折腾静态站点、React、云部署。
            这里是我的个人主页，记录项目与学习。
          </motion.p>

          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <a href="#" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              <Github size={22} />
            </a>
            <a href="#" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              <Mail size={22} />
            </a>
            <a href="#" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
              <Linkedin size={22} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center mb-10">
            Skills
          </motion.h2>
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-cyan-300"
              >
                {skill}
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center mb-10">
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                variants={fadeIn}
                className="block p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500 transition group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-cyan-400" />
                </div>
                <p className="mt-2 text-slate-400">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">Contact</motion.h2>
          <motion.p variants={fadeIn} className="text-slate-300 mb-8">欢迎联系我交流技术</motion.p>
          <motion.a
            variants={fadeIn}
            href="mailto:example@mail.com"
            className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium rounded-lg transition"
          >
            Send Email
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Your Name. Built with React + Vite + Tailwind + Framer Motion</p>
      </footer>
    </div>
  );
}