import React, { useEffect } from "react";
import { gapi } from "gapi-script";

interface FetchGoogleSheetsDataProps {
    sheetIndex: number;
    mapFunction: (value: any) => any;
    onDataFetched: (data: any[]) => void;
}

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SHEET_ID = import.meta.env.VITE_SHEET_ID;

const FetchGoogleSheetsData: React.FC<FetchGoogleSheetsDataProps> = ({
    sheetIndex,
    mapFunction,
    onDataFetched,
}) => {
    useEffect(() => {
        // if (products.length > 0) return; // Tránh gọi API nếu đã có dữ liệu

        const fetchGoogleSheetsData = async () => {
            try {
                console.log("google_key", API_KEY);
                console.log("google_sheet", SHEET_ID);
                if (!API_KEY || !SHEET_ID) {
                    console.error("Missing Google Sheets API credentials");
                    return;
                }

                const initClient = () => {
                    gapi.client.init({
                        apiKey: API_KEY,
                        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
                    }).then(() => {
                        const range = `Sheet${sheetIndex}!A1:H100`;
                        gapi.client.sheets.spreadsheets.values.get({
                            spreadsheetId: SHEET_ID,
                            range: range,
                        }).then((response: any) => {
                            const rawData = response.result.values || [];
                            const mappedData = rawData.slice(1).map(mapFunction);
                            onDataFetched(mappedData);
                        }, (error: any) => {
                            console.error("Error fetching data from Google Sheets:", error);
                        });
                    });
                };

                gapi.load("client", initClient);
            } catch (error) {
                console.error("Error initializing Google API client:", error);
            }
        };

        fetchGoogleSheetsData();
    }, [sheetIndex, mapFunction, onDataFetched]); // Thêm kiểm tra products


    return null;
};

export default FetchGoogleSheetsData;