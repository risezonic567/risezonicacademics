import Link from "next/link";
import { ArrowLeft, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 sm:px-8 py-20 max-w-xl mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-accent mb-6 font-heading text-2xl font-bold">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold font-heading text-text mb-4">
        Page Not Found
      </h1>
      <p className="text-muted text-base mb-8 leading-relaxed">
        The page you are looking for doesn&apos;t exist or may have been moved. Return to our homepage or explore our digital marketing courses.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-bg font-semibold hover:bg-accent transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/courses"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-text hover:border-accent hover:text-accent font-semibold transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>View Courses</span>
        </Link>
      </div>
    </div>
  );
}
