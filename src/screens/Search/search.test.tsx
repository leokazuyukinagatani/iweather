import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen: Search", () => {
  it("should be render city option", async () => {
    render(<Search />);
    jest.spyOn(api, "get").mockResolvedValueOnce({ data: mockCityAPIResponse });
    const searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText("São Paulo"));
    expect(option).toBeTruthy();
  });
});
