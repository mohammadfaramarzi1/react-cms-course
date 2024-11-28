import "./WidgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetlg__button widgetlg__button-${type.toLowerCase()}`}>{type}</button>;
  };

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

        <tr className="widgetlg__table-tr">
          <td className="widgetlg__user">
            <img src="images/5886539613504389703.jpg" className="widgetlg__img" alt="widget profile" />
            <span className="widgetlg__name">Hasan Vaziri</span>
          </td>
          <td className="widgetlg__date">2 May 2024</td>
          <td className="widgetlg__amount">$199.29</td>
          <td className="widgetlg__status">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetlg__table-tr">
          <td className="widgetlg__user">
            <img src="images/5886539613504389703.jpg" className="widgetlg__img" alt="widget profile" />
            <span className="widgetlg__name">Morteza Safati</span>
          </td>
          <td className="widgetlg__date">2 May 2024</td>
          <td className="widgetlg__amount">$199.29</td>
          <td className="widgetlg__status">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetlg__table-tr">
          <td className="widgetlg__user">
            <img src="images/5886539613504389703.jpg" className="widgetlg__img" alt="widget profile" />
            <span className="widgetlg__name">Ehsan Dadashi</span>
          </td>
          <td className="widgetlg__date">2 May 2024</td>
          <td className="widgetlg__amount">$199.29</td>
          <td className="widgetlg__status">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetlg__table-tr">
          <td className="widgetlg__user">
            <img src="images/5886539613504389703.jpg" className="widgetlg__img" alt="widget profile" />
            <span className="widgetlg__name">Mohsen Rezaei</span>
          </td>
          <td className="widgetlg__date">2 May 2024</td>
          <td className="widgetlg__amount">$199.29</td>
          <td className="widgetlg__status">
            <Button type="Declined" />
          </td>
        </tr>

      </table>
    </div>
  );
}

export default WidgetLg;
