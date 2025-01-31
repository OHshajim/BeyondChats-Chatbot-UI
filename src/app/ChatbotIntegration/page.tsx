"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const ChatbotIntegration = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const [integrationSuccess, setIntegrationSuccess] = useState<boolean | null>(
    null
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6 text-zinc-500">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Chatbot Integration & Testing
        </h2>

        {/* Test Chatbot Button */}
        <button
          className="btn btn-primary w-full my-2"
          onClick={() => window.open("https://yourclientwebsite.com", "_blank")}
        >
          Test Chatbot
        </button>

        {/* Integration Options */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-black">
            Integrate on your Website
          </h3>
          <p className="text-sm mb-2">
            Follow these instructions to integrate the chatbot.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <code className="text-sm text-green-600">
              {"<script src='https://your-chatbot.com/integrate.js'></script>"}
            </code>
          </div>

          <button className="btn btn-outline w-full mt-2">
            Mail Instructions to Developer
          </button>
        </div>

        {/* Test Integration Button */}
        <button
          className="btn btn-accent w-full mt-4"
          onClick={() => setIntegrationSuccess(true)}
        >
          Test Integration
        </button>

        {/* Success or Failure UI */}
        {integrationSuccess !== null && (
          <div
            className={`mt-4 p-4 rounded-lg text-center ${
              integrationSuccess
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {integrationSuccess ? (
              <>
                <h3 className="text-lg font-bold">
                  🎉 Integration Successful!
                </h3>
                <p>Your chatbot is now live.</p>
                <button
                  className="btn btn-success mt-2 w-full"
                  onClick={onNext}
                >
                  Explore Admin Panel
                </button>
                <button className="btn btn-outline mt-2 w-full">
                  Share on Social Media
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold">
                  ⚠️ Integration Not Detected
                </h3>
                <p>Please check the installation and try again.</p>
              </>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Link href={"/SetupOrganization"}>
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
          {integrationSuccess === null && (
            <Link href={"/ChatbotIntegration"}>
              <button
                className="bg-white text-center w-40 rounded-2xl h-14 relative text-black  font-semibold group"
                type="button"
              >
                <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute -left-2 top-[4px] group-hover:w-[180px] z-10 duration-500">
                  <FaArrowRightLong className="text-xl" />
                </div>
                <p className="translate-x-4">Skip & Continue</p>
              </button>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ChatbotIntegration;
