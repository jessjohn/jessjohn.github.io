import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const traits = [
  { label: '10+ years of experience' },
  { label: 'Ottawa Ruby meetup host' },
  { label: 'M.Ed in progress' },
  { label: 'Mentor to many' },
];

const services = [
  {
    title: 'Product MVP Design & Build',
    desc: 'I work with founders to define scope, validate assumptions, and build a lean, functional MVP that launches fast without cutting corners on quality or usability.',
  },
  {
    title: 'Technical Architecture & Codebase Modernization',
    desc: 'I review existing systems, identify risk areas, and design scalable, maintainable architectures. The goal is to reduce complexity, improve performance, and set your team up for growth instead of technical debt.',
  },
  {
    title: 'Process & Engineering Consulting',
    desc: 'Embedded support for small teams that need structure, clarity, and a senior technical voice to help them ship better software more consistently.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">
            Hey, I'm <span className="accent-pink">Jess</span>
          </h1>
          <p className="hero-subheading">Technical leader, entrepreneur, and consultant</p>
          <p className="hero-bio">
            I'm a software engineer and entrepreneur with over a decade of experience building
            products, teaching computer science, and helping teams ship real-world software.
            I partner with founders and startups that need a strategic thinker who can bridge
            business vision with hands-on technical execution.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/projects')}>
              Check Out My Work
            </button>
            <button className="btn-secondary" onClick={() => navigate('/resume')}>
              Resume
            </button>
          </div>
          <div className="hero-traits">
            {traits.map(({ label }) => (
              <div key={label} className="trait-pill">
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img
              src="/coding.svg"
              alt="Jess coding"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="about-heading">
          My <span className="accent-pink">services</span>
        </h2>
        <p className="about-intro">
          If you're looking for someone who will challenge assumptions, think like a product owner,
          and still write solid, reliable code — we'll work well together. I don't just build what
          you ask for. I help you build the right thing.
        </p>
        <div className="about-cards">
          {services.map(({ title, desc }) => (
            <div key={title} className="about-card">
              <h3 className="about-card-title">{title}</h3>
              <p className="about-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
