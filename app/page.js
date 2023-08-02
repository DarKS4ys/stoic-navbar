import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="bg-gray-950	pb-20 w-full h-screen flex flex-col justify-center items-center">
      <div className="mt-40">
        <h1 className="text-white text-center text-lg">
          Unleash your viral potential (hamudi is a fucking geek)
        </h1>
      </div>

      <div className="mt-10 w-2/5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is this a scam?</AccordionTrigger>
            <AccordionContent>Yes. This is a pyramid scheme.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much is this?</AccordionTrigger>
            <AccordionContent>This program costs 29.99€.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are you racist?</AccordionTrigger>
            <AccordionContent>Yes.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is this a scam?</AccordionTrigger>
            <AccordionContent>Yes. This is a pyramid scheme.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How much is this?</AccordionTrigger>
            <AccordionContent>This program costs 29.99€.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Are you racist?</AccordionTrigger>
            <AccordionContent>Yes.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default LandingPage;
