import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { SumCard } from "../components/SumCard";

export const Dashboard = () => {
  const totalNumber = 347;

  return (
    <>
      <Sidebar />
      <main className="ml-sidebar">
        <Header />
        <div className="flex justify-between p-12">
          <SumCard title="Users" total={totalNumber} />
          <SumCard title="Posts" total={totalNumber} />
          <SumCard title="Comments" total={totalNumber} />
        </div>
      </main>
    </>
  );
};
