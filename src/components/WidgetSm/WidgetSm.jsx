import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../datas";

import "./WidgetSm.css";

function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsm__title">New Join Members</span>
      <ul className="widgetsm__list">
        {newMembers.map((newMember) => (
          <li className="widgetsm__list-item" key={newMember.id}>
            <img
              src={newMember.images}
              class="widgetsm__img"
              alt="user widget"
            />
            <div className="widgetsm__user">
              <span className="widgetsm__username">{newMember.username}</span>
              <span className="widgetsm__user-title">{newMember.title}</span>
            </div>
            <button className="widgetsm__button">
              <VisibilityIcon className="widgetsm__icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
