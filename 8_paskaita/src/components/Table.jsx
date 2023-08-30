function Table({ columns, data, onRowClick }) {
    return (
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} onClick={() => onRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.numberOfPeople}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;