import Portfolio from "./container/Portfolio";

export default async function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white">
      <div className="max-w-2xl p-4 lg:max-w-5xl">
        <Portfolio />
      </div>
    </main>
  );
}
