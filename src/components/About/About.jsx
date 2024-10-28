import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Doctor House</h1>
          <p className="text-lg text-gray-600">
            Providing top-notch medical services with a team of dedicated professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1: Our Mission */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Doctor House, our mission is to ensure the well-being of our patients by providing the best healthcare solutions.
              We are committed to offering personalized care with cutting-edge medical treatments to ensure a healthy and happy life.
            </p>
          </div>

          {/* Section 2: Our Values */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 leading-relaxed">
              We value integrity, compassion, and excellence in medical care. Every patient is treated with respect, and we strive to build
              long-lasting relationships based on trust and professional care.
            </p>
          </div>

          {/* Section 3: Experienced Team */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experienced Medical Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our team comprises experienced and highly qualified doctors, nurses, and support staff. We stay updated with the latest medical advancements to ensure the highest quality of care.
            </p>
          </div>

          {/* Section 4: Why Choose Us */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              We provide comprehensive healthcare services with a focus on patient satisfaction. Our facilities are equipped with state-of-the-art technology, ensuring you receive the best possible treatment.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="/contact" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Get in Touch with Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
