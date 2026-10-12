export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions of enrollment at Risezonic Academics.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-16">
      <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-light text-xs font-semibold mb-8 uppercase tracking-wider">
        Draft: review with your legal advisor before launch
      </div>
      <h1 className="text-3xl font-heading font-bold text-text mb-6">Terms of Service</h1>
      <p className="text-muted leading-relaxed">
        By accessing this website or enrolling in any program offered by Risezonic Academics, you agree to these terms of service.
      </p>
    </div>
  );
}
