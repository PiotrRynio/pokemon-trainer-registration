import { CurrentTimeType } from "@/app/_utils/getCurrentTimeFromApi/CurrentTimeType";
import { Subtitle } from "@/components/Typographies/Subtitle/Subtitle";

type VisitDateProps = {
  time: CurrentTimeType;
};

export const VisitDate = ({ time }: VisitDateProps) => {
  const dateTime = new Date(time.dateTime);
  const showedDate = new Date(dateTime).toLocaleDateString("ru-RU");

  const showedDayOfWeek = time.dayOfWeek;

  const showedTime = `${showedDayOfWeek}, ${showedDate}`;

  return <Subtitle>{showedTime}</Subtitle>;
};
