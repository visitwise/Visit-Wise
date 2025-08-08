import { useState } from "react";
import { z } from "zod";
import { Building2, Mail, MessageCircle, Send, User, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  school: z.string().optional(),
  description: z.string().optional(),
});

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const validation = formSchema.safeParse({
      name,
      email,
      phone,
      school,
      description,
    });

    if (!validation.success) {
      const errorMap: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        errorMap[issue.path[0]] = issue.message;
      });
      setErrors(errorMap);
      return;
    }

    setErrors({});
    alert(
      `Message sent!\nName: ${name}\nSchool: ${school}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`
    );

    setName("");
    setEmail("");
    setPhone("");
    setSchool("");
    setDescription("");
  };

  return (
    <div className="flex items-center justify-center mb-32">
      <div className="gap-6 max-w-3xl w-full bg-white p-2 rounded-lg shadow-lg shadow-[#394867]/30">
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#14274E]">
                Name <span className="text-[#14274E]">*</span>
              </label>
              <div className="mt-1 flex items-center border border-[#9BA4B4] rounded-md p-2">
                <User className="h-5 w-5 text-[#394867] mr-2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full outline-none text-[#14274E]"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#14274E]">
                School
              </label>
              <div className="mt-1 flex items-center border border-[#9BA4B4] rounded-md p-2">
                <Building2 className="h-5 w-5 text-[#394867] mr-2" />
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="w-full outline-none text-[#14274E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#14274E]">
                Email <span className="text-[#14274E]">*</span>
              </label>
              <div className="mt-1 flex items-center border border-[#9BA4B4] rounded-md p-2">
                <Mail className="h-5 w-5 text-[#394867] mr-2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-[#14274E]"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#14274E]">
                Phone <span className="text-[#14274E]">*</span>
              </label>
              <div className="mt-1 flex items-center border border-[#9BA4B4] rounded-md p-2">
                <Phone className="h-5 w-5 text-[#394867] mr-2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full outline-none text-[#14274E]"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#14274E]">
                Description
              </label>
              <div className="mt-1 flex items-start border border-[#9BA4B4] rounded-md p-2">
                <MessageCircle className="h-5 w-5 text-[#394867] mr-2" />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full outline-none resize-none text-[#14274E]"
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

export default ContactUsForm;
