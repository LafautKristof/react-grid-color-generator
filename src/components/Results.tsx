export default function Results({
    colorStats,
}: {
    colorStats: Record<string, number>;
}) {
    return (
        <div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: "10px",
                    marginTop: "10px",
                }}
            >
                {Object.keys(colorStats).map((color) => (
                    <div
                        key={color}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "5px",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                        }}
                    >
                        <div
                            style={{
                                width: "30px",
                                height: "20px",
                                backgroundColor: color,
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            }}
                        />
                        <p style={{ margin: 0 }}>{colorStats[color]}×</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
