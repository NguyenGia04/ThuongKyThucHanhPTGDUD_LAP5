import React, { useState, useEffect } from 'react';

const Datatable = () => {
    const [datatableData, setDatatableData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        fetch('https://67f5764a913986b16fa4a74e.mockapi.io/datatable')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setDatatableData(data))
            .catch((error) => console.error('Error fetching API:', error));
    }, []);

    // Xử lý chọn/bỏ chọn tất cả
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            // Chọn tất cả, lưu lại index của từng dòng
            const allRowIds = datatableData.map((_, index) => index);
            setSelectedRows(allRowIds);
        } else {
            setSelectedRows([]);
        }
    };

    // Xử lý chọn 1 dòng
    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    return (
        <div className="datatable-container">
            <table className="datatable-table">
                <thead>
                    <tr>
                        <th className="datatable-th small-col text-center">
                            <input
                                type="checkbox"
                                className="datatable-checkbox"
                                onChange={handleSelectAll}
                                checked={datatableData.length > 0 && selectedRows.length === datatableData.length}
                            />
                        </th>
                        <th className="datatable-th">Customer Name</th>
                        <th className="datatable-th">Company</th>
                        <th className="datatable-th">Order Value</th>
                        <th className="datatable-th">Order Date</th>
                        <th className="datatable-th">Status</th>
                        <th className="datatable-th small-col text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datatableData.map((row, idx) => (
                        <tr key={idx} className="datatable-tr">
                            <td className="datatable-td text-center">
                                <input
                                    type="checkbox"
                                    className="datatable-checkbox"
                                    onChange={() => handleSelectRow(idx)}
                                    checked={selectedRows.includes(idx)}
                                />
                            </td>
                            <td className="datatable-td">
                                <div className="name-container">
                                    <img src={row.avatar} alt={row.customer_name} className="avatar" />
                                    <span className="customer-name">{row.customer_name}</span>
                                </div>
                            </td>
                            <td className="datatable-td">{row.company}</td>
                            <td className="datatable-td">${row.order_value}</td>
                            <td className="datatable-td">{new Date(row.order_date).toLocaleDateString('en-GB')}</td>
                            <td className="datatable-td">
                                <span className={`status ${row.status.toLowerCase().replace(' ', '-')}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="datatable-td text-center">
                                <svg
                                    className="pencil-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="#6c757d"
                                        d="M290.74 93.24l128 128L142.63 487.35a24.15 24.15 0 0 1-11.48 6.38l-132.8 36.5a8 8 0 0 1-9.76-9.76l36.5-132.8a24.15 24.15 0 0 1 6.38-11.48L290.74 93.24m45.25-45.25L314.34 56.65l128 128 21.65-21.65a56 56 0 0 0 0-79L414.3 47.99a56 56 0 0 0-79 0z"
                                    />
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Datatable;
