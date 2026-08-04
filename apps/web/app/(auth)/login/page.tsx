import Link from "next/link";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Field } from "../../../components/ui/field";

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

      <form className="mt-12 flex flex-col gap-8">
        <Field>
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
          />
        </Field>

        <Field>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">
              Password
            </Label>

            <Link
              href="/forgot-password"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Forgot password?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
          />
        </Field>

        <Button
          type="submit"
          className="mt-2"
        >
          Sign In
        </Button>
      </form>

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