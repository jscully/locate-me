import React, { FC, useState, ChangeEvent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

interface Props {
  search: (searchTerm: string) => void;
  searchFieldValue: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      width: 600,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

const SearchBar: FC<Props> = (props) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.keyCode === 13) {
      e?.preventDefault();
      props.search(searchTerm);
    }
  };

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.searchFieldValue} // TODO put this in a prop
        value={searchTerm}
        onChange={(event) => {
          update(event);
        }}
        onKeyDown={(event) => {
          keyPress(event);
        }}
      />
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton className={classes.iconButton} aria-label="search" onClick={() => props.search(searchTerm)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
