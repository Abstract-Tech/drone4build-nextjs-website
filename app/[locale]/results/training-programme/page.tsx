import { notFound } from "next/navigation";

export default function Page() {
  // temporary hidden page
  // there is no content there yet
  return notFound();

  return (
    <main className="drone-page min-h-screen flex flex-col">
      <section className="flex-1 max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl mb-6 text-[var(--brand-blue)]">
          Training Programme
        </h1>

        <p className="text-lg leading-relaxed text-[var(--text-main)] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer non velit posuere, cursus ipsum in, sodales mi.
          Curabitur commodo dui vitae ligula tempus, ut maximus nisl
          malesuada.
        </p>

        <div className="border border-[var(--border-soft)] rounded-[var(--radius-lg)] p-6 shadow-soft bg-white space-y-4">
          <h2 className="text-2xl text-[var(--brand-blue)]">
            Lorem Ipsum Dolor
          </h2>

          <p className="text-[var(--text-main)] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec facilisis, mi vel suscipit malesuada, turpis lacus
            accumsan justo, vitae vulputate sapien risus ut enim. Sed
            in tortor sit amet risus pretium gravida.
          </p>

          <p className="text-[var(--text-main)] leading-relaxed">
            Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam ac velit in nisl
            commodo ultricies. Quisque non magna non tortor vehicula
            pellentesque.
          </p>
        </div>
      </section>
    </main>
  );
}
