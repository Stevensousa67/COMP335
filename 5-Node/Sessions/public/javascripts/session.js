function Session() {
  const [status, setStatus] = React.useState('');
  const [message, setMessage] = React.useState('');
  //This code will run when the component first loads. This is like onload()
  React.useEffect(() => {
    fetch('http://localhost:3000/session')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log("Network response was ok");
        return response.json(); // assuming response is JSON
      })
      .then(data => {
        console.log("successful");
        console.log(data);
        setStatus('success');
        setMessage(data);
      })
      .catch(error => {
        console.log("error");
        setStatus('Error');
      });
  }, []); // Empty dependency array to ensure fetch is only executed once

  return (
    <div>
      <h1>Counting Sessions</h1>
      {/* Check if message is not empty before accessing its properties */}
      {message && (
        // in-class exercise: display first visit as "for the first time" and subsequent visits as "x times.
        <>
          <p>Today is {message.dates}</p>
          <p>You visited this page <strong>{message.views === 1 ? 'for the first time.' : `${message.views} times.` }</strong></p> 
        </>
      )}
    </div>
  );
}

const session = ReactDOM.createRoot(document.getElementById('session'));
session.render(<Session />);