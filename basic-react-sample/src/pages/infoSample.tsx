import * as React from "react";
import { Container } from "@mui/material";
import ParagraphSection, { ParagraphData } from "../components/ParagraphSection";

export default function ParagraphPage() {
  const sections: ParagraphData[] = [
    {
      title: "Introduction",
      text: "This is the introduction paragraph. It gives an overview of the content and sets the context for the reader.",
    },
    {
      title: "Features",
      text: "This section highlights the key features of the application. Each feature is explained clearly and concisely.",
    },
    {
      title: "Conclusion",
      text: "The conclusion summarizes the main points and provides final thoughts for the reader.",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <ParagraphSection sections={sections} />
    </Container>
  );
}