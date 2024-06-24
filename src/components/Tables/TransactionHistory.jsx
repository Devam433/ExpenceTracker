import React from 'react'

function TransactionHistory() {
  return (
   <div className="h-full border rounded-md">
      <div className="relative shadow-md sm:rounded-lg overflow-hidden h-full">
        <div className="overflow-y-scroll h-full scrollbar-none"> {/* Adjust height as needed */}
          <table className=" table w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data */}
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 09:00</td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 10:00</td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01</td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Groceries</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Rent</td>
                <td className="px-6 py-4">$1200</td>
                <td className="px-6 py-4">2023-06-01 </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 backdrop-blur-md backdrop-opacity-0">
          <button className="btn border-blue-100 bg-slate-200 hover:btn-outline w-full ">Add New Transaction</button>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory