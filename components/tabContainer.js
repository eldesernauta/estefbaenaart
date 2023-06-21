import { useState } from 'react';
import gsap from 'gsap';

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const animateContent = (contentRef) => {
    gsap.from(contentRef, { opacity: 0, x: '-100%', duration: 0.5, ease: 'power2.out' });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <button
          className={`py-2 px-4 bg-blue-500 text-white rounded-tl-lg ${
            activeTab === 0 ? 'bg-blue-700' : ''
          }`}
          onClick={() => handleTabChange(0)}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 bg-blue-500 text-white ${activeTab === 1 ? 'bg-blue-700' : ''}`}
          onClick={() => handleTabChange(1)}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 bg-blue-500 text-white rounded-tr-lg ${
            activeTab === 2 ? 'bg-blue-700' : ''
          }`}
          onClick={() => handleTabChange(2)}
        >
          Tab 3
        </button>
      </div>
      <div className="w-full bg-gray-200 mt-4">
        <div
          className={`h-40 ${activeTab === 0 ? '' : 'hidden'}`}
          ref={animateContent}
        >
          Contenido de la pestaña 1
        </div>
        <div
          className={`h-40 ${activeTab === 1 ? '' : 'hidden'}`}
          ref={animateContent}
        >
          Contenido de la pestaña 2
        </div>
        <div
          className={`h-40 ${activeTab === 2 ? '' : 'hidden'}`}
          ref={animateContent}
        >
          Contenido de la pestaña 3
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
