import React from 'react';
import {useDropzone} from 'react-dropzone';

export default function FileInput(props) {
  const {getRootProps, getInputProps} = useDropzone({
    noDrag: true,
    accept: 'image/*',
    onDrop: acceptedFiles => {
      acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }));
      props.uploadPhoto(acceptedFiles);
    }
  });

  return (
    <section className='icoInput'>
      <div className='text1'>Главная фотография</div>
      <div {...getRootProps()}>
        <div className='text3'>Изменить</div>
        <input {...getInputProps()} />
      </div>
    </section>
  );
}
