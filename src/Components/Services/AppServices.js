import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AppService from "./AppService";
import styles from "./AppServices.module.css";
export default function AppServices() {
  const AppServices = [
    {
      id: 1,
      Icon: <LocalShippingOutlinedIcon sx={{ color: "white" }} />,
      Title: "FREE AND FAST DELIVERY",
      Description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      Icon: <HeadsetMicOutlinedIcon sx={{ color: "white" }} />,
      Title: "24/7 CUSTOMER SERVICE",
      Description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      Icon: <VerifiedUserOutlinedIcon sx={{ color: "white" }} />,
      Title: "MONEY BACK GUARANTEE",
      Description: "We return money within 30 days",
    },
  ];

  return (
    <div className={styles.ServicesCounter}>
      {AppServices.map((item) => (
        <AppService
          key={item.id}
          title={item.Title}
          description={item.Description}
          serviceIcon={item.Icon}
        />
      ))}
    </div>
  );
}
