'use client';
import React, { useState, useEffect } from 'react';

export default function ServicesPage() {
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

  const services = [
    {
      title: "CRM with Marketing Automation",
      slug: "crm-with-marketing-automation",
      description: "Capture leads, book jobs, and grow reviews in one place. We set up your system and run it so you don't have to.",
      features: [
        "Lead nurturing software that replies fast",
        "Automated appointment reminders to cut no-shows", 
        "Review management software for steady stars",
        "Clear dashboards to track progress"
      ],
      benefits: "Lead capture and follow-up, booking and reminders, reviews and proof, dashboards and workflow automation"
    },
    {
      title: "Review Management Software",
      slug: "review-management-software", 
      description: "Get more 5-star reviews with less effort. We set up and run your system that asks for reviews at the right time.",
      features: [
        "Automate review requests for small business",
        "Multi-platform posting to Google, Yelp, Facebook",
        "Alerts and replies with ready-to-use templates", 
        "Reporting and trends in one dashboard"
      ],
      benefits: "Never miss a chance to ask. Happy customers leave stars. Build proof and win more jobs."
    },
    {
      title: "Lead Nurturing Software", 
      slug: "lead-nurturing-software",
      description: "Reply fast and turn more leads into customers. Most leads get lost when no one answers - we reply in minutes.",
      features: [
        "Automate lead follow up with instant replies",
        "Follow-up sequences with reminder messages",
        "Multi-channel outreach via text and email",
        "Win-back flows for old leads"
      ],
      benefits: "Keep you first in line. Follow up, send reminders, and build trust. More replies mean more sales."
    },
    {
      title: "Automated Appointment Reminders",
      slug: "automated-appointment-reminders",
      description: "Cut no-shows with simple texts and emails. Missed visits cost money - our reminders keep schedules full.",
      features: [
        "Reduce appointment no-shows automatically", 
        "Custom timing - 24 hours, one hour, or both",
        "Easy reschedule links for one-click changes",
        "Post-visit handoff that asks for reviews"
      ],
      benefits: "Clients remember to show up. Your schedule stays full. Your revenue grows."
    }
  ];

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
              <a href="/services" className="text-white font-semibold">Services</a>
              <a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About</a>
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
              Done-For-You
              <span className="text-purple-400"> Marketing Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Capture leads, book appointments, and grow reviews without extra staff
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

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="services">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all hover:border-purple-500">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Why It Works:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.benefits}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={handleAuditClick}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all flex-1"
                    >
                      Get Free Audit
                    </button>
                    <a 
                      href={`/services/${service.slug}`}
                      className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-all text-center flex-1"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="features">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Complete Marketing Automation Suite</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Everything you need to capture leads, book appointments, and grow reviews - all managed for you
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Lead Capture",
                  description: "Forms that work 24/7",
                  icon: "📬"
                },
                {
                  title: "Instant Follow-up", 
                  description: "Reply in under 2 minutes",
                  icon: "⚡"
                },
                {
                  title: "Appointment Booking",
                  description: "Online scheduling + reminders",
                  icon: "📅"
                },
                {
                  title: "Review Growth",
                  description: "Automated 5-star requests",
                  icon: "⭐"
                },
                {
                  title: "Multi-Channel",
                  description: "Email, SMS, and chat",
                  icon: "📱"
                },
                {
                  title: "CRM Integration",
                  description: "All leads in one place", 
                  icon: "📄"
                },
                {
                  title: "Analytics",
                  description: "Track what's working",
                  icon: "📊"
                },
                {
                  title: "Done-For-You",
                  description: "We set up and manage",
                  icon: "🎯"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-all">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="pricing">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Plans for Every Business</h2>
            <p className="text-xl text-gray-300 mb-8">
              From project builds to managed monthly plans - we have options that fit your needs and budget
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Project Builds</h3>
                <p className="text-2xl font-bold text-white mb-2">$10K+</p>
                <p className="text-gray-300 text-sm mb-4">Complete setup and training</p>
                <p className="text-gray-400 text-xs">4-8 week implementation</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500 scale-105">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Managed Plans</h3>
                <p className="text-2xl font-bold text-white mb-2">$750+/mo</p>
                <p className="text-gray-300 text-sm mb-4">Ongoing management & support</p>
                <p className="text-gray-400 text-xs">Most popular</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Enterprise</h3>
                <p className="text-2xl font-bold text-white mb-2">$3.5K+/mo</p>
                <p className="text-gray-300 text-sm mb-4">Custom CRM & integrations</p>
                <p className="text-gray-400 text-xs">Full-service solution</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#pricing" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                View All Plans
              </a>
              <button onClick={handleAuditClick} className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="process">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Audit",
                  description: "We analyze your current lead flow and identify gaps where prospects are slipping away."
                },
                {
                  step: "2", 
                  title: "Custom Setup",
                  description: "We build and configure your automation systems - no generic templates, everything fits your business."
                },
                {
                  step: "3",
                  title: "Launch & Manage", 
                  description: "We launch your system and manage it ongoing. You focus on serving customers, we handle the tech."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="faq">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is this DIY software?",
                  a: "No. We set up and manage your marketing automation for you. You don't need to learn new tools or hire staff."
                },
                {
                  q: "How fast will I see results?", 
                  a: "Most clients see changes in 30–60 days. Faster replies, more reviews, fewer no-shows."
                },
                {
                  q: "What if I already have a CRM?",
                  a: "We can integrate with your existing tools or set up a new system - whatever works best for your business."
                },
                {
                  q: "Do you work with my industry?",
                  a: "We specialize in high-value service businesses: law firms, contractors, med spas, dental practices, and property management."
                },
                {
                  q: "What's included in ongoing management?",
                  a: "We monitor performance, optimize messaging, update workflows, and provide monthly reporting. You get dedicated support."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="cta">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stop Losing Leads?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free automation audit and see exactly where your business is losing prospects and leaving money on the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Get Your Free Audit
              </button>
              <button onClick={handleDemoClick} className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Talk to an Expert
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Most clients see ROI within 30-60 days • No setup fees • Cancel anytime</p>
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
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services/crm-with-marketing-automation" className="hover:text-white transition-colors">CRM with Marketing Automation</a></li>
                <li><a href="/services/review-management-software" className="hover:text-white transition-colors">Review Management</a></li>
                <li><a href="/services/lead-nurturing-software" className="hover:text-white transition-colors">Lead Nurturing</a></li>
                <li><a href="/services/automated-appointment-reminders" className="hover:text-white transition-colors">Appointment Reminders</a></li>
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