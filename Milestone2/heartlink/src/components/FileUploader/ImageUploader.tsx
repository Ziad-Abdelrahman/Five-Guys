import React, { LegacyRef, useRef, useState } from "react";
import "./ImageUploader.css";
import iconImg from "../../assets/uploadiconBG.png";
import bin from "../../assets/bin.svg";

interface imageUploaderProps {
  width?: string;
  height?: string;
  upload?: boolean;
  handleUpload?: (x: boolean) => void;
}

function ImageUploader({
  width = "250px",
  height = "150px",
  upload,
  handleUpload,
}: imageUploaderProps) {
  const inputRef = useRef();
  const [selectedImage, setSelectedImage] = useState<File | undefined | null>();
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  let downloaded = false;
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setSelectedImage(target.files[0]);
    if (target.files[0]) {
      setImagePreview(URL.createObjectURL(target.files[0]));
      if (handleUpload) {
        handleUpload(true);
      }
    }
  }

  const onChooseFile = () => {
    // @ts-ignore
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedImage(null);
    setImagePreview(undefined);
    if (handleUpload) {
      handleUpload(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
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
          accept="image/png, image/jpg, image/jpeg"
          style={{ display: "none" }}
        />
      )}
      <div
        className="drag-drop-area"
        onClick={onChooseFile}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <button className="file-btn" style={{ width: width, height: height }}>
          {imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </>
          ) : (
            <>
              {" "}
              <img src={iconImg} alt="iconImage" style={{ width: "40px" }} />
              Upload Image
            </>
          )}
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
