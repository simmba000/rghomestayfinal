import React from 'react';
import './admin.css'; // Link to the CSS file for reusable styles

const Adminreviews = () => {
  return (
    <div className="adminbase-container">
      <div className="adminbase-content">
        <h2 className="page-title">User Reviews</h2>
        <div className="table-container">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Room ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Review
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Star
                  </th>
               
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Ritu
                  </th>
                  <td className="px-6 py-4">#111</td>
                  <td className="px-6 py-4">Nice hotel</td>
                  <td className="px-6 py-4">5</td>
                 
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                {/* Add more rows as necessary */}
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminreviews;
