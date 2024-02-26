import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="dark">
        <div class="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg dark">
          <div class="absolute inset-0 overflow-hidden">
            <div class="jumbo absolute -inset-[10px] opacity-50"></div>
          </div>
          <h1 class="relative flex items-center text-5xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
            Alx
            <span class="ml-1 rounded-xl bg-current p-2 text-[0.7em] leading-none">
              <span class="text-white dark:text-black">Web Design</span>
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
