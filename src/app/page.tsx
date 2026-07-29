export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12">
      <main className="flex w-full max-w-lg flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Blackjack Counter
        </h1>
        <p className="text-base text-foreground/70">
          Shoe tracking and strategy deviations — build starts here.
        </p>
      </main>
    </div>
  );
}
