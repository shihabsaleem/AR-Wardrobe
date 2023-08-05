import React from "react";
import { FaShippingFast, FaTimes } from "react-icons/fa";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-6 flex items-center justify-center text-sm font-medium overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-[shimmer_2s_infinite]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-3">
        <FaShippingFast className="text-lg animate-bounce" />
        <span className="hidden sm:inline">
          🎉 Free Shipping on Orders Over ₹999 | Try AR Before You Buy!
        </span>
        <span className="sm:hidden">
          Free Shipping Over ₹999!
        </span>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close announcement"
      >
        <FaTimes className="text-xs" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
