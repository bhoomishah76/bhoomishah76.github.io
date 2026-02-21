import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle text-center text-text-muted/60">
      <p className="text-[10px] font-black uppercase tracking-[0.3em]">&copy; {new Date().getFullYear()} Bhoomi Shah / Sr. React Native Developer</p>
    </footer>
  );
}
