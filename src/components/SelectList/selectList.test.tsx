import { render, screen } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "São Paulo",
        latitude: -23.5489,
        longitude: -46.6388,
      },
      {
        id: "2",
        name: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
      },
    ];

    const { debug } = render(
      <SelectList data={data} onChange={() => {}} onPress={() => {}} />
    );

    const selectedCity = screen.getByText(/São paulo/i);
    expect(selectedCity).toBeDefined();
    expect(true).toBe(true);
  });
});
