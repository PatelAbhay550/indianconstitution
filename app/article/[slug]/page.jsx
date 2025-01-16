import { COI } from "@/config/COI";
// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `Information on ${params.slug.replace(
      /-/g,
      " "
    )} by Indianconstitution`,
    description: `Read information about Article ${params.slug.replace(
      /-/g,
      " "
    )}, provided by Indianconstitution`,
    openGraph: {
      title: `Information on ${params.slug.replace(
        /-/g,
        " "
      )} by Indianconstitution`,
      description: `Read information about Article ${params.slug.replace(
        /-/g,
        " "
      )}, provided by Indianconstitution`,
    },
  };
}
export default function Page({ params }) {
  const initialslug = params.slug; // Extract slug from params
  const slug = initialslug.replace(/-/g, " "); // Replace hyphens with spaces
  const data = COI; // Data source (Indian Constitution JSON)

  // Find the matching article using the slug
  const article = data.find((item) => item.Name === slug);

  // If no article is found, show a "Not Found" message
  if (!article) {
    return (
      <p className="text-red-500 text-center mt-4 mx-auto max-w-[1010px] bg-red-100 p-4 rounded-md shadow-md">
        Sorry, we couldn't find an article matching: <strong>{slug}</strong>
        <span> Please check the URL or try searching again.</span>
      </p>
    );
  }

  return (
    <div className="max-w-4xl mb-9 min-h-screen mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        {article.ArtNo === "0"
          ? article.Name
          : `Article ${article.ArtNo}: ${article.Name}`}
      </h1>
      <div className="text-gray-800 space-y-4">
        {/* Render Article Description */}
        {article.ArtDesc && (
          <p className="whitespace-pre-line">{article.ArtDesc}</p>
        )}

        {/* Render Clauses if present */}
        {article.Clauses && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Clauses:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {article.Clauses.map((clause) => (
                <li key={clause.ClauseNo}>
                  <strong>Clause {clause.ClauseNo}:</strong> {clause.ClauseDesc}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
