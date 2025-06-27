'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-muted-foreground">500</h1>
        <h2 className="mt-4 text-3xl font-semibold text-foreground">
          Something went wrong!
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          We&apos;re sorry, but something unexpected happened.
        </p>
        <div className="mt-6 space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
} 