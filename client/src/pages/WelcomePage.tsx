export default function WelcomePage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Welcome</h1>
      <div className="flex gap-2">
        <button className="btn-green">Add / Accept</button>
        <button className="btn-red">Delete / Cancel</button>
        <button className="btn-yellow">Edit / Info</button>
        <button className="btn-grey">Generic Action</button>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Filter</label>
        <input className="input-filter mt-1" placeholder="Type to filter..." />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Generic Input</label>
        <input className="input mt-1" placeholder="Your text here" />
      </div>

      <div className="mt-6">
        <div className="dropdown">
          <button className="dropdown-button">Dropdown</button>
          <div className="dropdown-menu">
            <button className="dropdown-item">Item 1</button>
            <button className="dropdown-item">Item 2</button>
            <button className="dropdown-item">Item 3</button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Example Row</td>
              <td><span className="toast-success rounded px-2 py-1 text-xs">Success</span></td>
            </tr>
            <tr>
              <td>Another Row</td>
              <td><span className="toast-warning rounded px-2 py-1 text-xs">Warning</span></td>
            </tr>
            <tr>
              <td>Last Row</td>
              <td><span className="toast-error rounded px-2 py-1 text-xs">Failure</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
