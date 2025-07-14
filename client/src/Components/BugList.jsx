import React from 'react';

function BugList({ bugs, onDelete }) {
  return (
    <div className="space-y-2">
      {bugs.map(bug => (
        <div
          key={bug._id}
          className="flex justify-between items-center p-3 bg-white border rounded shadow-sm"
        >
          <div>
            <span className="font-medium">{bug.title}</span>
            <span className={`ml-2 px-2 py-1 text-xs rounded ${
              bug.status === 'open' ? 'bg-red-100 text-red-800' :
              bug.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {bug.status}
            </span>
          </div>
          <button
            onClick={() => onDelete(bug._id)}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BugList;