import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Papa from 'papaparse';
import { SortNumericUp } from 'react-bootstrap-icons';
import '../Players/Statsheet.css';

function Venues() {
    const [venues, setVenues] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: 'rpi',
        direction: 'desc',
    });

    // Load venue CSV
    useEffect(() => {
        fetch('/Minibats/venues.csv')
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const csvVenueData = result.data
                            .filter((venue) => venue.venue !== 'Totals')
                            .map((venue) => ({
                                ...venue,
                                runs: parseInt(venue.runs, 10) || 0,
                                innings: parseInt(venue.innings, 10) || 0,
                                rpi: parseFloat(venue.rpi) || 0,
                                doubles: parseInt(venue.doubles, 10) || 0,
                                triples: parseInt(venue.triples, 10) || 0,
                                homeruns: parseInt(venue.homeruns, 10) || 0,
                                hrpi: parseFloat(venue.hrpi) || 0,
                                average: parseFloat(venue.average) || 0,
                                slug: parseFloat(venue.slug) || 0,
                            }));

                        // Sort by RPI initially
                        const sortedData = csvVenueData.sort(
                            (a, b) => b.rpi - a.rpi
                        );

                        setVenues(sortedData);

                        setSortConfig({
                            key: 'rpi',
                            direction: 'desc',
                        });
                    },

                    error: (error) => {
                        console.error('Error loading venue CSV data:', error);
                    },
                });
            })
            .catch((error) => {
                console.error('Error fetching venue CSV:', error);
            });
    }, []);

    const sortData = (key) => {
        let direction = 'asc';

        if (
            sortConfig.key === key &&
            sortConfig.direction === 'asc'
        ) {
            direction = 'desc';
        }

        const sortedVenues = [...venues].sort((a, b) => {
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }

            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }

            return 0;
        });

        setVenues(sortedVenues);

        setSortConfig({
            key,
            direction,
        });
    };

    return (
        <div className="minibats-container">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <h1 className="minibats-title">
                Minibat Venue Data
            </h1>

            <div className="table-responsive">

                <table className="minibats-table">

                    <thead>
                        <tr>

                            <th className="sticky-column">
                                Venue
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('venue')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                R
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('runs')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                INN
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('innings')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                R/INN
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('rpi')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                2B
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('doubles')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                3B
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('triples')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                HR
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('homeruns')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                HR/INN
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('hrpi')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                AVG
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('average')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                            <th>
                                SLG
                                <Button
                                    className="sort-button"
                                    onClick={() => sortData('slug')}
                                >
                                    <SortNumericUp />
                                </Button>
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {venues.map((data) => (
                            <tr key={data.venue}>

                                <td className="sticky-column">
                                    {data.venue}
                                </td>

                                <td>{data.runs}</td>
                                <td>{data.innings}</td>

                                <td>
                                    {data.rpi.toFixed(2)}
                                </td>

                                <td>{data.doubles}</td>
                                <td>{data.triples}</td>
                                <td>{data.homeruns}</td>

                                <td>
                                    {data.hrpi.toFixed(2)}
                                </td>

                                <td>
                                    {data.average.toFixed(3)}
                                </td>

                                <td>
                                    {data.slug.toFixed(3)}
                                </td>

                            </tr>
                        ))}

                        {/* TOTALS ROW */}
                        <tr className="totals-row">

                            <td className="sticky-column">
                                <strong>Totals</strong>
                            </td>

                            <td>
                                <strong>1315</strong>
                            </td>

                            <td>
                                <strong>374</strong>
                            </td>

                            <td>
                                <strong>3.52</strong>
                            </td>

                            <td>
                                <strong>401</strong>
                            </td>

                            <td>
                                <strong>66</strong>
                            </td>

                            <td>
                                <strong>418</strong>
                            </td>

                            <td>
                                <strong>1.12</strong>
                            </td>

                            <td>
                                <strong>0.500</strong>
                            </td>

                            <td>
                                <strong>0.982</strong>
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Venues;