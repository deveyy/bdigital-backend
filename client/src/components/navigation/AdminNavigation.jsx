import React from "react";
import { Route, Routes } from "react-router-dom";
import Actors from "../admin/Actors";
import Dashboard from "../admin/Dashboard";
import Movies from "../admin/Movies";
import Navbar from "../admin/Navbar";
import NotFound from "../NotFound";

export default function AdminNavigation() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-2 max-w-screen-lg">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
