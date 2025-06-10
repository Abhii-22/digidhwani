import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About DigiDhvani</h1>
      <div className="prose max-w-3xl">
        <p className="text-lg mb-6">
          DigiDhvani is a cutting-edge platform designed to revolutionize the way we interact with digital content.
          Our mission is to provide innovative solutions that bridge the gap between technology and user experience.
        </p>
        <p className="mb-6">
          With a team of passionate developers and designers, we're committed to creating intuitive and accessible
          digital experiences that make a difference in people's lives.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="mb-6">
          To be at the forefront of digital innovation, creating solutions that are not only functional but also
          delightful to use.
        </p>
      </div>
    </div>
  );
}
