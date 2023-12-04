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
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-y-hidden text-white ">
      <Portfolio />
    </main>
  );
}
