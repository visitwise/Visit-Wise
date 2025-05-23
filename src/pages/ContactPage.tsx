import { Mail, MapPinIcon, Phone } from "lucide-react";
import ContactUsForm from "../components/ContactUsForm";

const ContactPage = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-t from-white to-blue-100/90 flex items-center justify-center">
        <div className="max-w-6xl w-full px-4 space-y-12">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center mt-32">
              <h1 className="text-6xl tracking-tight font-bold">
                Get in Touch
              </h1>
              <p className="text-lg tracking-tight max-w-4xl mt-8 mb-6">
                Have questions? We would love to hear from you. Send us a
                message and we will respond as soon as possible.
              </p>
              <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-95">
                    <Phone className="w-12 h-10 text-primary mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+91 8977002747</p>
                    <p className="text-gray-600">Mon-Fri 9am-6pm IST</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-95">
                    <Mail className="w-12 h-10 text-primary mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">hello@neonflake.com</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-95">
                    <MapPinIcon className="w-12 h-10 text-primary mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Office</h3>
                    <p className="text-gray-600">303, Meridian Plaza</p>
                    <p className="text-gray-600">Ameerpet, Hyderabad</p>
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