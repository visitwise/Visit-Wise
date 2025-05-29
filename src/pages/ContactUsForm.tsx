import React from "react";
// Update the path below if DemoForm is located elsewhere, e.g. "./DemoForm" or "../DemoForm"
import DemoForm from "../components/DemoForm";

const ContactUsForm = () => {
  return (
    <div className="h-full bg-gradient-to-t from-white to-orange-100/90 flex items-center justify-center">
      <div className="max-w-6xl w-full px-4 space-y-12">
        <div className="grid-cols-2 gap-4">
        <div className="flex flex-col py-12">
            <h1 className="text-5xl tracking-tight font-semibold">Request<span className="font-bold underline mx-3">DEMO</span></h1>
        </div>
        <div className="">
            <DemoForm/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
