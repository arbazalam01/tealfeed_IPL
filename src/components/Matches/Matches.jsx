import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import API from "../../Data/ApiData";
import Match from "./Match";

const Matches = () => {
  const [iplData, setIplData] = useState(null);
  useEffect(() => {
    async function apiHit() {
      const { data } = await API;
      setIplData(data);
    }
    apiHit();
  });
  if (!iplData) return <h1>Loading...</h1>;
  return (
    <Container>
      <Grid container>
        {iplData.map((team, idx) => (
          <Grid key={team.id} item md={6}>
            <Match team={team} idx={idx + 1} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Matches;
