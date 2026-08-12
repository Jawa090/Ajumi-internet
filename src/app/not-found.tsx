import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-5">
      <div className="max-w-md">
        <p className="eyebrow text-primary">404</p>
        <h1 className="display-md mt-4 text-foreground">This page isn't connected</h1>
        <p className="mt-3 text-base text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            href="/coverage"
            className="inline-flex h-12 items-center border border-input px-6 text-sm font-medium text-foreground"
          >
            Check availability
          </Link>
        </div>
      </div>
    </div>
  );
}
