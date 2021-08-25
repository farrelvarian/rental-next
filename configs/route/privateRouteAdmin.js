import cookies from "next-cookies";

export function privateRouteAdmin(getServerSideProps) {
  return async (ctx) => {
    const req = ctx;
    const isAuth = cookies(req).user_isAuth;
    const role = cookies(req).user_role;
    if (isAuth !== "true") {
      return {
        redirect: {
          permanent: false,
          destination: `/admin/login`,
        },
      };
    } else if (isAuth === "true" && role === "member") {
      return {
        redirect: {
          permanent: false,
          destination: `/member/home`,
        },
      };
    }
    return await getServerSideProps(ctx);
  };
}
