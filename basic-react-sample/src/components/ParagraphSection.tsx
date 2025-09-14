import * as React from "react";
import { Typography, Box } from "@mui/material";

export interface ParagraphData {
  title: string;
  text: string;
}

interface ParagraphSectionProps {
  sections: ParagraphData[];
}

export default function ParagraphSection({ sections }: ParagraphSectionProps) {
  return (
    <>
      {sections.map((section, index) => (
        <Box key={index} mb={3}>
          <Typography variant="h6" component="h2" fontWeight="bold">
            {section.title}
          </Typography>
          <Typography variant="body1">{section.text}</Typography>
        </Box>
      ))}
    </>
  );
}
