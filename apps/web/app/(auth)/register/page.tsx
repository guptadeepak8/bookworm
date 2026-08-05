import Link from "next/link";
import { RegisterForm } from "../../../features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <section
      aria-labelledby="register-heading"
      className="flex w-full flex-col"
    >
      <header className="flex flex-col gap-3">
        <h1
          id="register-heading"
          className="text-4xl font-bold tracking-tight text-foreground"
        >
          Create your account
        </h1>

        <p className="max-w-sm text-base leading-7 text-muted">
          Start building your personal reading library today.
        </p>
      </header>

      <RegisterForm />

      <footer className="mt-12 border-t border-border pt-8">
        <p className="text-center text-sm text-muted">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:brightness-90"
          >
            Sign in
          </Link>
        </p>
      </footer>
    </section>
  );
}
