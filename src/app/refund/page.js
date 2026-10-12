export const metadata = {
  title: "Refund Policy",
  description: "Fee refund and cancellation policies for Risezonic Academics programs.",
};

export default function RefundPage() {
  return (
    <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-16">
      <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-light text-xs font-semibold mb-8 uppercase tracking-wider">
        Draft: review with your legal advisor before launch
      </div>
      <h1 className="text-3xl font-heading font-bold text-text mb-6">Refund & Cancellation Policy</h1>
      <p className="text-muted leading-relaxed">
        Admission registration fees and tuition installments adhere to clear cancellation timelines. Demo classes are completely free of charge.
      </p>
    </div>
  );
}
