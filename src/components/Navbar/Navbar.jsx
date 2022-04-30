import { Box, Typography, Tabs, Tab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ItemContext } from "../../context/MainContext";

const Navbar = () => {
  const { item, setItem } = useContext(ItemContext);
  const handleChange = (e, newVal) => setItem(newVal);

  return (
    <Box className={styles.header}>
      <div className={styles.top_bar}>
        <div>
          <ArrowBackIcon />
          <Typography>IPL</Typography>
        </div>
        <div>Search</div>
        <div>
          <ClearIcon />
        </div>
      </div>
      <div>
        <Tabs
          value={item}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Matches" value={0} />
          <Tab label="Table" value={1} />
        </Tabs>
      </div>
    </Box>
  );
};

export default Navbar;
