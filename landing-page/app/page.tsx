'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
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
              <a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#industries" className="text-gray-300 hover:text-white transition-colors">Industries</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="hero">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Capture, Follow Up, and Book Customers—
              <span className="text-purple-400"> Without Extra Staff</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Done-for-you marketing automation that answers leads in minutes, cuts no-shows with reminders, and grows 5-star reviews automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Get Your Free Automation Audit
              </button>
              <button onClick={handleDemoClick} className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Talk to an Expert
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Most clients see ROI within 30-60 days • No setup fees • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.results ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="results">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Changes in 30–60 Days</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Our clients see dramatic improvements in lead conversion, appointment show rates, and online reputation within the first two months.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "<2min", label: "Average Lead Response Time", description: "No more lost inquiries" },
                { metric: "85%+", label: "Appointment Show Rate", description: "Automated reminders work" },
                { metric: "3x", label: "Lead Conversion Increase", description: "More booked jobs" },
                { metric: "$25K+", label: "Monthly Revenue Growth", description: "Average client increase" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-all">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-lg font-semibold mb-2">{item.label}</div>
                  <div className="text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.provenResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="provenResults">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Tangible outcomes our clients achieve with ARK Technologies automation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-all">
                <div className="text-4xl font-bold text-green-400 mb-2">$5</div>
                <div className="text-lg font-semibold mb-2">Cost Per Lead</div>
                <div className="text-gray-400">90% below industry average ($50)</div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-all">
                <div className="text-4xl font-bold text-blue-400 mb-2">12%</div>
                <div className="text-lg font-semibold mb-2">Conversion Rate</div>
                <div className="text-gray-400">3x industry standard</div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-all">
                <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
                <div className="text-lg font-semibold mb-2">ROI</div>
                <div className="text-gray-400">Pays back in 4 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.platform ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enterprise Marketing Automation Platform</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Client Interface Layer",
                  components: ["Lead Capture Forms", "Appointment Booking", "Review Management", "CRM Dashboard"]
                },
                {
                  title: "Automation Engine",
                  components: ["n8n Workflows", "AI Response Logic", "Custom Triggers", "Multi-Channel Routing"]
                },
                {
                  title: "Communication Layer",
                  components: ["Email Infrastructure", "SMS Gateway", "Voice Integration", "Chat Systems"]
                },
                {
                  title: "Data & Analytics",
                  components: ["PostgreSQL Database", "Redis Cache", "Performance Analytics", "ROI Tracking"]
                }
              ].map((layer, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">{layer.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {layer.components.map((component, idx) => (
                      <div key={idx} className="bg-gray-700/50 p-3 rounded-lg text-center text-sm border border-gray-600 hover:bg-gray-700/70 transition-all">
                        {component}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.industries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for High-Value Service Industries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Law Firms",
                  description: "Case intake automation and client nurturing for firms that spend heavily to win new cases.",
                  features: ["Instant lead response", "Consultation booking", "Client communication"]
                },
                {
                  title: "Contractors",
                  description: "Bid follow-up and project scheduling that wins more projects and keeps calendars full.",
                  features: ["Bid management", "Appointment scheduling", "Project updates"]
                },
                {
                  title: "Med Spas & Dental",
                  description: "Appointment booking and review collection that keeps schedules busy and reputation strong.",
                  features: ["Online booking", "Reminder automation", "Review collection"]
                },
                {
                  title: "Property Management",
                  description: "Tenant communication automation that handles the busy work for managers.",
                  features: ["Tenant screening", "Maintenance requests", "Rent reminders"]
                },
                {
                  title: "E-commerce",
                  description: "Customer retention and cart recovery systems that increase repeat buyers.",
                  features: ["Cart recovery", "Customer retention", "Review automation"]
                }
              ].map((industry, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-1">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Automation Package</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Project Builds",
                  price: "$10K+",
                  description: "Complete automation stack implementation",
                  features: ["4-8 week timeline", "CRM setup", "Workflow automation", "Review management", "Training included"],
                  cta: "See if You Qualify"
                },
                {
                  name: "Calm Waters",
                  price: "$750/mo",
                  description: "Basic automation and review management",
                  features: ["Review automation", "Basic chatbot", "Email flows", "Monthly reporting", "Email support"],
                  cta: "Get Started"
                },
                {
                  name: "Rising Tide",
                  price: "$1.5-2K/mo",
                  description: "Multi-channel automation with analytics",
                  features: ["Multi-channel automation", "Advanced analytics", "SMS integration", "Priority support", "Monthly optimization"],
                  cta: "Most Popular",
                  popular: true
                },
                {
                  name: "Safe Harbor",
                  price: "$3.5K+/mo",
                  description: "Custom CRM with ERP integrations",
                  features: ["Custom CRM", "ERP integrations", "BI dashboards", "Dedicated support", "Custom workflows"],
                  cta: "Enterprise Solution"
                }
              ].map((plan, index) => (
                <div key={index} className={`relative bg-gray-800/50 p-6 rounded-xl border transition-all hover:bg-gray-800/70 ${plan.popular ? 'border-purple-500 scale-105' : 'border-gray-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={handleAuditClick} className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'border border-gray-600 hover:border-gray-400'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stop Chasing Leads by Hand?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free automation audit and see exactly where your business is losing leads, missing appointments, and leaving money on the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleAuditClick} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Get Your Free Automation Audit
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
                <li><a href="/services" className="hover:text-white transition-colors">All Services</a></li>
                <li><a href="/services/crm-with-marketing-automation" className="hover:text-white transition-colors">CRM Automation</a></li>
                <li><a href="/services/review-management-software" className="hover:text-white transition-colors">Review Management</a></li>
                <li><a href="/services/lead-nurturing-software" className="hover:text-white transition-colors">Lead Nurturing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
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