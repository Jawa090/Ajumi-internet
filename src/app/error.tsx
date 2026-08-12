"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-5">
      <div className="max-w-md">
        <h1 className="display-md text-foreground">This page didn't load</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-12 items-center border border-input px-6 text-sm font-medium text-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
