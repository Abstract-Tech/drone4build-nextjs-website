import React from "react";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </main>
  );
}
