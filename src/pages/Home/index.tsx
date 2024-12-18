import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { tradeItems } from "./data";
import TradeEvent from "./components/TradeEvent";
import TradeInfomation from "./components/TradeInformation";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

// a.map((파라미터)=>{return  변환한 무언가})

const Home = (): JSX.Element => {
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.imageUrl}
                    sx={ImageTheme}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={TradeInfomation}
                  secondary={TradeEvent}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
