export default function Grid({
    columns,
    rows,
    gridColors,
}: {
    columns: number;
    rows: number;
    gridColors: string[];
}) {
    return (
        <div
            style={{
                display: "grid",
                width: "100%",
                height: "100%",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gap: "2px",
            }}
        >
            {gridColors.map((color, idx) => (
                <div
                    key={idx}
                    style={{
                        backgroundColor: color,
                        width: "100%",
                        height: "100%",
                    }}
                />
            ))}
        </div>
    );
}
