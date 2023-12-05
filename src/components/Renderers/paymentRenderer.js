export const PaymentRenderer = {
    render(payment) {
        const paymentHTML =
            <tr key={payment.id} className="table-item" onClick={() => window.location.href = `./payments/${payment.id}`}>
                <td>{payment.id}</td>
                <td onClick={() => window.location.href = `./payments/${payment.customer}`}>{payment.customer}</td>
                <td>{payment.amount}</td>
                <td>{payment.currency}</td>
                <td>{payment.state}</td>
                <td>{payment.invoiceNumber}</td>
                <td>{payment.customerEmail}</td>
                <td>{payment.subscription}</td>
                <td>{new Date(payment.created).toLocaleDateString("en-DE")}</td>
            </tr>;
    
        return paymentHTML;
    }
}