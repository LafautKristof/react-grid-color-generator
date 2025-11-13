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
                <h3>Welkom!</h3>
                <p>
                    Vul het aantal kolommen, rijen en kleuren in om een grid te
                    genereren.
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
                    Oké, duidelijk!
                </button>
            </div>
        </div>
    );
}
