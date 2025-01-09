import React, { useState, useEffect } from "react";

import axios from "axios";
import { baseApi } from "../../api/posts";
export default function Stats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    DailyVisitors: 0,
  });
  console.log(stats);

  useEffect(() => {
    const getAlbwabaStats = () => {
      baseApi.get("albwaba-stats").then((data) => setStats(data.data));
    };
    getAlbwabaStats();
  }, []);
  return (
    <section class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 font-bold text-center text-2xl md:text-3xl text-text">
          ضمان بيع سريع لعقاراتكم من خلال إعلاناتكم على موقعنا
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3  md:divide-x-2 divide-border">
          <div class=" pb-10  lg:pb-0  justify-items-center">
            <div className="w-20 h-20 mb-5">
              <img src="image.png" alt="users icon" />
            </div>
            <div class=" font-bold text-5xl text-gray-900 mb-5 text-center text-text">
              {stats.totalPosts}
            </div>
            <span class="text-xl text-gray-500 text-center block font-semibold">
              إعلان
            </span>
          </div>
          <div class="  pb-10 -0 lg:pb-0  justify-items-center">
            <div className="w-20 h-20 mb-5">
              <img src="world-wide-web_6471812.png" alt="world wide web." />
            </div>
            <div class="font-manrope font-bold text-5xl text-gray-900 mb-5 text-center text-text">
              {stats.DailyVisitors}
            </div>
            <span class="text-xl text-gray-500 text-center block font-semibold ">
              زائر يوميا
            </span>
          </div>
          <div class="  pb-10 -0 lg:pb-0  justify-items-center">
            <div className="w-20 h-20 mb-5">
              <img src="people_16575140.png" alt="post icon." />
            </div>
            <div class="font-manrope font-bold text-5xl text-gray-900 mb-5 text-center text-text">
              {stats.totalUsers}
            </div>
            <span class="text-xl text-gray-500 text-center block font-semibold">
              مستخدم
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
