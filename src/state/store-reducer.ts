import type { CartItem } from "@/types/product";

export type StoreState = {
  cart: CartItem[];
  favorites: string[];
};

export type StoreAction =
  | { type: "hydrate"; payload: StoreState }
  | { type: "toggle-favorite"; productId: string }
  | { type: "add-to-cart"; item: Omit<CartItem, "quantity"> }
  | { type: "set-quantity"; productId: string; size: string; quantity: number }
  | { type: "remove-from-cart"; productId: string; size: string }
  | { type: "clear-cart" };

export const initialStoreState: StoreState = {
  cart: [],
  favorites: [],
};

export function storeReducer(
  state: StoreState,
  action: StoreAction,
): StoreState {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "toggle-favorite": {
      const exists = state.favorites.includes(action.productId);
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter((id) => id !== action.productId)
          : [...state.favorites, action.productId],
      };
    }
    case "add-to-cart": {
      const existing = state.cart.find(
        (item) =>
          item.productId === action.item.productId &&
          item.size === action.item.size,
      );

      if (!existing) {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productId === action.item.productId &&
          item.size === action.item.size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case "set-quantity":
      if (action.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter(
            (item) =>
              item.productId !== action.productId || item.size !== action.size,
          ),
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productId === action.productId && item.size === action.size
            ? { ...item, quantity: Math.min(action.quantity, 10) }
            : item,
        ),
      };
    case "remove-from-cart":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            item.productId !== action.productId || item.size !== action.size,
        ),
      };
    case "clear-cart":
      return { ...state, cart: [] };
    default:
      return state;
  }
}
