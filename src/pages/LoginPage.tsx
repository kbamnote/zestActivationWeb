import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, ArrowLeft, Lock, Mail } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const form = formRef.current;
    const image = imageRef.current;

    if (!form || !image) return;

    // Entrance animations
    gsap.fromTo(image,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );

    gsap.fromTo(form.querySelectorAll('.form-element'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-navy-900 flex">
      {/* Left Side - Image */}
      <div
        ref={imageRef}
        className="hidden lg:block w-1/2 relative overflow-hidden"
      >
        <img
          src="/images/indian_corporate_stage_setup.png"
          alt="Corporate Event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="text-white">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Welcome Back to Zest
            </h2>
            <p className="text-white/70 text-lg">
              Sign in to access your event dashboard and manage your upcoming events.
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
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
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
            className="inline-flex items-center gap-2 text-white/60 hover:text-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="form-element">
              <h1 className="font-heading font-bold text-white text-3xl mb-2">
                Sign In
              </h1>
              <p className="text-white/60">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Email Field */}
            <div className="form-element space-y-2">
              <Label htmlFor="email" className="text-white/70">Email</Label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-orange' : 'text-white/40'
                  }`} />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`pl-12 bg-navy-800 border text-white placeholder:text-white/30 
                           focus:ring-2 transition-all duration-300 ${focusedField === 'email'
                      ? 'border-orange ring-orange/20'
                      : 'border-white/10'
                    }`}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-element space-y-2">
              <Label htmlFor="password" className="text-white/70">Password</Label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'password' ? 'text-orange' : 'text-white/40'
                  }`} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`pl-12 pr-12 bg-navy-800 border text-white placeholder:text-white/30 
                           focus:ring-2 transition-all duration-300 ${focusedField === 'password'
                      ? 'border-orange ring-orange/20'
                      : 'border-white/10'
                    }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-element flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-white/30 data-[state=checked]:bg-orange data-[state=checked]:border-orange"
                />
                <Label htmlFor="remember" className="text-white/60 text-sm cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Link
                to="#"
                className="text-orange hover:text-orange-light text-sm transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="form-element w-full bg-orange hover:bg-orange-dark text-white py-6 text-base font-semibold rounded-xl"
            >
              Sign In
            </Button>

            {/* Divider */}
            <div className="form-element relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-navy-900 text-white/40">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="form-element grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 py-5"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 py-5"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </Button>
            </div>

            {/* Sign Up Link */}
            <p className="form-element text-center text-white/60">
              Don't have an account?{' '}
              <Link to="/signup" className="text-orange hover:text-orange-light font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
