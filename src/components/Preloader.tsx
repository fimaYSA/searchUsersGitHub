import {FC} from "react";
import {SyncOutlined} from "@ant-design/icons";

export const Preloader: FC = () => {
  return (
    <div><SyncOutlined spin style={{fontSize: '2rem'}}/></div>
  )
}
