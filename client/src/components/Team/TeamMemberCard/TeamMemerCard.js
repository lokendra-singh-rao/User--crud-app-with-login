import React from "react";
import deleteIcon from "../../../assets/deleteIcon.png";
import { toast } from "react-toastify";
import styles from "./TeamMemberCard.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { deleteUser } from "../../APIs/User";
import { useLogout } from "../../APIs/Auth";

function TeamMemberCard({ fetchUsers, member }) {
  const logout = useLogout();

  async function handleDelete(id) {
    try {
      const data = await deleteUser({ id });
      if (!data) {
        await logout();
        toast.error("You are logged out! Login again to continue");
        return;
      }
      if (data?.err) {
        toast.error(data?.err);
      } else {
        toast.info(data?.message);
        setTimeout(async () => {
          await fetchUsers();
        }, 1000);
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again");
    }
  }

  return (
    <div
      key={member._id}
      className={styles.memberCard}
    >
      <div className={styles.memberImage}>
        <img
          className={styles.deleteIcon}
          onClick={(e) => handleDelete(member._id || member.id)}
          src={deleteIcon}
          alt="deleteIcon"
        />
        <img
          src={member.image}
          alt={member.name}
          style={{ animation: "ease-in 1s" }}
        />
      </div>
      <div className={styles.memberCardInfo}>
        <h3>{member.name || <Skeleton />}</h3>
        <p>{member.email}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
