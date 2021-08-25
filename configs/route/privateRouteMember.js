import cookies from "next-cookies";

export function privateRouteMember(getServerSideProps) {
  return async (ctx) => {
    const req = ctx;
    const isAuth = cookies(req).user_isAuth;
    const role = cookies(req).user_role;
    if (isAuth !== "true") {
      return {
        redirect: {
          permanent: false,
          destination: `/member/login`,
        },
      };
    } else if (isAuth === "true" && role === "admin") {
      return {
        redirect: {
          permanent: false,
          destination: `/admin/home`,
        },
      };
    }
    return await getServerSideProps(ctx);
  };
}
