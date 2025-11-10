import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { ScrollToTop } from "@/components/ScrollToTop";

const MainLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header onHeightChange={setHeaderHeight} />
      {/* Main Content (fills remaining space) */}
      <main className="flex-1" style={{ paddingTop: `${headerHeight}px` }}>
        <Container>
          <Outlet />
        </Container>
      </main>
      {/* Footer always at bottom */}
      <Footer />
      <ScrollToTop /> {/* Global scroll to top button */}
    </div>
  );
};

export default MainLayout;
