export const baseUrl = "https://backended.krazy11.in";
// Used for async storage
export const storageKeys = {
  kTOKEN: "token",
  kEMAIL: "email",
  kPASSWORD: "password",
  kPROFILE_IMAGE: "profileImage",
  kPROFILE_DETAILS: "profileDetails",
  kDEVICETOKEN: "deviceToken"
};

export const EndPoints = {
  GETDATAENDPOINT: "/send-otp",
  PHONELOGIN: "/send-otp",
  VERIFY_OTP: "/check-otp/",
  GET_USER_DETAIL: "/getUserDetail",
  UPDATE_USER_DETAIL: "/updateUser",
  UPLOAD_USER_IMAGE: "/uploadProfileImage",
  COMPLETE_KYC: "/kycComplete",
  ADD_EMAIL: "/addEmail",
  VERIFY_EMAIL_OTP: "/verifyEmailOTP"
};

export default {
  baseUrl,
  EndPoints
};
