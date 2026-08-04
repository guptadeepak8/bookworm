import Link from "next/link";
import { LoginForm } from "../../../features/auth/components/login-form";



export default function LoginPage() {
  return (
    <section
      aria-labelledby="login-heading"
      className="flex w-full flex-col"
    >
      <header className="flex flex-col gap-3">
        <h1
          id="login-heading"
          className="text-4xl font-bold tracking-tight text-neutral-950"
        >
          Welcome back
        </h1>

        <p className="max-w-sm text-base leading-7 text-neutral-600">
          Sign in to continue managing your reading collection.
        </p>
      </header>

      <LoginForm />

      <footer className="mt-12 border-t border-neutral-200 pt-8">
        <p className="text-center text-sm text-neutral-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-neutral-950 transition-colors hover:text-neutral-700"
          >
            Create one
          </Link>
        </p>
      </footer>
    </section>
  );
}