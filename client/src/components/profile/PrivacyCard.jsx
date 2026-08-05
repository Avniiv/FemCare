import { ShieldCheck, Download, Trash2 } from "lucide-react";
import Card from "../ui/Card.jsx";
import { Info } from "lucide-react";

const PrivacyCard = () => {
  return (
    <Card className="flex flex-col gap-6 bg-gradient-to-br from-white to-lavender/20">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-lavender flex-shrink-0">
          <ShieldCheck className="w-6 h-6 text-text" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-text">🛡 Privacy & Data</h2>
          <p className="text-gray-500 leading-relaxed">
            Your health information belongs to you. FemCare keeps your
            personal data private, secure, and under your control.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 cursor-pointer hover: -tranaslate-y-1 hover: shadow-lg transition-all duration-300">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-lavender">
            <Download className="w-5 h-5 text-text" />
          </div>
          <p className="font-bold text-text">⬇ Download My Data</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Download a copy of your wellness information, including cycle
            history, notes, and other personal records.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 cursor-pointer hover: -translate-y-1 hover: shadow-lg transition-all duration-300">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-50">
            <Trash2 className="w-5 h-5 text-rose-500" />
          </div>
          <p className="font-bold text-text">🗑 Clear Wellness History</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Remove your personal wellness history, including cycle logs,
            calendar entries, nutrition logs, wellness records, and notes.
            Your account will remain active.
          </p>
          <div className="flex items-center gap-2 rounded-xl bg-lavender/15 px-4 py-3">
  <Info className="w-4 h-4 text-rose-300 flex-shrink-0" />
  <p className="text-xs text-gray-500 italic">
    Your account will remain active after clearing your wellness history.
  </p>
</div>
        </div>
      </div>
      
    </Card>
  );
};

export default PrivacyCard;