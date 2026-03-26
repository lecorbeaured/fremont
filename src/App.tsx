import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Music, 
  Utensils, 
  ChevronRight, 
  ExternalLink, 
  Info,
  Mail,
  Send,
  Menu,
  X,
  Zap,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const featuredAttractions = [
    {
      title: 'SlotZilla Zipline',
      description: 'Fly the canopy. Two heights. One rush.',
      image: '/featured_slotzilla.jpg',
      price: 'From $49',
      link: '#experiences'
    },
    {
      title: 'Downtown Bar Crawls',
      description: 'Guided nights through iconic bars.',
      image: '/featured_barcrawl.jpg',
      price: 'From $39',
      link: '#nightlife'
    },
    {
      title: 'Food & Neon Tours',
      description: 'Taste downtown. See the signs.',
      image: '/featured_foodtour.jpg',
      price: 'From $59',
      link: '#attractions'
    }
  ];

  const attractions = [
    {
      title: 'SlotZilla Zipline',
      description: 'Soar 77-114 feet above Fremont Street on the world\'s largest slot machine-inspired zipline.',
      image: '/featured_slotzilla.jpg'
    },
    {
      title: 'Mob Museum',
      description: 'Explore 20,000 sq ft of organized crime history in a former courthouse.',
      image: '/attr_mobmuseum.jpg'
    },
    {
      title: 'Viva Vision Light Show',
      description: 'Experience the world\'s largest LED canopy with 12.5 million lights.',
      image: '/attr_lightshow.jpg'
    },
    {
      title: 'Downtown Container Park',
      description: 'Open-air shopping center built from shipping containers with a fire-breathing mantis.',
      image: '/attr_containerpark.jpg'
    },
    {
      title: 'Street Performers',
      description: 'Free live entertainment every night on three stages under the canopy.',
      image: '/attr_performers.jpg'
    },
    {
      title: 'Neon Museum',
      description: 'See restored vintage Vegas signs at the famous Neon Boneyard.',
      image: '/attr_neonmuseum.jpg'
    }
  ];

  const experiences = [
    {
      title: 'Zipline Over Fremont',
      description: 'Fly seated or superhero-style above the neon lights.',
      image: '/exp_zipline.jpg',
      cta: 'Book Zipline',
      price: '$49 - $69',
      affiliateLink: 'https://www.viator.com/tours/Las-Vegas/Fremont-Street-History-Walking-Tour/d684-6756FCCWT?pid=P00292126&mcid=42383&medium=link'
    },
    {
      title: 'Guided Walking Tours',
      description: 'History, neon, and local stories from expert guides.',
      image: '/exp_walkingtour.jpg',
      cta: 'See Tours',
      price: 'From $35',
      affiliateLink: 'https://www.viator.com/tours/Las-Vegas/Fremont-Street-History-Walking-Tour/d684-6756FCCWT?pid=P00292126&mcid=42383&medium=link'
    },
    {
      title: 'Downtown Helicopter Flights',
      description: 'Night flights over the city with breathtaking views.',
      image: '/exp_heli.jpg',
      cta: 'Check Dates',
      price: 'From $149',
      affiliateLink: 'https://www.viator.com/tours/Las-Vegas/Las-Vegas-Strip-Night-Flight-by-Helicopter-with-Transport/d684-5847NIGHT?pid=P00292126&mcid=42383&medium=link'
    }
  ];

  const travelGuides = [
    {
      title: 'Things to Do on Fremont Street at Night',
      description: 'Discover the best nighttime activities under the canopy.',
      image: '/guide_night.jpg'
    },
    {
      title: 'Best Bars on Fremont Street',
      description: 'From rooftop lounges to historic watering holes.',
      image: '/guide_bars.jpg'
    },
    {
      title: 'Is the Fremont Zipline Worth It?',
      description: 'Our honest review of SlotZilla and what to expect.',
      image: '/guide_zipline.jpg'
    },
    {
      title: 'Fremont Street vs. the Strip',
      description: 'Compare downtown Vegas to the Las Vegas Strip.',
      image: '/guide_stripvs.jpg'
    },
    {
      title: 'Best Time to Visit Fremont Street',
      description: 'Plan your visit for the optimal experience.',
      image: '/guide_time.jpg'
    },
    {
      title: 'Top Downtown Las Vegas Attractions',
      description: 'Must-see spots beyond Fremont Street.',
      image: '/guide_downtown.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What is Fremont Street famous for?',
      answer: 'Fremont Street is famous for the Fremont Street Experience, a five-block entertainment district featuring the world\'s largest LED video canopy (Viva Vision), the SlotZilla zipline, free live music on three stages every night, historic casinos, and vibrant street performers. It\'s the original Las Vegas entertainment district where vintage Vegas charm meets modern excitement.'
    },
    {
      question: 'How much does the Fremont Street zipline cost?',
      answer: 'SlotZilla offers two options: The Zip-Zilla (seated, 77 feet high, 2 blocks) starts at $49 per person. The Super-Hero Zoom (superhero-style flying, 114 feet high, 5 blocks) starts at $69 per person. Weight requirements: 50-300 lbs for Zip-Zilla, 80-300 lbs for Zoom. Height maximum is 6\'8" for both options.'
    },
    {
      question: 'Is Fremont Street better than the Strip?',
      answer: 'It depends on your preference! Fremont Street offers better value with lower table minimums, cheaper drinks, free entertainment, and a more compact, walkable experience with authentic vintage Vegas atmosphere. The Strip features mega-resorts, luxury shopping, and grander shows. Many visitors enjoy both for different experiences.'
    },
    {
      question: 'What attractions are on Fremont Street?',
      answer: 'Key attractions include: SlotZilla Zipline, Viva Vision Light Show (every hour 6pm-2am), Mob Museum, Downtown Container Park, Neon Museum (nearby), Golden Nugget\'s Shark Tank pool, Circa Resort\'s Stadium Swim, historic casinos like Golden Gate (est. 1906), and free live music on three stages every night.'
    },
    {
      question: 'Can you walk Fremont Street at night?',
      answer: 'Yes, Fremont Street is pedestrian-only and safe to walk at night. The Fremont Street Experience is a pedestrian mall open 24/7 with security present. The area is well-lit with the Viva Vision canopy and actively patrolled. It\'s one of the most popular nighttime destinations in Las Vegas.'
    },
    {
      question: 'What time does the light show start?',
      answer: 'The Viva Vision light shows run every hour on the hour nightly from 6:00 PM to 2:00 AM. Each show features different music and visuals on the 1,500-foot long LED canopy. The most popular shows are typically between 8:00 PM and midnight when the canopy is most impressive against the night sky.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#05060B] text-[#F4F6FF] overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavVisible ? 'bg-[#05060B]/90 backdrop-blur-md py-4' : 'py-6'}`}>
        <div className="px-6 lg:px-[6vw] flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 group">
            <Zap className="w-6 h-6 text-[#39B8FF] group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg tracking-wider">FREMONT STREET</span>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('attractions')} className="text-sm font-medium text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Attractions</button>
            <button onClick={() => scrollToSection('nightlife')} className="text-sm font-medium text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Nightlife</button>
            <button onClick={() => scrollToSection('experiences')} className="text-sm font-medium text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Experiences</button>
            <button onClick={() => scrollToSection('guides')} className="text-sm font-medium text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Guides</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Contact</button>
            <a href="/blog" className="text-sm font-medium text-[#39B8FF] hover:text-[#F4F6FF] transition-colors">Blog</a>
            <button onClick={() => scrollToSection('experiences')} className="btn-primary ml-4">Check Availability</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#05060B]/95 backdrop-blur-md border-t border-white/10 py-6 px-6">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('attractions')} className="text-left py-2 text-[#A7B0C8] hover:text-[#F4F6FF]">Attractions</button>
              <button onClick={() => scrollToSection('nightlife')} className="text-left py-2 text-[#A7B0C8] hover:text-[#F4F6FF]">Nightlife</button>
              <button onClick={() => scrollToSection('experiences')} className="text-left py-2 text-[#A7B0C8] hover:text-[#F4F6FF]">Experiences</button>
              <button onClick={() => scrollToSection('guides')} className="text-left py-2 text-[#A7B0C8] hover:text-[#F4F6FF]">Guides</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-[#A7B0C8] hover:text-[#F4F6FF]">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-[#A7B0C8] hover:text-[#F4F6FF]">Contact</button>
              <a href="/blog" className="text-left py-2 text-[#39B8FF] hover:text-[#F4F6FF]">Blog</a>
              <button onClick={() => scrollToSection('experiences')} className="btn-primary mt-4 text-center">Check Availability</button>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero_canopy_aerial.jpg" 
            alt="Fremont Street Experience canopy at night" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05060B]/80 via-[#05060B]/40 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 px-6 lg:px-[6vw] pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] mb-6">
                <span className="block">FREMONT</span>
                <span className="block">STREET</span>
                <span className="block text-gradient">ATTRACTIONS</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#A7B0C8] mb-8 max-w-lg leading-relaxed">
                A living guide to the best things to do under the canopy—ziplines, shows, bars, and hidden gems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('attractions')} className="btn-primary flex items-center gap-2">
                  Explore Attractions
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollToSection('nightlife')} className="btn-secondary">
                  View Nightlife
                </button>
              </div>
            </div>
            
            {/* Info Card */}
            <div className="hidden lg:block">
              <div className="bg-[#0B0E16]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 ml-auto max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#39B8FF] animate-pulse" />
                  <span className="section-label">Quick Highlights</span>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#39B8FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">SlotZilla Zipline</h4>
                      <p className="text-sm text-[#A7B0C8]">Soar above the neon canopy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center flex-shrink-0">
                      <Music className="w-5 h-5 text-[#39B8FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Live Music</h4>
                      <p className="text-sm text-[#A7B0C8]">Every night on 3 stages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-5 h-5 text-[#39B8FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Food Tours & Bars</h4>
                      <p className="text-sm text-[#A7B0C8]">Taste downtown's best</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Attractions */}
      <section className="py-24 lg:py-32 px-6 lg:px-[6vw]">
        <div className="mb-12">
          <span className="section-label block mb-4">Featured</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black">THREE WAYS TO<br />OWN THE NIGHT</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredAttractions.map((attraction, index) => (
            <div key={index} className="group card-hover bg-[#0B0E16] rounded-3xl overflow-hidden border border-white/5">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E16] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#39B8FF]/20 backdrop-blur-sm rounded-full text-xs font-mono text-[#39B8FF]">
                    {attraction.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{attraction.title}</h3>
                <p className="text-[#A7B0C8] text-sm mb-4">{attraction.description}</p>
                <button onClick={() => scrollToSection(attraction.link.replace('#', ''))} className="flex items-center gap-2 text-[#39B8FF] text-sm font-semibold group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Attractions Guide */}
      <section id="attractions" className="py-24 lg:py-32 px-6 lg:px-[6vw] bg-[#0B0E16]/50">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="section-label block mb-4">Attractions Guide</span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black">TOP STOPS UNDER<br />THE CANOPY</h2>
          </div>
          <button onClick={() => scrollToSection('experiences')} className="mt-6 lg:mt-0 flex items-center gap-2 text-[#39B8FF] font-semibold group">
            View all experiences
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <div key={index} className="group card-hover bg-[#05060B] rounded-2xl overflow-hidden border border-white/5">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060B]/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{attraction.title}</h3>
                <p className="text-[#A7B0C8] text-sm leading-relaxed">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Nightlife Feature */}
      <section id="nightlife" className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/nightlife_feature_bg.jpg" 
            alt="Fremont Street nightlife" 
            className="w-full h-full object-cover"
          />
          <div className="vignette-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05060B]/90 via-[#05060B]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 lg:px-[6vw] py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-4">Nightlife</span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6">
                BEST NIGHTLIFE<br />
                <span className="text-gradient">ON FREMONT STREET</span>
              </h2>
              <p className="text-lg text-[#A7B0C8] mb-8 max-w-lg">
                Rooftop bars, live stages, and late-night scenes—curated for every vibe.
              </p>
            </div>
            
            <div className="bg-[#0B0E16]/90 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-[#39B8FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Live Music on 3 Stages</h4>
                    <p className="text-sm text-[#A7B0C8]">Free concerts every night</p>
                  </div>
                </div>
                <div className="hairline" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#39B8FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Rooftop Cocktails with Views</h4>
                    <p className="text-sm text-[#A7B0C8]">See the city from above</p>
                  </div>
                </div>
                <div className="hairline" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#39B8FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Guided Bar Crawls</h4>
                    <p className="text-sm text-[#A7B0C8]">Explore with local experts</p>
                  </div>
                </div>
                <div className="hairline" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#39B8FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Casino Lounges & Historic Bars</h4>
                    <p className="text-sm text-[#A7B0C8]">Vintage Vegas atmosphere</p>
                  </div>
                </div>
              </div>
              <button onClick={() => scrollToSection('experiences')} className="btn-primary w-full mt-8 flex items-center justify-center gap-2">
                Plan a Night Out
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Experiences */}
      <section id="experiences" className="py-24 lg:py-32 px-6 lg:px-[6vw]">
        <div className="mb-12">
          <span className="section-label block mb-4">Experiences</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black">UPGRADES THAT<br />DELIVER</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="group card-hover bg-[#0B0E16] rounded-3xl overflow-hidden border border-white/5">
              <div className="relative h-72 lg:h-80 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E16] via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-[#39B8FF] text-[#05060B] rounded-full text-sm font-bold">
                    {experience.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-[#A7B0C8] text-sm mb-6">{experience.description}</p>
                <a 
                  href={experience.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {experience.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Travel Guide */}
      <section id="guides" className="py-24 lg:py-32 px-6 lg:px-[6vw] bg-[#0B0E16]/50">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="section-label block mb-4">Travel Guide</span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black">PLAN YOUR VISIT</h2>
          </div>
          <button className="mt-6 lg:mt-0 flex items-center gap-2 text-[#39B8FF] font-semibold group">
            Browse all guides
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelGuides.map((guide, index) => (
            <div key={index} className="group card-hover bg-[#05060B] rounded-2xl overflow-hidden border border-white/5 cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060B]/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#39B8FF] transition-colors">{guide.title}</h3>
                <p className="text-[#A7B0C8] text-sm mb-4">{guide.description}</p>
                <span className="flex items-center gap-2 text-[#39B8FF] text-sm font-semibold">
                  Read Guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="py-24 lg:py-32 px-6 lg:px-[6vw]">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="section-label block mb-4">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-[#A7B0C8]">Quick answers to plan your night.</p>
          </div>
          
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[#0B0E16] rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#A7B0C8] pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 8: Affiliate Disclosure */}
      <section className="py-16 px-6 lg:px-[6vw] bg-[#0B0E16]/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0B0E16] rounded-3xl p-8 lg:p-10 border border-white/10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#39B8FF]/10 flex items-center justify-center mx-auto mb-6">
              <Info className="w-7 h-7 text-[#39B8FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Affiliate Disclosure</h3>
            <p className="text-[#A7B0C8] leading-relaxed">
              This site contains affiliate links. If you book experiences through our links, we may earn a commission at no additional cost to you. We only recommend experiences we'd book ourselves. Your support helps us maintain this free guide to Fremont Street attractions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Contact + Footer */}
      <section id="contact" className="relative">
        <div className="absolute inset-0">
          <img 
            src="/contact_traveler.jpg" 
            alt="Traveler on Fremont Street" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05060B] via-[#05060B]/95 to-[#05060B]" />
        </div>
        
        <div className="relative z-10 py-24 lg:py-32 px-6 lg:px-[6vw]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            <div>
              <span className="section-label block mb-4">Contact</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">HAVE QUESTIONS?</h2>
              <p className="text-[#A7B0C8] text-lg mb-8 leading-relaxed">
                Ask us about itineraries, group bookings, or the best time to ride the zipline. We're here to help you plan the perfect Fremont Street experience.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#39B8FF]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#39B8FF]" />
                </div>
                <div>
                  <p className="text-sm text-[#A7B0C8]">Email us at</p>
                  <a href="mailto:hello@fremontattractions.guide" className="font-semibold hover:text-[#39B8FF] transition-colors">
                    hello@fremontattractions.guide
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0B0E16]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-[#05060B] border-white/10 focus:border-[#39B8FF] focus:ring-[#39B8FF]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com" 
                    className="bg-[#05060B] border-white/10 focus:border-[#39B8FF] focus:ring-[#39B8FF]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    className="bg-[#05060B] border-white/10 focus:border-[#39B8FF] focus:ring-[#39B8FF]/20 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Booking Widget */}
      <section id="hotels" className="py-20 bg-[#0B0E16]">
        <div className="max-w-5xl mx-auto px-6 lg:px-[6vw] text-center">
          <h2 className="text-3xl font-bold text-[#F4F6FF] mb-4">
            Find Your <span className="text-[#39B8FF]">Downtown Hotel</span>
          </h2>
          <p className="text-[#A7B0C8] mb-8">Book a hotel near Fremont Street and get the full downtown Vegas experience.</p>
          <iframe
            src="https://www.stay22.com/embed/69c5c2042e91e7405c19bd86"
            width="100%"
            height="428"
            style={{ border: 'none', borderRadius: '12px' }}
            title="Book Hotels near Fremont Street"
          />
        </div>
      </section>

      {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-12 px-6 lg:px-[6vw]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#39B8FF]" />
                <span className="font-bold text-lg tracking-wider">FREMONT STREET</span>
              </div>
              
              <div className="flex flex-wrap gap-6 lg:gap-8">
                <button onClick={() => scrollToSection('hero')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Home</button>
                <button onClick={() => scrollToSection('attractions')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Attractions</button>
                <button onClick={() => scrollToSection('nightlife')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Nightlife</button>
                <button onClick={() => scrollToSection('experiences')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Experiences</button>
                <button onClick={() => scrollToSection('guides')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Guides</button>
                <button onClick={() => scrollToSection('faq')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="text-sm text-[#A7B0C8] hover:text-[#F4F6FF] transition-colors">Contact</button>
              </div>
            </div>
            
            <div className="hairline my-8" />
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-sm text-[#A7B0C8]">
              <p>Your guide to the best experiences in downtown Las Vegas.</p>
              <p>© 2026 Fremont Street Attractions Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
