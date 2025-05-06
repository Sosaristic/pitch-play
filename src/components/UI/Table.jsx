import React from 'react';

function Table({ headers, body }) {
  return (
    <table className="min-w-full my-4 border shadow-md border-primary">
      <thead className="bg-primary">
        <tr className="w-full">
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-2 text-center border-b border-primary"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => {
          return (
            <tr key={index} className="py-2 text-center">
              <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                {index + 1}
              </td>
              <td className="px-4 py-2 text-sm text-center capitalize border-b md:text-lg border-primary">
                {item.name}
              </td>
              <td className="px-4 py-2 text-sm text-center capitalize border-b md:text-lg border-primary">
                {item.street}
              </td>
              <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                {item.value}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
