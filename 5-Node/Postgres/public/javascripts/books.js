const BookComponent = () => {
  React.useEffect(() => {
    fetch('/booksOut')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // assuming response is JSON
      })
      .then(data => {
        // https://datatables.net/
        // https://github.com/fiduswriter/Simple-DataTables
        const dataTable = new simpleDatatables.DataTable("#myTable");
        dataTable.insert(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, after initial render

  return (
    <div>
      <h2>Book Database</h2>
      <table id="myTable">
        <thead>
          <tr><th>author</th><th>title</th><th>published</th><th>pages</th><th>language</th></tr>
        </thead>
      </table>
    </div>
  );
};

const book = ReactDOM.createRoot(document.getElementById('books'));
book.render(<BookComponent />);

/*
const BookComponent = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('/booksOut')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // assuming response is JSON
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, after initial render

  //https://react.dev/learn/rendering-lists
  //https://en.wikipedia.org/wiki/Map_(higher-order_function)
  return (
    <div>
      <h2>Book Database</h2>
      <table>
        <thead>
          <tr><th>Author</th><th>Title</th><th>Published</th><th>Pages</th><th>Language</th></tr>
        </thead>
        <tbody>
          {
            data.map((row) => (
              <tr key={JSON.stringify(row)}>
                <td>{row.author}</td>
                <td>{row.title}</td>
                <td>{row.published}</td>
                <td>{row.pages}</td>
                <td>{row.language}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const book = ReactDOM.createRoot(document.getElementById('books'));
book.render(<BookComponent />);
*/