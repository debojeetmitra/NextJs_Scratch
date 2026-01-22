import { Button } from "@/components/ui/button";
import connectDB from "@/lib/db";

export default async function Home() {
   await connectDB()
  
  
  await connectDB()
  return (
   <Button>Welcome TODO app</Button>
  );
}
