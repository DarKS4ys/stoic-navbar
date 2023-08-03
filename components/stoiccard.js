import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const StoicCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>€29.99 /Month</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl py-2">Grow your account</p>
        <p>Monetize your audience</p>
        <p>High-quality lifestyle clips</p>
        <p>AI high-quality video editor</p>
        <p>Viral Sounds</p>
        <p>Winning Hooks</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default StoicCard;
