import { MdChildFriendly, MdLogout } from "react-icons/md";
import Cookies from "universal-cookie";

const SideBar = () => {
  const cookies = new Cookies();

  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };

  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner" onClick={logout}>
          <MdLogout style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
