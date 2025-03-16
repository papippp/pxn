import { useState } from "react";

const MemeGallery = () => {
    // Step 1: Set up state to hold the text that will be copied
    const [textToCopy] = useState("EdUf9iTRTUAGpXbvurjKcir2SbYcpfNdtTcD9zxPpump");
    const [copySuccess, setCopySuccess] = useState("");

    // Step 2: Create a function to handle the copy action
    const handleCopyClick = () => {
        // Try to copy the text to the clipboard
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setCopySuccess("Text copied!");
                setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
            })
            .catch(() => setCopySuccess("Failed to copy"));
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            {/* Step 3: Display the text */}
            <p>{textToCopy}</p>

            {/* Step 4: Copy Button */}
            <button
                onClick={handleCopyClick}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Copy
            </button>

            {/* Show success message after copying */}
            {copySuccess && (
                <p style={{ color: "green", marginTop: "10px" }}>
                    {copySuccess}
                </p>
            )}
        </div>
    );
};

export default MemeGallery;