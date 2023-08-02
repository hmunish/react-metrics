import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Navbar from "../components/navbar";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("testing navbar component", () => {
  it("Navbar should render in the document", () => {
    const mockCurrencies = {
      currenciesData: [],
      curCountryCode: "",
      isLoading: false,
      isError: false,
    };

    const store = mockStore({
      currency: mockCurrencies,
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const bar = getByTestId("nav-test");
    expect(bar).toBeInTheDocument;
  });

  it("should render correct snapshot", () => {
    const mockCurrencies = {
      currenciesData: [],
      curCountryCode: "",
      isLoading: false,
      isError: false,
    };

    const store = mockStore({
      currency: mockCurrencies,
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
