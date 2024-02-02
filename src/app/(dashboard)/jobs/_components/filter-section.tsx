'use client';
// Common components
import Maybe from '@/components/maybe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// Utilities
import { cn } from '@/lib/utils';
// Data
import { data } from './filter-data';

interface Props {
  className?: string;
  visibleHeader?: boolean;
}
export default function FilterSection({
  className,
  visibleHeader = true,
}: Props) {
  return (
    <Card className={cn('', className)}>
      <Maybe condition={visibleHeader}>
        <CardHeader>
          <CardTitle className="text-xl font-normal">فیلترها</CardTitle>
        </CardHeader>
        <Separator />
      </Maybe>
      <CardContent className="p-0">
        <Accordion type="multiple">
          {data.map((item) => (
            <AccordionItem
              key={item.key}
              value={item.key}
              className="px-6 py-2"
            >
              <AccordionTrigger className="text-md font-normal">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <Maybe condition={item.searchable}>
                  <div className="space-y-2 pt-2">
                    <Input
                      className="w-[99%] mx-auto"
                      placeholder="جستجو..."
                      type="search"
                    />
                    <ScrollArea className="h-72">
                      {item.options.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center gap-x-2 h-12"
                        >
                          <Checkbox id={option.id} />
                          <Label
                            htmlFor={option.id}
                            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option.title}
                          </Label>
                        </div>
                      ))}
                    </ScrollArea>
                  </div>
                </Maybe>
                <Maybe condition={!item.searchable}>
                  <RadioGroup>
                    {item.options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center gap-x-2 h-12"
                      >
                        <RadioGroupItem id={option.id} value={option.title} />
                        <Label
                          htmlFor={option.id}
                          className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.title}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </Maybe>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
