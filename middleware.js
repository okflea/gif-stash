import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware(
  {
    publicRoutes: [
      "/","/login","/discover","/favourites"
    ]
  }
);
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
