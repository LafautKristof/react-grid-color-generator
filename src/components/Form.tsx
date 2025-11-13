import randomColor from "randomcolor";
import type { ChangeEvent } from "react";

type FormProps = {
    columns: number | "";
    rows: number | "";
    colorCount: number | "";
    setColumnsInput: (v: number | "") => void;
    setRowsInput: (v: number | "") => void;
    setColorCountInput: (v: number | "") => void;
    setColumns: (v: number) => void;
    setRows: (v: number) => void;
    setColorCount: (v: number) => void;
    setGridColors: (gridColors: string[]) => void;
    setColorStats: (colorStats: Record<string, number>) => void;
};

export default function Form({
    columns,
    rows,
    colorCount,
    setColumnsInput,
    setRowsInput,
    setColorCountInput,
    setColumns,
    setRows,
    setColorCount,
    setGridColors,
    setColorStats,
}: FormProps) {
    // Generic handler
    const handleNumberInput =
        (setter: (v: number | "") => void) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            if (val === "") setter("");
            else setter(Number(val));
        };

    const handleGenerate = () => {
        if (!columns || !rows || !colorCount) return;

        // Save final values for the grid
        setColumns(Number(columns));
        setRows(Number(rows));
        setColorCount(Number(colorCount));

        const palette = randomColor({ count: Number(colorCount) });
        const colors: string[] = [];

        for (let i = 0; i < Number(columns) * Number(rows); i++) {
            colors.push(
                palette[Math.floor(Math.random() * Number(colorCount))]
            );
        }

        setGridColors(colors);

        const stats = colors.reduce((acc: Record<string, number>, color) => {
            acc[color] = (acc[color] || 0) + 1;
            return acc;
        }, {});

        setColorStats(stats);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleGenerate();
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
            }}
        >
            {/* Columns */}
            <input
                type="number"
                placeholder="Columns"
                value={columns}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Columns")}
                onChange={handleNumberInput(setColumnsInput)}
            />

            {/* Rows */}
            <input
                type="number"
                placeholder="Rows"
                value={rows}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Rows")}
                onChange={handleNumberInput(setRowsInput)}
            />

            {/* Color Count */}
            <input
                type="number"
                placeholder="Color count"
                value={colorCount}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Color count")}
                onChange={handleNumberInput(setColorCountInput)}
            />

            <button onClick={handleGenerate}>Generate</button>
        </form>
    );
}
