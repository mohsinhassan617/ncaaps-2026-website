import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { NavSection } from './types';
import { 
  IMPORTANT_DATES, 
  PROGRAM_COMMITTEE,
  RESOURCE_PERSONS,
  TOPICS,
  TOPIC_ICONS
} from './constants';
import { Download, Users, Phone, Instagram, Clock, Building2, CloudSnow, Landmark, FileText, ArrowRight, ChevronDown, CheckCircle2, Calendar, Sparkles, Variable, Cpu, BarChart, BookOpen, MapPin } from 'lucide-react';

// Local assets (placeholders)
const brochurePdf = './assets/Brochure_new.pdf';
const universityImg =   './assets/university_of_jammu.png';
const csImg = './assets/cs_it.png';
const mathsImg = './assets/maths.png';
const statImg = './assets/stat.png';
const logoImg = './assets/image.png';
const jp_singh = './assets/jp_singh.png';
const vc_sir = './assets/vc_sir.jpeg';
const parmil = './assets/parmil.png';
const Romesh_kumar = './assets/Romesh_kumar.png';
const Vibhakar_mansotra = './assets/Vibhakar_mansotra.png';


export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>(NavSection.HOME);
  const [activeTab, setActiveTab] = useState('univ');

  // Scroll Spy & Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const id = entry.target.getAttribute('id');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sectionRefs = {
    [NavSection.HOME]: useRef<HTMLDivElement>(null),
    [NavSection.ABOUT]: useRef<HTMLDivElement>(null),
    [NavSection.TIMELINE]: useRef<HTMLDivElement>(null),
    [NavSection.SPEAKERS]: useRef<HTMLDivElement>(null),
    [NavSection.COMMITTEE]: useRef<HTMLDivElement>(null),
    [NavSection.SUBMISSION]: useRef<HTMLDivElement>(null),
    [NavSection.ACCOMMODATION]: useRef<HTMLDivElement>(null),
    [NavSection.CONTACT]: useRef<HTMLDivElement>(null),
  };

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper to find person by role for strict layout
  const findPerson = (role: string) => RESOURCE_PERSONS.find(p => p.role === role);

  const ProfileCard = ({ person, isLarge = false }: { person?: typeof RESOURCE_PERSONS[0], isLarge?: boolean }) => {
    if (!person) return null;
    return (
      <div className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 w-full ${isLarge ? 'max-w-md' : 'max-w-xs'}`}>
        <div className={`relative mb-4 ${isLarge ? 'w-40 h-40' : 'w-32 h-32'}`}>
          <img 
            src={person.imageUrl} 
            alt={person.name} 
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="absolute inset-0 rounded-full border border-black/5"></div>
        </div>
        <h3 className={`font-serif font-bold text-brand-primary ${isLarge ? 'text-2xl' : 'text-xl'}`}>{person.name}</h3>
        <div className="h-0.5 w-12 bg-brand-gold my-2 rounded-full"></div>
        <p className="font-bold text-gray-800 uppercase tracking-wide text-xs mb-1">{person.role}</p>
        <p className="text-gray-500 text-sm font-light">{person.designation}</p>
        <p className="text-gray-500 text-sm font-light">{person.institution}</p>
      </div>
    );
  };

  const Connector = () => (
    <div className="h-12 w-0.5 bg-gray-300 mx-auto"></div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-primary selection:text-white">
      <Navbar currentSection={activeSection} onNavigate={handleNavigate} />
     
      {/* --- HERO SECTION --- */}
      <div ref={sectionRefs[NavSection.HOME]} className="relative min-h-screen flex items-center bg-[#0f0406] overflow-hidden pt-20">
        {/* Background Image & Effects */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Texture/Pattern */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-10 animate-pulse-slow"></div>
           
           {/* Background Image (faded) */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

           {/* Gradients */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#0f0406] via-[#1a0509]/95 to-transparent z-0"></div>
           
           {/* Animated Blobs */}
           <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-brand-primary/30 rounded-full blur-[120px] mix-blend-screen animate-blob opacity-60"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000 opacity-50"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full pb-16 pt-10">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="space-y-8 reveal active text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md shadow-lg w-fit">
                 <Sparkles className="w-4 h-4 text-brand-gold animate-spin-slow" />
                 <span className="text-brand-goldLight text-xs font-bold tracking-[0.2em] uppercase">National Conference 2026</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                Interdisciplinary Advances in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold animate-shimmer bg-[length:200%_100%] italic py-1 block mt-2">
                   Mathematical, Statistical, & <br/> Computational Sciences
                </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
               Exploring the dynamic intersections of Mathematics, Statistics, and Computer Science with a focus on Machine Learning, Data Analytics, and Emerging Computational Paradigms.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
               <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelmV54SmjVl1AG2fmGOb4MvWGtyfin_gHer7Aw2B4DtGN9cw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full text-white font-bold shadow-2xl shadow-brand-primary/40 hover:shadow-brand-primary/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden inline-flex items-center"
               >
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left"></div>
                  <span className="relative flex items-center gap-3">
                     Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
               </a>
               <button 
                  onClick={() => handleNavigate(NavSection.TIMELINE)}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
               >
                  <Clock className="w-5 h-5 text-gray-400" />
                  View Schedule
               </button>
               <button 
                  onClick={() => window.open(brochurePdf, "_blank")}
                  className="px-8 py-4 border border-brand-gold/30 text-brand-gold rounded-full font-medium hover:bg-brand-gold/10 transition-all backdrop-blur-sm flex items-center gap-2"
               >
                  <Download className="w-5 h-5" />
                  Brochure
               </button>
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE & DATE OVERLAY */}
          <div className="relative hidden lg:flex reveal delay-200 h-full items-center justify-center perspective-1000">
            {/* Wrapper for the card to handle hover states nicely */}
            <div className="relative w-full max-w-[500px] group">
                
                {/* Decorative Background Frame (Corrected positioning) */}
                <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-[2rem] transform rotate-6 scale-105 opacity-60 transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110"></div>
                
                {/* Main Card Container */}
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-[-3deg] transition-all duration-700 group-hover:rotate-0 group-hover:shadow-[0_20px_50px_rgba(118,33,50,0.3)]">
                     {/* Image */}
                     <div className="absolute inset-0 bg-brand-dark">
                        <img 
                          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                          alt="Conference Venue" 
                          className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                     </div>

                     {/* Content Overlay on Image */}
                     <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                            <div className="flex items-center gap-5">
                                <div className="bg-brand-primary text-white p-4 rounded-xl text-center min-w-[80px] shadow-lg border border-white/10">
                                    <span className="block text-xs font-bold text-brand-gold uppercase tracking-wider mb-1">Feb</span>
                                    <span className="block text-3xl font-serif font-bold leading-none">09</span>
                                    <span className="block text-xs opacity-60">-</span>
                                    <span className="block text-3xl font-serif font-bold leading-none">10</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Save the Date</p>
                                    <p className="text-2xl text-white font-serif font-bold">2026</p>
                                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                                        <MapPin className="w-4 h-4 text-brand-primary" />
                                        <span>University of Jammu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     
                     {/* Logo Watermark */}
                               <img 
                                  src={logoImg}
                                  className="absolute top-6 right-6 w-20 h-20 opacity-90 drop-shadow-xl"
                                  alt="University Logo"
                               />
                </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
          </div>
          
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
           <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
           <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* --- IMPORTANT ALERTS --- */}
      <section className="reveal py-16 px-6 max-w-6xl mx-auto">
         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl relative overflow-hidden">
            <div className="relative z-10 text-center space-y-8">
               <h2 className="text-3xl font-serif font-bold text-blue-900 italic">Call for Abstracts</h2>
               <div className="flex justify-center">
                 <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow max-w-lg w-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📝</div>
                    <h3 className="font-bold text-xl text-blue-800 mb-2">Submission Guidelines</h3>
                    <p className="text-blue-700 text-sm">Max 300 Words • Times New Roman 12pt • APA References</p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- BROCHURE DOWNLOAD SECTION --- */}
      <section className="reveal pb-16 px-6 max-w-6xl mx-auto">
        <div className="bg-brand-dark rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>

           <div className="relative z-10 space-y-4 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-bold tracking-wider uppercase backdrop-blur-sm border border-white/5">
                <FileText className="w-3 h-3" /> Official Document
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Conference Brochure 2026</h2>
              <p className="text-gray-400 leading-relaxed">
                Get comprehensive details about the conference themes, committee members, and schedule. Download the official brochure for your reference.
              </p>
           </div>

           <div className="relative z-10">
                 <button 
                    onClick={() => window.open(brochurePdf, "_blank")}
                    className="group flex items-center gap-3 px-8 py-4 bg-white text-brand-dark rounded-full font-bold shadow-xl hover:bg-brand-gold hover:text-white transition-all duration-300"
                 >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Download PDF
                 </button>
           </div>
        </div>
      </section>

      {/* ABOUT GRID */}
      <div ref={sectionRefs[NavSection.ABOUT]} className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-12 reveal">
              <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">Host</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2 mb-6">About The Institution</h2>
              <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
           </div>
           <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
              {['univ', 'faculty', 'cs', 'math', 'stats', 'integrated'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all
                    ${activeTab === tab 
                      ? 'bg-brand-primary text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                >
                  {tab === 'univ' ? 'University' : tab === 'faculty' ? 'Faculty' : tab === 'integrated' ? '5-Year Program' : `Dept. of ${tab === 'cs' ? 'CS & IT' : tab.charAt(0).toUpperCase() + tab.slice(1)}`}
                </button>
              ))}
           </div>
           <div className="reveal min-h-[400px]">
              {activeTab === 'univ' && (
                <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-brand-primary">University of Jammu</h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        Established in 1969, the University of Jammu is a premier institution in northern India, accredited with <strong>NAAC A++</strong> and ranked 51st in NIRF 2025 (23rd among state/public universities). It offers diverse UG, PG, and doctoral programs and is known for its strong academic culture, modern infrastructure, and emphasis on innovation, sustainability, and community engagement.
                      </p>
                   </div>
                   <img src={universityImg} className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                </div>
              )}
              {activeTab === 'faculty' && (
                <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-brand-primary">Faculty of Mathematical Sciences</h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                         The Faculty of Mathematical Sciences at the University of Jammu provides quality education and research in core and applied mathematics. With strong academic programmes and active research initiatives, the faculty contributes to scientific advancement and the development of skilled professionals in mathematical and computational fields. The faculty regularly promotes academic growth through seminars, conferences, and collaborative activities.
                      </p>
                   </div>
                   <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                </div>
              )}
              {activeTab === 'cs' && (
                <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-brand-primary">Dept. of CS & IT</h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                         The Department of Computer Science & IT, University of Jammu, is a leading centre for computing education and research. It offers M.C.A., M.Tech., and Ph.D. programmes with focus areas including AI, Machine Learning, Data Science, Cyber Security, and Cloud Computing. Equipped with modern laboratories and expert faculty, the department promotes innovation through research, industry collaboration, and technical events.
                      </p>
                   </div>
                   <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                               <img src={csImg} className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                   </div>
                </div>
              )}
              {activeTab === 'math' && (
                <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-brand-primary">Dept. of Mathematics</h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                         The Department of Mathematics is one of the oldest and most distinguished departments at the University of Jammu. It offers M.A./M.Sc. and Ph.D. programs and is actively engaged in research across areas such as algebra, topology, differential equations, mathematical modeling, and optimization techniques. The department emphasizes both theoretical rigor and real-world applications, fostering a strong foundation for academic and industrial careers.
                      </p>
                   </div>
                   <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                    <img src={mathsImg} className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                   </div>
                </div>
              )}
              {activeTab === 'stats' && (
                <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-brand-primary">Dept. of Statistics</h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                         Established in 1988, the Department of Statistics is dedicated to advancing statistical education and research. It offers M.Sc. (Statistics) and Ph.D. programmes, with research thrusts in AI, ML, Data Science, Sample Surveys, Reliability Theory, Biostatistics, and Information Theory. The department prepares students for diverse careers in planning, administration, banking, IT, actuarial sciences, and research, with a strong emphasis on societal relevance and data-driven decision-making.
                      </p>
                   </div>
                   <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                    <img src={statImg} className="rounded-2xl shadow-xl w-full h-80 object-cover" />
                   </div>
                </div>
              )}
              {activeTab === 'integrated' && (
                <div className="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-brand-primary">5-Year Integrated Program</h3>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                         In addition to the regular PG and Ph.D. programmes offered by the Departments of Computer Science & IT, Mathematics, and Statistics, the University of Jammu has launched a pioneering <strong>five-year integrated UG–PG programme in Mathematical Sciences</strong>. Conducted by the Faculty of Mathematical Sciences, this program brings together the core disciplines of Mathematics, Statistics, and Computer Science under a single academic framework.
                      </p>
                   </div>
                   <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
                     <BookOpen className="w-24 h-24 text-brand-primary opacity-20" />
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>

      {/* TOPICS SECTION */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
             <h2 className="text-4xl font-serif font-bold text-gray-900">Conference Topics</h2>
             <p className="text-gray-500 mt-2">Thematic areas of the conference</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 reveal">
             {TOPICS.map((topic) => (
                <div key={topic.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                   <div className="mb-4">{TOPIC_ICONS[topic.icon]}</div>
                   <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                   <p className="text-sm text-gray-500">{topic.description}</p>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div ref={sectionRefs[NavSection.TIMELINE]} className="bg-[#f8f5f2] py-20 px-6">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16 reveal">
              <Clock className="w-12 h-12 mx-auto text-brand-primary mb-4" />
              <h2 className="text-4xl font-serif font-bold text-gray-900">Important Dates</h2>
           </div>
           <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/20"></div>
              {IMPORTANT_DATES.map((item, idx) => (
                <div key={idx} className={`reveal relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="hidden md:block w-1/2"></div>
                   <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-[#f8f5f2] -translate-x-1/2 mt-6 z-10 shadow-sm"></div>
                   <div className="ml-12 md:ml-0 w-full md:w-1/2 pl-0 md:px-8">
                      <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                        item.isHighlight 
                          ? 'bg-brand-primary text-white border-brand-primary shadow-lg' 
                          : 'bg-white border-gray-200 text-gray-800 shadow-sm'
                      }`}>
                         <span className={`text-sm font-bold uppercase tracking-wider ${item.isHighlight ? 'text-brand-gold' : 'text-brand-primary'}`}>{item.date}</span>
                         <h3 className="text-xl font-bold mt-1 font-serif">{item.label}</h3>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* COMMITTEE SECTION (Redesigned Strict Hierarchy) */}
      <div ref={sectionRefs[NavSection.COMMITTEE]} className="py-24 px-6 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
         <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16 reveal">
                <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">Leadership</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Chairs & Co-Chairs</h2>
                <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mt-4"></div>
             </div>
             
             {/* Strict Top-Down Hierarchy */}
             <div className="flex flex-col items-center gap-0 reveal">
               {/* 1. Chief Patron */}
               <div className="z-10">
                 <ProfileCard person={findPerson('Chief Patron')} isLarge />
               </div>
               
               {/* Connector */}
               <Connector />

               {/* 2. Patron */}
               <div className="z-10">
                 <ProfileCard person={findPerson('Patron')} />
               </div>

               {/* Connector */}
               <Connector />

               {/* 3. Conference Chair */}
               <div className="z-10">
                 <ProfileCard person={findPerson('Conference Chair')} />
               </div>

               {/* Connector */}
               <Connector />

               {/* 4. General Chair */}
               <div className="z-10">
                 <ProfileCard person={findPerson('General Chair')} />
               </div>

               {/* Connector */}
               <Connector />

               {/* 5. Organising Chair & Co-Chair (Side by Side) */}
               <div className="relative pt-6 border-t-2 border-gray-300 w-full max-w-2xl flex justify-center">
                 {/* Vertical line connecting to the horizontal bar above */}
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-gray-300"></div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full place-items-center">
                    <div className="relative">
                       {/* Vertical connector for left item */}
                       <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-gray-300"></div>
                       <ProfileCard person={findPerson('Organising Chair')} />
                    </div>
                    <div className="relative">
                       {/* Vertical connector for right item */}
                       <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-gray-300"></div>
                       <ProfileCard person={findPerson('Organising Co-Chair')} />
                    </div>
                 </div>
               </div>
             </div>

             <div className="text-center mb-12 mt-24 reveal">
                 <h3 className="text-3xl font-serif font-bold text-gray-900">Organizing Committee</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
                {PROGRAM_COMMITTEE.map((member, idx) => (
                  <div key={member.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                     <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                        {member.name.charAt(0)}
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900">{member.name}</h4>
                        <p className="text-xs text-gray-500">{member.designation}</p>
                     </div>
                  </div>
                ))}
             </div>
         </div>
      </div>

      {/* SUBMISSION & FEES */}
      <div ref={sectionRefs[NavSection.SUBMISSION]} className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
             <div className="text-center mb-16 reveal">
                 <FileText className="w-16 h-16 text-brand-gold mx-auto mb-6" />
                 <h2 className="text-4xl md:text-5xl font-serif font-bold">Submission & Registration</h2>
                 <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Abstracts must be submitted by Jan 25, 2026. Accepted papers will be notified by Jan 30.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
                <div className="reveal bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                   <h3 className="text-2xl font-serif font-bold text-brand-gold mb-6">Abstract Guidelines</h3>
                   <ul className="space-y-4 text-gray-300">
                      <li className="flex gap-3"><span className="text-brand-gold font-bold">•</span> Max 300 words with keywords</li>
                      <li className="flex gap-3"><span className="text-brand-gold font-bold">•</span> Times New Roman 12pt, 1.5 spacing</li>
                      <li className="flex gap-3"><span className="text-brand-gold font-bold">•</span> APA Format References</li>
                      <li className="flex gap-3"><span className="text-brand-gold font-bold">•</span> Email: PARMIL@JAMMUUNIVERSITY.AC.IN</li>
                   </ul>
                   <div className="mt-8">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelmV54SmjVl1AG2fmGOb4MvWGtyfin_gHer7Aw2B4DtGN9cw/viewform?usp=sharing&ouid=104631490037365148136" target="_blank" className="w-full block text-center py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-white transition-colors">
                        Submit Abstract
                      </a>
                   </div>
                </div>
                <div className="reveal bg-white rounded-3xl p-8 text-gray-900 shadow-2xl border-t-8 border-brand-primary">
                   <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Registration Fee</h3>
                   <div className="mt-6 space-y-4">
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                         <span>Attendee & PG Students</span>
                         <span className="font-bold">₹ 500</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                         <span>Ph.D. Research Scholars</span>
                         <span className="font-bold">₹ 1000</span>
                      </div>
                      <div className="flex justify-between pb-2">
                         <span className="text-sm">Research Associates, Post-Doc, Faculty & Industry</span>
                         <span className="font-bold">₹ 2000</span>
                      </div>
                   </div>
                   <p className="text-xs text-gray-400 mt-4">* Delegates and participants are required to make their own arrangements for
accommodation in hotels or lodges within Jammu city.</p>
                </div>
             </div>
          </div>
      </div>

      {/* CONTACT */}
      <div ref={sectionRefs[NavSection.CONTACT]} className="bg-[#222] text-white py-20 px-6 border-t border-gray-800">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-8">
               <div className="flex items-center gap-2">
                 <div className="p-2 bg-brand-primary rounded-lg"><Phone className="w-6 h-6" /></div>
                 <h2 className="text-3xl font-serif font-bold">Contact Us</h2>
               </div>
               
               <div className="space-y-6">
                   {/* Person 1: Prof. Parmil Kumar */}
                   <div className="border-l-2 border-brand-primary pl-4">
                       <h3 className="text-xl font-bold text-white">Prof. Parmil Kumar</h3>
                       <p className="text-gray-400">Professor (Statistics)</p>
                       <p className="text-gray-400">University of Jammu</p>
                       <p className="text-brand-gold font-mono mt-1">+91 9419159608</p>
                   </div>

                   {/* Person 2: Prof. Romesh Kumar */}
                   <div className="border-l-2 border-brand-primary pl-4">
                       <h3 className="text-xl font-bold text-white">Prof. Romesh Kumar</h3>
                       <p className="text-gray-400">Dean, Faculty of Mathematical Sciences</p>
                       <p className="text-gray-400">University of Jammu</p>
                       <p className="text-brand-gold font-mono mt-1">+91 7780857102</p>
                   </div>

                   {/* Person 3: Prof. Vibhakar Mansotra */}
                   <div className="border-l-2 border-brand-primary pl-4">
                       <h3 className="text-xl font-bold text-white">Prof. Vibhakar Mansotra</h3>
                       <p className="text-gray-400">Head, Dept. of CS & IT</p>
                       <p className="text-gray-400">University of Jammu</p>
                       <p className="text-brand-gold font-mono mt-1">+91 9419103488</p>
                   </div>
               </div>

               <div className="pt-2">
                  <p className="text-gray-400 text-sm">Email: <a href="mailto:deanmathsciences@jammuuniversity.ac.in" className="text-brand-primary hover:text-white transition-colors">deanmathsciences@jammuuniversity.ac.in</a></p>
               </div>
            </div>
            
            <div className="bg-[#333] p-8 rounded-2xl border border-gray-700 max-w-md w-full self-start">
               <h4 className="font-bold text-lg text-white mb-4">Conference Secretariat</h4>
               <p className="text-gray-400 text-sm mb-2">Faculty of Mathematical Sciences</p>
               <p className="text-gray-400 text-sm mb-2">University of Jammu</p>
               <p className="text-gray-400 text-sm">Jammu & Kashmir, India - 180006</p>
            </div>
         </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 py-8 text-center text-sm">
         <div className="flex justify-center items-center gap-4 mb-4">
            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Users className="w-5 h-5" /></a>
         </div>
         <p>© 2026 Faculty of Mathematical Sciences, University of Jammu.</p>
      </footer>
    </div>
  );
}