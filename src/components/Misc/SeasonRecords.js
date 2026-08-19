import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../Players/Statsheet.css';

function SeasonRecords() {
    const [records, setRecords] = useState([]);

    // Load single-season records CSV
    useEffect(() => {
        fetch('/Minibats/season-records.csv')
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const csvRecordData = result.data.map((record) => ({
                            ...record,
                            stat: parseFloat(record.stat) || 0,
                        }));

                        setRecords(csvRecordData);
                    },

                    error: (error) => {
                        console.error(
                            'Error loading season records CSV data:',
                            error
                        );
                    },
                });
            })
            .catch((error) => {
                console.error(
                    'Error fetching season records CSV:',
                    error
                );
            });
    }, []);

    return (
        <div className="minibats-container">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <h1 className="minibats-title">
                Minibat Single Season Records
            </h1>

            <div className="table-responsive">

                <table className="minibats-table">

                    <thead>
                        <tr>
                            <th className="sticky-column">
                                Category
                            </th>

                            <th>
                                Player
                            </th>

                            <th>
                                Stat
                            </th>

                            <th>
                                Year
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((data, index) => (
                            <tr key={`${data.category}-${index}`}>

                                <td className="sticky-column">
                                    {data.category}
                                </td>

                                <td>
                                    {data.name}
                                </td>

                                <td>
                                    {data.category === 'Batting Average'
                                        ? data.stat.toFixed(3)
                                        : data.category === 'Slugging%'
                                        ? data.stat.toFixed(3)
                                        : data.category === 'ERA'
                                        ? data.stat.toFixed(2)
                                        : data.category === 'FIP'
                                        ? data.stat.toFixed(2)
                                        : data.stat}
                                </td>

                                <td>
                                    {data.year}
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default SeasonRecords;