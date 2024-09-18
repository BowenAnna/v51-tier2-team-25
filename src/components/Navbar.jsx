import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import GroupForm from "./GroupForm.jsx";
import { AppContext } from "../App";
import toast from "react-hot-toast";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { groups, friends } = useContext(AppContext);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <aside className="w-1/4 p-4 flex flex-col">
      <nav className="h-screen">
        <ul className="space-y-4">
          <li className="block py-2 px-4 ">Brand Name</li>
          <li>
            <NavLink
              className="block py-2 px-4 rounded hover:bg-blue-700"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block py-2 px-4 rounded hover:bg-blue-700"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>

          <li>
            <div className="flex justify-between items-center py-2 px-4 rounded hover:bg-blue-700">
              <span>Groups</span>
              <button
                onClick={openModal}
                className="bg-amber-500 text-black py-1 px-2 rounded hover:bg-amber-600"
              >
                +
              </button>
            </div>
            {groups.length > 0 && (
              <ul className="ml-4 mt-2 space-y-2">
                {groups.map((group) => (
                  <li key={group.groupId}>
                    <NavLink
                      className="block py-1 px-2 rounded hover:bg-blue-700"
                      to={`/group/${group.groupId}`}
                    >
                      {group.groupName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <div className="flex justify-between items-center py-2 px-4 rounded hover:bg-blue-700">
              <span>Friends</span>
              <button
                onClick={() => toast("Will open add friend modal")}
                className="bg-amber-500 text-black py-1 px-2 rounded hover:bg-amber-600"
              >
                +
              </button>
            </div>
            {friends.length > 0 && (
              <ul className="ml-4 mt-2 space-y-2">
                {friends.map((friend) => (
                  <li key={friend.id}>
                    <NavLink
                      className="block py-1 px-2 rounded hover:bg-blue-700"
                      to={`/friend/${friend.id}`}
                    >
                      {friend.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      {isModalOpen && <GroupForm closeModal={closeModal} />}
    </aside>
  );
}