import { Trash2 } from "lucide-react";
import Card from "../ui/Card.jsx";

const AccountCard = () => {
  return (
    <Card className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-text">Account</h2>

      <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 cursor-pointer hover:shadow-md transition-shadow duration-200">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-50">
          <Trash2 className="w-5 h-5 text-rose-500" />
        </div>
        <p className="font-bold text-text">🗑 Delete My Account</p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Permanently delete your FemCare account and all associated data.
          This action cannot be undone.
        </p>
      </div>
    </Card>
  );
};

export default AccountCard;