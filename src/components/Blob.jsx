import { useEffect } from "react";

export default function Blob() {
  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" },
      );
    };
  }, []);

  return (
    <>
      <div
        id="blob"
        className="fixed left-1/2 top-1/2 z-10 hidden aspect-square h-[500px] -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-gradient-to-r from-yellow-500 to-purple-500 blur-[130px] lg:block"
      ></div>
      <div className="fixed z-20 h-full w-full bg-[linear-gradient(to_right,#fafaf620_1px,transparent_1px),linear-gradient(to_bottom,#fafaf620_1px,transparent_1px)] bg-[size:48px_48px] bg-fixed backdrop-blur-3xl"></div>
    </>
  );
}
