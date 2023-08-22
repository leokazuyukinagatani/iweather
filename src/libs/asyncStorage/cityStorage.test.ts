import {
  getStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

describe("Storage: CityStorage", () => {
  it("should be return null when dont have a city storaged", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return a city when have a city storaged", async () => {
    const newCity: CityProps = {
      id: "1",
      name: "Toledo",
      latitude: 123,
      longitude: 456,
    };
    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });
});
