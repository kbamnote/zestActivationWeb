import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!section || !form || !info) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(info.children,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(form,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hello@zestactivation.in',
      href: 'mailto:hello@zestactivation.in'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Locations',
      value: 'Mumbai • Delhi • Bangalore • Hyderabad',
      href: '#'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Working Hours',
      value: 'Mon - Sat: 9:00 AM - 7:00 PM',
      href: '#'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-navy-900 z-20"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <span className="font-accent text-sm tracking-[0.18em] text-orange uppercase mb-4 block">
                Get In Touch
              </span>
              <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl xl:text-5xl mb-6">
                Start a Project
              </h2>
              <p className="text-white/60 text-base lg:text-lg">
                Tell us what you're building. We'll reply within one business day 
                with a customized proposal tailored to your needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center
                                group-hover:bg-orange/20 transition-colors">
                    <div className="text-orange">{item.icon}</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">{item.label}</div>
                    <div className="text-white group-hover:text-orange transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`/images/testimonial_${i}.jpg`}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover"
                    />
                  ))}
                </div>
                <div className="text-white/60 text-sm">
                  <span className="text-white font-semibold">500+</span> events delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-navy-800 rounded-3xl p-8 lg:p-10 border border-white/5">
            <h3 className="font-heading font-bold text-white text-xl mb-6">
              Send a Brief
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-orange" />
                </div>
                <h4 className="font-heading font-bold text-white text-xl mb-2">
                  Message Sent!
                </h4>
                <p className="text-white/60">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-navy-900 border-white/10 text-white placeholder:text-white/30 
                               focus:border-orange focus:ring-orange/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-navy-900 border-white/10 text-white placeholder:text-white/30 
                               focus:border-orange focus:ring-orange/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/70">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      className="bg-navy-900 border-white/10 text-white placeholder:text-white/30 
                               focus:border-orange focus:ring-orange/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/70">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-navy-900 border-white/10 text-white placeholder:text-white/30 
                               focus:border-orange focus:ring-orange/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-white/70">Event Type</Label>
                  <select
                    id="eventType"
                    className="w-full h-10 px-3 rounded-md bg-navy-900 border border-white/10 
                             text-white focus:border-orange focus:ring-1 focus:ring-orange/20
                             outline-none"
                  >
                    <option value="">Select event type</option>
                    <option value="conference">Corporate Conference</option>
                    <option value="launch">Product Launch</option>
                    <option value="awards">Award Night</option>
                    <option value="team">Team Building</option>
                    <option value="activation">Brand Activation</option>
                    <option value="exhibition">Exhibition</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/70">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event..."
                    rows={4}
                    className="bg-navy-900 border-white/10 text-white placeholder:text-white/30 
                             focus:border-orange focus:ring-orange/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange hover:bg-orange-dark text-white py-6 text-base font-semibold rounded-xl group"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Brief
                </Button>

                <p className="text-white/40 text-xs text-center">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
