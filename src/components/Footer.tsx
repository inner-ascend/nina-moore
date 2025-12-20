export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-12 px-6 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-xl font-serif text-black mb-6">
          Nina Moore
        </p>

        <div className="flex justify-center items-center gap-6 text-sm text-black/50 mb-8">
          <a href="mailto:hello@nina-moore.com" className="hover:text-black transition-colors">
            hello@nina-moore.com
          </a>
          <span className="text-black/20">·</span>
          <a href="https://instagram.com/nina__eterna" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            @nina__eterna
          </a>
        </div>

        <p className="text-xs text-black/40">
          © {new Date().getFullYear()} Nina Moore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
