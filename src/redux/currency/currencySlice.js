import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

const initialState = {
  currenciesData: [],
  curCountryCode: '',
  isLoading: false,
  isError: false,
};

export const fetchAllCurrencies = createAsyncThunk(
  'currency/fetchCurrencies',
  async (thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}.json`);
      if (!res.ok) throw new Error('Error fetching currencies data');
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const fetchCurrencyData = createAsyncThunk(
  'currency/fetchCurrency',
  async (curCode, thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}/${curCode}.json`);
      if (!res.ok) throw new Error('Error fetching currency data');
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    clearCountryCode: (state) => {
      state.curCountryCode = '';
    },
    setCountryCode: (state, param) => {
      console.log(param);
      state.curCountryCode = param.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCurrencies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.currenciesData = action.payload;
    });
    builder.addCase(fetchAllCurrencies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCurrencies.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(fetchCurrencyData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.currenciesData = action.payload;
    });
    builder.addCase(fetchCurrencyData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrencyData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export const { clearCountryCode, setCountryCode } = currencySlice.actions;
export default currencySlice.reducer;
