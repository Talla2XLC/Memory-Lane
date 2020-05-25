import React from 'react';
import {useDropzone} from 'react-dropzone';
import './FileInput.sass';

export default function FileInput(props) {
  const {getRootProps, getInputProps} = useDropzone({
    noDrag: true,
    accept: 'image/*',
    onDrop: acceptedFiles => {
      acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }));
      props.setFilesToUpload(acceptedFiles);
    }
  });

  return (
    <section className='file-input-container'>
      <div {...getRootProps({className: 'file-input'})}>
        <span className='addPhoto-btn'>Добавить фото</span>
        <input {...getInputProps()} />
      </div>
    </section>
  );
}
