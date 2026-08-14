"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  initialStoreState,
  storeReducer,
  type StoreState,
} from "@/state/store-reducer";

const STORAGE_KEY = "vpp-store-state";

type StoreContextValue = StoreState & {
  isHydrated: boolean;
  cartCount: number;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  addToCart: (productId: string, size: string) => void;
  setQuantity: (productId: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const subscribeToHydration = () => () => undefined;

function parseStoredState(value: string | null): StoreState {
  if (!value) return initialStoreState;

  try {
    const parsed = JSON.parse(value) as Partial<StoreState>;
    return {
      cart: Array.isArray(parsed.cart) ? parsed.cart : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
    };
  } catch {
    return initialStoreState;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    storeReducer,
    initialStoreState,
    (initialState) =>
      typeof window === "undefined"
        ? initialState
        : parseStoredState(window.localStorage.getItem(STORAGE_KEY)),
  );
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<StoreContextValue>(
    () => ({
      ...state,
      cart: isHydrated ? state.cart : [],
      favorites: isHydrated ? state.favorites : [],
      isHydrated,
      cartCount: isHydrated
        ? state.cart.reduce((sum, item) => sum + item.quantity, 0)
        : 0,
      toggleFavorite: (productId) =>
        dispatch({ type: "toggle-favorite", productId }),
      isFavorite: (productId) =>
        isHydrated && state.favorites.includes(productId),
      addToCart: (productId, size) =>
        dispatch({ type: "add-to-cart", item: { productId, size } }),
      setQuantity: (productId, size, quantity) =>
        dispatch({ type: "set-quantity", productId, size, quantity }),
      removeFromCart: (productId, size) =>
        dispatch({ type: "remove-from-cart", productId, size }),
      clearCart: () => dispatch({ type: "clear-cart" }),
    }),
    [isHydrated, state],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore precisa estar dentro de StoreProvider");
  }
  return context;
}
