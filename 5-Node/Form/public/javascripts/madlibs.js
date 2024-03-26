const FormComponent = () => {
  const [formData, setFormData] = React.useState({ place: 'Washington D.C', adjective: 'fighting', noun: 'President', building: 'White House', name1: 'Donald Trump', name2: 'Joe Biden', name3: 'Hillary Clinton', object: 'Tim Apple Phone', adverb: 'quickly', verb: 'tweeting' });
  const [message, setMessage] = React.useState('');

  const sendStuff = async (event) => {
    event.preventDefault(); // prevent form default event which refreshes the page
    try {
      const response = await fetch('/madlibs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8', },
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
      <h1>Wacky Hearsay</h1>
      <h3>Input your word choices:</h3>

      <form method="post" onSubmit={sendStuff}>

        <label> Place: </label><br />
        <input type="text" id="place" placeholder="(e.g. Hollywood)"
          value={formData.place} onChange={handleChange}></input><br /><br />

        <label> Adjective": </label> <br />
        <input type="text" id="adjective" placeholder="(e.g. glamorous)"
          value={formData.adjective} onChange={handleChange}></input><br /><br />

        <label> Noun: </label> <br />
        <input type="text" id="noun" placeholder="(e.g. paparazzi)"
          value={formData.noun} onChange={handleChange}></input><br /><br />

        <label> Building: </label> <br />
        <input type="text" id="building" placeholder="(e.g. mansion)"
          value={formData.building} onChange={handleChange}></input><br /><br />

        <label> Name1: </label> <br />
        <input type="text" id="name1" placeholder="(e.g. Angelina Jolie)"
          value={formData.name1} onChange={handleChange}></input><br /><br />

        <label> Name2: </label> <br />
        <input type="text" id="name2" placeholder="(e.g. Angelina Jolie)"
          value={formData.name2} onChange={handleChange}></input><br /><br />

        <label> Name3: </label> <br />
        <input type="text" id="name3" placeholder="(e.g. Angelina Jolie)"
          value={formData.name3} onChange={handleChange}></input><br /><br />

        <label> Object: </label> <br />
        <input type="text" id="object" placeholder="(e.g. Something tangible)"
          value={formData.object} onChange={handleChange}></input><br /><br />

        <label> Adverb: </label> <br />
        <input type="text" id="adverb" placeholder="(e.g. describing verb)"
          value={formData.adverb} onChange={handleChange}></input><br /><br />

        <label> Verb: </label> <br />
        <input type="text" id="verb" placeholder="(e.g. action word)"
          value={formData.verb} onChange={handleChange}></input><br /><br />

        <input type="submit" value="Create Gossip"></input>
      </form>
      {message && (
        <>
          <p>Once upon a time, in the bustling town of {message.place}, there lived a group of friends who were always up to {message.adjective} adventures.
            Their latest escapade involved a secret {message.noun} hidden in the attic of an abandoned {message.building}. Little did they know,
            this discovery would ignite a chain of {message.adjective} rumors throughout the town. </p>
          <p>It all started when {message.name1} stumbled upon the mysterious {message.noun} while exploring the dusty attic.
            Excitedly, they shared the news with their friends {message.name2} and {message.name3} by {message.adverb} grabbing his {message.object} and {message.verb} about such discovery. Soon, the entire town was buzzing with speculation about
            the contents of the hidden {message.noun}. </p>
        </>
      )}

    </div>
  );
};

const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<FormComponent />);