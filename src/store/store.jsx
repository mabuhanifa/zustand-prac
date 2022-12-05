import create from "zustand/react";

const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  selectedPokemon: null,
  setPokeMon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
}));
