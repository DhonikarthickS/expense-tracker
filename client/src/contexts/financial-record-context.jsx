import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

export const FinancialRecordsContext = createContext();

export const FinancialRecordsProvider = ({ children }) => {
  const { user, isLoaded } = useUser();
  const [records, setRecords] = useState([]);

  const apiUrl = import.meta.env.VITE_API_BASE_URL || "/api";

  useEffect(() => {
    if (!isLoaded || !user) return;

    fetch(`${apiUrl}/financial-records/getAllByUserID/${user.id}`)
      .then((res) => res.json())
      .then(setRecords)
      .catch(console.error);
  }, [user, isLoaded, apiUrl]);

  const addRecord = async (record) => {
    const res = await fetch(`${apiUrl}/financial-records`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    const data = await res.json();
    setRecords((prev) => [...prev, data]);
  };

  const updateRecord = async (id, body) => {
    const res = await fetch(`${apiUrl}/financial-records/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const updated = await res.json();
    setRecords((prev) => prev.map((r) => (r._id === id ? updated : r)));
  };

  const deleteRecord = async (id) => {
    await fetch(`${apiUrl}/financial-records/${id}`, {
      method: "DELETE",
    });
    setRecords((prev) => prev.filter((r) => r._id !== id));
  };

  return (
    <FinancialRecordsContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordsContext.Provider>
  );
};

export const useFinancialRecords = () => {
  return useContext(FinancialRecordsContext);
};
