import { OAuth2Client } from "google-auth-library";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(googleClientId);

export const getTicket = async (idToken: string) => {
  return await googleClient.verifyIdToken({
    idToken,
    audience: googleClientId,
  });
}
