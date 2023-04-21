import React from "react";

import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";

import Icons from "../Icons";

import "./searchBar.css";

const SearchBar = (props) => {
  const { handleSearch, searchQuery, setSearchQuery } = props;

  return (
    <Grid container spacing={2} className="searchGrid">
      <Grid item xs={1} />
      <Grid item xs={8}>
        <TextField
          placeholder="Search Images..."
          value={searchQuery}
          className="inputRounded"
          fullWidth
          autoComplete="off"
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <>
                {searchQuery !== "" && (
                  <IconButton onClick={() => setSearchQuery("")}>
                    <Icons.Close />
                  </IconButton>
                )}
              </>
            ),
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          startIcon={<Icons.Search />}
        >
          <Typography style={{ color: "#FFFFFF" }}>Search</Typography>
        </Button>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default SearchBar;
