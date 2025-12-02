'use client';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex items-center justify-center animate-fade-out">
      <p className="text-[var(--text-primary)] text-sm tracking-[0.3em] uppercase">
        Essence of Watches
      </p>
    </div>
  );
}
