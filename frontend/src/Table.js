import React, { useEffect } from 'react';
import datacsv from './shoes.csv';
import { csv } from 'd3';
import './App.css';

export const table_data = [{ id: 1, name: 'Cheese', price: 4.9, stock: 20 },
              { id: 2, name: 'Milk', price: 1.9, stock: 32 },
              { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
              { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
              { id: 5, name: 'Butter', price: 0.9, stock: 99 },
              { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
              { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 }];

export let text = csv(datacsv).then(data=>{
    console.log('hjkd', data);
});

/*export let text = [{Date:"2/6/21",Time:"10:00:00",Shoe:"Air Jordan",Price:"$200",SKU:"DABCE-100"},
{Date:"2/6/21",Time:"10:00:00",Shoe:"Air Jordan",Price:"$200",SKU:"DABCE-100"},
{Date:"2/6/21",Time:"10:00:00",Shoe:"Air Jordan",Price:"$200",SKU:"DABCE-100"}
];

csv('./results.csv', function(data) {
  console.log('dfadga', data);  
})*/

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};


export const ProductTable = (props, data) => {
    //let text = [{"Date":"2/6/21","Time":"10:00:00","Shoe":"Air Jordan","Price":"$200","SKU":"DABCE-100"}];
  //const [data, setData] = useState([]);
  /*useEffect(() => {
    console.log(datacsv);
    csv(datacsv).then(data=>{
        console.log('hjkd', data);
    });
  }, []);*/

  console.log('data:', data);

  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  console.log(table_data);
  return (
    <table>
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Date
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('Time')}
              className={getClassNamesFor('Time')}
            >
              Time
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Shoe
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('SKU')}
              className={getClassNamesFor('SKU')}
            >
              SKU
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.Date}</td>
            <td>${item.Time}</td>
            <td>{item.Shoe}</td>
            <td>{item.Price}</td>
            <td>{item.SKU}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

/*export default function CApp() {
  return (
    <div className="App">
      {console.log('data',text)}
      <ProductTable
        products={text}
      />
    </div>
  );
}*/
