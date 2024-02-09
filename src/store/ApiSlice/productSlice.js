import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helper/authHelper";


const initialState = {
    product: [],
    singleProduct: {},
    cart: {}
};

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async () => {
        try {
            const response = await axiosInstance.get(`products`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const getProductCategory = createAsyncThunk(
    "product/getProductCategory",
    async (category) => {
        try {
            const response = await axiosInstance.get(`products/category/${category}`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        SingleProduct: (state, action) => {
            console.log("actionactionaction", action);
            state.singleProduct = action.payload;
        },
        Cart: (state, action) => {
            state.cart = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action?.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getProductCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.product = action?.payload;
            })
            .addCase(getProductCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export const {SingleProduct, Cart} = productSlice.actions
export default productSlice.reducer;