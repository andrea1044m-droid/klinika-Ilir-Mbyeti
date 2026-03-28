/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Menu, 
  X,
  Instagram,
  Facebook,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/355686282605?text=Përshëndetje, dua të rezervoj një takim.";

const dentists = [
  {
    name: "Ilir Mbyeti",
    role: "Dentist Kryesor",
    specialty: "Kirurgji Dentare & Implante",
    description: "Me mbi 15 vite eksperiencë, Ilir Mbyeti udhëheq klinikën me përkushtim dhe profesionalizëm të lartë.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Dr. Anisa Hoxha",
    role: "Dentiste",
    specialty: "Ortodonci",
    description: "Specialiste në rregullimin e buzëqeshjes suaj përmes metodave më moderne të ortodoncisë.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Dr. Arben Rama",
    role: "Dentist",
    specialty: "Estetikë Dentare",
    description: "Ekspert në zbardhjen dhe fasetat dentare, duke ju dhuruar buzëqeshjen që keni ëndërruar.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Dr. Elena Meta",
    role: "Dentiste",
    specialty: "Terapi Dentare",
    description: "Përkushtuar ndaj shëndetit oral dhe trajtimit pa dhimbje për të gjithë pacientët tanë.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=500"
  }
];

const services = [
  {
    title: "Pastrim Dhëmbësh",
    description: "Heqja e gurëzave dhe pastrimi profesional për një shëndet oral optimal.",
    icon: <Sparkles className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Mbushje",
    description: "Trajtimi i kariesit me materiale cilësore dhe estetike që zgjasin në kohë.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Implante",
    description: "Zëvendësimi i dhëmbëve të munguar me teknologjinë më të fundit të implanteve.",
    icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Zbardhje",
    description: "Buzëqeshje rrezatuese me metodat tona të sigurta dhe efektive të zbardhjes.",
    icon: <Sparkles className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Kontroll",
    description: "Kontroll periodik për të parandaluar problemet dentare përpara se të fillojnë.",
    icon: <Stethoscope className="w-8 h-8 text-blue-500" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rreth Nesh", href: "#about" },
    { name: "Ekipi", href: "#team" },
    { name: "Shërbimet", href: "#services" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Stethoscope size={24} />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-gray-900">
              Ilir <span className="text-blue-600">Mbyeti</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Rezervo Takim
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Rezervo në WhatsApp
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -z-20" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8 border border-blue-100/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Klinika Dentare më e mirë në Fier
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold font-display leading-[1.05] mb-8 text-gray-900 tracking-tight"
            >
              Buzëqeshja juaj <br />
              është <span className="text-gradient italic">prioriteti</span> ynë
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed"
            >
              Kujdesi profesional dhe teknologjia moderne bashkohen për t'ju ofruar shërbimin më cilësor dentar në qytetin e Fierit.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group pulse-glow"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                Rezervo në WhatsApp
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="px-10 py-5 rounded-2xl font-bold text-xl text-gray-700 border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-center"
              >
                Shërbimet tona
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 flex items-center gap-8 p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 w-fit"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/patient${i}/100/100`} 
                    alt="Pacient" 
                    className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm ring-1 ring-blue-50"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1.5 gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Sparkles key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold text-gray-900">4.9/5 nga 2,000+ pacientë</p>
                <p className="text-xs text-gray-500 font-medium">Besuar për cilësinë dhe kujdesin</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />
            
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(12,74,110,0.2)] aspect-[4/5] md:aspect-square group">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000" 
                alt="Klinika Dentare Ilir Mbyeti" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Stats Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/50 max-w-[280px] animate-float"
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100">
                  <Clock size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-[10px] text-green-600 font-black uppercase tracking-widest">Hapur Tani</p>
                  </div>
                  <p className="text-lg font-black text-gray-900">08:00 - 20:00</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                Jemi në dispozicionin tuaj çdo ditë për buzëqeshjen tuaj.
              </p>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -top-6 -right-6 z-20 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl shadow-blue-200 rotate-6 hover:rotate-0 transition-transform cursor-default"
            >
              <p className="text-3xl font-black leading-none mb-1">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Vite Eksperiencë</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Rreth Nesh</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gray-900 leading-tight">
              Përkushtim ndaj shëndetit tuaj oral me profesionalizëm
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Klinika jonë në Fier, e drejtuar nga Ilir Mbyeti, është një qendër e ekselencës dentare ku çdo pacient trajtohet me kujdes të veçantë. Ne besojmë se një buzëqeshje e shëndetshme ndryshon jetën.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Me një ekip të kualifikuar dhe pajisje të teknologjisë së fundit, ne ofrojmë një gamë të gjerë shërbimesh, nga higjiena bazë deri te kirurgjia komplekse.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Teknologji Moderne",
                "Ekip i Specializuar",
                "Trajtime pa Dhimbje",
                "Ambient Relaksues"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" 
                alt="Dental Equipment" 
                className="rounded-2xl shadow-lg mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" 
                alt="Clinic Interior" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-full border-8 border-white flex flex-col items-center justify-center text-white shadow-2xl">
              <span className="text-2xl font-bold">15+</span>
              <span className="text-[10px] font-bold uppercase">Vite Përvojë</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Ekipi Ynë</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display text-gray-900">
            Njihuni me profesionistët tanë
          </h3>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist, index) => (
            <motion.div
              key={dentist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img 
                  src={dentist.image} 
                  alt={dentist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-sm leading-relaxed italic">
                    "{dentist.description}"
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{dentist.name}</h4>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">{dentist.role}</p>
              <p className="text-gray-500 text-sm">{dentist.specialty}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Shërbimet</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-display text-gray-900">
                Gjithçka që ju duhet për një buzëqeshje të shëndetshme
              </h3>
            </div>
            <a 
              href={WHATSAPP_LINK}
              className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Shiko të gjitha <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-blue-100/50 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-blue-600 p-10 rounded-3xl shadow-xl flex flex-col justify-center text-white">
              <h4 className="text-2xl font-bold mb-4">Keni një urgjencë?</h4>
              <p className="mb-8 opacity-90">
                Na kontaktoni direkt në WhatsApp për ndihmë të shpejtë dhe rezervime të menjëhershme.
              </p>
              <a 
                href={WHATSAPP_LINK}
                className="bg-white text-blue-600 py-4 rounded-xl font-bold text-center hover:bg-blue-50 transition-colors"
              >
                Rezervo Tani
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Kontakt</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-12 text-gray-900">
              Na vizitoni ose na shkruani
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Adresa</h4>
                  <p className="text-gray-600">Fier, Shqipëri (Qendra e Qytetit)</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">0686282605</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Orari</h4>
                  <p className="text-gray-600">E Hënë - E Shtunë: 08:00 - 20:00</p>
                  <p className="text-gray-600">E Diel: Mbyllur (Vetëm Urgjenca)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-100"
              >
                <MessageCircle size={28} />
                Rezervo në WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100">
            <h4 className="text-2xl font-bold mb-8 text-gray-900">Dërgoni një mesazh</h4>
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const service = formData.get('service');
                const message = formData.get('message');
                const waText = `Përshëndetje, unë jam ${name}. Dua të rezervoj një takim për ${service}. Numri im i telefonit është ${phone}. Mesazhi: ${message}`;
                window.open(`https://wa.me/355686282605?text=${encodeURIComponent(waText)}`, '_blank');
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Emri Juaj</label>
                  <input name="name" type="text" required placeholder="Filan Fisteku" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Numri i Telefonit</label>
                  <input name="phone" type="tel" required placeholder="+355 6X XXX XXXX" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Shërbimi i kërkuar</label>
                <select name="service" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white">
                  <option>Kontroll i përgjithshëm</option>
                  <option>Pastrim dhëmbësh</option>
                  <option>Mbushje</option>
                  <option>Implante</option>
                  <option>Zbardhje</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Mesazhi</label>
                <textarea name="message" rows={4} placeholder="Si mund t'ju ndihmojmë?" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Dërgo në WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Stethoscope size={24} />
                </div>
                <span className="text-2xl font-bold font-display">
                  Ilir <span className="text-blue-500">Mbyeti</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Klinika dentare lider në Fier, duke ofruar shërbime cilësore dhe kujdes maksimal për buzëqeshjen tuaj.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/il_dent_fier/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8">Lidhje të Shpejta</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8">Shërbimet</h4>
              <ul className="space-y-4 text-gray-400">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="hover:text-white transition-colors">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8">Orari i Punës</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between">
                  <span>E Hënë - E Premte</span>
                  <span className="text-white">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>E Shtunë</span>
                  <span className="text-white">09:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>E Diel</span>
                  <span className="text-red-400">Mbyllur</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Klinika Dentare Ilir Mbyeti. Të gjitha të drejtat e rezervuara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
