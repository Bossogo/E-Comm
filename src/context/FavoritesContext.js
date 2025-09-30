"use client";
import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState([]); // array of product objects (minimal fields)
	const [hydrated, setHydrated] = useState(false);

	// Hydrate from localStorage on mount
	useEffect(() => {
		try {
			const raw = localStorage.getItem('favorites');
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) setFavorites(parsed);
			}
		} catch (e) {
			console.warn('Failed to parse favorites from storage', e);
		} finally {
			setHydrated(true);
		}
	}, []);

	// Persist when favorites change post hydration
	useEffect(() => {
		if (hydrated) {
			try {
				localStorage.setItem('favorites', JSON.stringify(favorites));
			} catch (e) {
				console.warn('Failed to write favorites to storage', e);
			}
		}
	}, [favorites, hydrated]);

	const isFavorite = useCallback(
		(id) => favorites.some((f) => String(f.id) === String(id)),
		[favorites]
	);

	const addFavorite = useCallback((product) => {
		setFavorites((prev) => {
			if (prev.some((p) => String(p.id) === String(product.id))) return prev; // skip duplicates
			// Store only required fields to keep storage light
			const { id, title, image, price, oldPrice, discount, rating, isHot } = product;
			return [
				...prev,
				{ id, title, image, price, oldPrice, discount, rating, isHot },
			];
		});
	}, []);

	const removeFavorite = useCallback((id) => {
		setFavorites((prev) => prev.filter((p) => String(p.id) !== String(id)));
	}, []);

	const toggleFavorite = useCallback(
		(product) => {
			setFavorites((prev) => {
				if (prev.some((p) => String(p.id) === String(product.id))) {
					return prev.filter((p) => String(p.id) !== String(product.id));
				}
				const { id, title, image, price, oldPrice, discount, rating, isHot } = product;
				return [
					...prev,
					{ id, title, image, price, oldPrice, discount, rating, isHot },
				];
			});
		},
		[]
	);

	const clearFavorites = useCallback(() => setFavorites([]), []);

	const value = useMemo(
		() => ({
			favorites,
			hydrated,
			addFavorite,
			removeFavorite,
			toggleFavorite,
			clearFavorites,
			isFavorite,
			count: favorites.length,
		}),
		[favorites, hydrated, addFavorite, removeFavorite, toggleFavorite, clearFavorites, isFavorite]
	);

	return (
		<FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
	);
}

export function useFavorites() {
	const ctx = useContext(FavoritesContext);
	if (!ctx) throw new Error('useFavorites must be used inside FavoritesProvider');
	return ctx;
}

