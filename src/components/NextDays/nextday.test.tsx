import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render a day.", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30ºc",
            max: "31°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "24ºc",
            max: "27°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "27ºc",
            max: "30°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "25ºc",
            max: "29°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "22/07",
            min: "20ºc",
            max: "27°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
