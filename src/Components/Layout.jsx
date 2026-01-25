import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Work from "./Work/Work";
import About from "./About/About";
import Contact from "./Contact/Contact";





export default function Layout()
{
    return(
        <>
        <Header />
        <main>
            <section id="Home">
                <Home />
            </section>
            <section id="Work">
                <Work  />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Contact">
                <Contact />
            </section>
            
        </main>
        <Footer />
        </>
    )
}