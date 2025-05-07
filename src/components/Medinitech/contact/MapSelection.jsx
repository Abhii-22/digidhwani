import React from 'react';

export function MapSection() {
  return (
    <div className="w-full bg-gray-50 border-t">
      {/* Heading */}
      <div className="pt-8 pb-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Our Location</h2>
      </div>
      
      {/* Map Container with improved dimensions and better shadow */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-[450px] w-full rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4991348144156!2d77.52261157481491!3d12.990543987350876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddbeb40cf37%3A0x37fa21334ead8607!2sMedini%20Technologies!5e0!3m2!1sen!2sin!4v1711290789123!5m2!1sen!2sin&markers=color:red%7Clabel:M%7C12.990543987350876,77.52261157481491"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
            title="Medini Technologies Office Location"
          ></iframe>
        </div>
      </div>
      
      {/* Address Section - Improved styling and layout */}
      <div className="py-8 bg-white">
        <div className=" text-center ">
          <div className="flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-customBlue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800">Visit Us</h3>
          </div>
          
          <div className="bg-customBlue text-white px-6 py-4 rounded-lg shadow-md inline-block">
            <p className="text-lg font-medium leading-relaxed">
              No. 2943/E, 3rd Floor, 40, Service Rd, 
              <br />opposite Shri Maruthi Mandira, Hosahalli Extension, 
              <br />Vijayanagar, Bengaluru, Karnataka 560040
            </p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a 
              href="https://www.google.com/maps?daddr=MEDINI+TECHNOLOGIES,+Service+Road,+opposite+%E0%B2%AE%E0%B2%BE%E0%B2%B0%E0%B3%81%E0%B2%A4%E0%B2%BF+%E0%B2%AE%E0%B2%82%E0%B2%A6%E0%B2%BF%E0%B2%B0,+Hosahalli+Extension,+Vijayanagar,+Bengaluru,+Karnataka,+India" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-customBlue hover:bg-customBlue/80 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;