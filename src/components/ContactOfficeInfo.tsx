import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { InfoItem } from "./common/InfoItem";
import { COMPANY_CONTACT } from "../data/company";

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
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="font-bold text-[#171B18] hover:text-[#FF4D0A] transition-colors break-words">
              {COMPANY_CONTACT.phone}
            </a>
          </InfoItem>

          <InfoItem icon={Mail} label="Engineering & Plans Submission">
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="font-bold text-[#171B18] hover:text-[#FF4D0A] transition-colors break-all">
              {COMPANY_CONTACT.email}
            </a>
          </InfoItem>

          <InfoItem icon={MapPin} label="Headquarters & Technology Lab">
            <span className="font-bold text-[#171B18] block leading-snug">
              {COMPANY_CONTACT.address}
            </span>
            {COMPANY_CONTACT.addressNote && (
              <span className="text-[11px] text-[#52514B] block mt-0.5">
                {COMPANY_CONTACT.addressNote}
              </span>
            )}
          </InfoItem>

          <InfoItem icon={Clock} label="Operating Hours">
            <span className="font-bold text-[#171B18] block leading-snug">
              {COMPANY_CONTACT.operatingHours}
            </span>
            <span className="text-[11px] text-[#FF4D0A] font-semibold block mt-0.5">
              {COMPANY_CONTACT.operatingHoursEmergency}
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
