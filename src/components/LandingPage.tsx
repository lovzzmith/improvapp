'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        // Optionally, show a toast or error message here
        alert('There was an error joining the waitlist. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('There was a network error. Please try again.');
    }
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
      <nav className="navbar bg-base-100 shadow-md px-4 md:px-6 w-full flex flex-row justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Image src="/mythia-logo.jpeg" alt="Mythia Logo" width={40} height={40} className="h-10 w-10 rounded-lg" />
          <span className="text-xl font-bold text-neutral tracking-tight">Mythia</span>
          <span className="badge badge-accent badge-sm ml-2">BETA</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <a href="#why-improv" className="hidden md:inline font-semibold text-primary cursor-pointer px-3 py-1 rounded transition-colors duration-200 hover:text-black hover:bg-accent/20 focus:outline-none">Why Improv</a>
          <a href="#features" className="hidden md:inline font-semibold text-primary cursor-pointer px-3 py-1 rounded transition-colors duration-200 hover:text-black hover:bg-accent/20 focus:outline-none">Features</a>
          <a href="#our-story" className="hidden md:inline font-semibold text-primary cursor-pointer px-3 py-1 rounded transition-colors duration-200 hover:text-black hover:bg-accent/20 focus:outline-none">Our Story</a>
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
              Games People Play<br />
            </h1>
            <div className="py-6 md:text-xl text-base text-center text-black space-y-2">
              <p>Because life doesn&apos;t hand out scripts.</p>
              Learn to improv today!
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
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="alert alert-success max-w-md mx-auto">
                <span className="text-white">Thanks for joining! We&apos;ll be in touch soon.</span>
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
              The world’s first improv app built for your everyday moments.
            </h2>
            <div className="space-y-6 mt-10 max-w-2xl mx-auto">
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">🎲</span> Improvise Your Real Life.
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Practice real conversations you actually face—not random skits. Every game is personalized to your world, so you get better where it matters most..</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">🧠</span> Feedback That Makes You Sharper
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Stop guessing what works. Get instant, AI-powered feedback after every round, so you can see exactly how to level up—right now.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">📈</span> Progress You Can See (and Celebrate).
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Yes, this means beautiful dashboards, streak counters, and milestone badges. Hit a new personal best? We&apos;ll celebrate with you.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center gap-3 text-lg font-bold text-black">
                  <span className="text-2xl">📚</span> The Ultimate Improv Vault
                </div>
                <div className="collapse-content text-left">
                  <p className="text-base text-black mt-1">Unlock expert tips, cheat sheets, and video guides you won&apos;t find anywhere else.</p>
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
        <div className="max-w-5xl mx-auto">
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
              <span className="text-white">Thanks for joining! We&apos;ll be in touch soon.</span>
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
    'My mind goes blank. The room is waiting. I open my mouth—and nothing comes out.',
    <span className="font-bold" key="bold0">{'That\'s when I realized: life doesn\'t wait for you to think of the perfect line.'}</span>
  ];
  const full = [
    'My mind goes blank. The room is waiting. I open my mouth—and nothing comes out.',
    <span className="font-bold" key="bold0">{'That\'s when I realized: life doesn\'t wait for you to think of the perfect line.'}</span>,
    'At this point I was the champion of rehearsing conversations in my head, only to trip over my own tongue when it actually mattered. Meetings, parties, even just ordering coffee felt like surprise tests I hadn\'t prepared for.',
    'So, I signed up for improv. Not because I wanted to be an actor or anything, but because I wanted to get better at the real stuff—the conversations you can\'t see coming, the ones that suddenly put you on the spot, the ones that actually matter.',
    'But improv classes alone weren\'t enough. After class, I\'d go home and look for ways to speed things up—books, YouTube videos, random advice threads. Most of it was dry, repetitive, or just plain boring. The exercises felt like chores, and nothing really stuck. I wanted to practice, but there was nothing out there that made me want to come back for more.',
    <span className="font-bold" key="bold1">{'That first class? Total disaster.'}</span>,
    'I overanalyzed everything, fumbled every punchline, and kept hoping someone would just hand me a script. Spoiler: they didn\'t.',
    'But I kept going back. And, weirdly, something started to change. I listened more. I stopped trying to be clever and just tried to be present. The pressure to be funny faded away, and I started caring more about just showing up and being real.',
    <span className="font-bold" key="bold2">{'I could finally breathe a little. I could actually enjoy the moment, instead of dreading it.'}</span>,
    'Before I knew it, I was speaking up in meetings without rehearsing in my head first. I stopped fearing those curveball moments and started rolling with them. Friends noticed. \'You\'re different,\' someone said. And, honestly, I was.',
    'That\'s when Veri—the only person I know who treats self-improvement like a competitive sport—asked what was up. We swapped stories, compared notes, and realized we\'d both been chasing the same thing: how to handle whatever life throws at us, even when we have no idea what\'s coming next.',
    'We started practicing together, pushing each other, turning awkward moments into running jokes. The more we leaned in, the more we grew—not just solo, but as a team.',
    <span className="font-bold" key="bold3">{'Because, let\'s face it, life doesn\'t hand out scripts. And maybe that\'s what makes it interesting.'}</span>,
    'People kept asking what our secret was. We wanted to give them a shortcut, but improv isn\'t something you can just hand over. You have to try, mess up, and laugh at yourself along the way.',
    'That\'s why we built Mythia. Not to make you a performer, but to help you find your voice when life goes off-script.'
  ];
  const story = expanded ? full : trimmed;
  return (
    <div>
      {story.map((para, idx) => (
        typeof para === 'string' ? (
          <p key={idx} className="text-base md:text-lg text-black mb-2">{para}</p>
        ) : (
          <p key={idx} className="text-base md:text-lg text-black mb-2">{para}</p>
        )
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