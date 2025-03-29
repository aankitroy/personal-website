'use client';
import React from 'react';
import { Menu, X, ArrowRight, MessagesSquare, Mail, Linkedin } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const testimonials = [
    {
      text: "Aankit is an incredibly motivated Tech Manager with exceptional problem-solving skills. His unique ability to see problems from different angles leads to innovative solutions. His leadership style created a collaborative work environment, inspiring the team to achieve outstanding results.",
      author: "Hamid Siddiqui",
      role: "Android Developer"
    },
    {
      text: "I cannot recommend him enough. Aankit is an exceptional leader who possesses a rare combination of technical expertise, problem-solving skills, and interpersonal qualities. His ability to find innovative solutions to complex problems and commitment to creating game-changing products is remarkable.",
      author: "Harsha Vardhan Tamatam",
      role: "Ex-Data Scientist @Vedantu & @Khabri"
    },
    {
      text: "Aankit has been an exceptional leader and mentor. His humility, grounded nature, and willingness to help others make him a truly remarkable individual. His leadership style is characterised by a unique ability to motivate and keep the enthusiasm of the entire team high.",
      author: "Pulkita Marwah",
      role: "Google Cloud Consultant at Searce"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo Text Only */}
            <span className="text-xl font-bold text-gray-900">Aankit Roy</span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Press</a>
              <div className="flex items-center space-x-4">
                <a href="mailto:aankitroy1990@gmail.com" className="text-purple-600 hover:text-purple-700">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/aankit-roy-20515b35/" className="text-purple-600 hover:text-purple-700">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Press</a>
              <div className="flex items-center space-x-4 pt-4">
                <a href="mailto:aankitroy1990@gmail.com" className="text-purple-600 hover:text-purple-700">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/aankitroy" className="text-purple-600 hover:text-purple-700">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg">
                Contact
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Where 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI Strategy </span> 
            Meets 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Implementation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">Transforming businesses through strategic AI solutions</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Strategic Clarity</h3>
              <p className="text-gray-600">Know exactly where and how to implement AI in your business</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Clear ROI</h3>
              <p className="text-gray-600">Cut through the hype to focus on AI solutions with measurable impact</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Future-Ready</h3>
              <p className="text-gray-600">Stay ahead with the latest advancements in AI technology</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <button onClick={() => {
              window.location.href = 'https://app.cal.com/aankit/30min';
            }} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:opacity-90 inline-flex items-center">
              Schedule Free Consultation
              <ArrowRight className="ml-2" />
            </button>
            <button onClick={() => {
              window.location.href = '/services';
            }}  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* About Section with CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-gray-600 mb-8">
            With over a decade of engineering leadership experience at companies like Writesonic and Khabri, I combine deep technical expertise with strategic AI implementation. My journey spans from scaling systems for millions of users to architecting cutting-edge AI solutions. I specialize in helping businesses navigate the AI landscape while ensuring robust, scalable implementations that deliver measurable results.
          </p>
          <a href="/about" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
            Learn more about my journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Featured Testimonials Preview */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Industry Leaders Say</h2>
            <p className="text-gray-600">Insights from professionals I&apos;ve worked with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/testimonials" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
              View all testimonials
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured In</h2>
            <p className="text-gray-600">Our journey has been covered by major publications</p>
          </div>
          
          {/* Major Publications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              <img src="/api/placeholder/120/60" alt="TechCrunch" className="h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/api/placeholder/120/60" alt="Forbes" className="h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/api/placeholder/120/60" alt="Economic Times" className="h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/api/placeholder/120/60" alt="YCombinator" className="h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/api/placeholder/120/60" alt="Mashable" className="h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/api/placeholder/120/60" alt="YourStory" className="h-8 object-contain" />
            </div>
          </div>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/40/40" alt="TechCrunch" className="h-6 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">YC S19 Demo Day Favorite</h3>
              <p className="text-gray-600 mb-4">Featured among TechCrunch&apos;s top 12 favorite startups from Y Combinator&apos;s Summer 2019 Demo Day.</p>
              <a href="https://techcrunch.com/2019/08/21/our-12-favorite-startups-from-y-combinators-s19-demo-day-2" target="_blank" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/40/40" alt="Economic Times" className="h-6 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">ETCIO Interview</h3>
              <p className="text-gray-600 mb-4">Discussion on key roles as a technology leader and scaling tech platforms.</p>
              <a href="https://cio.economictimes.indiatimes.com" target="_blank" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                Watch Interview <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/40/40" alt="Forbes" className="h-6 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2">Forbes India Feature</h3>
              <p className="text-gray-600 mb-4">Featured in Forbes India&apos;s coverage of the rising regional podcast ecosystem.</p>
              <a href="https://www.forbesindia.com" target="_blank" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Transform Your Technical Challenges</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to implement AI solutions or optimize existing systems,
            I&apos;m here to help turn your challenges into opportunities.
          </p>
          <button onClick={() => {
            window.location.href = 'https://app.cal.com/aankit/30min';
          }} className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            <MessagesSquare className="w-5 h-5" />
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold text-gray-900">Aankit Roy</span>
              <p className="mt-4 text-gray-600">Transforming businesses through strategic AI implementation.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AI Agents</li>
                <li>LLM Fine-tuning</li>
                <li>RAG Implementation</li>
                <li>AI Strategy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Press Kit</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>LinkedIn</li>
                <li>Email: aankitroy1990@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;