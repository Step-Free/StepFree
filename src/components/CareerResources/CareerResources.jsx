import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const CareerResources = () => {
  const { t } = useTranslation();

  // Ensure resources is always an array
  const resources = Array.isArray(
    t("jobs.resources.cards", { returnObjects: true })
  )
    ? t("jobs.resources.cards", { returnObjects: true })
    : [];

  const handleViewDetails = (link) => {
    if (link) {
      window.open(link, "_blank"); // open in a new tab
    }
  };

  if (resources.length === 0) {
    return (
      <section className="py-12 text-center text-muted-foreground">
        <h2 className="text-2xl font-bold mb-8">{t("jobs.resources.title")}</h2>
        <p>{t("jobs.resources.description")}</p>
        <p className="mt-4">لا توجد موارد حالياً.</p>
      </section>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {t("jobs.resources.title")}
      </h2>

      <p className="text-center text-muted-foreground mb-10">
        {t("jobs.resources.description")}
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((career) => (
          <Card key={career.id} className="flex flex-col">
            <CardHeader className="flex items-center gap-4 py-6">
              <img
                src={career.image || "/src/assets/images/default.png"}
                alt={career.title}
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
              <Button
                variant="outline"
                onClick={() => handleViewDetails(career.link)}
              >
                {career.buttonLabel}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
