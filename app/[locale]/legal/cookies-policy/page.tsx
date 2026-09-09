import { getMessages, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL } from "@/components/LinkedText";

type TitledText = {
  title?: string;
  description: string;
};

type CookieRow = {
  name: string;
  type: string;
  provider: string;
  purpose: string;
  expiry: string;
};

type CookiesPolicyMessages = {
  title: string;
  lastUpdated: string;
  intro: string[];
  whatAreCookies: {
    title: string;
    intro: string;
    typesIntro: string;
    types: TitledText[];
    note: string;
  };
  howWeUse: {
    title: string;
    intro: string;
    categories: TitledText[];
  };
  keyCookies: {
    title: string;
    intro: string;
    headers: Record<"name" | "type" | "provider" | "purpose" | "expiry", string>;
    rows: CookieRow[];
  };
  choices: {
    title: string;
    items: TitledText[];
  };
  thirdParty: {
    title: string;
    paragraphs: string[];
    changesTitle: string;
    changes: string;
    contactTitle: string;
    contact: string;
  };
};

function TextList({ items }: { items: TitledText[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 mb-4">
      {items.map((item) => (
        <li key={`${item.title ?? ""}-${item.description}`}>
          {item.title && <strong>{item.title}: </strong>}
          {item.description}
        </li>
      ))}
    </ul>
  );
}

export default async function CookiesPolicyPage() {
  const messages = await getMessages();
  const t = await getTranslations("cookiesPolicyPage");
  const policy = messages.cookiesPolicyPage as CookiesPolicyMessages;

  return (
    <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-soft text-[var(--brand-blue)]">
      <h1 className="text-3xl mb-4 text-[var(--brand-blue)]">
        {policy.title}
      </h1>
      <p className="mb-4 font-semibold">{policy.lastUpdated}</p>
      {policy.intro.map((paragraph) => (
        <p key={paragraph} className="mb-4">
          {paragraph}
        </p>
      ))}

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.whatAreCookies.title}
      </h2>
      <p className="mb-4">{policy.whatAreCookies.intro}</p>
      <p className="mb-4">{policy.whatAreCookies.typesIntro}</p>
      <TextList items={policy.whatAreCookies.types} />
      <p className="mb-4">{policy.whatAreCookies.note}</p>

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.howWeUse.title}
      </h2>
      <p className="mb-4">{policy.howWeUse.intro}</p>
      <TextList items={policy.howWeUse.categories} />

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.keyCookies.title}
      </h2>
      <p className="mb-4">{policy.keyCookies.intro}</p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">{policy.keyCookies.headers.name}</th>
              <th className="border px-3 py-2">{policy.keyCookies.headers.type}</th>
              <th className="border px-3 py-2">{policy.keyCookies.headers.provider}</th>
              <th className="border px-3 py-2">{policy.keyCookies.headers.purpose}</th>
              <th className="border px-3 py-2">{policy.keyCookies.headers.expiry}</th>
            </tr>
          </thead>
          <tbody>
            {policy.keyCookies.rows.map((row) => (
              <tr key={row.name}>
                <td className="border px-3 py-2">{row.name}</td>
                <td className="border px-3 py-2">{row.type}</td>
                <td className="border px-3 py-2">{row.provider}</td>
                <td className="border px-3 py-2">{row.purpose}</td>
                <td className="border px-3 py-2">{row.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.choices.title}
      </h2>
      <TextList items={policy.choices.items} />

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.thirdParty.title}
      </h2>
      {policy.thirdParty.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-4">
          {paragraph}
        </p>
      ))}

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.thirdParty.changesTitle}
      </h2>
      <p className="mb-4">{policy.thirdParty.changes}</p>

      <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
        {policy.thirdParty.contactTitle}
      </h2>
      <p className="mb-4">
        {t.rich("thirdParty.contact", {
          privacyPolicy: (chunks) => (
            <Link
              href="/legal/privacy-policy"
              className="text-[var(--brand-orange)] underline"
            >
              {chunks}
            </Link>
          ),
          email: (chunks) => (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-[var(--brand-orange)] underline"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </article>
  );
}
