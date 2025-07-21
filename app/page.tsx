import Portfolio from "@/components/portfolio-container";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white">
      <div className="flex flex-1 w-full px-4 sm:px-8 md:border-l md:border-r md:border-l-zinc-100 md:border-r-zinc-100 md:dark:border-l-zinc-700/40 md:dark:border-r-zinc-700/40 lg:max-w-7xl lg:px-12">
        <div className="flex flex-1 px-4 sm:px-8 lg:px-12">
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
