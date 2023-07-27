// src/PromiseRecord.tsx

import React, { useState } from 'react';
import './PromiseRecord.css'; // Updated the import statement to the CSS file

const PromiseRecord: React.FC = () => {
  const [deliveredPromises, setDeliveredPromises] = useState<string[]>([]);
  const [undeliveredPromises, setUndeliveredPromises] = useState<string[]>([]);
  const [newPromise, setNewPromise] = useState<string>('');

  const addDeliveredPromise = () => {
    setDeliveredPromises([...deliveredPromises, newPromise]);
    setNewPromise('');
  };

  const addUndeliveredPromise = () => {
    setUndeliveredPromises([...undeliveredPromises, newPromise]);
    setNewPromise('');
  };

  return (
    <div>
      <h1>Kenya Kwanza Promises</h1>
      <div>
        <input
          type="text"
          value={newPromise}
          onChange={(e) => setNewPromise(e.target.value)}
          placeholder="Enter a promise..."
        />
        <button onClick={addDeliveredPromise}>Mark Delivered</button>
        <button onClick={addUndeliveredPromise}>Mark Undelivered</button>
      </div>
      <div>
        <h2>Delivered Promises</h2>
        <ul>
          {deliveredPromises.map((promise, index) => (
            <li key={index}>{promise}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Undelivered Promises</h2>
        <ul>
          {undeliveredPromises.map((promise, index) => (
            <li key={index}>{promise}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PromiseRecord;
