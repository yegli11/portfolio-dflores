"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Text } from "@/components/atoms/Text";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SocialLink } from "@/components/molecules/SocialLink";
import { cn } from "@/lib/cn";
import { contact } from "@/data/contact";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClasses =
  "w-full rounded-xl border border-subtle bg-base px-4 py-3 font-sans text-primary placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Escribe tu nombre.";
    if (!EMAIL_PATTERN.test(email))
      nextErrors.email = "Introduce un correo válido.";
    if (message.length < 10)
      nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Contacto"
          title="Construyamos algo juntos"
          description="¿Tienes un proyecto en mente? Escríbeme y respondo en menos de 24 horas."
        />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          {submitted ? (
            <div
              role="status"
              className="border-accent/30 bg-accent/5 flex h-full flex-col items-start justify-center gap-3 rounded-2xl border p-8"
            >
              <Icon icon={CheckCircle2} size={32} className="text-accent" />
              <Text as="p" variant="h3">
                ¡Mensaje enviado!
              </Text>
              <Text as="p" variant="body" tone="secondary">
                Gracias por escribir. Te responderé muy pronto.
              </Text>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-secondary mb-2 block font-mono text-sm"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(fieldClasses, errors.name && "border-danger")}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-danger mt-1.5 font-mono text-xs"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-secondary mb-2 block font-mono text-sm"
                >
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tucorreo@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(fieldClasses, errors.email && "border-danger")}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-danger mt-1.5 font-mono text-xs"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-secondary mb-2 block font-mono text-sm"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={cn(
                    fieldClasses,
                    "resize-none",
                    errors.message && "border-danger",
                  )}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-danger mt-1.5 font-mono text-xs"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Icon icon={Mail} size={18} />
                Enviar mensaje
              </Button>
            </form>
          )}
        </Reveal>

        <Reveal className="flex flex-col gap-8" delay={0.1}>
          <div className="border-subtle bg-surface rounded-2xl border p-6">
            <Text variant="eyebrow" tone="secondary">
              Correo directo
            </Text>
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-primary hover:text-accent mt-2 block text-lg break-all transition-colors"
            >
              {contact.email}
            </a>
            <Text as="p" variant="small" tone="muted" className="mt-1">
              {contact.phone}
            </Text>
          </div>

          <div>
            <Text variant="eyebrow" tone="secondary" className="mb-3 block">
              Redes
            </Text>
            <ul className="flex flex-wrap gap-3">
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <SocialLink social={social} showLabel />
                </li>
              ))}
            </ul>
          </div>

          <Button href={contact.cvUrl} variant="ghost" download>
            <Icon icon={Download} size={18} />
            Descargar CV
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
