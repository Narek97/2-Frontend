import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./muiTheme/typographyTheme";
import MuiTypography from "./components/MuiTypography";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiAccordion from "./components/MuiAccordion";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiChip from "./components/MuiChip";
import MuiTooltip from "./components/MuiTooltip";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiDrawer from "./components/MuiDrawer";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";
import MuiImageList from "./components/MuiImageList";
import Navbar from "./components/Navbar";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiResponsiveness from "./components/MuiResponsiveness";
import MuiTabs from "./components/MuiTabs";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiProgress from "./components/MuiProgress";


const App = () => {
  return (
    <div className={"App"}>
      <ThemeProvider theme={theme}>
        <MuiTypography />
        <MuiButton />
        <MuiTextField />
        <MuiSelect />
        <MuiRadioButton />
        <MuiCheckbox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutocomplete />
        <MuiLayout />
        <MuiCard />
        <MuiAccordion />
        <MuiImageList />
        <Navbar />
        <MuiBreadcrumbs />
        <MuiDrawer />
        <MuiSpeedDial />
        <MuiAvatar />
        <MuiBadge />
        <MuiList />
        <MuiChip />
        <MuiTooltip />
        <MuiAlert />
        <MuiSnackbar />
        <MuiDialog />
        <MuiProgress />
        <MuiSkeleton />
        <MuiLoadingButton />
        <MuiTabs />
        <MuiResponsiveness />
      </ThemeProvider>
    </div>
  );
};

export default App;
