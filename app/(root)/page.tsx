import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-center">Admin dashboard</h1>
      <Button size={"default"} variant={"destructive"} color="text-blue-500">
        Click me
      </Button>
    </div>
  );
}
