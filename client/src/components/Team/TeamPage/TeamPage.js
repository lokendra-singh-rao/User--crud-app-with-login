import React, { useEffect, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import TeamGrid from "../TeamGrid/TeamGrid";
import Pagination from "../../Pagination/Pagination";
import { toast } from "react-toastify";
import styles from "./TeamPage.module.css";
import { getUsers } from "../../APIs/User";
import { useLogout } from "../../APIs/Auth";

function TeamPage({ setTeamPageActive }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const logout = useLogout();

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  useEffect(() => {
    setTeamPageActive(true);
  }, []);

  async function fetchUsers() {
    try {
      setIsLoading(true);
      const data = await getUsers({ currentPage, searchQuery });
      if (!data) {
        await logout();
        toast.error("You are logged out! Login again to continue");
        return;
      }
      if (data?.err) {
        toast.error(data.err);
        setUsers([]);
        setTotalPage(0);
        setCurrentPage(1);
      } else {
        if (isNaN(data?.totalPages) || isNaN(data?.currentPage)) {
          toast.error("Something went wrong! Please try again");
          return;
        }
        setUsers(data?.filteredUsers);
        setTotalPage(data?.totalPages);
        if (data.totalPages < currentPage && currentPage > 1) {
          setCurrentPage(data.totalPages);
        }
      }
    } catch (error) {
      setUsers([]);
      setTotalPage(0);
      setCurrentPage(1);
      toast.error("Something went wrong! Please try again");
    } finally {
      setIsLoading(false);
    }
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main
      className={styles.teamPage}
      style={{ zIndex: 0 }}
    >
      <h1>Our Team</h1>
      <SearchBar
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchUsers={fetchUsers}
      />
      <TeamGrid
        users={users}
        fetchUsers={fetchUsers}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
}

export default TeamPage;
