import { useEffect, useState } from "react";
import { baseURLProd } from "api/api";
const GetAllResellerSummaryHook = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFiltered, setIsFiltered] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${baseURLProd}GetAllResellerSummary`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await res.json();
            setData(result?.resellerSummaryList || []);
            setIsFiltered(false);
        } catch (err) {
            console.error("Error fetching reseller summary:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchByUserId = async (userId) => {
        setLoading(true);
        try {
            const res = await fetch(`${baseURLProd}Get_ResellerTransactionList`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "text/plain"
                },
                body: JSON.stringify({ userId })
            });
            const result = await res.json();
            setData(result?.transactionList || []);
            setIsFiltered(true);
        } catch (err) {
            console.error("Error searching user:", err);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchByDateRange = async ({ userId, fromDate, toDate }) => {
        setLoading(true);
        try {
            const res = await fetch(`${baseURLProd}Get_ResellerTransactionList_ByDate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "text/plain"
                },
                body: JSON.stringify({ userId, fromDate, toDate })
            });
            const result = await res.json();
            console.log("this is date",result)
            setData(result?.transactionList || []);
            setIsFiltered(true);
        } catch (err) {
            console.error("Error filtering by date:", err);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        isFiltered,
        refetch: fetchData,
        searchByUserId: fetchByUserId,
        searchByDateRange: fetchByDateRange
    };
};

export default GetAllResellerSummaryHook;
