'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email collection logic
    setIsSubmitted(true);
  };

  const benefits = [
    {
      title: "Improve Your Humor",
      description: "Develop natural wit and timing through structured improv exercises",
      icon: "🎭"
    },
    {
      title: "Build Social Skills",
      description: "Enhance networking, dating, and friendship connections through better communication",
      icon: "🤝"
    },
    {
      title: "Reduce Anxiety",
      description: "Build comfort in social situations through regular practice",
      icon: "🧘"
    },
    {
      title: "Boost Confidence",
      description: "Gain self-esteem through mastering new skills and receiving positive feedback",
      icon: "💪"
    },
    {
      title: "Enhance Creativity",
      description: "Learn to embrace uncertainty and think on your feet",
      icon: "✨"
    },
    {
      title: "Adaptability",
      description: "Improv requires you to adapt quickly to new situations—a skill that has never been more essential in today's world",
      icon: "🌀"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Top Navbar Section */}
      <nav className="navbar bg-base-100 shadow-md px-4 md:px-6 w-full flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Image src="/mythia-logo.jpeg" alt="Mythia Logo" width={40} height={40} className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-bold text-neutral tracking-tight">Mythia</span>
          <span className="badge badge-accent badge-sm ml-2">BETA</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="#why-improv" className="font-semibold text-primary cursor-pointer px-3 py-1 rounded transition-colors duration-200 hover:text-black hover:bg-accent/20 focus:outline-none">Why Improv</a>
          <a href="#features" className="font-semibold text-primary cursor-pointer px-3 py-1 rounded transition-colors duration-200 hover:text-black hover:bg-accent/20 focus:outline-none">Features</a>
          <a href="#our-story" className="font-semibold text-primary cursor-pointer px-3 py-1 rounded transition-colors duration-200 hover:text-black hover:bg-accent/20 focus:outline-none">Our Story</a>
          <a href="#join-waitlist" className="btn btn-primary font-semibold rounded-lg">Join Waitlist</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-base-200 flex justify-center items-center py-12 md:py-24 xl:py-48">
        <div className="hero-content flex-col w-full max-w-4xl mx-auto relative">
          {/* Decorative logo background */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <Image
              src="/mythia-logo.jpeg"
              alt=""
              width={320}
              height={320}
              className="w-56 h-56 md:w-80 md:h-80 rounded-full opacity-20 blur-sm"
              style={{ objectFit: 'cover' }}
              aria-hidden="true"
            />
          </div>
          {/* Main content */}
          <div className="text-center w-full relative z-10">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold text-neutral tracking-tighter">
              Master Improv<br />
              Transform Your Life.
            </h1>
            <div className="py-6 md:text-xl text-base text-center text-black space-y-2">
              <p>The world&apos;s best way to learn improv. It&apos;s funny, it&apos;s effective, and it&apos;s easy.</p>
              Learn improv today!
            </div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full rounded-lg placeholder-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary whitespace-nowrap text-white rounded-lg">
                  Get Early Access
                </button>
              </form>
            ) : (
              <div className="alert alert-success max-w-md mx-auto">
                <span className="text-white">Thanks for joining! We'll be in touch soon.</span>
              </div>
            )}
            <div className="flex items-center justify-center gap-2 mt-3 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16-2V7a2 2 0 00-2-2h-3.5a1.5 1.5 0 01-3 0H6a2 2 0 00-2 2v3m16 0H4" /></svg>
              <span className="font-semibold text-accent">50% off</span>
              <span className="text-black">for the first 500 subscribers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-improv" className="container px-4 md:px-6 mx-auto py-12 md:py-24 lg:py-32">
        <div className="w-full flex flex-col items-center">
        <div className="inline-block rounded-xl bg-base-200 border border-base-200 border-[1px] px-2 py-2 mb-4">
            <span className="text-primary text-base">Why Improv</span>
          </div>
          <h2 className="text-lg md:text-3xl font-bold text-center mb-12 text-neutral">
            Improv has changed our lives. It can change yours too.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card bg-base-100 border border-base-200 hover:border-primary rounded-lg shadow-sm hover:shadow transition-all p-6">
              <div className="card-body items-center text-center space-y-2">
                <div className="text-4xl mb-2 text-accent">{benefit.icon}</div>
                <h3 className="card-title text-2xl md:text-2xl font-bold text-black">{benefit.title}</h3>
                <p className="text-base md:text-xl text-black font-medium">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-base-200">
        <div className="container px-4 md:px-6 mx-auto py-12 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-xl bg-white border border-white border-[1px] px-2 py-2 mb-4">
              <span className="text-primary text-base">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-8">
              We built what we wish we had.
            </h2>
            <div className="space-y-6 mt-10 max-w-2xl mx-auto">
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">🎲</span> Improv Games That Actually Work
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Dive into our favorite improv games designed to get harder as you get better.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">🧠</span> Instant Feedback, Real Growth
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Because without feedback, you're just guessing.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">📈</span> Track Your Progress. Keep Your Streak.
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Yes, this means beautiful dashboards, streak counters, and milestone badges. Hit a new personal best? We'll celebrate with you.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">📚</span> The Ultimate Improv Vault
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Unlock a treasure trove of improv wisdom: cheat sheets, expert video tutorials, pro tips, and deep-dive guides you won't find anywhere else.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">🌍</span> Join a Bold New Community
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Connect with fellow improvisers, join group jams, and climb the leaderboards. Share your wins, learn from others, and never practice alone again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section id="our-story" className="container px-4 md:px-6 mx-auto py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="inline-block rounded-xl bg-base-200 border border-base-200 border-[1px] px-2 py-2 mb-4">
              <span className="text-primary text-base">Our Story</span>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg border border-base-200 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6">
              {/* Photo placeholder */}
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-base-200 flex items-center justify-center overflow-hidden">
                {/* Replace src with actual photo if available */}
                <Image src="/VeriDiogo.jpg" alt="Veri & Diogo" width={128} height={128} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-l mb-2 text-black text-muted italic">June 2025</h3>
                <ExpandableStory />
                <div className="mt-4 text-right text-sm text-black italic">— Veri & Diogo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join-waitlist" className="py-12 md:py-24 lg:py-32 bg-base-200 w-full">
        <div className="container px-4 md:px-6 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
            Ready to Transform Your Social Skills?
          </h2>
          <p className="text-xl md:text-xl text-black font-medium mb-8">
            Join our waitlist and be the first to experience Mythia.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-lg placeholder-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap text-white rounded-lg">
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="alert alert-success max-w-md mx-auto">
              <span className="text-white">Thanks for joining! We'll be in touch soon.</span>
            </div>
          )}
          <p className="text-sm md:text-base text-black mt-4 leading-loose italic">No spam. Only important updates.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-base-100 border-t border-base-200 mt-auto relative overflow-hidden">
        {/* Background logo image */}
        <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center">
          <Image
            src="/mythia-logo.jpeg"
            alt=""
            width={512}
            height={512}
            className="w-full h-full max-w-2xl max-h-2xl object-cover opacity-20 blur-sm rounded-full"
            style={{ objectPosition: 'center' }}
            aria-hidden="true"
          />
          {/* Radial gradient overlay for feathered edge */}
          <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle, transparent 60%, #f3f4f6 100%)'}} />
        </div>
        {/* Footer content */}
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center py-6 gap-2 relative z-10">
          <div className="flex items-center gap-3 justify-center">
            <Image src="/mythia-logo.jpeg" alt="Mythia Logo" width={32} height={32} className="h-8 w-8 rounded-lg" />
            <span className="text-lg font-semibold text-neutral tracking-tight">Mythia</span>
            <span className="badge badge-accent badge-sm ml-2">BETA</span>
          </div>
          <div className="text-sm text-black text-center w-full">
            &copy; 2025 Mythia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// ExpandableStory subcomponent
function ExpandableStory() {
  const [expanded, setExpanded] = useState(false);
  const trimmed = [
    `We got into improv for the worst possible reason: to meet girls. Not that we were Casanovas—honestly, we could barely start a conversation with anyone, let alone a stranger.`,
    `Our logic was flawless—at least on paper. Improv classes meant we&apos;d have to interact, girls love this sort of thing (right?), and maybe, just maybe, we&apos;d finally figure out how to not freeze up when someone said &apos;hi.&apos;`,
    `Except, we were terrible...`
  ];
  const full = [
    `We got into improv for the worst possible reason: to meet girls. Not that we were Casanovas—honestly, we could barely start a conversation with anyone, let alone a stranger.`,
    `Our logic was flawless—at least on paper. Improv classes meant we&apos;d have to interact, girls love this sort of thing (right?), and maybe, just maybe, we&apos;d finally figure out how to not freeze up when someone said &apos;hi.&apos;`, 
    `Except, we were terrible...`,
    `We overthought every word, every gesture. We were terrified that if we let our guard down, people would see the real us—and that was a risk we weren&apos;t ready to take.`,
    `So, we did what any overthinker would do: we went home and tried to practice. But improv isn&apos;t like learning guitar or chess.`,
    <span className="font-bold" key="bold1">There weren&apos;t any good exercises online, nothing that made us want to come back, nothing that tracked our progress or kept us motivated.</span>,
    `Our "streak" never lasted more than a day.`,
    `A few months passed. We kept at it, mixing awkward classes with awkward solo drills. But something shifted. One night, a friend looked at us and said, "You&apos;re different." And we were.`,
    <span className="font-bold" key="bold2">Suddenly, we were quicker, wittier, actually funny.</span>,
    `We could hold a room, riff off the cuff, and—maybe for the first time—felt at ease in our own skin. The pressure was gone.`,
    <span className="font-bold" key="bold3">We could breathe.</span>,
    `That&apos;s when the questions started. Friends wanted to know our secret. Could we teach them? We tried, and this time, with a bit of guidance and feedback, they learned in half the time it took us.`,
    `So, we built it.`,
    `And in case you&apos;re wondering, yes—it works. (👰)`
  ];
  const story = expanded ? full : trimmed;
  return (
    <div>
      {story.map((para, idx) => (
        <p key={idx} className="text-base md:text-lg text-black mb-2">{para}</p>
      ))}
      <button
        className="btn btn-link btn-xs text-primary px-0"
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
} 