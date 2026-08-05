import { useState } from "react";
import Card from "../ui/Card.jsx";

const NotesCard = () => {
  const [notes, setNotes] = useState("");

  return (
    <Card className="flex flex-col gap-6">

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text">
          Today's Journal
        </h2>

        <p className="text-sm text-gray-500">
          How are you feeling today? Write anything you'd like to remember.
        </p>
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Today I felt..."
        rows={6}
        className="
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-background/40
          px-5
          py-4
          text-text
          placeholder:text-gray-400
          resize-none
          transition-all
          duration-300
          focus:outline-none
          focus:border-primary
          focus:ring-4
          focus:ring-primary/10
        "
      />

      <p className="text-xs text-gray-400 italic">
        🌸 Your journal is private and only visible to you.
      </p>

    </Card>
  );
};

export default NotesCard;