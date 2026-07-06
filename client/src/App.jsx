import Card from "./components/ui/Card";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card>
        <h2 className="text-2xl font-semibold">Welcome to FemCare 🌸</h2>
        <p className="mt-2 text-gray-600">
          Your personalized women's health companion.
        </p>
      </Card>
    </div>
  );
}

export default App;