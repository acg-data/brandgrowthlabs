'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Menu, X, Globe, User, FileText, Mail, Settings, AlertCircle, ShoppingBag, PieChart, Star, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-yellow-200">
      
      {/* GLOBAL BACKGROUND ELEMENTS (Dot Pattern) */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {/* Logo representation */}
          <div className="text-2xl font-bold tracking-tighter font-serif flex items-end">
            Brand Growth <br className="hidden md:block"/> Labs
            <svg className="w-8 h-8 ml-1 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4" />
            </svg>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#services" className="hover:text-black transition-colors">What we do</a>
          <a href="#case-study" className="hover:text-black transition-colors">Case study</a>
          <a href="#how-it-works" className="hover:text-black transition-colors">How it works</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all">
            BOOK A FREE STRATEGY CALL
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white p-6 md:hidden flex flex-col gap-6 pt-24">
          <a href="#" className="text-xl font-bold">Home</a>
          <a href="#services" className="text-xl font-bold">What we do</a>
          <a href="#case-study" className="text-xl font-bold">Case study</a>
          <a href="#how-it-works" className="text-xl font-bold">How it works</a>
          <button className="bg-black text-white px-6 py-4 rounded-md font-bold w-full">
            BOOK A STRATEGY CALL
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-12 pb-24 text-center">
        
        {/* Abstract Blobs */}
        <div className="absolute top-0 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Decorative Shapes (The squiggles from image 1) */}
        <div className="absolute top-20 left-0 hidden lg:block">
            <svg width="300" height="150" viewBox="0 0 300 150" fill="none">
                <path d="M-50 50 C 50 150, 200 150, 250 -50" stroke="#4F85F6" strokeWidth="40" strokeLinecap="round" />
            </svg>
        </div>
        <div className="absolute top-10 right-0 hidden lg:block">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                 <path d="M150 0 C 150 100, 50 150, 250 150" fill="#2ECC71" />
            </svg>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm mb-8">
            <Globe size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-gray-600">Trusted by service businesses Globally</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Scale Smarter. Win Retail. <br />
            Dominate Amazon.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Fractional commercial leadership and growth strategy for founders ready to scale beyond mid-market and build durable, profitable brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button className="bg-black text-white px-8 py-4 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all w-full sm:w-auto justify-center">
              BOOK A FREE STRATEGY CALL
              <ArrowRight size={18} />
            </button>
            <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-50 transition-all w-full sm:w-auto justify-center">
              VIEW CASE STUDY
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Proof Avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">25+ booked this month</span>
          </div>
        </div>
        
        {/* Yellow Blob Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400 rounded-3xl rotate-12 z-0 hidden lg:block"></div>
      </header>

      {/* STATS SECTION */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
         {/* Blue Curve Right */}
         <div className="absolute top-0 -right-40 w-80 h-full overflow-hidden pointer-events-none hidden xl:block">
            <div className="w-[500px] h-[500px] border-[60px] border-blue-500 rounded-full absolute top-0 right-[-250px]"></div>
         </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Proven Growth, Not Promises</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with founders to turn momentum into measurable, scalable revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <StatCard value="100%+" label="Year-over-Year Amazon Growth" />
          <StatCard value="2,500+" label="Retail Doors Secured" />
          <StatCard value="$30M" label="Retail Trajectory" />
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
         {/* Red Curve Left */}
         <div className="absolute top-20 -left-60 w-80 h-full overflow-hidden pointer-events-none hidden xl:block">
            <div className="w-[500px] h-[500px] border-[60px] border-red-500 rounded-full absolute top-0 left-[-250px]"></div>
         </div>

        <div className="text-center mb-12">
          <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Problem</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-4">The Problem We Solve</h2>
          <p className="text-gray-600">You&apos;ve built traction. Now growth is getting harder.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProblemCard 
            icon={<ShoppingBag className="text-red-500" size={32} />}
            text="Amazon sales are strong, but plateauing" 
          />
          <ProblemCard 
            icon={<FileText className="text-red-500" size={32} />}
            text="Retail buyers require sharper strategy and proof" 
          />
          <ProblemCard 
            icon={<Mail className="text-red-500" size={32} />}
            text="Agencies execute tasks but don&apos;t own outcomes" 
          />
          <ProblemCard 
            icon={<User className="text-red-500" size={32} />}
            text="Margins are tight and pricing architecture is unclear" 
          />
          <ProblemCard 
            icon={<Settings className="text-red-500" size={32} />}
            text="Operations and growth aren&apos;t aligned" 
          />
          <ProblemCard 
            icon={<AlertCircle className="text-red-500" size={32} />}
            text="Inventory and retail expansion are draining cash flow" 
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
         <div className="text-center mb-12">
          <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Solution</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-6">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard color="bg-green-500" title="Commercial Strategy" items={["Price-pack architecture", "Financial modeling", "Sales and distribution strategy", "Three-year growth roadmaps"]} />
          <ServiceCard color="bg-red-500" title="Amazon Optimization" items={["A+ Content & Storefront design", "PPC campaign management", "Listing optimization", "Brand registry protection"]} />
          <ServiceCard color="bg-yellow-400" title="Retail Expansion" items={["Buyer pitch deck creation", "Retail math & pricing strategy", "Distribution partner selection", "Trade marketing programs"]} />
          <ServiceCard color="bg-purple-400" title="Fractional Leadership" items={["Interim C-Suite support", "Board advisory services", "Team structure & hiring", "Investor presentation prep"]} />
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section id="case-study" className="relative z-10 w-full bg-black py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Yellow accent top right */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20 hidden xl:block"></div>
          
          <div className="text-center mb-12">
            <span className="bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-4 text-white">From $2M to $8M in 18 Months</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we helped a D2C skincare brand crack retail and triple their Amazon revenue.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  G
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Glow Essentials</h3>
                  <p className="text-gray-400 text-sm">Premium Skincare Brand</p>
                </div>
              </div>
              
              <blockquote className="text-gray-300 text-lg italic mb-6">
                &ldquo;Brand Growth Labs didn&apos;t just give us a strategy—they became an extension of our team. The retail expansion alone paid for their fee 10x over.&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=32" alt="Sarah Chen" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-white font-semibold">Sarah Chen</p>
                  <p className="text-gray-400 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Revenue Growth</span>
                  <span className="text-green-400 font-bold">+300%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-gray-500 text-sm mt-2">$2M → $8M in 18 months</p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Retail Doors</span>
                  <span className="text-blue-400 font-bold">+1,200</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-gray-500 text-sm mt-2">From 50 to 1,250 stores</p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Amazon Share</span>
                  <span className="text-yellow-400 font-bold">+180%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-gray-500 text-sm mt-2">Category rank: #47 → #3</p>
              </div>

              <button className="w-full bg-white text-black px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                READ FULL CASE STUDY
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Green accent bottom left */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-10 hidden xl:block"></div>
        
        <div className="text-center mb-16">
          <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Process</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A proven 4-step framework to take your brand from plateau to powerhouse.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
          
          <StepCard 
            number="01"
            title="Discovery Call"
            description="We dive deep into your current operations, identify bottlenecks, and understand your vision for growth."
          />
          <StepCard 
            number="02"
            title="Strategy Session"
            description="Our team builds a custom 90-day roadmap with clear milestones, resource allocation, and success metrics."
          />
          <StepCard 
            number="03"
            title="Implementation"
            description="We roll up our sleeves and execute alongside your team—no handoffs, no disappearing acts."
          />
          <StepCard 
            number="04"
            title="Scale & Optimize"
            description="Continuous improvement based on real data. We refine, test, and double down on what works."
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full">
            <span className="text-gray-600">Typical engagement:</span>
            <span className="font-bold text-black">3-6 months</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Results visible in:</span>
            <span className="font-bold text-black">30 days</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative z-10 w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Purple accent top right */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20 hidden xl:block"></div>
          
          <div className="text-center mb-16">
            <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-4">What Founders Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real results from real partners who&apos;ve scaled with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Finally, a partner who understands both Amazon algorithms AND retail buyer psychology. Our ACOS dropped 40% while revenue doubled."
              name="Michael Torres"
              role="Founder"
              company="NutraBloom"
              image="https://i.pravatar.cc/100?img=11"
              rating={5}
            />
            <TestimonialCard 
              quote="The fractional CMO model was exactly what we needed. Expert guidance without the $300K+ salary commitment. Game changer."
              name="Jennifer Walsh"
              role="CEO"
              company="Pure Home Goods"
              image="https://i.pravatar.cc/100?img=5"
              rating={5}
            />
            <TestimonialCard 
              quote="We went from struggling to get a meeting with Target buyers to a nationwide rollout in 8 months. The pitch deck they built was everything."
              name="David Park"
              role="Co-Founder"
              company="EcoSip"
              image="https://i.pravatar.cc/100?img=3"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold tracking-tighter font-serif flex items-end mb-4">
                Brand Growth <br /> Labs
                <svg className="w-6 h-6 ml-1 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12c2 0 2 4 4 4s2-4 4-4 2 4 4 4" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Fractional commercial leadership for ambitious brands ready to scale.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Commercial Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Amazon Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail Expansion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fractional Leadership</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:hello@brandgrowthlabs.com" className="hover:text-white transition-colors">hello@brandgrowthlabs.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5" />
                  <span>New York, NY<br />Los Angeles, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">Ready to scale your brand?</h3>
              <p className="text-gray-400">Book a free 30-minute strategy call. No pitch, just value.</p>
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all whitespace-nowrap">
              BOOK A FREE CALL
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>&copy; 2024 Brand Growth Labs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- SUB COMPONENTS --- */

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-black text-white p-10 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
      <div className="text-5xl md:text-6xl font-serif font-bold mb-4">{value}</div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
}

function ProblemCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-red-50 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 leading-snug">{text}</h3>
    </div>
  );
}

function ServiceCard({ color, title, items }: { color: string; title: string; items: string[] }) {
  return (
    <div className="bg-black text-white p-8 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[300px] group">
      {/* Decorative Corner */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${color} rounded-full blur-sm transition-all group-hover:scale-110`}></div>
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} rounded-bl-[4rem]`}></div>

      <div className="relative z-10">
        <div className="mb-6">
          <PieChart className="text-white" size={40} />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">We build the financial and structural foundation required to scale.</p>
        
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="bg-white rounded-full p-0.5">
                 <Check size={12} className="text-black stroke-[3]" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center md:text-left">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, name, role, company, image, rating }: { quote: string; name: string; role: string; company: string; image: string; rating: number }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-gray-500 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}
