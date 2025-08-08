'use client';

export default function BurgerButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center gap-1"
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <span
        className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-cyan-400 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      />
    </button>
  );
}
