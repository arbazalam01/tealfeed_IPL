import { useEffect, useState } from "react";
import API from "../Data/ApiData";

export const useTable = (teamName) => {
  const [teams, setTeams] = useState(null);
  const matchData = teams?.filter((item) => {
    if (!item.winner) return false;
    if (item.team1 === teamName || item.team2 === teamName) return true;
    return false;
  });
  const totalMatch = matchData?.length;
  const win = matchData?.filter((item) => item.winner === teamName).length;
  const loose = totalMatch - win;
  const points = win * 2;
  const lastFive = matchData?.slice(-5).map((item) => item.winner === teamName);

  useEffect(() => {
    async function apiHit() {
      const { data } = await API;
      console.log("Data", data);
      setTeams(data);
    }
    apiHit();
  }, []);
  return {
    totalMatch,
    win,
    loose,
    points,
    lastFive,
  };
};
