import Image from "next/image";
export default function Home() {
  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="font-bold text-center py-24">

        <p className="text-3xl mt-4">Welcome to the Script Maker app, where you can create automated scripts interactively!</p>

        <p className="text-2xl mt-4">Unleash Your Productivity with Script Maker!</p>
        <a
    href="https://chatgpt.com/#pricing"
    className="bg-white text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Start Now
  </a>

      </div>
    </div>
  );
}