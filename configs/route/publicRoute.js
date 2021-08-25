import { useRouter } from "next/router";
import cookies from "next-cookies";

const publicRoute = (req) => {
  const router = useRouter();
  const isAuth = cookies(req).user_isAuth;
  const role = cookies(req).user_role;
  if (isAuth === "true") {
    return router.push(`/${role}/home`);
  }
};

export default publicRoute;
