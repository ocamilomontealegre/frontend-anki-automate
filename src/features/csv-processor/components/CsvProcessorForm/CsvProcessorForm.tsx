import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Button } from "@ui/components/Button/Button";

interface IFormData {
  file: File;
}

export const CsvProcessorForm = (): ReactNode => {
  const [formData, setFormData] = useState<IFormData | null>(null);
  const [file, setFile] = useState<IFormData["file"] | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0] || null;
    setFile(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (file) {
      console.log("File to process: ", file.name);
      setFormData({ file });
    } else console.log("Not file selected");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="" id="" onChange={handleFileChange} />
      <Button text="process" />
    </form>
  );
};
