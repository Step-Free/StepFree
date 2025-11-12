import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react"; // optional icons

import opportunities from "@/data/featuredOpportunities.json";

export const FeaturedOpportunities = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Featured Opportunities
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {opportunities.map((job) => (
          <Card key={job.id} className="flex flex-col">
            <CardHeader className="flex items-center gap-4 py-6">
              <img
                src={job.image}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-md object-cover flex-shrink-0"
              />
              <div>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-col gap-4 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.employmentType}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground flex-grow">
                {job.description}
              </p>
            </CardContent>

            <CardFooter className="pb-6 flex justify-end">
              <Button variant="outline">{job.buttonLabel}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
