import { useState } from "react";
import { Mail, MessageCircle, Send, User } from "lucide-react";

const Request = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#14274E] via-[#394867] to-cyan-600 flex items-center justify-center  py-16">
      <div className="gap-6 max-w-4xl bg-white p-6 rounded-lg shadow-lg shadow-zinc-800/30">
        {/* Form Section */}
        <div className="p-4">
          <h2 className="text-4xl tracking-tight font-bold mb-6 text-[#14274E]">
            Send Us a Message
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#394867]">
                  Name
                </label>
                <div className="mt-1 flex items-center border border-gray-300 rounded-md p-2 w-full">
                  <User className="h-5 w-5 text-[#9BA4B4] mr-2" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#394867]">
                Email
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md p-2 w-full">
                <Mail className="h-5 w-5 text-[#9BA4B4] mr-2" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#394867]">
                Message
              </label>
              <div className="mt-1 flex items-start border border-gray-300 rounded-md p-2 w-full">
                <MessageCircle className="h-5 w-5 text-[#9BA4B4] mr-2" />
                <textarea
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#14274E] text-white py-2 rounded-md flex items-center justify-center hover:bg-[#394867] transition"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
