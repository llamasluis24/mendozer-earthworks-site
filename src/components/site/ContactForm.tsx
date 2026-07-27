import { useState } from "react";
import { Send, CheckCircle2, Upload } from "lucide-react";
import { COMPANY, SERVICE_OPTIONS } from "@/data/company";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-gold/40 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-3 heading-lg text-foreground">Request Received</h3>
        <p className="mt-2 text-muted-foreground">
          Our team will reach out within one business day. For urgent jobs call {COMPANY.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-xl border border-border bg-card ${compact ? "p-6" : "p-8"}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Project Location" name="location" placeholder="City, County" className="sm:col-span-2" />
        <Select label="Service Needed" name="service" className="sm:col-span-2">
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </Select>
        <div className="sm:col-span-2">
          <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Project Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            className="w-full rounded-md bg-input border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/60"
            placeholder="Scope, timeline, square footage..."
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="documents" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Project Documents <span className="normal-case font-normal">(optional)</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-input/50 px-4 py-4 hover:border-gold/60 transition">
            <Upload className="h-5 w-5 text-gold shrink-0" />
            <span className="text-sm text-muted-foreground">
              Upload plans, soils reports, drawings, or project documents
            </span>
            <input
              id="documents"
              name="documents"
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.doc,.docx"
              className="sr-only"
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition"
      >
        <Send className="h-4 w-4" /> Request Estimate
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder, className = "",
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md bg-input border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/60"
      />
    </div>
  );
}

function Select({ label, name, children, className = "" }: { label: string; name: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <select id={name} name={name} className="w-full rounded-md bg-input border border-border px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/60">
        {children}
      </select>
    </div>
  );
}
