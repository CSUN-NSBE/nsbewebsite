import "../assets/css/fontawesome-all.min.css";

function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/70">&copy; 2026 CSUN NSBE Chapter. All rights reserved.</p>

        <ul className="flex items-center gap-5">
          <li>
            <a href="https://www.instagram.com/nsbecsun" className="fab fa-instagram text-lg text-white/80 hover:text-gold transition-colors">
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/csun-nsbe" className="fab fa-linkedin-in text-lg text-white/80 hover:text-gold transition-colors">
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@nsbecsun" className="fab fa-tiktok text-lg text-white/80 hover:text-gold transition-colors">
              <span className="sr-only">TikTok</span>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/5c39MC7xKQ" className="fab fa-discord text-lg text-white/80 hover:text-gold transition-colors">
              <span className="sr-only">Discord</span>
            </a>
          </li>
          <li>
            {/* TODO: confirm the canonical contact email - Home, Vision, and
                Sponsorship each used a different address before this was unified */}
            <a href="mailto:csun.nsbe@my.csun.edu" className="fas fa-envelope text-lg text-white/80 hover:text-gold transition-colors">
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;