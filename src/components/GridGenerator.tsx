"use client";
import { useState } from "react";
import Grid from "./Grid";
import Form from "./Form";
import Results from "./Results";
import { InfoPopup } from "./InfoPopUp";
import { CiCircleInfo } from "react-icons/ci";

export default function GridGenerator() {
    // Inputs (mogen tijdelijk leeg zijn)
    const [columnsInput, setColumnsInput] = useState<number | "">("");
    const [rowsInput, setRowsInput] = useState<number | "">("");
    const [colorCountInput, setColorCountInput] = useState<number | "">("");

    // Echte grid parameters (altijd numbers)
    const [columns, setColumns] = useState<number>(1);
    const [rows, setRows] = useState<number>(1);
    const [_colorCount, setColorCount] = useState<number>(1);

    // Grid data
    const [gridColors, setGridColors] = useState<string[]>([]);
    const [colorStats, setColorStats] = useState<Record<string, number>>({});

    const [showInfo, setShowInfo] = useState(true);

    return (
        <>
            {showInfo && <InfoPopup onClose={() => setShowInfo(false)} />}

            <div
                style={{
                    padding: "20px",
                    display: "grid",
                    gridTemplateColumns: "1fr minmax(250px, 300px)",
                    gap: "20px",
                    width: "100%",
                    height: "100vh",
                    boxSizing: "border-box",
                }}
            >
                {/* LEFT SIDE */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }}
                    >
                        <h2>Grid Generator</h2>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowInfo(true);
                            }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "28px",
                                cursor: "pointer",
                                textDecoration: "none",
                            }}
                        >
                            <CiCircleInfo color="#242424" size={20} />
                        </a>
                    </div>

                    {/* GRID */}
                    <div style={{ flex: 1, minHeight: 0 }}>
                        <Grid
                            columns={columns}
                            rows={rows}
                            gridColors={gridColors}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <h2>Form</h2>

                    <Form
                        // Inputs
                        columns={columnsInput}
                        rows={rowsInput}
                        colorCount={colorCountInput}
                        // Setters
                        setColumnsInput={setColumnsInput}
                        setRowsInput={setRowsInput}
                        setColorCountInput={setColorCountInput}
                        // Actual grid setters
                        setColumns={setColumns}
                        setRows={setRows}
                        setColorCount={setColorCount}
                        // Data
                        setGridColors={setGridColors}
                        setColorStats={setColorStats}
                    />

                    <div>
                        <h2>Results</h2>
                        <Results colorStats={colorStats} />
                    </div>
                </div>
            </div>
        </>
    );
}
