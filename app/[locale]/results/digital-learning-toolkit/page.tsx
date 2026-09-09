import { notFound } from "next/navigation";

export default function Page() {
  // temporary hidden page
  // there is no content there yet
  return notFound();

  return (
    <main className="drone-page min-h-screen flex flex-col">
      <section className="flex-1 max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl mb-6 text-[var(--brand-blue)]">
          Digital Learning Toolkit
        </h1>

        <p className="text-lg leading-relaxed text-[var(--text-main)] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean posuere, neque nec vestibulum commodo, neque mauris
          iaculis nisi, at porttitor elit elit a mauris.
        </p>

        <div className="border border-[var(--border-soft)] rounded-[var(--radius-lg)] p-6 shadow-soft bg-white space-y-4">
          <h2 className="text-2xl text-[var(--brand-blue)]">
            Lorem Ipsum Amet
          </h2>

          <p className="text-[var(--text-main)] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus venenatis massa sit amet quam facilisis, vitae
            commodo dui ultrices. Praesent dictum justo nec sapien
            aliquet, vitae volutpat magna pulvinar.
          </p>

          <p className="text-[var(--text-main)] leading-relaxed">
            Cras iaculis, lorem sed pretium molestie, leo dui rhoncus
            risus, non congue risus odio non nisl. Sed varius sem at
            lacus posuere, et euismod tortor interdum.
          </p>
        </div>
      </section>
    </main>
  );
}
