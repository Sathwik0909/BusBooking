import ServiceCard from "../../components/ServiceCard";
import RootLayout from "../../layout/RootLayout";
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri";
import { PiHeadsetFill } from "react-icons/pi";

const Services = () => {
  return (
    <RootLayout>
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-300 font-bold space-y-3">
          Our <span className="text-primary">Services</span>
        </h1>
      </div>

      {/* Service Card */}
      <div className="w-full grid grid-cols-3 gap-10 space-y-4">
        <ServiceCard
          icon={RiSecurePaymentLine}
          title={"Secure Payment"}
          desc={
            "Integrate secure payment gateways for users to to pay for their tickets"
          }
        />

        <ServiceCard
          icon={RiRefund2Line}
          title={"Refund Policy"}
          desc={
            "Offer options for the users to purchase refundable tickets with clear"
          }
        />

        <ServiceCard
          icon={PiHeadsetFill}
          title={"24/7 Support"}
          desc={"Get assistance anytime through chat, email, or phone"}
        />
      </div>
    </RootLayout>
  );
};

export default Services;
