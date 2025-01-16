import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Desclaimer Page - Indianconstitution",
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

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8 pb-5">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Disclaimer</h2>
      <p className="text-gray-800 mb-2">
        The information provided on this website is for general informational
        purposes only. All data is based on a publicly available{" "}
        <Link className="text-blue-800" target="_blank" href="/COI.json">
          {" "}
          JSON database{" "}
        </Link>
        and is not guaranteed to be accurate, complete, or up-to-date.
      </p>
      <p className="text-gray-800 mb-2">
        While every effort has been made to ensure the accuracy of the
        information, the creators of this website do not take any responsibility
        for any errors, omissions, or inconsistencies in the data. Users are
        encouraged to verify the information independently before relying on it
        for any purpose.
      </p>
      <p className="text-gray-800 mb-2">
        This website is not affiliated with or endorsed by the Government of
        India or any official constitutional body. It is an independent project
        aimed at spreading awareness and education about the Indian
        Constitution.
      </p>
      <p className="text-gray-800">
        By using this website, you agree that the creators will not be held
        liable for any consequences arising from the use of the information
        provided herein.
      </p>
    </div>
  );
};

export default Disclaimer;
