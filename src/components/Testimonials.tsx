
import React, { useRef, useEffect } from 'react';
import Container from './Container';
import { cn } from '@/lib/utils';
import AnimatedGradient from './AnimatedGradient';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  className,
}) => (
  <div className={cn(
    "glass-panel rounded-xl p-8 transition-all duration-300 hover:shadow-lg",
    className
  )}>
    <blockquote className="text-lg text-foreground mb-6">"{quote}"</blockquote>
    
    <div className="flex items-center">
      <div className="flex-shrink-0 mr-4">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cursor-blue to-cursor-purple flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
        )}
      </div>
      
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-foreground/70">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!testimonialsRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonials = entry.target.querySelectorAll('.testimonial-card');
            testimonials.forEach((testimonial, index) => {
              setTimeout(() => {
                testimonial.classList.add('animate-fade-in');
                testimonial.classList.remove('opacity-0');
              }, index * 150);
            });
            
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(testimonialsRef.current);
    
    return () => {
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <AnimatedGradient variant="purple-pink" intensity="light" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See what developers around the world are saying about their experience with Cursor.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Testimonial
            className="testimonial-card opacity-0"
            quote="Cursor has completely transformed my coding workflow. The AI suggestions are eerily accurate and have saved me countless hours of research and debugging."
            author="Sarah Chen"
            role="Senior Developer"
            company="Airbnb"
          />
          
          <Testimonial
            className="testimonial-card opacity-0"
            quote="I've tried many AI code assistants, but Cursor stands above them all. It feels like having a senior developer looking over your shoulder at all times."
            author="Michael Johnson"
            role="Full Stack Engineer"
            company="Stripe"
          />
          
          <Testimonial
            className="testimonial-card opacity-0"
            quote="The refactoring capabilities alone are worth the switch. Cursor understands my code better than I do sometimes!"
            author="Jamal Williams"
            role="Tech Lead"
            company="Spotify"
          />
          
          <Testimonial
            className="testimonial-card opacity-0"
            quote="As someone who teaches coding, I've recommended Cursor to all my students. It helps them learn faster by explaining concepts right in the editor."
            author="Emily Rodriguez"
            role="CS Professor"
            company="Stanford University"
          />
          
          <Testimonial
            className="testimonial-card opacity-0"
            quote="Cursor's integration with GPT-4 is a game-changer. It's like having a pair programmer who never gets tired and is always full of ideas."
            author="David Kim"
            role="CTO"
            company="TechFolio"
          />
          
          <Testimonial
            className="testimonial-card opacity-0"
            quote="I was skeptical about AI code editors, but Cursor won me over within days. Now I can't imagine coding without it."
            author="Alex Morgan"
            role="Software Architect"
            company="Netflix"
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
