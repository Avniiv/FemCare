import { AlertTriangle } from "lucide-react";
import Card from "../ui/Card.jsx";

const warningSigns = [
  "Severe or persistent pain",
  "Heavy bleeding",
  "High fever",
  "Difficulty breathing",
];

const WarningSignsCard = () => {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent">
          <AlertTriangle className="w-5 h-5 text-text" />
        </div>
        <h2 className="text-xl font-bold text-text">
          Seek Immediate Medical Care
        </h2>
      </div>

      <p className="text-sm text-gray-500">
        If you're experiencing any of the following, please reach out to a
        medical professional or emergency services right away:
      </p>

      <ul className="flex flex-col gap-2">
        {warningSigns.map((sign) => (
          <li key={sign} className="flex items-center gap-3 text-text">
            <span className="w-1.5 h-1.5 rounded-full bg-text/50 flex-shrink-0" />
            {sign}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WarningSignsCard;