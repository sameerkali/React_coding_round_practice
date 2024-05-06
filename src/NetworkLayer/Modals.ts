interface PhoneRequestBody {
  phoneNumber: string;
}
interface VerifyOtpRequestBody {
  otp: string;
}

export type {PhoneRequestBody, VerifyOtpRequestBody};
