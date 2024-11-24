import React from 'react';
import logo from "../img/logo.png";

function Main() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b z-50">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="text-2xl font-bold text-primary">
          <img src={logo} alt="BAK Logo" className="object-contain w-full h-full" />
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M20 21l-1.405-1.405M8 3v3m4 0V3m-4 8h.01M12 11v10m6-6h.01M6 16h.01" />
            </svg>
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14h.01M16 14h.01M12 16h.01M16 16h.01M8 16h.01M8 14h.01M8 12h.01M12 12h.01M16 12h.01" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14 pb-16">
        {/* Today's Verse */}
        <div className="m-4 p-4 bg-primary/10 rounded-lg">
          <h2 className="text-primary font-semibold mb-2">오늘의 성경구절</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            구하라 그러면 너희에게 주실 것이요<br />
            찾으라 그러면 찾을 것이요<br />
            문을 두드리라 그러면 너희에게 열릴 것이니
          </p>
          <p className="text-gray-500 text-xs mt-2">마태복음 7:7-8</p>
        </div>

        {/* Community Section */}
        <div className="px-4 mb-6">
          <h2 className="text-xl font-bold mb-3">커뮤니티</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                <div>
                  <h3 className="font-medium">커뮤니티 게시글 {index + 1}</h3>
                  <p className="text-sm text-gray-500 mt-1">게시글 내용...</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Posts */}
        <div className="px-4">
          <h2 className="text-xl font-bold mb-3">궁금해요</h2>
          <div className="space-y-3">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">태그 {index + 1}</span>
                </div>
                <h3 className="font-medium">인기 게시글 {index + 1}</h3>
                <p className="text-sm text-gray-500 mt-1">게시글 요약...</p>
                <div className="flex items-center justify-end mt-2">
                  <svg className="w-4 h-4 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9l-5 5m0 0l-5-5m5 5V3" />
                  </svg>
                  <span className="text-primary">28</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t">
        <div className="flex justify-around px-2 py-3">
          {["홈", "찾아보기", "질문", "마이페이지"].map((label, index) => (
            <div key={index} className="flex flex-col items-center text-gray-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs mt-1">{label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Main;
