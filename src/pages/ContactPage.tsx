import { Mail, MapPinIcon, Phone } from "lucide-react";
import ContactUsForm from "../components/ContactUsForm";

const ContactPage = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-br from-[#14274E] via-[#394867] to-cyan-500 flex items-center justify-center">
        <div className="max-w-6xl w-full px-4 space-y-12">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center mt-10">
              <h1 className="text-6xl tracking-tight font-bold text-white">
                Get in Touch
              </h1>
              <p className="text-lg tracking-tight max-w-4xl mt-8 mb-6 text-[#F1F6F9]">
                Have questions? We would love to hear from you. Send us a
                message and we will respond as soon as possible.
              </p>
              <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-95 border border-[#9BA4B4]/30">
                    <Phone className="w-12 h-10 text-[#14274E] mb-2" />
                    <h3 className="text-lg font-semibold mb-2 text-[#14274E]">
                      Phone
                    </h3>
                    <p className="text-[#394867]">+1 (555) 123-4567</p>
                    <p className="text-[#394867]">Mon-Fri 9am-6pm EST</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-95 border border-[#9BA4B4]/30">
                    <Mail className="w-12 h-10 text-[#14274E] mb-2" />
                    <h3 className="text-lg font-semibold mb-2 text-[#14274E]">
                      Email
                    </h3>
                    <p className="text-[#394867]">contact@visitwise.com</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-95 border border-[#9BA4B4]/30">
                    <MapPinIcon className="w-12 h-10 text-[#14274E] mb-2" />
                    <h3 className="text-lg font-semibold mb-2 text-[#14274E]">
                      Office
                    </h3>
                    <p className="text-[#394867]">123 Business Ave</p>
                    <p className="text-[#394867]">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-32">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
