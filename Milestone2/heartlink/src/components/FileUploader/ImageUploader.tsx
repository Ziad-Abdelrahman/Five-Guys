import React, { LegacyRef, useRef, useState } from "react";
import "./ImageUploader.css";
import iconImg from "../../assets/uploadiconBG.png";
import bin from "../../assets/bin.svg";

function ImageUploader() {
  const inputRef = useRef();
  const [selectedImage, setSelectedImage] = useState<File | undefined | null>();
  const [imagePreview, setImagePreview] = useState<string | undefined>();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setSelectedImage(target.files[0]);
    if (target.files[0]) {
      setImagePreview(URL.createObjectURL(target.files[0]));
    }
  }

  const onChooseFile = () => {
    // @ts-ignore
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedImage(null);
    setImagePreview(undefined);
  };

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
      {imagePreview ? (
        <button
          className="file-btn"
          style={{ overflow: "hidden" }}
          onClick={onChooseFile}
        >
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>
      ) : (
        <button className="file-btn" onClick={onChooseFile}>
          <img src={iconImg} alt="iconImage" style={{ width: "40px" }} />
          Upload Image
        </button>
      )}
      {selectedImage && (
        <div className="selected-file">
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
