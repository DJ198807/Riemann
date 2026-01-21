import content from "@/data/content.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TimelinePage() {
  const { profile, milestones } = content;

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
          <p className="text-xl text-slate-600 dark:text-slate-300 animate-fadeInUp delay-200">Life Timeline</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full animate-pulse-slow"></div>

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 animate-fadeInUp ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-2xl animate-pulse-slow animate-glow"></div>

                {/* Content */}
                <div
                  className={`relative bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-purple-900/30 rounded-2xl shadow-xl p-8 ml-16 mr-16 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-strong ${
                    index % 2 === 0 ? "md:mr-auto md:ml-12" : "md:ml-auto md:mr-12"
                  } md:w-5/12`}
                >
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-bold mb-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow">
                    {milestone.year}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 py-16 text-center">
        <a
          href="/"
          className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-fadeInUp"
        >
          ← Back to Home
        </a>
      </section>
      <Footer />
    </main>
    </>
  );
}
