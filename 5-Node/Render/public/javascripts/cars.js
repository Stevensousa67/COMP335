const CarComponent = () => {
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/carsOut');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const dataTable = new simpleDatatables.DataTable("#myTable", {
                    data: {
                        headings: ['Make', 'Model', 'Year'],
                        data: data.map(car => [car.make, car.model, car.year])
                    }
                });
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once, after initial render

    return (
        <div>
            <h2>Car Database</h2>
            <table id="myTable">
                <thead>
                    <tr><th>Make</th><th>Model</th><th>Year</th></tr>
                </thead>
            </table>
        </div>
    );
};

const car = ReactDOM.createRoot(document.getElementById('cars'));
car.render(<CarComponent />);
