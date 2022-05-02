import { Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import { ItemContext } from "../../context/MainContext";
import Match from "./Match";

const Matches = () => {
  const { matchData } = useContext(ItemContext);
  if (!matchData) return <h1>Loading...</h1>;
  return (
    <Container>
      <Grid container>
        {matchData.map((team, idx) => (
          <Grid key={team.id} item xs={12} md={6}>
            <Match team={team} idx={idx + 1} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Matches;
