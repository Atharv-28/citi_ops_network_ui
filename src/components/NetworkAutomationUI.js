import React from 'react';
import { useState } from 'react';

// Mock data for devices
const devices = [
  { id: 1, name: 'Router', status: 'Active', ip: '192.168.1.1' },
  { id: 2, name: 'Switch', status: 'Inactive', ip: '192.168.1.2' },
  // Add more devices as needed
];

function NetworkAutomationUI() {
  const [deviceList, setDeviceList] = useState(devices);

  return (
    <div>
      <h1>Network Devices</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {deviceList.map((device) => (
            <tr key={device.id}>
              <td>{device.name}</td>
              <td>{device.status}</td>
              <td>{device.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NetworkAutomationUI;
