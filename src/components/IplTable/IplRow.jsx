import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { useTable } from "../../Hooks/useTable";
import { tick, cancel } from "../../constants/icons";

const IplRow = ({ team, idx }) => {
  const { totalMatch, win, loose, points, lastFive } = useTable(team.team);
  console.log(totalMatch, win, loose, points, lastFive);
  return (
    <TableRow>
      <TableCell>
        {idx + 1} {team.shortName}
      </TableCell>
      <TableCell>{totalMatch}</TableCell>
      <TableCell>{win}</TableCell>
      <TableCell>{loose}</TableCell>
      <TableCell>{points}</TableCell>
      <TableCell>
        {lastFive.map((item, i) => (
          <img src={item ? tick : cancel} alt="Tick" key={i} />
        ))}
      </TableCell>
    </TableRow>
  );
};

export default IplRow;
