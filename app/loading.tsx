import { Progress } from "@nextui-org/progress";

export default function App() {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <Progress
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
        size="sm"
      />
    </div>
  );
}
