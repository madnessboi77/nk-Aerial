import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm('mbdwdjaj');

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#EFEFEA] text-[#1a1a1a] relative">
      <div className="w-full px-[60px] max-w-7xl mx-auto relative z-10">
        
        <Reveal delay={0.1}>
          <div className="mb-16">
            <h4 className="text-[11px] uppercase tracking-widest text-[#1a1a1a] mb-2 font-medium">Contacts</h4>
            <div className="w-8 h-[1px] bg-black/60 mb-10" />
            <h2 className="text-6xl md:text-7xl lg:text-[100px] font-serif leading-[1.1] tracking-tight">
              Talk to us about<br />your property.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 items-start">
          
          {/* Left Col - Form */}
          <div>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-700 leading-relaxed max-w-md mb-16 font-serif">
                Whether you're looking to buy, sell, lease or invest, our team is here to help.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="relative">
                {state.succeeded && (
                  <div className="absolute inset-0 bg-[#EFEFEA]/95 flex flex-col items-center justify-center z-20 text-center backdrop-blur-sm px-4">
                    <h4 className="text-4xl font-serif mb-4 text-[#1a1a1a]">Thank You</h4>
                    <p className="text-sm text-gray-600">Your inquiry has been submitted.<br/>We will contact you shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-600 font-serif">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-[#1a1a1a] focus:outline-none focus:border-black transition-colors rounded-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-600 font-serif">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-[#1a1a1a] focus:outline-none focus:border-black transition-colors rounded-none"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-600 font-serif">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-[#1a1a1a] focus:outline-none focus:border-black transition-colors rounded-none"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-600 font-serif">Brief Description Of Your Inquiry</label>
                    <textarea 
                      name="message"
                      required
                      rows={1}
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-[#1a1a1a] focus:outline-none focus:border-black transition-colors resize-none rounded-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="disabled:opacity-50 mt-6 w-36 h-36 rounded-full border border-black/40 group hover:bg-[#1a1a1a] transition-all duration-500 flex flex-col items-center justify-center gap-2 self-start"
                  >
                    <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#EFEFEA] transition-colors duration-500 text-center px-4 leading-tight">
                      {state.submitting ? 'Sending...' : 'Send Inquiry'}
                    </span>
                    <span className="text-black group-hover:text-[#EFEFEA] transition-colors duration-500 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Right Col - Map & Address */}
          <div>
            <Reveal delay={0.4} direction="left">
              <div className="flex flex-col">
                <div className="aspect-square sm:aspect-[4/3] bg-black/5 border border-black/10 overflow-hidden relative">
                  <iframe 
                    title="Map"
                    src="https://maps.google.com/maps?q=Aerial%20Legend,%201080%20CDA%20Avenue,%20GEC%20Circle,%20Chattogram&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) opacity(0.6) invert(1) contrast(1.2) brightness(1.1)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Additional overlay to make it match the warm paper feel */}
                  <div className="absolute inset-0 bg-[#EFEFEA] mix-blend-color pointer-events-none" />
                </div>
                
                <div className="border border-t-0 border-black/10 p-8 flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 shrink-0 text-black/60" />
                  <div className="flex flex-col">
                    <p className="font-serif text-lg mb-2 text-[#1a1a1a]">Aerial Properties Limited</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-serif">
                      17th Floor- Aerial Legend,<br />
                      1080 CDA Avenue, GEC Circle,<br />
                      Chattogram
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1px] bg-black/10 mb-16" />
        
        {/* Bottom Info Grid */}
        <Reveal delay={0.5} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div>
              <h3 className="text-3xl font-serif text-[#1a1a1a] leading-tight mb-8">
                Aerial<br/>Properties<br/>Limited
              </h3>
              <p className="text-[9px] uppercase tracking-widest text-[#1a1a1a] font-bold">
                Real Estate. Real Value.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                <Phone className="w-4 h-4 text-black/60" /> Call Us
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-600 font-serif">
                <p>01833 329 292</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                <Mail className="w-4 h-4 text-black/60" /> Email Us
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-600 font-serif">
                <p>hello@aerialproperties.com</p>
                <p>info@aerialproperties.com</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                <Clock className="w-4 h-4 text-black/60" /> Office Hours
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-600 font-serif">
                <p>Monday – Friday</p>
                <p>9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
