import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsm__title">New Join Members</span>
      <ul className="widgetsm__list">
        <li className="widgetsm__list-item">
          <img
            src="images/5886539613504389703.jpg"
            class="widgetsm__img"
            alt="user widget"
          />
        </li>
        <div className="widgetsm__user">
          <span className="widgetsm__username">Mohammad Faramarzi</span>
          <span className="widgetsm__user-title">Front-End Developer</span>
        </div>
        <button className="widgetsm__button">
          <VisibilityIcon className="widgetsm__icon" />
        </button>
      </ul>
    </div>
  );
}

export default WidgetSm;
