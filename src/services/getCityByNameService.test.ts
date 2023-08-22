import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Service: getCityByNameService", () => {
  it("should return a city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      mockCityAPIResponse,
    });

    const response = await getCityByNameService("Toledo");

    expect(response).toEqual(mockCityAPIResponse);
  });
});
