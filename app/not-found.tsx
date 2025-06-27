import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-muted-foreground">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 