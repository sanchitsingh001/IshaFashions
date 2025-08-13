import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Dulhan Exclusives Home">
      <span className="text-xl font-bold tracking-tight font-headline text-primary">
        Dulhan Exclusives by Isha Fashions
      </span>
    </Link>
  );
}
