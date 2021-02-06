import React, { Fragment, useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.css';
import datacsv from './results.csv';
import { csv } from 'd3';
import { UseSortableData, ProductTable, table_data, data } from './Table.js'

//console.log('dfa', data);

const App = () => {
    /*const [data, setData] = useState([]);
    useEffect(() => {
        csv(datacsv).then(data=>{
            console.log(data);
    });*/

    useEffect(() => {
        //console.log('data:', data);
            const getAPI = () => {
                // Change this endpoint to whatever local or online address you have
                // Local PostgreSQL Database
                const API = 'http://localhost:5000/';

                fetch(API)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setLoading(false);
                        setApiData(data);
                    });
            };
            getAPI();
    }, []);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

 
    const columns = [{
        dataField: 'name',
        text: 'Player Name',
        sort: true
      }, {
        dataField: 'points_per_game',
        text: 'Points Per Game',
        sort: true
      }, {
        dataField: 'team_name',
        text: 'Team Name',
        sort: true
    }];

    //const data = [{"name":"Aaron Gordon","team_acronym":"orl","team_name":"Orlando Magic","games_played":"38","minutes_per_game":"33:49","field_goals_attempted_per_game":"14.8","field_goals_made_per_game":"6.6","field_goal_percentage":"44.7","free_throw_percentage":"73.5","three_point_attempted_per_game":"5.8","three_point_made_per_game":"2.1","three_point_percentage":"35.1","points_per_game":"18.3","offensive_rebounds_per_game":"1.6","defensive_rebounds_per_game":"6.6","rebounds_per_game":"8.3","assists_per_game":"2.1","steals_per_game":"0.9","blocks_per_game":"0.7","turnovers_per_game":"1.9","player_efficiency_rating":"2.0"},{"name":"Aaron Brooks","team_acronym":"min","team_name":"Minnesota Timberwolves","games_played":"23","minutes_per_game":"6:38","field_goals_attempted_per_game":"2.2","field_goals_made_per_game":"1.0","field_goal_percentage":"43.1","free_throw_percentage":"75.0","three_point_attempted_per_game":"0.9","three_point_made_per_game":"0.3","three_point_percentage":"33.3","points_per_game":"2.3","offensive_rebounds_per_game":"0.2","defensive_rebounds_per_game":"0.3","rebounds_per_game":"0.6","assists_per_game":"0.7","steals_per_game":"0.2","blocks_per_game":"0.0","turnovers_per_game":"0.3","player_efficiency_rating":"0.8"},{"name":"Abdel Nader","team_acronym":"bos","team_name":"Boston Celtics","games_played":"22","minutes_per_game":"7:26","field_goals_attempted_per_game":"2.1","field_goals_made_per_game":"0.7","field_goal_percentage":"34.8","free_throw_percentage":"33.3","three_point_attempted_per_game":"1.1","three_point_made_per_game":"0.4","three_point_percentage":"33.3","points_per_game":"1.9","offensive_rebounds_per_game":"0.2","defensive_rebounds_per_game":"0.7","rebounds_per_game":"1.0","assists_per_game":"0.3","steals_per_game":"0.2","blocks_per_game":"0.2","turnovers_per_game":"0.4","player_efficiency_rating":"0.6"}]
    /*const data = [
        {'name': '0', 'points_per_game': 'item name 0', 'team_name': '2100'}
    ]*/
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

