import { DetailPage, FavoritesPage } from "@/pages";
import { PokemonPage } from "@/pages/Pokemon/PokemonPage";
import { ScrollToTop } from "@/shared/components";
import { MainLayout } from "@/shared/layouts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PokemonPage />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
