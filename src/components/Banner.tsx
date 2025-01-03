import React from "react";
import { BannerData } from "../../types";
import { getBannersData } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Banner = async () => {
  const banners: BannerData[] = await getBannersData();
  const singleBanner = banners[0];

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative overflow-hidden">
      {singleBanner?.image && (
        <Image
          width={1920}
          height={1080}
          src={urlFor(singleBanner?.image)?.url()}
          alt={singleBanner?.title}
          className="object-cover w-full h-full"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {singleBanner?.title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
