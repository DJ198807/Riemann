import content from "@/data/content.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  const { profile, contributions } = content;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse-slow">
              {profile.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 animate-fadeInUp delay-200">
              {profile.nativeName}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 animate-fadeInUp delay-300">
              {profile.birth} - {profile.death}
            </p>
            <div className="flex flex-wrap gap-2 animate-fadeInUp delay-400">
              {profile.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fadeInUp delay-500">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
              <img
                src={profile.portrait}
                alt={profile.name}
                className="relative rounded-2xl shadow-2xl max-w-md w-full animate-float"
                style={{ maxWidth: '300px' }}
              />
              <ChatWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 animate-fadeInUp">
            生平
          </h2>
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-purple-900/30 rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-strong animate-fadeInUp delay-200">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed animate-fadeInUp delay-300">
              {profile.biography}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed animate-fadeInUp delay-400">
              {profile.legacy}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="#contributions"
            className="group bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-purple-900/30 rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp delay-300 backdrop-blur-strong"
          >
            <div className="text-4xl mb-4 animate-float">∫</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
              主要贡献
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              探索黎曼在数学上的革命性工作
            </p>
          </a>
          <a
            href="/timeline"
            className="group bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp delay-400 backdrop-blur-strong"
          >
            <div className="text-4xl mb-4 animate-float">∑</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors">
              人生时间线
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              了解黎曼的生平和主要成就
            </p>
          </a>
          <a
            href="/resources"
            className="group bg-gradient-to-br from-white to-pink-50 dark:from-slate-800 dark:to-pink-900/30 rounded-2xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp delay-500 backdrop-blur-strong">
            <div className="text-4xl mb-4 animate-float">π</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-pink-600 transition-colors">
              学习资源
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              关于黎曼的书籍、视频和参考资料
            </p>
          </a>
        </div>
      </section>

      {/* Contributions Preview */}
      <section id="contributions" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center animate-fadeInUp">
            主要贡献
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contributions.map((contribution, index) => (
              <article
                key={contribution.title}
                className="group bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-800 dark:via-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp backdrop-blur-strong"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {contribution.title}
                  </h3>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow">
                    {contribution.year}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{contribution.description}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <span className="text-blue-600 dark:text-blue-400">影响：</span> {contribution.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
}
