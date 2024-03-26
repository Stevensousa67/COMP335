const FormComponent = () => {
  const [formData, setFormData] = React.useState({ place: 'Washington D.C', adjective: 'fighting', noun: 'President', building: 'White House', name: 'Donald Trump', object: 'Sausage', pluralNoun: 'secretaries', adverb: 'quickly', verb: 'tweeting'});
  const [message, setMessage] = React.useState('');

  const sendStuff = async (event) => {
    event.preventDefault(); // prevent form default event which refreshes the page
    try {
      const response = await fetch('/madlibs', {
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
      <h1>Hollywood Hearsay</h1>
      <h3>Input your word choices:</h3>

      <form method="post" onSubmit={sendStuff}>

        <label> Place: </label><br />
        <input type="text" id="place" placeholder="(e.g. Hollywood)" 
            value={formData.celebrityName} onChange={handleChange}></input><br /><br />
        
        <label> Adjective": </label> <br />
        <input type="text" id="adjective" placeholder="(e.g. glamorous)" 
                  value={formData.ingVerb} onChange={handleChange}></input><br /><br />
              
        <label> Noun: </label> <br />
        <input type="text" id="noun" placeholder="(e.g. paparazzi)" 
            value={formData.nounPlural} onChange={handleChange}></input><br /><br />
        
        <label> Building: </label> <br />
        <input type="text" id="building" placeholder="(e.g. mansion)" 
            value={formData.location} onChange={handleChange}></input><br /><br />
              
        <label> Name: </label> <br />
        <input type="text" id="name" placeholder="(e.g. Angelina Jolie)" 
                  value={formData.verb} onChange={handleChange}></input><br /><br />
                      
        <label> Object: </label> <br />
        <input type="text" id="object" placeholder="(e.g. Something tangible)" 
            value={formData.verb} onChange={handleChange}></input><br /><br />
        
        <label> Plural Noun: </label> <br />
        <input type="text" id="plural" placeholder="(e.g. more than one person, place or thing)" 
            value={formData.verb} onChange={handleChange}></input><br /><br />
              
        <label> Adverb: </label> <br />
        <input type="text" id="adverb" placeholder="(e.g. describing verb)" 
                  value={formData.verb} onChange={handleChange}></input><br /><br />
              
        <label> Verb: </label> <br />
        <input type="text" id="verb" placeholder="(e.g. action word)" 
            value={formData.verb} onChange={handleChange}></input><br /><br />
        
        <input type="submit" value="Create Gossip"></input>
      </form>
      {message && (
        <>
            <p>Once upon a time, in the bustling town of {message.place}, there lived a group of friends who were always up to {message.adjective} adventures. Their latest escapade involved a secret {message.noun} hidden in the attic of an abandoned {message.building}. Little did they know, this discovery would ignite a chain of {message.adjective} rumors throughout the town. </p>
            <p>It all started when [Name] stumbled upon the mysterious [Noun] while exploring the dusty attic. Excitedly, they shared the news with their friends [Name] and [Name]. Soon, the entire town was buzzing with speculation about the contents of the hidden [Noun]. </p>
            <p>Stay tuned for more celebrity shenanigans next time!</p>
        </>
      )}
    </div>
  );
};

const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<FormComponent />);