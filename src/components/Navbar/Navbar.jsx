import { Box, Typography, Tabs, Tab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ItemContext } from "../../context/MainContext";
import Select from "react-select";
import { SearchTeam } from "../../constants/shortnames.js";

const Navbar = () => {
  const { item, setItem, setMatchData, initialMatch } = useContext(ItemContext);
  const handleChange = (e, newVal) => setItem(newVal);

  const handleSelect = (props) => {
    if (!props || !props.length) {
      setMatchData(initialMatch);
      return;
    }
    const newMatch = props.map((val) => {
      return initialMatch.filter(
        (match) => match.team1 === val.value || match.team2 === val.value
      );
    });
    // console.log([...new Set(newMatch.flat())]);
    setMatchData([...new Set(newMatch.flat())]);
  };

  return (
    <Box className={styles.header}>
      <div className={styles.top_bar}>
        <div style={{ display: "flex" }}>
          <ArrowBackIcon />
          <Typography>IPL</Typography>
        </div>
        <div>
          {item === 0 && (
            <Select
              isMulti
              options={SearchTeam}
              onChange={handleSelect}
              placeholder="Enter Team Name"
            />
          )}
        </div>
        <div>
          <ClearIcon />
        </div>
      </div>
      <div>
        <Tabs
          value={item}
          onChange={handleChange}
          centered
          classes={{ indicator: styles.indicator }}
        >
          <Tab
            label="Matches"
            value={0}
            classes={{
              selected: styles.tab,
              textColorPrimary: styles.tab,
              root: styles.tab_width,
            }}
          />
          <Tab
            label="Table"
            value={1}
            classes={{
              selected: styles.tab,
              textColorPrimary: styles.tab,
              root: styles.tab_width,
            }}
          />
        </Tabs>
      </div>
    </Box>
  );
};

export default Navbar;
