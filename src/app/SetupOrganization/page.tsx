"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SetupOrganization = () => {
  const [company, setCompany] = useState({
    name: "",
    website: "",
    description: "",
  });
  const [metaDescription, setMetaDescription] = useState("");

  // Dummy info's
  const [pages, setPages] = useState([
    { url: "/about", status: "scraped", data: "About us information." },
    {
      url: "/services",
      status: "pending",
      data: "Service details coming soon.",
    },
    {
      url: "/contact",
      status: "scraped",
      data: "Contact information scraped.",
    },
  ]);

  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  // Simulated fetching meta description
  const fetchMetaDescription = () => {
    setMetaDescription("This is a simulated meta description for the company.");
    setCompany({
      ...company,
      description: "This is a simulated meta description for the company.",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6 text-zinc-600 select-none">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center my-5 text-black">
          Setup Your Organization
        </h2>

        {/* Company Info Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={company.name}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="url"
            name="website"
            value={company.website}
            onChange={handleInputChange}
            placeholder="Company Website URL"
            className="input input-bordered w-full"
            required
          />
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="description"
              value={company.description}
              onChange={handleInputChange}
              placeholder="Company Description"
              className="input input-bordered w-full"
              required
            />
            <button
              onClick={fetchMetaDescription}
              className="btn btn-sm btn-outline h-11"
            >
              Auto-fetch
            </button>
          </div>
        </div>

        {/* Webpage Scraping Progress */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black">Scraped Pages</h3>
          <table className="w-full mt-2 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Page</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedPage(page.url)}
                >
                  <td className="p-2 text-center">{page.url}</td>
                  <td
                    className={`p-2 font-semibold text-center ${
                      page.status === "scraped"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {page.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show scraped data for selected page */}
        {selectedPage && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold text-gray-700">
              Scraped Data from {selectedPage}:
            </h4>
            <p className="text-sm text-gray-600">
              {pages.find((p) => p.url === selectedPage)?.data ||
                "No data available"}
            </p>
            <button
              onClick={() => setSelectedPage(null)}
              className="btn btn-xs btn-outline mt-2"
            >
              Close
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Link href={"/registration"}>
            <button
              className="bg-white text-center w-40 rounded-2xl h-14 relative text-black  font-semibold group"
              type="button"
            >
              <p className="translate-x-2">Back</p>
              <div className="bg-zinc-300 rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[162px] z-10 duration-500">
                <FaArrowLeftLong className="text-xl" />
              </div>
            </button>
          </Link>
          <Link href={"/ChatbotIntegration"}>
            <button
              className="bg-white text-center w-40 rounded-2xl h-14 relative text-black  font-semibold group"
              type="button"
            >
              <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[162px] z-10 duration-500">
                <FaArrowRightLong className="text-xl" />
              </div>
              <p className="translate-x-2">Next</p>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SetupOrganization;
