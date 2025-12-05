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
import { MapPin, Clock, Briefcase } from "lucide-react"; 
import { useTranslation } from "react-i18next";

import resources from "@/data/careerResources.json";

export const CareerResources = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {t("jobs.resources.title")}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {resources.map((career) => (
          <Card key={career.id} className="flex flex-col">
            <CardHeader className="flex items-center gap-4 py-6">
              <img
                src={career.image}
                className="w-12 h-12 rounded-md object-cover flex-shrink-0"
              />
              <div>
                <CardTitle>{career.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow">
              <p className="text-sm text-muted-foreground flex-grow">
                {career.description}
              </p>
            </CardContent>

            <CardFooter className="pb-6 flex justify-end">
              <Button variant="outline">{career.buttonLabel}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
