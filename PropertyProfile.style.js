import { alignCenter } from "component/VendorStatusContainer/VendorStatusContainer.style";
import { whiteColor, shadowColor } from "theme/color";
import {
  fontsize16,
  fontsize32,
  poppins500,
  poppins600,
  poppins400,
  poppins700,
} from "theme/common.style";

export const rowSpace = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
};

export const statusCard = () => ({
  // height: "187px",
  background: whiteColor,
  boxShadow: `0px 1px 8px ${shadowColor}`,
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  ".MuiGrid-root": {
    flexGrow: "1",
  },
});
export const dayDispContainer = {
  background: whiteColor,
  boxShadow: `0px 1px 8px ${shadowColor}`,
  borderRadius: "5px",
  width: "19%",
  height: "110px",
  alignItems: "center",
  justifyContent: "center",
};
export const singleContainer = {
  ...dayDispContainer,
  width: "40%",
};
export const dayTextFont = {
  ...poppins600,
  textAlign: "center",
  ...fontsize32,
};
export const dayTextBottom = {
  display: "flex",
  alignItems: "center",
  ...poppins500,
  ...fontsize16,
  textAlign: "center",
  color: "#666666 !important",
};
export const auction = {
  display: "flex",
  marginTop: "20px",
  fontSize: "24px",
  fontWeight: 500,
};
export const seperator = {
  ...poppins500,
  fontSize: "48px",
  display: "flex",
  alignItems: "center",
};
export const termsCondition = {
  border: "1px solid #AF05FF",
  borderRadius: "5px",
  ...poppins500,
  ...fontsize16,
  padding: "10px",
  textAlign: "center",
  color: "#555252",
};

export const icon = {
  fontSize: "17px",
  marginTop: "3px",
  marginRight: "5px",
};
export const marginTop20 = {
  marginTop: "20px",
};
export const featureContent = {
  ...poppins500,
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#666666 !important",
  width: "33%",
};
export const featureIcon = {
  backgroundColor: "rgba(108, 42, 210, 0.10)",
  color: "#6D3AD6",
  borderRadius: "5px",
  fontSize: "25px",
  padding: "4px",
};
export const inputComponent = {
  borderRadius: "5px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)",
};
export const inputButton = {
  borderRadius: "8px",
  backgroundColor: "#965CF0",
  fontSize: "20px",
  ...poppins500,
  ...alignCenter,
};
export const lorem = {
  borderRadius: "8px",
  color: "#666666",
  fontSize: "20px",
  ...poppins400,
  ...alignCenter,
};
export const loco = {
  backgroundColor: "#200E32",
};
export const typoimg = {
  backgroundColor: "#6C2AD2",
  width: "146px",
  height: "40px",
  borderRadius: "5px",
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
};
export const typo = {
  color: "#FFFFFF",
  ...poppins500,
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
  fontSize: "20px",
};
export const cardray = {
  backgroundColor: "#FFE512",
  width: "143px",
  height: "59px",
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
};
export const typoray = {
  color: "#4B4B4B",

  ...poppins700,
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
  fontSize: "20px",
};
export const woodenHomeLocation = {
  color: "#FFFFFF",
  width: "333px",
  height: "36px",
  ...poppins400,
  fontSize: "24px",
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
};
export const woodenHometypo = {
  color: " #FFFFFF",
  width: "302px",
  height: "60px",
  ...poppins700,
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
  fontSize: "40px",
  flexDirection: "column",
};
export const profile = {
  backgroundColor: "#FFFFFF;",
  width: "400px",
  height: "66px",
  borderRadius: "33px 5px 5px 33px",
  ...alignCenter,
  justifyContent: "center",
  display: "flex",
};
