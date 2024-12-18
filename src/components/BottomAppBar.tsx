import { Box } from "@mui/system";
import { AppBar, Grid } from "@mui/material";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RoomIcon from "@mui/icons-material/Room";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";

type MenuType = {
  title: string;
  icon: JSX.Element;
};

const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};

const BottomAppBar = () => {
  const menuItem: MenuType[] = [
    {
      title: "홈",
      icon: <HomeIcon />,
    },
    {
      title: "동네생활",
      icon: <ApartmentIcon />,
    },
    {
      title: "내 근처",
      icon: <RoomIcon />,
    },
    {
      title: "체팅",
      icon: <ChatIcon />,
    },
    {
      title: "나의당근",
      icon: <PersonIcon />,
    },
  ];

  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Grid container>
        {menuItem.map((item: MenuType): JSX.Element => {
          return (
            <Grid item xs key={item.title}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={MenuStyle}
                >
                  {item.icon}
                  {item.title}
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </AppBar>
  );
  {
    /* flex란? - 화면을 쏠리게 할 방식
   justifyContent - 내용물을 어떻게 분배할건가 */
  }
};
export default BottomAppBar;
