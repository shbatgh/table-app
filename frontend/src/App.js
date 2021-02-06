import React, { useState, useEffect } from 'react';
import './App.css';
import datacsv from './results.csv';
import { csv } from 'd3';
import { ProductTable, table_data } from './Table.js'

//console.log('dfa', data);

const App = () => {
    /*const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(data=>{
            console.log(data);
    }, []);*/

    return (
        <div>
            <header>
                <h1>Stupid Table</h1>
            </header>
            <div className="form-container">
                <h2>Add Shoe</h2>
                <form method="POST" action="http://localhost:5000/add-shoe">
                    <div>
                        <label>Date</label>
                        <input type="text" name="Date" required />
                    </div>
                    <div>
                        <label>Time</label>
                        <input type="text" name="Time" required />
                    </div>
                    <div>
                        <label>Shoe</label>
                        <input type="text" name="Shoe" required />
                    </div>
                    <div>
                        <label>Price</label>
                        <textarea rows="5" cols="50" name="Description"></textarea>
                    </div>
                    <div>
                        <label>SKU</label>
                        <input type="text" name="SKU" required />
                    </div>
                    <div>
                        <label>ID</label>
                        <input type="text" name="ID" required />
                    </div>
                    <div>
                        <button type="submit">Add Shoe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default function Tapp() {
    return (
      <div className="App">
        {console.log('data', table_data)}
        <ProductTable
          products={table_data}
        />
        <App></App>
      </div>
    );
}

