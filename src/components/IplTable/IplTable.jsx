import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { IPLTEAMS } from "../../constants/shortnames.js";
import IplRow from "./IplRow.jsx";

const IplTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Team</TableCell>
          <TableCell>M</TableCell>
          <TableCell>W</TableCell>
          <TableCell>L</TableCell>
          <TableCell>Pts</TableCell>
          <TableCell>Last 5</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {IPLTEAMS.map((team, idx) => (
          <IplRow team={team} idx={idx} key={idx} />
        ))}
      </TableBody>
    </Table>
  );
};

export default IplTable;
