import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";

//props를 먼저 정의할때 타입을 지정하라.

type TradeInformationType = {
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
};

const TradeInfomation = (information: TradeInformationType) => {
  const { title, location, price, createdAt, updatedAt } = information;
  const date = updatedAt != null ? moment(updatedAt) : moment(createdAt);
  const displayDate = date.format("YYYY-MM-DD HH:mm");

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" style={{ color: "rgba(0,0,0,0.5)" }}>
        {location}.{displayDate}
      </Typography>
      <Typography variant="subtitle1">
        <strong>{price}원</strong>
      </Typography>
    </Box>
  );
  //제목, 위치, 가격을 한 덩어리로 묶음
  // 타이포그래피로 출력
};
export default TradeInfomation;
