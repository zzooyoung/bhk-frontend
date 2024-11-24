import React from "react";
import logo from "../img/logo.png";

const churchList = [
  { name: "무량선원", location: "동래구", address: "부산광역시 동래구 여고북로 183" },
  { name: "혜동사", location: "동래구", address: "부산광역시 동래구 충렬대로108번길 85-21" },
  { name: "소림사", location: "동래구", address: "부산광역시 동래구 쇠미로129번길 102-6" },
  { name: "용와사(법성사)", location: "동래구", address: "부산광역시 동래구 아시아드대로181번길 18" },
  { name: "동림사", location: "동래구", address: "부산광역시 동래구 석사로33번길 6-3, 2층" },
  { name: "동학사", location: "동래구", address: "부산광역시 동래구 쇠미로119번길 109" },
  { name: "소림사", location: "동래구", address: "부산광역시 동래구 쇠미로71번길 11" },
  { name: "원광사", location: "동래구", address: "부산광역시 동래구 쇠미로 3-22" },
  { name: "보림사", location: "동래구", address: "부산광역시 동래구 쇠미로81번길 28" },
  { name: "연화사", location: "동래구", address: "부산광역시 동래구 쇠미로81번길 33" },
  { name: "보천사", location: "동래구", address: "부산광역시 동래구 쇠미로71번길 60-10" },
  { name: "법성선원(묘관음사포교원)", location: "동래구", address: "부산광역시 동래구 미남로 74" },
  { name: "수암사 수암선원", location: "동래구", address: "부산광역시 동래구 여고로135번길 51, 지하" },
  { name: "성불사(콜)", location: "동래구", address: "부산광역시 동래구 여고북로 142, 2층" },
  { name: "전등사", location: "동래구", address: "부산광역시 동래구 동래로215번가길 22-13" },
  { name: "만불정사", location: "동래구", address: "부산광역시 동래구 충렬대로335번길 15" },
  { name: "용화사", location: "동래구", address: "부산광역시 동래구 안락로 43" },
  { name: "보리암", location: "동래구", address: "부산광역시 동래구 안락로 122" },
  { name: "금불사", location: "동래구", address: "부산광역시 동래구 명장로63번길 90-25" },
  { name: "정토사", location: "동래구", address: "부산광역시 동래구 반송로 276" },
  { name: "연화정사", location: "동래구", address: "부산광역시 동래구 복천로 111-5" },
];

export default function Init() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-12 mb-4">
          <img src={logo} alt="BAK Logo" className="object-contain w-full h-full" />
        </div>
        <h1 className="text-xl font-medium text-gray-800">나의 교회 고르기</h1>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="search"
          placeholder="교회 검색하기"
          className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>

      {/* Church List */}
      <div className="space-y-3 mb-8 overflow-y-auto h-96">
        {churchList.map((church, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all hover:shadow-md"
          >
            <h2 className="font-medium text-gray-800 mb-1">{church.name}</h2>
            <p className="text-sm text-gray-500">{church.address}</p>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="space-y-3">
        <button className="w-full py-6 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all border border-gray-200">
          내가 다니는 교회가 없어요
        </button>
        <button className="w-full py-6 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all border border-gray-200">
          저는 무교예요
        </button>
      </div>
    </div>
  );
}
