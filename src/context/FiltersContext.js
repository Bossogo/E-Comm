'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';

const FiltersContext = createContext(null);

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: null,
    hotDeal: null,
    hotOnly: false,
    brand: null,
    color: null,
    priceRange: [0, 1000],
    search: '',
    sortBy: 'default',
  });

  const value = useMemo(
    () => ({
      filters,
      setFilters,
    }),
    [filters]
  );

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error('useFilters must be used within FiltersProvider');
  return ctx;
};
