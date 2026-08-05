import AnimatedButton from "@/components/AnimatedButton";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-black text-white select-none">
      <div className="w-full max-w-md pt-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-wider text-white">
          BLACKJACK
        </h1>
      </div>

      <div className="w-full max-w-xs flex flex-col gap-3 my-auto">
        <AnimatedButton href="/play" style="bg-slate-800">
          Play
        </AnimatedButton>

        <AnimatedButton href="/charts" style="bg-slate-800">
          Charts
        </AnimatedButton>
      </div>

      <div className="w-full max-w-md pb-6 text-center text-xs text-slate-500">
        Engineered for Zero-Latency Play
      </div>
    </main>
  );
}
