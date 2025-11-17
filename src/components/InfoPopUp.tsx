export function InfoPopup({ onClose }: { onClose: () => void }) {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                <h3>Welcome!</h3>
                <p>
                    Enter the number of columns, rows, and colors to generate a
                    grid.
                </p>

                <button
                    onClick={onClose}
                    style={{
                        marginTop: "15px",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        backgroundColor: "#333",
                        color: "white",
                        border: "none",
                    }}
                >
                    Okay, got it!
                </button>
            </div>
        </div>
    );
}
