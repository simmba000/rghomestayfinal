import React from 'react';
import './admin.css'; // Link to the CSS file for reusable styles

const Adminviewrooms = () => {
  return (
    <div className="adminbase-container">
      <div className="adminbase-content">
        <h2 className="page-title">Your Rooms</h2>
        <div className="table-container">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Room Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Room Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Guests
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Images
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">₹ 2999</td>
                  <td className="px-6 py-4">Image</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
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

export default Adminviewrooms;
