import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo
          asperiores voluptatum alias animi totam consequatur, possimus a
          molestiae eaque aliquid minima dolores rerum corrupti eum officiis cum
          ex nostrum.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
