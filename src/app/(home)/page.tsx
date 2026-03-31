import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-background text-foreground">
      <div className="container max-w-4xl space-y-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-60 h-60 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image src={logo} alt="Logo" />
          </div>

          <div className="space-y-2 max-w-4xl mx-auto">
            <h1 className="text-xl font-bold sm:text-2xl md:text-4xl text-foreground">
              নান্টু মিয়ার ডিজাইন প্যাটার্ন
            </h1>
            <p className="text-md text-muted-foreground md:text-lg font-medium leading-relaxed">
              JavaScript/TypeScript কিংবা হোক React এর ডিজাইন প্যাটার্ন ।
              ডেভেলপার আর ডিজাইন প্যাটার্ন এর মধ্যে ম্যাচ-ম্যাকিং এর জন্য আছে
              নান্টু
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg">
              <Link href="/sd/introduction">পড়া শুরু করুন</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground mt-4">
            <Link
              href="https://github.com/KhanShaheb34/montu-mia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <IconBrandGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shakirulhasan/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <IconBrandLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
