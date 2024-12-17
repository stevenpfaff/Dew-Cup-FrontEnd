import Papa from 'papaparse';
import { useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.csv') // Place your CSV in the public folder
            .then(response => response.text())
            .then(csvData => {
                const parsedData = Papa.parse(csvData, { header: true });
                setData(parsedData.data); // Parsed data in JSON format
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.Name}</td>
                        <td>{row.Points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Test;
