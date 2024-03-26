const FormComponent = () => {
  const [formData, setFormData] = React.useState({ first: '', last: '' });
  const [message, setMessage] = React.useState('');

  const sendStuff = async (event) => {
    event.preventDefault(); // prevent form default event which refreshes the page
    try {
      const response = await fetch('/form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8',},
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setMessage(await response.json());  // assuming response is JSON
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => {
      // Spread the previous state
      const updatedFormData = { ...prevFormData };
      // Update the property corresponding to the provided id with the new value
      updatedFormData[id] = value;
      return updatedFormData; // Return the updated state
    });
  };

  return (
    <div>
      <form method="post" onSubmit={sendStuff}>
        <label> Enter your first name </label><br />
        <input type="text" id="first" placeholder="Enter your first name" 
                            value={formData.first} onChange={handleChange}></input><br />
        <label> Enter your last name</label> <br />
        <input type="text" id="last" placeholder="Enter your last name" 
                            value={formData.last} onChange={handleChange}></input><br /><br />
        <input type="submit" value="Post something"></input>
      </form>
      {message && (
        <>
        <p>{message.first}</p>
        <p>{message.last}</p>
        </>
      )}
    </div>
  );
};

const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<FormComponent />);