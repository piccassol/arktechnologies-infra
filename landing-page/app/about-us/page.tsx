'use client';
import React, { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAuditClick = () => {
    window.open('mailto:sales@arktechnologies.ai?subject=Free Automation Audit Request&body=Hi! I\'d like to schedule a free automation audit for my business. Please let me know your availability.', '_blank');
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/arktechnologies-demo', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/">
                <img 
                  src="/ark-logo.png" 
                  alt="ARK Technologies" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="/about-us" className="text-white font-semibold">About</a>
              <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="hero">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automation Built for 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Small Business Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Done-For-You Systems Today. Big Ideas for Tomorrow.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Ark Technologies started with one goal: make marketing automation for small business simple. We set up tools that capture leads, book jobs, and grow reviews. And we manage it so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Get Your Free Audit
              </button>
              <button onClick={handleDemoClick} className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="story">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                In late 2024, our paths crossed inside a crypto and AI project. That project ended, but the idea for Ark was born.
              </p>
              <p>
                We saw the same problems again and again. Small businesses lose leads. They miss appointments. And they skip asking for reviews. Big companies had the tools to fix it. Small businesses didn't.
              </p>
              <p>
                Ark started as a way to change that. We began with a CRM with marketing automation. Then we added other done-for-you systems. They deliver results in 30–60 days.
              </p>
              <p>
                Today, Ark Automations brings in the cashflow that keeps our business strong. Tomorrow, Ark AI and Aurora Rift take the next step. Our vision is big. We are building <span className="text-purple-400 font-semibold">decentralized, AI-driven systems</span>. These systems will transform industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ark */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="whyChoose">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ark</h2>
              <p className="text-xl text-gray-300 mb-4">Most software leaves you to figure it out.</p>
              <p className="text-xl text-white font-semibold mb-8">We don't.</p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Ark builds and runs done-for-you automation for your business. No stress. No extra staff. Just results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Affordable CRM Software",
                  description: "Custom workflows built for your business"
                },
                {
                  title: "Review Management Software", 
                  description: "Grows trust and builds reputation"
                },
                {
                  title: "Lead Nurturing Software",
                  description: "Instant replies that convert"
                },
                {
                  title: "Automated Appointment Reminders",
                  description: "Cut no-shows and keep schedules full"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.founders ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="founders">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet the Founders</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Noah</h3>
                <h4 className="text-lg text-gray-300 mb-4">AI Builder</h4>
                <p className="text-gray-300 leading-relaxed">
                  Noah has been designing AI systems since the early days of blockchain projects. His work began with the Einstein Bot idea and now drives Aurora Rift, Ark's long-term AI vision. He leads the tech side of Ark and makes the tools work for your business.
                </p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Pantea</h3>
                <h4 className="text-lg text-gray-300 mb-4">Strategist & Connector</h4>
                <p className="text-gray-300 leading-relaxed">
                  Pantea has a background in psychology, strategy, and marketing. She builds the bridge between tech and business. She solves small business pain points. She also connects ideas in crypto and AI. Her focus is growth.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-300 mt-8 text-lg">
              Together, we created Ark to solve today's problems while shaping tomorrow's future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="vision">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Vision</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We start with automation for small business. But that's only the first step.
              </p>
              <p>
                Ark is building new AI systems. These systems run decentralized, adapt fast, and stay open. Aurora Rift is one piece of that vision—a project built to explore how AI can serve people, not control them.
              </p>
              <p>
                Small businesses get results today. Tech partners and innovators see where we're going tomorrow. That balance is what makes Ark different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="cta">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see what automation can do for you?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the same tools big companies use—without the cost or stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Get Your Free Audit
              </button>
              <button onClick={handleDemoClick} className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/ark-logo.png" 
                  alt="ARK Technologies" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">Enterprise marketing automation that captures leads, books appointments, and grows reviews—without extra staff.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services/crm-with-marketing-automation" className="hover:text-white transition-colors">Lead Automation</a></li>
                <li><a href="/services/automated-appointment-reminders" className="hover:text-white transition-colors">Appointment Booking</a></li>
                <li><a href="/services/review-management-software" className="hover:text-white transition-colors">Review Management</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">CRM Integration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/#industries" className="hover:text-white transition-colors">Law Firms</a></li>
                <li><a href="/#industries" className="hover:text-white transition-colors">Contractors</a></li>
                <li><a href="/#industries" className="hover:text-white transition-colors">Med Spas</a></li>
                <li><a href="/#industries" className="hover:text-white transition-colors">Property Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>sales@arktechnologies.ai</li>
                <li>support@arktechnologies.ai</li>
                <li>enterprise@arktechnologies.ai</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ARK Technologies AI, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
