import React from 'react';

export function MapSection() {
  return (
    <div className="w-full bg-muted/50 border-t">
      {/* Map Container */}
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4991348144156!2d77.52261157481491!3d12.990543987350876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddbeb40cf37%3A0x37fa21334ead8607!2sMedini%20Technologies!5e0!3m2!1sen!2sin!4v1711290789123!5m2!1sen!2sin&markers=color:red%7Clabel:M%7C12.990543987350876,77.52261157481491"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover"
        ></iframe>
      </div>
      
      {/* Address Section */}
      <div className="py-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-white bg-customBlue px-6 py-3 rounded-lg inline-block shadow-md">
            No. 2943/E, 3rd Floor, 40, Service Rd, 
            opposite Shri Maruthi Mandira, Hosahalli Extension, 
            Vijayanagar, Bengaluru, Karnataka 560040
          </p>
        </div>
      </div>
    </div>
  );
}

export default MapSection;