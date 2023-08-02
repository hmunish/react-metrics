import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CurrencyDetails from '../components/currencies/currencyList';

const mockStore = configureStore([]);

describe('test currency details component', () => {
  it('should render correct snapshot', () => {
    const mockCurrencies = {
      currenciesData: [],
      curCountryCode: '',
      isLoading: false,
      isError: false,
    };

    const store = mockStore({
      currency: mockCurrencies,
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <CurrencyDetails />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
