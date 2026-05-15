export function StructuredData() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Douglus Nguyen",
    jobTitle: "Creative Developer",
    url: "https://douglus.site",
    sameAs: [
      "https://github.com/19521791",
      "https://www.linkedin.com/in/nguyen-phi-long-a48961265/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
