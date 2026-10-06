import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { InfoItem } from "./common/InfoItem";

export function ContactOfficeInfo() {
  return (
    <div className="lg:col-span-5 space-y-4 sm:space-y-6">
      <div className="bg-[#FFFDF8] rounded-2xl border border-[#E7DED0] p-5 sm:p-8 shadow-sm">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171B18] mb-2">
          Engineering Consultation Office
        </h3>
        <p className="text-xs sm:text-sm text-[#52514B] leading-relaxed mb-6 sm:mb-8">
          Our technical team provides preliminary plan reviews, site
          walk-throughs, and tender engineering packages for commercial and
          industrial developments.
        </p>

        <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
          <InfoItem icon={Phone} label="Direct Inquiries & Dispatch">
            <a
              href="tel:+442079460991"
              className="font-bold text-[#171B18] hover:text-[#FF4D0A] transition-colors break-words">
              +44 (0) 20 7946 0991 / 0800 555 2676
            </a>
          </InfoItem>

          <InfoItem icon={Mail} label="Engineering & Plans Submission">
            <a
              href="mailto:engineering@cosmicfire.co.uk"
              className="font-bold text-[#171B18] hover:text-[#FF4D0A] transition-colors break-all">
              engineering@cosmicfire.co.uk
            </a>
          </InfoItem>

          <InfoItem icon={MapPin} label="Headquarters & Technology Lab">
            <span className="font-bold text-[#171B18] block leading-snug">
              100 Fire Safety Way, London, EC2A 4NE
            </span>
            <span className="text-[11px] text-[#52514B] block mt-0.5">
              (Deployments nationwide across the UK)
            </span>
          </InfoItem>

          <InfoItem icon={Clock} label="Operating Hours">
            <span className="font-bold text-[#171B18] block leading-snug">
              Monday – Friday: 08:30 – 17:30 GMT
            </span>
            <span className="text-[11px] text-[#FF4D0A] font-semibold block mt-0.5">
              24/7/365 Emergency Monitoring & Corrective Response
            </span>
          </InfoItem>
        </div>
      </div>

      <div className="p-4 sm:p-5 rounded-xl bg-[#F2EBDD] border border-[#E7DED0] flex items-center gap-3 text-xs text-[#52514B]">
        <ShieldCheck className="w-5 h-5 text-[#FF4D0A] shrink-0" />
        <span className="leading-relaxed">
          All inquiries reviewed by accredited IFE (Institution of Fire
          Engineers) &amp; Chartered Engineers.
        </span>
      </div>
    </div>
  );
}
