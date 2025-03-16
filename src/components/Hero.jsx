import React from "react";
import MemeGallery from "./MemeGallery";
import { Image } from "react-bootstrap";


const Hero = () => {
    const pic = 'https://res.cloudinary.com/dqcztgs4v/image/upload/v1742146412/photo_6248909315687695253_y_yg1tjo.jpg'
    return (
        <section style={{ padding: "5rem", textAlign: "center", background: "#000", color: "#0f0" }}>
            <h1>Welcome to PXN Coin!</h1>
            <p>The meme coin for gamers, powered by Nvidia.</p>
            <Image src={pic}
            />
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
