'use client';

import { useState } from 'react';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">Create Stunning Videos with Ease</h1>
          <p className="text-xl mb-6 text-gray-300">Professional video editing services tailored to your needs.</p>
          <a href="#pricing" className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-400">
            We bring your vision to life with top-notch editing, fast turnarounds, and professional-grade results. Whether it's for social media, YouTube, or any business project, we ensure your videos look their best.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Professional Editing</h3>
              <p className="text-gray-300">We use industry-leading tools and techniques to give your videos a polished, professional look.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Custom Effects</h3>
              <p className="text-gray-300">Animations, transitions, and custom visual effects to make your video truly stand out.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Fast Turnaround</h3>
              <p className="text-gray-300">Get your videos edited quickly, without sacrificing quality, no matter the scale of the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900 text-white">
  <div className="max-w-screen-xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold mb-10">Choose Your Plan</h2>
    <p className="text-lg mb-12 text-gray-400">
      Select the best plan that fits your video editing needs. Whether you’re just getting started or need advanced features, we have you covered.
    </p>

    {/* Pricing Plans */}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
      {/* Basic Plan */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
        <h1 className="text-4xl font-extrabold mb-4">
          $19 <span className="text-sm text-gray-400">/minute</span>
        </h1>
        <p className="text-gray-300 mb-6">Perfect for individuals or small projects with simple editing needs.</p>
        <ul className="text-left space-y-4 mb-8 text-gray-400">
          <li>✔ Basic video trimming & cuts</li>
          <li>✔ 1-2 revisions</li>
          <li>✔ HD video quality</li>
          <li>✔ Basic transitions</li>
          <li>✔ 48-hour turnaround</li>
        </ul>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Professional Plan */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Professional Plan</h3>
        <h1 className="text-4xl font-extrabold mb-4">
          $24 <span className="text-sm text-gray-400">/minute</span>
        </h1>
        <p className="text-gray-300 mb-6">Ideal for medium businesses and those requiring more advanced features.</p>
        <ul className="text-left space-y-4 mb-8 text-gray-400">
          <li>✔ Advanced video editing (motion graphics, effects)</li>
          <li>✔ 3-5 revisions</li>
          <li>✔ HD & 4K video quality</li>
          <li>✔ Custom animations</li>
          <li>✔ 36-hour turnaround</li>
          <li>✔ Custom transitions</li>
        </ul>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
        <h1 className="text-4xl font-extrabold mb-4">
          $29 <span className="text-sm text-gray-400">/minute</span>
        </h1>
        <p className="text-gray-300 mb-6">For large enterprises or projects requiring top-tier features and faster delivery.</p>
        <ul className="text-left space-y-4 mb-8 text-gray-400">
          <li>✔ All features of the Professional Plan</li>
          <li>✔ Unlimited revisions</li>
          <li>✔ Premium video quality (HD/4K/8K)</li>
          <li>✔ Custom templates and effects</li>
          <li>✔ Dedicated support & consultation</li>
          <li>✔ Priority 24-hour turnaround</li>
          <li>✔ Full ownership of final assets</li>
        </ul>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 text-center">
  <div className="max-w-screen-xl mx-auto">
    <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
      Premium Plan
    </button>
  </div>
</section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-screen-xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-10">Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="transition transform hover:scale-105">
              <div className="w-full h-64 bg-black text-white flex justify-center items-center rounded-lg">
                <p className="text-xl font-semibold">Video 1</p>
              </div>
            </div>
            <div className="transition transform hover:scale-105">
              <div className="w-full h-64 bg-black text-white flex justify-center items-center rounded-lg">
                <p className="text-xl font-semibold">Video 2</p>
              </div>
            </div>
            <div className="transition transform hover:scale-105">
              <div className="w-full h-64 bg-black text-white flex justify-center items-center rounded-lg">
                <p className="text-xl font-semibold">Video 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                How long does the editing process take?
              </h3>
              {activeIndex === 0 && (
                <p className="mt-4 text-gray-300">
                  The editing time varies depending on the complexity of the project. Simple edits can take as little as a few hours, while more complex projects may take a few days.
                </p>
              )}
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                Can I request revisions?
              </h3>
              {activeIndex === 1 && (
                <p className="mt-4 text-gray-300">
                  Yes, we offer revisions to ensure that you're completely satisfied with the final result. Just let us know what needs adjustment, and we'll take care of it.
                </p>
              )}
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAccordion(2)}
              >
                What video formats do you support?
              </h3>
              {activeIndex === 2 && (
                <p className="mt-4 text-gray-300">
                  We support all popular video formats, including MP4, MOV, AVI, and others. You can specify your preferred format when you submit your project.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
