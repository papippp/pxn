import React from "react";


const Header = () => {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60px",
                padding: "1rem",
                background: "#111",
                color: "#fff",
            }}
        >
            <h1 className="text-center">PXN Coin</h1>
        </header>
    );
};

export default Header;
