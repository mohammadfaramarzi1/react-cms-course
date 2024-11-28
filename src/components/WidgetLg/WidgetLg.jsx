import { transactions } from "../../datas";

import "./WidgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return (
      <button
        className={`widgetlg__button widgetlg__button-${type.toLowerCase()}`}
      >
        {type}
      </button>
    );
  };

  console.log(transactions);

  return (
    <div className="widgetlg">
      <h3 className="widgetlg__title">Latest Transactions</h3>
      <table className="widgetlg__table">
        <tr className="widgetlg__table-tr">
          <th className="widgetlg__table-th">Customer</th>
          <th className="widgetlg__table-th">Date</th>
          <th className="widgetlg__table-th">Amount</th>
          <th className="widgetlg__table-th">Status</th>
        </tr>

        {transactions.map((transaction) => (
          <tr className="widgetlg__table-tr" key={transaction.id}>
            <td className="widgetlg__user">
              <img
                src="images/5886539613504389703.jpg"
                className="widgetlg__img"
                alt="widget profile"
              />
              <span className="widgetlg__name">{transaction.username}</span>
            </td>
            <td className="widgetlg__date">{transaction.date}</td>
            <td className="widgetlg__amount">{transaction.amount}</td>
            <td className="widgetlg__status">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default WidgetLg;
