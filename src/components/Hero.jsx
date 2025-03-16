import React from "react";
import MemeGallery from "./MemeGallery";

const Hero = () => {
    return (
        <section style={{ padding: "5rem", textAlign: "center", background: "#000", color: "#0f0" }}>
            <h1>Welcome to PXN Coin!</h1>
            <p>The meme coin for gamers, powered by Nvidia.</p>
            <div
                style={{
                    padding: "1rem 2rem",
                    background: "#0f0",
                    color: "#000",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                }}
            >
                <MemeGallery />
            </div>
        </section>
    );
};

export default Hero;
