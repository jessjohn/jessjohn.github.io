import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="mailto:jess@jessjohnson.dev" className="footer-email">jess@jessjohnson.dev</a>
      <p className="footer-text">© {currentYear} Jess Johnson</p>
    </footer>
  );
}
