import { describe, expect, it } from "vitest";
import { initialStoreState, storeReducer } from "@/state/store-reducer";

describe("storeReducer", () => {
  it("adiciona e incrementa o mesmo produto e tamanho", () => {
    const first = storeReducer(initialStoreState, {
      type: "add-to-cart",
      item: { productId: "vpp-001", size: "M" },
    });
    const second = storeReducer(first, {
      type: "add-to-cart",
      item: { productId: "vpp-001", size: "M" },
    });

    expect(second.cart).toEqual([
      { productId: "vpp-001", size: "M", quantity: 2 },
    ]);
  });

  it("mantém tamanhos diferentes como itens separados", () => {
    const withMedium = storeReducer(initialStoreState, {
      type: "add-to-cart",
      item: { productId: "vpp-001", size: "M" },
    });
    const withTwoSizes = storeReducer(withMedium, {
      type: "add-to-cart",
      item: { productId: "vpp-001", size: "G" },
    });

    expect(withTwoSizes.cart).toHaveLength(2);
  });

  it("remove um favorito ao alternar pela segunda vez", () => {
    const favorite = storeReducer(initialStoreState, {
      type: "toggle-favorite",
      productId: "vpp-001",
    });
    const removed = storeReducer(favorite, {
      type: "toggle-favorite",
      productId: "vpp-001",
    });

    expect(removed.favorites).toEqual([]);
  });

  it("remove o item quando a quantidade chega a zero", () => {
    const populated = {
      cart: [{ productId: "vpp-001", size: "M", quantity: 1 }],
      favorites: [],
    };
    const result = storeReducer(populated, {
      type: "set-quantity",
      productId: "vpp-001",
      size: "M",
      quantity: 0,
    });

    expect(result.cart).toEqual([]);
  });
});
