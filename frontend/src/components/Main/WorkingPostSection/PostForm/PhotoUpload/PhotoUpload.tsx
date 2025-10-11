import { useState, useEffect } from 'react';

import {
  UploadContainer,
  UpLoadButton,
  Label,
  Span,
  Input,
  ErrorMessage,
} from './PhotoUpload.styled';

const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg'];

type PhotoUploadProps = {
  onSubmitData: (photo: File | null) => void;
  resetForm: number;
};
export const PhotoUpload: React.FC<PhotoUploadProps> = ({
  onSubmitData,
  resetForm,
}) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [fileError, setFileError] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  useEffect(() => {
    if (photo !== null) {
      onSubmitData(photo);
    }
  }, [photo, onSubmitData]);

  // console.log("Photo file:", photo);
  // console.log("Photo file name:", fileName);
  const handleClick = () => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        setFileError('Only JPEG and JPG formats are supported.');
        // setFileName('Upload your photo');
        setFileName(file.name);
        setPhoto(null);
        return;
      }
      if (file.size > FILE_SIZE_LIMIT) {
        setFileError('File size exceeds the 5MB limit.');
        // setFileName('Upload your photo');
        setFileName(file.name);
        setPhoto(null);
        return;
      } else {
        setFileError('');
        setFileName(file.name);
        setPhoto(file);
      }
    }
  };

  useEffect(() => {
    setFileName('Upload your photo');
    setFileError('');
    setPhoto(null);
  }, [resetForm]);

  return (
    <UploadContainer>
      <Label isVisible={!!fileError}>
        <UpLoadButton type="button" onClick={handleClick} isVisible={!!fileError}>
          Upload
        </UpLoadButton>
        <Span>{fileName}</Span>
        <Input
          type="file"
          accept="image/jpeg, image/jpg"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </Label>
      <ErrorMessage isVisible={!!fileError} aria-live="polite">
        {fileError}
      </ErrorMessage>
    </UploadContainer>
  );
};
