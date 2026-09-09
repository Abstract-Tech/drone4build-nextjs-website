import { notFound } from "next/navigation";

export default function Page() {
  // temporary hidden page
  // there is no content there yet
  return notFound();

  return (
    <main className="drone-page min-h-screen flex flex-col">
      <section className="flex-1 max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl mb-6 text-[var(--brand-blue)]">
          Drone Handbook
        </h1>

        <p className="text-lg leading-relaxed text-[var(--text-main)] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi ac magna vitae nisl pretium pulvinar. Nunc pharetra
          sapien sed feugiat bibendum. Mauris blandit lorem in urna
          sagittis tempus.
        </p>

        <div className="border border-[var(--border-soft)] rounded-[var(--radius-lg)] p-6 shadow-soft bg-white space-y-4">
          <h2 className="text-2xl text-[var(--brand-blue)]">
            Lorem Ipsum Sit
          </h2>

          <p className="text-[var(--text-main)] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque luctus, ligula non interdum tristique, odio lectus
            feugiat augue, in aliquet eros nunc vitae nunc. Integer ac
            libero et nibh sodales viverra.
          </p>

          <p className="text-[var(--text-main)] leading-relaxed">
            Nam vel justo et orci posuere pellentesque. Aliquam erat
            volutpat. Fusce feugiat dolor in ipsum placerat, eget
            pulvinar libero convallis. Integer molestie arcu ut ante
            rutrum pretium.
          </p>
        </div>
      </section>
    </main>
  );
}
