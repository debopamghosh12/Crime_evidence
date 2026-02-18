import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Fingerprint, Activity, Globe, Lock, Cpu, Server, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/50 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-10 w-10 bg-black border border-white/10 flex items-center justify-center text-primary font-bold text-xl tracking-tighter">
                D
              </div>
            </div>
            <span className="text-2xl font-bold tracking-widest text-white">DFX<span className="text-primary">.</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
            <Link href="#" className="hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(255,0,60,0.5)]">Solutions</Link>
            <Link href="#" className="hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(255,0,60,0.5)]">Intel</Link>
            <Link href="#" className="hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(255,0,60,0.5)]">Company</Link>
          </div>

          <Link
            href="/login"
            className="hidden md:inline-flex bg-white text-black font-bold px-8 py-2 hover:bg-gray-200 transition-colors uppercase text-xs tracking-widest border border-transparent hover:border-white/50 clip-path-slant"
          >
            Access Portal
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 relative">
        {/* Background Grid & Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-20"></div>

        <div className="container mx-auto px-6 pt-20 pb-32 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">

            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary font-mono tracking-widest uppercase rounded-sm animate-pulse-slow">
              <span className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_var(--primary)]"></span>
              System Status: Secure
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-white">
                DIGITAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">FORENSICS</span> <br />
                <span className="text-primary stroke-text">EXCHANGE</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                The next generation of evidence management.
                Immutable chain of custody powered by cryptographic verification.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
              <Link
                href="/login"
                className="w-full sm:w-auto bg-primary text-black font-bold px-10 py-4 hover:bg-primary/90 transition-all uppercase tracking-widest hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,0,60,0.3)] relative group overflow-hidden"
              >
                <span className="relative z-10">Initialize System</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto border border-white/20 text-white font-medium px-10 py-4 hover:bg-white/5 transition-all uppercase tracking-widest hover:border-white/50 group"
              >
                <span className="group-hover:text-primary transition-colors">View Documentation</span>
              </Link>
            </div>

            {/* Hero Feature Overlay - Samurai/Cyber Concept */}
            <div className="relative mt-20 w-full max-w-5xl aspect-[21/9] border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

              {/* Placeholder for Samurai Image or Abstract Tech */}
              <Image
                src="/artifacts/samurai_hero.png"
                alt="Cyber Samurai Protection"
                fill={true}
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
              />

              <div className="relative z-20 grid grid-cols-3 gap-8 w-full p-12 mix-blend-screen">
                <div className="text-left space-y-2">
                  <Cpu className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Neural Analysis</h3>
                  <p className="text-xs text-gray-400">AI-driven pattern recognition for rapid evidence checks.</p>
                </div>
                <div className="text-left space-y-2 border-l border-white/10 pl-8">
                  <Lock className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Zero Trust</h3>
                  <p className="text-xs text-gray-400">Cryptographic proof for every interaction.</p>
                </div>
                <div className="text-left space-y-2 border-l border-white/10 pl-8">
                  <Server className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Decentralized</h3>
                  <p className="text-xs text-gray-400">Distributed storage integration for redundancy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="container mx-auto py-12 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-gray-500 uppercase tracking-widest">
              © 2026 DFX Security Protocols Inc.
            </div>
            <div className="flex items-center gap-6">
              <Fingerprint className="h-10 w-10 text-white/5" />
              <Activity className="h-10 w-10 text-white/5" />
              <Shield className="h-10 w-10 text-white/5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
