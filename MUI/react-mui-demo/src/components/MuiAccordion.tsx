import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const onAccordionChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => onAccordionChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id={"panel1-header"}
          aria-controls={"panel1-content"}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur corporis, dolore dolorem doloribus eligendi fugiat hic
            ipsam libero modi molestiae necessitatibus pariatur porro qui sed
            sequi tempore, ullam velit vitae.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => onAccordionChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id={"panel2-header"}
          aria-controls={"panel2-content"}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur corporis, dolore dolorem doloribus eligendi fugiat hic
            ipsam libero modi molestiae necessitatibus pariatur porro qui sed
            sequi tempore, ullam velit vitae.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => onAccordionChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id={"panel3-header"}
          aria-controls={"panel3-content"}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur corporis, dolore dolorem doloribus eligendi fugiat hic
            ipsam libero modi molestiae necessitatibus pariatur porro qui sed
            sequi tempore, ullam velit vitae.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
