import './Projects.css';

const projects = [
  {
    title: 'Stretch Atlas',
    desc: 'A mobile app featuring an interactive anatomical body map that guides athletes and bodybuilders through targeted stretches based on what\'s sore. Tap a muscle group, get the stretch.',
    image: '/stretch_atlas.png',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
  },
  {
    title: 'Fitness Platform',
    desc: 'A fitness application I built (under NDA). Can\'t share the details, but it\'s a good one.',
    image: '/coaching.jpg',
    tags: ['Under NDA', 'React Native', 'Mobile', 'iOS', 'Tablet', 'Android', 'Web', 'Stripe', 'Appwrite'],
  },
  {
    title: 'Made With Love',
    desc: 'A mobile food delivery app connecting home cooks with local food lovers. The product was built and ready... the business model just didn\'t hold up. Shelved, but still one of my favourite things I\'ve built.',
    image: '/made_with_love.jpg',
    tags: ['Mobile', 'iOS', 'Android', 'Supabase', 'Stripe'],
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1 className="projects-heading">
          Things I've <span className="accent-pink">Built</span>
        </h1>
        <p className="projects-subheading">
          Side projects, client work, and a couple things that never quite made it out.
        </p>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map(({ title, desc, image, tags }) => (
            <div key={title} className="project-card">
              <div className="project-card-image-wrap">
                <img src={image} alt={title} className="project-card-image" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-desc">{desc}</p>
                <div className="project-card-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
