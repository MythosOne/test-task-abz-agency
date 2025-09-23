import { useState } from "react";

import {UpLoadButton, Label, Span, Input} from "./PhotoUpload.styled";

export const PhotoUpload = () => {
  const [fileName, setFileName] = useState("Upload your photo");

  const handleClick = () => {
    const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Label>
      <UpLoadButton type="button" onClick={handleClick}>
        Upload
      </UpLoadButton>
      <Span>{fileName}</Span>
      <Input
        type="file"
        accept="image/jpeg, image/jpg"
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </Label>
  );
};