import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch wishlist from JSON Server
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const userId = localStorage.getItem("userId");

    const response = await axios.get(
      `http://localhost:3000/wishlist?userId=${userId}`
    );

    return response.data.map((item) => ({
      ...item,
      id: item.productId,
    }));
  }
);

// Add product to wishlist database
export const addWishlistToDB = createAsyncThunk(
  "wishlist/addWishlistToDB",
  async (product) => {
    const userId = localStorage.getItem("userId");

    const response = await axios.post(
      "http://localhost:3000/wishlist",
      {
        userId: userId,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description,
      }
    );

    return response.data;
  }
);

// Remove product from wishlist database
export const removeWishlistFromDB = createAsyncThunk(
  "wishlist/removeWishlistFromDB",
  async (productId) => {
    const userId = localStorage.getItem("userId");
    // Find the wishlist item belonging to this user and product
    const response = await axios.get(
      `http://localhost:3000/wishlist?userId=${userId}`
    );

   const wishlistItem = response.data.find(
      (item) =>
        String(item.productId) === String(productId)
    );

    console.log("Product ID:", productId);
    console.log("Wishlist item:", wishlistItem);


    // Delete using the wishlist item's database ID
    if (wishlistItem) {
      await axios.delete(
        `http://localhost:3000/wishlist/${wishlistItem.id}`
      );
    }

    return productId;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: [],
  },

  reducers: {
    togglewishlist: (state, action) => {
      const exists = state.items.find(
        (item) =>
          String(item.id) === String(action.payload.id)
      );

      if (exists) {
        state.items = state.items.filter(
          (item) =>
            String(item.id) !== String(action.payload.id)
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchWishlist.fulfilled,
      (state, action) => {
        state.items = action.payload;
      }
    );
  },
});

export const { togglewishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;