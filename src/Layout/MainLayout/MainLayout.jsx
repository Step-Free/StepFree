import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@/components/ui/container";

const MainLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { pathname } = useLocation(); 

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
    
      <Header onHeightChange={setHeaderHeight} />

    
      <main className="flex-1" style={{ paddingTop: `${0}px` }}>
        <Container>
          <Outlet />
        </Container>
      </main>

    
      <Footer />
    </div>
  );
};

export default MainLayout;
