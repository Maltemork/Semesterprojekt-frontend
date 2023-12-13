import React from 'react';
import { useNavigate } from "react-router-dom";

const PaymentRenderer = ({ payment }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`./${payment.id}`);
    };

    return (
        
            <tr key={payment.id} className="table-item" onClick={handleRowClick}>
                <td>
                    {payment.id}
                </td>
                <td>
                        {payment.customer}
                </td>
                <td>{Number(payment.amount / 100).toFixed(2)}</td>
                <td>{payment.currency}</td>
                <td>{payment.state}</td>
                <td>{payment.invoiceNumber}</td>
                <td>{payment.customerEmail}</td>
                <td>{payment.subscription}</td>
                <td>{new Date(payment.created).toLocaleString("en-DE")}</td>
            </tr>
    );
}

export default PaymentRenderer;