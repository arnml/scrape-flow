import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-primary mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 animate-fade-in-up">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md animate-fade-in-up delay-200">
          Don&apos;t worry, even the best data sometimes gets lost in the
          internet
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
            href={"/"}
            className="flex items-center justify-center px-4 py-2 bg-primary text-white
             rounded-md hover:bg:primary/80 transition-colors
             animate-pulse dark:text-black"
            >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
            </Link>
        </div>
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          If you belive this is an error, please contact our support team
        </footer>
      </div>
    </div>
  );
}

export default NotFoundPage;
