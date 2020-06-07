import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './FileDropzone.sass';

export default function FileDropzone(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      props.setFilesToUpload(acceptedFiles);
    }
  });

  const thumbs = props.imagesToUpload.map(file => (
    <div className='thumb' key={file.name}>
      <div className='thumb-inner'>
        <img
          src={file.preview}
          className='thumb-img'
          alt='selected-file'
        />
      </div>
    </div>)
  );

  const clearFiles = () => {
    props.setFilesToUpload([]);
  }

  const clearButton = <button className='clearBTN' onClick={clearFiles}>Очистить</button>

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className='dropzone-container'>
      {props.imagesToUpload.length === 0 ?
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p className='dropzone-txt'>Перетащите фотографии сюда</p>
        </div> :
        <aside className='thumb-container'>
          {thumbs}
          {clearButton}
        </aside>
      }
    </section>
  );
}
