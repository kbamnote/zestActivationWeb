import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowLeft, Lock, Mail, User, Building, Phone, Calendar, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    eventType: '',
    agreeTerms: false
  });

  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const form = formRef.current;
    const image = imageRef.current;

    if (!form || !image) return;

    gsap.fromTo(image,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );

    gsap.fromTo(form.querySelectorAll('.form-element'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    setIsSubmitted(true);
  };

  const eventTypes = [
    { value: '', label: 'Select event type' },
    { value: 'conference', label: 'Corporate Conference' },
    { value: 'launch', label: 'Product Launch' },
    { value: 'awards', label: 'Award Night' },
    { value: 'team', label: 'Team Building' },
    { value: 'activation', label: 'Brand Activation' },
    { value: 'exhibition', label: 'Exhibition' },
    { value: 'other', label: 'Other' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-orange/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-orange" />
          </div>
          <h1 className="font-heading font-bold text-white text-3xl mb-4">
            Welcome to Zest!
          </h1>
          <p className="text-white/60 mb-8">
            Your account has been created successfully. We'll contact you within 24 hours to discuss your event requirements.
          </p>
          <div className="flex flex-col gap-4">
            <Link to="/">
              <Button className="w-full bg-orange hover:bg-orange-dark text-white py-6">
                Go to Homepage
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5 py-6">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 flex">
      {/* Left Side - Image */}
      <div
        ref={imageRef}
        className="hidden lg:block w-1/2 relative overflow-hidden"
      >
        <img
          src="/images/indian_boardroom_meeting.png"
          alt="Corporate Event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="text-white">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Create Your Account
            </h2>
            <p className="text-white/70 text-lg">
              Join hundreds of companies who trust Zest for their corporate events.
            </p>
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-orange flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">Z</span>
          </div>
          <span className="font-heading font-bold text-xl text-white">
            Zest<span className="text-orange">.</span>
          </span>
        </Link>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Mobile Logo */}
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-orange flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">Z</span>
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Zest<span className="text-orange">.</span>
            </span>
          </Link>

          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="form-element">
              <h1 className="font-heading font-bold text-white text-2xl mb-2">
                Create Account
              </h1>
              <p className="text-white/60 text-sm">
                Fill in your details to get started with Zest
              </p>
            </div>

            {/* Full Name */}
            <div className="form-element space-y-2">
              <Label htmlFor="fullName" className="text-white/70 text-sm">Full Name *</Label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'fullName' ? 'text-orange' : 'text-white/40'
                  }`} />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  className={`pl-10 bg-navy-800 border text-white placeholder:text-white/30 
                           focus:ring-2 transition-all duration-300 h-11 ${focusedField === 'fullName'
                      ? 'border-orange ring-orange/20'
                      : 'border-white/10'
                    }`}
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="form-element space-y-2">
              <Label htmlFor="companyName" className="text-white/70 text-sm">Company Name *</Label>
              <div className="relative">
                <Building className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'companyName' ? 'text-orange' : 'text-white/40'
                  }`} />
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Your Company Ltd"
                  value={formData.companyName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('companyName')}
                  onBlur={() => setFocusedField(null)}
                  className={`pl-10 bg-navy-800 border text-white placeholder:text-white/30 
                           focus:ring-2 transition-all duration-300 h-11 ${focusedField === 'companyName'
                      ? 'border-orange ring-orange/20'
                      : 'border-white/10'
                    }`}
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="form-element grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/70 text-sm">Email *</Label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'email' ? 'text-orange' : 'text-white/40'
                    }`} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-9 bg-navy-800 border text-white placeholder:text-white/30 
                             focus:ring-2 transition-all duration-300 h-11 text-sm ${focusedField === 'email'
                        ? 'border-orange ring-orange/20'
                        : 'border-white/10'
                      }`}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/70 text-sm">Phone *</Label>
                <div className="relative">
                  <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'phone' ? 'text-orange' : 'text-white/40'
                    }`} />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-9 bg-navy-800 border text-white placeholder:text-white/30 
                             focus:ring-2 transition-all duration-300 h-11 text-sm ${focusedField === 'phone'
                        ? 'border-orange ring-orange/20'
                        : 'border-white/10'
                      }`}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="form-element grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/70 text-sm">Password *</Label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'password' ? 'text-orange' : 'text-white/40'
                    }`} />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-9 pr-9 bg-navy-800 border text-white placeholder:text-white/30 
                             focus:ring-2 transition-all duration-300 h-11 text-sm ${focusedField === 'password'
                        ? 'border-orange ring-orange/20'
                        : 'border-white/10'
                      }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white/70 text-sm">Confirm Password *</Label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'confirmPassword' ? 'text-orange' : 'text-white/40'
                    }`} />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-9 pr-9 bg-navy-800 border text-white placeholder:text-white/30 
                             focus:ring-2 transition-all duration-300 h-11 text-sm ${focusedField === 'confirmPassword'
                        ? 'border-orange ring-orange/20'
                        : 'border-white/10'
                      }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Event Type */}
            <div className="form-element space-y-2">
              <Label htmlFor="eventType" className="text-white/70 text-sm">
                <Calendar className="w-4 h-4 inline mr-2" />
                Type of Event Needed
              </Label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full h-11 px-4 rounded-md bg-navy-800 border border-white/10 
                         text-white focus:border-orange focus:ring-2 focus:ring-orange/20
                         outline-none text-sm"
              >
                {eventTypes.map(type => (
                  <option key={type.value} value={type.value} className="bg-navy-800">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Terms & Conditions */}
            <div className="form-element flex items-start gap-3">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))}
                className="mt-0.5 border-white/30 data-[state=checked]:bg-orange data-[state=checked]:border-orange"
              />
              <Label htmlFor="agreeTerms" className="text-white/60 text-sm leading-relaxed cursor-pointer">
                I agree to the{' '}
                <Link to="#" className="text-orange hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-orange hover:underline">Privacy Policy</Link>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="form-element w-full bg-orange hover:bg-orange-dark text-white py-5 text-base font-semibold rounded-xl"
            >
              Create Account
            </Button>

            {/* Login Link */}
            <p className="form-element text-center text-white/60 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-orange hover:text-orange-light font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
