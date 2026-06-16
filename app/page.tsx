import Portfolio from "@/components/portfolio-container";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden text-zinc-950 dark:text-zinc-50">
      <div className="portfolio-backdrop pointer-events-none fixed inset-0 -z-10" />
      <div className="flex w-full flex-1 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex w-full flex-1">
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
