type TradeItem = {
  id: string;
  imageUrl: string;
  //글 제목
  title: string;
  //주소
  location: string;
  //시간대
  createdAt: Date;
  updatedAt?: Date;
  //판매가
  price: number;
};

export const tradeItems: TradeItem[] = [];
