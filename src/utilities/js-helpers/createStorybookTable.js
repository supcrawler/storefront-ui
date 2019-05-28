export default function(config, label) {
  const { tableHeadConfig, tableBodyConfig } = config;

  const getTableBodyRow = item =>
    item.reduce((acc, item, index) => (acc = acc + `<td>${item}</td>`), "");

  const getTableHead = () => `
  <thead>
    <tr>
    ${tableHeadConfig.reduce(
      (acc, item, index) => (acc = acc + `<th>${item}</th>`),
      ""
    )}
    </tr>
  </thead>`;

  const getTableBody = () => `
  <tbody>
    ${tableBodyConfig.reduce(
      (acc, item, index) => (acc = acc + `<tr>${getTableBodyRow(item)}</tr>`),
      ""
    )}
  </tbody>
  `;

  return `
    <label class="src-components-Table-label-3GH2">${label ? label : ""}</label>
    <table class="src-components-Table-table-3VHw">
        ${getTableHead()}
        ${getTableBody()}
    </table>
  `;
}
