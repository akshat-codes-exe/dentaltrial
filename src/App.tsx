import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Clock, ShieldCheck, HeartPulse, Sparkles, ChevronRight, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react';

// --- Types ---
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Doctor {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

// --- Data ---
const SERVICES: Service[] = [
  { icon: HeartPulse, title: "General Dentistry", description: "Routine checkups, cleanings, and fluoride treatments to keep your smile healthy." },
  { icon: ShieldCheck, title: "Dental Implants", description: "Permanent, natural-looking tooth replacements to restore your confidence." },
  { icon: Sparkles, title: "Teeth Whitening", description: "Professional whitening treatments that brighten your smile in just one visit." },
  { icon: ChevronRight, title: "Orthodontics", description: "Modern braces and clear aligners to straighten your teeth and perfect your bite." },
  { icon: HeartPulse, title: "Root Canal Therapy", description: "Expert procedures to save damaged teeth and eliminate persistent pain." },
  { icon: ShieldCheck, title: "Paediatric Care", description: "Gentle and friendly dental care specifically designed for children's needs." },
];

const DOCTORS: Doctor[] = [
  { name: "Dr. Arun Kumar", role: "Principal Dentist", specialty: "Implantology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=250&auto=format&fit=crop" },
  { name: "Dr. Priya Sharma", role: "Orthodontist", specialty: "Cosmetic Dentistry", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=250&auto=format&fit=crop" },
];

// --- Components ---

const TopBar = () => (
  <div className="bg-teal-900 text-white h-10 px-4 sm:px-8 flex justify-between items-center text-[10px] sm:text-xs font-medium tracking-wide">
    <div className="flex gap-4 sm:gap-6">
      <span className="flex items-center gap-1.5 sm:gap-2">
        <MapPin size={12} className="text-teal-400 font-bold" /> Shahjahanpur, Uttar Pradesh 242001
      </span>
      <span className="flex items-center gap-1.5 sm:gap-2">
        <Phone size={12} className="text-teal-400" /> +91 123456789
      </span>
    </div>
    <div className="hidden sm:flex gap-4">
      <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm top-0' : 'bg-transparent top-10'}`}>
      {!scrolled && <div className="absolute -top-10 left-0 w-full"><TopBar /></div>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-sm flex items-center justify-center text-white">
              <HeartPulse size={24} />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-teal-900">Dental Clinic</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Doctors', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-600 transition-colors">
                {item}
              </a>
            ))}
            <a href="#appointment" className="bg-teal-600 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-teal-700 transition-all shadow-md shadow-teal-100">
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-teal-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 md:hidden border-t border-slate-100"
          >
            {['Home', 'Services', 'Doctors', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 py-3 border-b border-slate-50">
                {item}
              </a>
            ))}
            <a href="#appointment" onClick={() => setIsOpen(false)} className="bg-teal-600 text-white p-4 rounded-sm text-center font-bold uppercase tracking-widest text-xs mt-2">
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50/50 -z-10 hidden lg:block" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="w-12 h-1 bg-teal-600 mb-8" />
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            World-Class Oral Care in <span className="text-teal-600">Shahjahanpur</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Welcome to Dental Clinic, your destination for world-class dental care. Providing specialized treatments with advanced technology and compassionate care.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#appointment" className="px-8 py-4 border-2 border-teal-600 text-teal-600 font-bold uppercase tracking-widest text-xs hover:bg-teal-600 hover:text-white transition-all flex items-center gap-2">
              Book Your Visit <ChevronRight size={18} />
            </a>
            <a href="#doctors" className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-teal-700 transition-all flex items-center gap-2">
              Meet the Team
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-extrabold text-teal-900">10k+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-teal-900">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-teal-900">24/7</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Emergency Care</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square border-[16px] border-white shadow-2xl relative z-10 overflow-hidden bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1588776814222-1bdd0c44059a?q=80&w=600&h=600&auto=format&fit=crop" 
              alt="Dental Clinic Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-900/10" />
            
            {/* Geometric center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-0 hover:opacity-100 transition-opacity">
               <ShieldCheck size={64} className="text-white" />
               <div className="mt-2 text-white font-bold tracking-widest uppercase text-[10px]">Quality Standards</div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border-l-[6px] border-teal-600 z-20">
            <div className="text-2xl font-extrabold text-teal-600">10+ Years</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Clinical Experience</div>
          </div>
          {/* Background element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Expertise</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Comprehensive Oral Care</h3>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">From preventive maintenance to complex restorative procedures, we use the latest technology to ensure results.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.slice(0, 4).map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 bg-white border-b-2 transition-all group ${idx === 3 ? 'border-teal-600 shadow-lg' : 'border-transparent hover:border-teal-600 shadow-sm'}`}
          >
            <div className="text-teal-600 mb-4 transition-transform group-hover:scale-110">
              <service.icon size={32} />
            </div>
            <h4 className="font-extrabold text-slate-900 mb-2 uppercase text-[11px] tracking-widest">{service.title}</h4>
            <p className="text-slate-500 text-xs leading-normal mb-4">{service.description}</p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-teal-600 group-hover:underline">
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Doctors = () => (
  <section id="doctors" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6 text-center lg:text-left border-b border-slate-100 pb-10">
        <div>
          <h2 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Experts</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Certified Specialists</h3>
        </div>
        <p className="text-slate-500 max-w-sm text-sm italic">"Excellence is not an act, but a habit. Our doctors embody this daily."</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-12 justify-center max-w-4xl mx-auto">
        {DOCTORS.map((doc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl border-[12px] border-slate-50">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left pl-3 border-l-2 border-teal-600">
              <h4 className="text-2xl font-extrabold text-slate-900 mb-1 uppercase tracking-tight">{doc.name}</h4>
              <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">{doc.role}</p>
              <div className="inline-block px-3 py-1 bg-slate-900 text-[10px] font-bold text-white uppercase tracking-widest">
                 {doc.specialty}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AppointmentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-0 overflow-hidden shadow-2xl border border-slate-200">
        <div className="lg:col-span-4 bg-teal-900 p-12 text-white relative flex flex-col justify-between">
          <div className="relative z-10">
            <div className="w-10 h-1 text-teal-400 mb-6" />
            <h3 className="text-3xl font-extrabold mb-6 uppercase tracking-tight">Book Visit</h3>
            <p className="text-teal-100/70 mb-8 text-sm leading-relaxed">Schedule your appointment with our experts today. We respond within 2 hours.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-teal-400 mt-1" />
                <div>
                  <div className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Call Now</div>
                  <div className="text-lg font-bold tracking-tight">+91 123 456 789</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-teal-400 mt-1" />
                <div>
                  <div className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Address</div>
                  <div className="text-lg font-bold tracking-tight">Shahjahanpur, UP</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
        </div>

        <div className="lg:col-span-8 bg-white p-8 lg:p-16">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-sm flex items-center justify-center mb-6 border border-teal-100">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Confirmed</h4>
              <p className="text-slate-500 text-sm">We'll contact you shortly to finalize the time.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-teal-600 text-[10px] font-extrabold uppercase tracking-[0.2em] hover:underline">New Booking</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2 group-focus-within:text-teal-600">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border-b border-slate-200 focus:border-teal-600 transition-colors p-3 outline-none text-slate-800 text-sm" />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2 group-focus-within:text-teal-600">Phone</label>
                  <input required type="tel" placeholder="+91..." className="w-full bg-slate-50 border-b border-slate-200 focus:border-teal-600 transition-colors p-3 outline-none text-slate-800 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Service</label>
                <select required className="w-full bg-slate-50 border-b border-slate-200 focus:border-teal-600 transition-colors p-3 outline-none text-slate-800 text-sm">
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <button type="submit" className="bg-slate-900 text-white font-bold py-4 px-8 uppercase tracking-[0.2em] text-[11px] hover:bg-teal-700 transition-all shadow-xl shadow-slate-200">
                Request Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="w-12 h-1 bg-teal-600 mb-8" />
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Visit Us</h3>
          <p className="text-slate-500 mb-8 text-sm leading-relaxed">Our clinic is located in the heart of Shahjahanpur, easily accessible for all residents.</p>
          
          <div className="space-y-8">
            <div className="flex gap-4 p-6 bg-slate-50 border-l-4 border-teal-600">
              <MapPin className="text-teal-600 shrink-0" size={20} />
              <div>
                <p className="font-extrabold text-slate-900 uppercase text-[10px] tracking-widest mb-1">Our Location</p>
                <p className="text-sm text-slate-600">Shahjahanpur, Uttar Pradesh 242001</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50">
              <Clock className="text-teal-600 shrink-0" size={20} />
              <div>
                <p className="font-extrabold text-slate-900 uppercase text-[10px] tracking-widest mb-1">Working Hours</p>
                <p className="text-sm text-slate-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <div className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest underline decoration-2 underline-offset-4">Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 border-[12px] border-slate-50 shadow-2xl h-[450px] bg-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-800/20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-teal-900/40">
            <MapPin size={56} className="mb-4 opacity-30" strokeWidth={1} />
            <p className="font-extrabold uppercase tracking-[0.4em] text-xs">Shahjahanpur Center</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8 cursor-pointer">
            <div className="w-10 h-10 bg-teal-600 rounded-sm flex items-center justify-center text-white">
              <HeartPulse size={24} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-teal-900 uppercase">Dental Clinic</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed text-sm">
            Setting the standard for dental excellence in Shahjahanpur. Built on precision, geometric clarity, and patient-first care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all"><Twitter size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-extrabold text-slate-900 mb-8 uppercase text-[10px] tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Doctors', 'Appointment'].map(link => (
              <li key={link}><a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-teal-600 transition-colors uppercase text-[10px] font-bold tracking-widest">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-extrabold text-slate-900 mb-8 uppercase text-[10px] tracking-widest">Connect</h4>
          <ul className="space-y-4 text-xs text-slate-500 font-medium">
            <li className="flex items-start gap-2"><MapPin size={14} className="text-teal-600" /> Shahjahanpur, UP 242001</li>
            <li className="flex items-start gap-2"><Phone size={14} className="text-teal-600" /> +91 123 456 789</li>
            <li className="flex items-start gap-2 font-bold text-teal-600 underline">hello@dentalclinic.com</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
        <div>© 2024 Dental Clinic Shahjahanpur. All Rights Reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-teal-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Feedback</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
