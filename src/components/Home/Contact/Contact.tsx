import Text from '@/ui/Text';
import VerticalDivider from '@/ui/VerticalDivider';
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="max-w-[1290px] ml-auto">
        <div className="flex gap-[80px]">
          {/* Left Side - Contact Form */}
          <div className="w-[456px] h-[462px]">
            {/* Title and Description */}
            <Text variant="title">Contact Us</Text>
            {/* description */}
            <div className="flex gap-[12px] mt-[16px]">
              <VerticalDivider className="w-[4px] h-[52px]" />
              <Text className="md:max-w-[440px] w-full xl:pl-[2px]s">
              Feel free to reach out to us at any time. We value your feedback, inquiries, and collaboration.
              </Text>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col items-start gap-[24px] mt-8">
              {/* Name Field */}
              <div className="w-[456px] flex items-center gap-[10px] px-[24px] py-[16px] border-b border-b-black/10">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-[16px] font-normal leading-[160%] outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="w-[456px] flex items-center gap-[10px] px-[24px] py-[16px] border-b border-b-black/10">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-[16px] font-normal leading-[160%] outline-none"
                />
              </div>

              {/* Message Field */}
              <div className="w-[456px] flex items-center gap-[10px] px-[24px] py-[16px] border-b border-b-black/10">
                <textarea
                  placeholder="Message"
                  rows={1}
                  className="w-full text-[16px] font-normal leading-[160%] outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[456px] h-[56px] flex justify-center items-center gap-[10px] rounded-[80px] bg-gradient-to-r from-[#5F90F0] to-[#185AD9] text-white text-[14px] font-medium leading-[160%] hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1">
            {/* Replace with your actual image */}
            <div className="w-full h-full bg-gray-200 rounded-lg">
              {/* Image placeholder - replace with your actual image component */}
              {/* <Image 
                src="/images/contact-image.jpg" 
                alt="Contact" 
                width={800} 
                height={600}
                className="object-cover w-full h-full rounded-lg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;