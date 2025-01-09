function SpinnerFullPage() {
  return (
    <div className="fixed  bg-[#fbf7f4] dark:bg-[#181a1b]  !bg-opacity-60  z-[9999] inset-0 h-full w-full flex items-center justify-center">
      <div className="flex items-center">
        <span className="text-3xl ml-4 text-text">جاري النشر</span>

        <svg
          className="animate-spin h-5 w-5 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SpinnerFullPage;
