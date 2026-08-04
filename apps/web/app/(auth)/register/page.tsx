import Link from "next/link";

import { Button } from "../../../components/ui/button";
import { Field } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function RegisterPage() {
  return (
    <section
      aria-labelledby="register-heading"
      className="flex w-full flex-col"
    >
      <header className="flex flex-col gap-3">
        <h1
          id="register-heading"
          className="text-4xl font-bold tracking-tight text-neutral-950"
        >
          Create your account
        </h1>

        <p className="max-w-sm text-base leading-7 text-neutral-600">
          Start building your personal reading library today.
        </p>
      </header>

      <form className="mt-12 flex flex-col gap-8">
        <Field>
          <Label htmlFor="name">
            Full Name
          </Label>

          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
          />
        </Field>

        <Field>
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
          />
        </Field>

        <Field>
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
          />
        </Field>

        <Field>
          <Label htmlFor="confirmPassword">
            Confirm Password
          </Label>

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Confirm your password"
          />
        </Field>

        <Button
          type="submit"
          className="mt-2"
        >
          Create Account
        </Button>
      </form>

      <footer className="mt-12 border-t border-neutral-200 pt-8">
        <p className="text-center text-sm text-neutral-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-neutral-950 transition-colors hover:text-neutral-700"
          >
            Sign in
          </Link>
        </p>
      </footer>
    </section>
  );
}