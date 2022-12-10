import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const onTabListChange = (event: React.SyntheticEvent, value: any) => {
    setValue(value);
  };
  console.log(0);
  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 0,
            borderColor: "divider",
            // width: "300px"
          }}
        >
          <TabList
            style={{ height: "73px", borderBottom: "1px" }}
            aria-label={"tabs example"}
            onChange={onTabListChange}
            textColor={"secondary"}
            indicatorColor={"secondary"}
            centered
            // variant={"scrollable"}
            // scrollButtons={"auto"}
            TabIndicatorProps={{
              title: "indicator",
              //hidden: true,
              sx: { backgroundColor: "red", height: "1px" }, //width: "25% !important"
            }}
          >
            <Tab
              label={"Tab one"}
              value={"1"}
              icon={<FavoriteIcon />}
              iconPosition={"start"}
            />
            <Tab label={"Tab two"} value={"2"} disabled />
            <Tab label={"Tab three"} value={"3"} />
          </TabList>
        </Box>
        <TabPanel value={"1"}>
          <PanelOne />
        </TabPanel>
        <TabPanel value={"2"}>
          <PanelTwo />
        </TabPanel>
        <TabPanel value={"3"}> Panel three</TabPanel>
        <TabPanel value={"4"}> Panel four</TabPanel>
        <TabPanel value={"5"}> Panel five</TabPanel>
        <TabPanel value={"6"}> Panel six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;

const PanelOne = () => {
  console.log(1);
  return <div>Panel one</div>;
};

const PanelTwo = () => {
  console.log(2);
  return <div>Panel two</div>;
};
