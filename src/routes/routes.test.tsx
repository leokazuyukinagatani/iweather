import { render, waitFor, screen } from "@testing-library/react-native";
import { Routes } from "./";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Routes", () => {
  it("should be render Search screen when not city selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });

  it('should be render Dashboard screen when city selected',async()=>{
    const city = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)
    render(<Routes />)

  })
});
