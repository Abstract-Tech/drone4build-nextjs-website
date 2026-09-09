import { getMessages } from "next-intl/server";
import { renderLinkedText } from "@/components/LinkedText";

type PrivacyPolicyItem = {
  kind: "paragraph" | "subheading" | "listItem" | "contactLine";
  text: string;
};

type PrivacyPolicySection = {
  title: string;
  items: PrivacyPolicyItem[];
};

type PrivacyPolicyMessages = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PrivacyPolicySection[];
};

export default async function PrivacyPolicyPage() {
  const messages = await getMessages();
  const policy = messages.privacyPolicyPage as PrivacyPolicyMessages;

  return (
    <article className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-soft text-[var(--brand-blue)]">
      <h1 className="text-3xl mb-4 text-[var(--brand-blue)]">
        {policy.title}
      </h1>
      <p className="mb-4 font-semibold">{policy.lastUpdated}</p>
      <p className="mb-4">{renderLinkedText(policy.intro)}</p>

      {policy.sections.map((section) => {
        const pendingListItems: PrivacyPolicyItem[] = [];

        return (
          <section key={section.title}>
            <h2 className="text-2xl mt-8 mb-2 text-[var(--brand-orange)]">
              {section.title}
            </h2>

            {section.items.map((item, index) => {
              if (item.kind === "listItem") {
                pendingListItems.push(item);

                const nextItem = section.items[index + 1];
                if (nextItem?.kind === "listItem") {
                  return null;
                }

                const listItems = [...pendingListItems];
                pendingListItems.length = 0;

                return (
                  <ul
                    key={`${section.title}-list-${index}`}
                    className="list-disc pl-5 space-y-2 mb-4"
                  >
                    {listItems.map((listItem) => (
                      <li key={listItem.text}>
                        {renderLinkedText(listItem.text)}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (item.kind === "subheading") {
                return (
                  <h3
                    key={item.text}
                    className="mt-4 mb-2 text-lg font-semibold text-[var(--brand-blue)]"
                  >
                    {item.text}
                  </h3>
                );
              }

              if (item.kind === "contactLine") {
                return (
                  <p key={item.text} className="mb-1 font-semibold">
                    {renderLinkedText(item.text)}
                  </p>
                );
              }

              return (
                <p key={item.text} className="mb-4">
                  {renderLinkedText(item.text)}
                </p>
              );
            })}
          </section>
        );
      })}
    </article>
  );
}
