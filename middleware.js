import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware(
  {
    publicRoutes: [
      "/","/login","/discover","/favourites","/test2"
    ]
  }
);
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
