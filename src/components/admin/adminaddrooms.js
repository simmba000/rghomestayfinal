import React from 'react';

const Adminaddrooms = () => {
  return (
    <div className="adminbase-container">
      <div className="adminbase-content">
        Add Your Rooms
        <div>
          <form class="max-w-md mx-auto">
            <div
              style={{
                display: 'flex',
                gap: '1.5em',
                boxShadow: 'rgb(219, 213, 213) 4px 4px 6px 3px',
                borderRadius: '5px',
                margin:'1rem',
                padding:'1rem'
              }}
            >
              <div style={{ width: '50%'}}>
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Room Title:
                </label>
                <input
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Room Description:
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                ></textarea>
              </div>

              <div>
                <label
                  for="number-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Number of guest:
                </label>
                <input
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required
                />

                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                  for="multiple_files"
                >
                  Upload Images:
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  multiple
                />
                 <br/>
                {/* <label for="currency-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray">Your Email</label> */}
                <div class="relative w-full">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    id="currency-input"
                    class="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
         <div style={{display:'flex', justifyContent:'right'}}>
         <button
            type="button"
            class="px-3 py-2 text-sm font-medium text-center text-white bg-button rounded-lg hover:bg-button-hover focus:ring-4 focus:outline-none focus:ring-button-hover-800 dark:bg-button dark:hover:bg-button-hover dark:focus:ring-button-hover-800"
          >
            Add
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Adminaddrooms;
