import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Match.module.css";
import { ShortNames, IPLTEAMS } from "../../constants/shortnames";

const Match = ({ team, idx }) => {
  const teamData1 = IPLTEAMS.find((item) => item.team === team.team1);
  const teamData2 = IPLTEAMS.find((item) => item.team === team.team2);

  return (
    <Box sx={{ border: "1px solid grey", p: 2 }}>
      <div className={styles.box}>
        <Typography variant="body1" component="p">
          T20 {idx} of 70
        </Typography>
        <Typography variant="body1" component="p">
          {team.date}
        </Typography>
      </div>
      <div className={styles.team}>
        <img src={teamData1.icon} alt="Ipl" width={24} height={24} />
        <Typography variant="body1" component="h1">
          {teamData1.team}
        </Typography>
      </div>
      <div className={styles.team}>
        <img src={teamData2.icon} alt="Ipl" width={24} height={24} />
        <Typography variant="body1" component="h1">
          {teamData2.team}
        </Typography>
      </div>
    </Box>
  );
};

export default Match;
