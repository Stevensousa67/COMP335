function FileUploader() {
  const [uploadStatus, setUploadStatus] = React.useState('');
  const [message, setMessage] = React.useState('');

  const uploadFile = async (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: new FormData(event.target)
    })
    .then (response => { 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text()
      })
    .then (data => {
      setUploadStatus('Upload file succeeded');
      setMessage(data);
    })
    .catch(error => {
      setUploadStatus('Upload file failed');
    });
  };

  return (
    <div>
      <form onSubmit={uploadFile} encType="multipart/form-data">
        <input type="file" name="file_up" />
        <input type="submit" />
      </form>
      <div>{uploadStatus}</div>
      <div><h3>{message}</h3></div>
      {/* <div dangerouslySetInnerHTML={{ __html: message }} /> */}
    </div>
  );
}

const uploaderRoot = ReactDOM.createRoot(document.getElementById('uploader'));
uploaderRoot.render(<FileUploader />);  // render(<Component />)

/*
render() is a method used to render React elements into the DOM. 
<FileUploader /> is a React component, and by passing it to the render() function, 
you're instructing React to render the FileUploader component into the DOM.
*/