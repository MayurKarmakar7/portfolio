import Portfolio from "./container/Portfolio";

export default async function Home() {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  // });

  // const handleScrollClick = () => {
  //   gsap.to(".about", {
  //     duration: 0.5,
  //   });
  //   window.location.href = "#about";
  // };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white">
      <div className="max-w-full">
        <div className="mx-auto w-full p-4 md:w-4/5 md:p-20">
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
