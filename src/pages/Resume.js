import Footer from '../components/Footer';
import './Resume.css';

const experience = [
  {
    title: 'Senior Developer, Fullstack & Team Lead',
    company: 'Fullscript',
    period: 'August 2021 – Present',
    bullets: [
      'Led cross-functional teams in developing search and AI-driven features using Agile methodology.',
      'Developed and maintained the company\'s product, by completing complex projects using Ruby on Rails and React.',
      'Mentored developers through regular one-on-ones, goal-setting, and career development plans.',
      'Collaborated with product managers and designers to translate mockups and user feedback into production-ready features.',
      'Delivered technical presentations and walkthroughs to internal stakeholders and non-technical teams.',
      'Managed team retrospectives and sprint planning, fostering a collaborative learning environment.',
    ],
  },
  {
    title: 'Independent Software Contractor',
    company: 'Self-Employed',
    period: 'July 2020 – Present',
    bullets: [
      'Developed multiple full-stack applications for clients across various tech stacks (React, 11ty.js, Ghost, Firebase).',
      'Provided end-user documentation and training for clients transitioning platforms.',
      'Adapted quickly to new frameworks and client needs while managing timelines and scope independently.',
    ],
  },
  {
    title: 'Senior Software Developer, Fullstack',
    company: 'Wikileaf',
    period: 'October 2019 – June 2020',
    bullets: [
      'Spearheaded a complete rewrite of the search infrastructure using Elasticsearch, improving response time from 3s to 30ms.',
      'Created tools and dashboards to help clients understand web traffic and audience insights.',
      'Worked across the full stack (Angular + Django), improving frontend performance and backend API scalability.',
      'Led QA automation efforts using Puppeteer for more reliable testing.',
    ],
  },
  {
    title: 'Software Engineer & Team Lead',
    company: 'Interset',
    period: 'July 2016 – October 2019',
    bullets: [
      'Built data visualizations using d3 and React to expose system anomalies for enterprise users.',
      'Managed and scaled Elasticsearch clusters, wrote high-level REST APIs, and maintained SQL/NoSQL integration.',
      'Led the Search & Discovery team, overseeing junior developers and co-op students, conducting onboarding and technical training.',
      'Liaised with customers and internal support teams to solve production issues and improve documentation.',
      'Traveled to client sites for system upgrades and knowledge sharing.',
    ],
  },
];

const techStack = [
  {
    category: 'Languages',
    skills: ['Python', 'Ruby', 'Java', 'JavaScript', 'TypeScript', 'HTML / CSS'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'React Native', 'Angular', 'Ruby on Rails', '.NET Core'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'SQL Server', 'Elasticsearch', 'Firebase', 'PostgreSQL'],
  },
  {
    category: 'Systems & Tools',
    skills: ['Linux', 'macOS', 'Windows', 'Kubernetes', 'Git', 'REST APIs', 'd3', 'Apache Suite'],
  },
  {
    category: 'Teaching & Collaboration',
    skills: ['Technical Mentorship', 'Agile / Scrum', 'Public Speaking', 'Curriculum Development', 'Empathetic Communication'],
  },
];

const education = [
  {
    title: 'Master of Education',
    school: 'In progress',
    period: '',
    desc: 'Focused on curriculum development, instructional design, and applying pedagogy to technical education.',
  },
  {
    title: 'Bachelor of Computer Science with Honours + Philosophy Minor',
    school: 'Carleton University',
    period: 'September 2012 – August 2016',
    desc: 'Studied OOP, functional programming, data structures & algorithms, and systems design. Graduated with honours.',
  },
];

export default function Resume() {
  return (
    <div className="resume-page">
      <section className="resume-hero">
        <h1 className="resume-heading">
          The <span className="accent-pink">Journey</span>
        </h1>
        <p className="resume-subheading">
          10+ years of building, leading, and teaching.
        </p>
        <button className="btn-download" onClick={() => window.print()}>
          Download PDF Resume
        </button>
      </section>

      <div className="resume-body">
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          <div className="experience-list">
            {experience.map(({ title, company, period, bullets }) => (
              <div key={title} className="experience-item">
                <div className="experience-dot" />
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{title}</h3>
                    <span className="experience-period">{period}</span>
                  </div>
                  <span className="experience-company">{company}</span>
                  <ul className="experience-bullets">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="tech-grid">
            {techStack.map(({ category, skills }) => (
              <div key={category} className="tech-card">
                <h3 className="tech-category">{category}</h3>
                <ul className="tech-skill-list">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="experience-list">
            {education.map(({ title, school, period, desc }) => (
              <div key={title} className="experience-item">
                <div className="experience-dot" />
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{title}</h3>
                    {period && <span className="experience-period">{period}</span>}
                  </div>
                  <span className="experience-company">{school}</span>
                  <p className="experience-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
