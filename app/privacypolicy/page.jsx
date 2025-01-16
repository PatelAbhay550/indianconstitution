export const metadata = {
  title: "Privacy Policy Page - Indianconstitution",
  description:
    "The Constitution of India is the supreme law of India that lays down the framework that defines the political principles, establishes the structure.",
  keywords:
    "Indian Constitution, Indian Constitution Articles, Articles of Indian Constitution, Constitution of India, Indian Constitution in English",
  openGraph: {
    title: "IndianConstitution - Articles of Indian Constitution",
    description:
      "The Constitution of India is the supreme law of India that lays down the framework that defines the political principles, establishes the structure.",
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen rounded-lg shadow-md max-w-4xl mx-auto mt-8 pb-5">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Privacy Policy</h1>
      <p className="text-gray-800 mb-2">
        Welcome to <strong>Indianconstitution</strong>. Your privacy is
        important to us, and we are committed to protecting any personal
        information you may provide while using our website.
      </p>
      <h2 className="text-xl font-semibold text-blue-600 mt-4 mb-2">
        Information We Collect
      </h2>
      <p className="text-gray-800 mb-2">
        This website does not collect personal information unless you
        voluntarily provide it through forms or communication. We may collect
        non-personal data such as browser type, IP address, and interaction data
        for analytics purposes.
      </p>
      <h2 className="text-xl font-semibold text-blue-600 mt-4 mb-2">
        Use of Information
      </h2>
      <p className="text-gray-800 mb-2">
        Any information collected will be used solely for improving the user
        experience or responding to your inquiries. We will not share, sell, or
        distribute your information to third parties without your consent.
      </p>
      <h2 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Cookies</h2>
      <p className="text-gray-800 mb-2">
        This website may use cookies to enhance your browsing experience. By
        using this website, you consent to the use of cookies. You can disable
        cookies in your browser settings if preferred.
      </p>
      <h2 className="text-xl font-semibold text-blue-600 mt-4 mb-2">
        External Links
      </h2>
      <p className="text-gray-800 mb-2">
        Our website may contain links to external sites. We are not responsible
        for the privacy practices or content of these sites. Please review their
        privacy policies before interacting with them.
      </p>
      <h2 className="text-xl font-semibold text-blue-600 mt-4 mb-2">
        Changes to this Policy
      </h2>
      <p className="text-gray-800">
        We reserve the right to update this Privacy Policy at any time. Updates
        will be reflected on this page with the date of the latest revision.
      </p>
      <p className="text-gray-800 mt-4">
        If you have any questions about this Privacy Policy, feel free to{" "}
        <a href="/contactus" className="text-blue-500 underline">
          contact us
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
