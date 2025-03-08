import Image from "next/image";

export default function UnauthenticatedLayout() {
  return (
    <>
      <div className="w-full flex flex-col p-10 2xl:p-30">
        <div className="flex justify-start mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-6 h-6 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-12">
          &quot;I&apos;ve been using Uifry for over a year, and it&apos;s helped
          simplify all my payments.&quot;
        </h2>
        <div className="text-left text-lg">
          <p className="font-bold text-custom-purple-light text-xl">Ali Riaz</p>
          <p className="text-custom-purple-light font-medium">Singapore</p>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-8 h-2 bg-custom-purple-light rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
      <div className="self-end  w-[500px] 2xl:w-[821px] overflow-hidden">
        <Image src="/analytics.png" width={821} height={584} alt="analytics" />
      </div>
    </>
  );
}
