import React from "react";
import { Route, Routes } from "react-router-dom";
import Actors from "../admin/Actors";
import Dashboard from "../admin/Dashboard";
import Movies from "../admin/Movies";
import NotFound from "../NotFound";

export default function AdminNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
