import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should be able to render the component without activity indicator, if isLoading is false", () => {
    render(<Input />);

    //get gera um erro caso não encontre o elemento
    // const activityIndicator = screen.getByTestId("activity-indicator");
    // expect(activityIndicator).toBeNull();

    //query devolve nulo caso não encontre o elemento
    const activityIndicator = screen.queryByTestId("activity-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should be able to render the component with activity indicator, if isLoading is true", () => {
    render(<Input isLoading/>);

    //get gera um erro caso não encontre o elemento
    // const activityIndicator = screen.getByTestId("activity-indicator");
    // expect(activityIndicator).toBeNull();

    //query devolve nulo caso não encontre o elemento
    const activityIndicator = screen.getByTestId("activity-indicator");

    expect(activityIndicator).toBeTruthy();
  });
});
