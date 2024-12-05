import React, { useState } from 'react';

const ContactTbl = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: 'Active', createdDate: '2023-09-01', convertedDate: '2023-09-05' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321', status: 'Inactive', createdDate: '2023-08-15', convertedDate: '2023-09-01' }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAdd = () => {
    setIsEditMode(false);
    setCurrentRecord({});
    setShowModal(true);
  };

  const handleEdit = (record) => {
    setIsEditMode(true);
    setCurrentRecord(record);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(record => record.id !== id));
  };

  const handleSubmit = () => {
    if (isEditMode) {
      setData(data.map(item => (item.id === currentRecord.id ? currentRecord : item)));
    } else {
      setData([...data, { ...currentRecord, id: data.length + 1 }]);
    }
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">User Records</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>Add Record</button>
      </div>
      <table className="table-auto w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Created Date</th>
            <th className="px-4 py-2">Converted Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} className="border-t">
              <td className="px-4 py-2">{record.name}</td>
              <td className="px-4 py-2">{record.email}</td>
              <td className="px-4 py-2">{record.phone}</td>
              <td className="px-4 py-2">{record.status}</td>
              <td className="px-4 py-2">{record.createdDate}</td>
              <td className="px-4 py-2">{record.convertedDate}</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 mr-2 rounded" onClick={() => handleEdit(record)}>Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 md:mx-auto">
            <h2 className="text-xl mb-4">{isEditMode ? 'Edit Record' : 'Add Record'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={currentRecord.name || ''}
                  onChange={(e) => setCurrentRecord({ ...currentRecord, name: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={currentRecord.email || ''}
                  onChange={(e) => setCurrentRecord({ ...currentRecord, email: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  value={currentRecord.phone || ''}
                  onChange={(e) => setCurrentRecord({ ...currentRecord, phone: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status</label>
                <select
                  value={currentRecord.status || ''}
                  onChange={(e) => setCurrentRecord({ ...currentRecord, status: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Created Date</label>
                <input
                  type="date"
                  value={currentRecord.createdDate || ''}
                  onChange={(e) => setCurrentRecord({ ...currentRecord, createdDate: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Converted Date</label>
                <input
                  type="date"
                  value={currentRecord.convertedDate || ''}
                  onChange={(e) => setCurrentRecord({ ...currentRecord, convertedDate: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{isEditMode ? 'Update' : 'Create'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTbl;
