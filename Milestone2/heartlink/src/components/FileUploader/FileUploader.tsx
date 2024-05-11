import React, { LegacyRef, useRef, useState } from "react";
import "./ImageUploader.css";
import iconImg from "../../assets/uploadiconNoBG.png";
import bin from "../../assets/bin.svg";

interface imageUploaderProps {
  width?: string;
  height?: string;
  text?: string;
  upload?: boolean;
  required?: boolean;
}

function ImageUploader({
  width = "250px",
  height = "150px",
  text = "Upload File",
  upload,
  required = false,
}: imageUploaderProps) {
  const inputRef = useRef();
  const [selectedImage, setSelectedImage] = useState<File | undefined | null>();
  let downloaded = false;
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setSelectedImage(target.files[0]);
  }

  const onChooseFile = () => {
    //@ts-ignore
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedImage(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedImage(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  if (upload && selectedImage && !downloaded) {
    const url = URL.createObjectURL(selectedImage);
    const a = document.createElement("a");
    a.href = url;
    a.download = selectedImage.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    downloaded = true;
  }

  return (
    <div>
      {/* Hidden file input element */}
      {inputRef && (
        <input
          type="file"
          ref={inputRef as unknown as LegacyRef<HTMLInputElement>}
          onChange={handleOnChange}
          accept=".pdf"
          style={{
            opacity: 0,
            position: "absolute",
            zIndex: -1,
          }}
          required={required}
        />
      )}
      <div
        className="drag-drop-area"
        onClick={onChooseFile}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <button
          className="file-btn"
          style={{
            backgroundColor: "transparent",
            width: width,
            height: height,
          }}
        >
          <>
            {" "}
            <img src={iconImg} alt="iconImage" style={{ width: "40px" }} />
            {text}
          </>
        </button>
      </div>
      {selectedImage && (
        <div className="selected-file" style={{ width: width }}>
          <p>{selectedImage.name}</p>

          <button onClick={removeFile}>
            <img
              src={bin}
              alt="Delete"
              className="material-symbols-rounded colorChange"
              style={{ width: "20px", marginLeft: "3px" }}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
