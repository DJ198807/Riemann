import content from "@/data/content.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  const { profile, media, references } = content;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-fadeInUp">
            {profile.name}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 animate-fadeInUp delay-200">Resources</p>
        </div>
      </section>

      {/* Books Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 animate-fadeInUp delay-300">Books</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {media.books.map((book, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp backdrop-blur-strong"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  {book.author} · {book.year}
                </p>
                <p className="text-slate-700 dark:text-slate-300">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 animate-fadeInUp delay-400">References</h2>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/30 rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp backdrop-blur-strong"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                  {ref.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  {ref.publisher} · {ref.year}
                  {ref.author && ` · ${ref.author}`}
                </p>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    View Resource →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 py-16 text-center">
        <a
          href="/"
          className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-fadeInUp delay-500"
        >
          ← Back to Home
        </a>
      </section>
      <Footer />
    </main>
    </>
  );
}
