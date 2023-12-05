export const PaymentRenderer = {
    render(payment) {
        const paymentHTML =
            <tr key={payment.id} className="table-item" onClick={() => window.location.href = `./payments/${payment.id}`}>
                <td>{payment.id}</td>
                <td>{payment.customer}</td>
                <td>{payment.amount}</td>
                <td>{payment.currency}</td>
                <td>{payment.state}</td>
                <td>{payment.invoiceNumber}</td>
                <td>{payment.customerEmail}</td>
                <td>{payment.subscription}</td>
                <td>{payment.created}</td>
            </tr>;
    
        return paymentHTML;
    }
}