import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-12 backdrop-blur-strong">
      <nav className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link
            href="/"
            className="relative group"
          >
            <span className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
              Home
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/timeline"
            className="relative group"
          >
            <span className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
              Timeline
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/resources"
            className="relative group"
          >
            <span className="text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
              Resources
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <div className="text-4xl animate-float" style={{ animationDelay: "0s" }}>∫</div>
          <div className="text-4xl animate-float" style={{ animationDelay: "0.5s" }}>Σ</div>
          <div className="text-4xl animate-float" style={{ animationDelay: "1s" }}>π</div>
          <div className="text-4xl animate-float" style={{ animationDelay: "1.5s" }}>∞</div>
          <div className="text-4xl animate-float" style={{ animationDelay: "2s" }}>∂</div>
        </div>

        <p className="text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Bernhard Riemann Tribute Project
        </p>
      </nav>
    </footer>
  );
}
