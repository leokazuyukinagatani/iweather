import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "Toledo",
  latitude: 123,
  longitude: 456,
};
describe("Storage: CityStorage", () => {
  it("should be return null when dont have a city storaged", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return a city when have a city storaged", async () => {
    
    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });


  it('should be remove city storage', async () => {
    await saveStorageCity(newCity);

    await removeStorageCity()

    const response = await getStorageCity();
    expect(response).toBeNull();

  })
});
