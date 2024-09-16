import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { getAllUser } from "../services/user";
import { Box, Button, Grid2, TextField } from "@mui/material";

export default function HomePage() {
  const [allUser, setAllUser] = useState([]);
  const [searchTerm, setSearhTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>(allUser);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    async function fetchAllUser() {
      try {
        const users = await getAllUser();
        console.log(users);
        setAllUser(users);
        setFilteredResults(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllUser();
  }, []);

  function handleSearchInput(value: string) {
    setSearhTerm(value);
    const results = allUser.filter(
      (item: any) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
    console.log(results);
  }

  const handleSort = () => {
    const sortedResults = [...filteredResults].sort((a, b) => {
      if (isAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredResults(sortedResults);
    setIsAscending(!isAscending);
  };

  return (
    <Box>
      <Grid2 container spacing={2} sx={{ alignItems: "center" }}>
        <Grid2 size={10}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search name or email..."
            onChange={(e) => handleSearchInput(e.target.value)}
          />
        </Grid2>
        <Grid2 size={1}>
          <p>
            {filteredResults.length <= 1
              ? `${filteredResults.length} row`
              : `${filteredResults.length} rows`}
          </p>
        </Grid2>
        <Grid2 size={1}>
          <Button variant="outlined" onClick={handleSort}>
            {isAscending ? "A to Z" : "Z to A"}
          </Button>
        </Grid2>
      </Grid2>
      {allUser && (
        <>
          {filteredResults.map((u: any) => (
            <UserCard
              mark={searchTerm}
              key={u.id}
              name={u.name}
              email={u.email}
              address={u.address}
              gender={u.gender}
              createdAt={u.createdAt}
              aboutme={u.aboutme}
              avatar={u.avatar}
              id={u.id}
            />
          ))}
        </>
      )}
    </Box>
  );
}
