import { useRouter } from "next/router";
import cookies from "next-cookies";

const privateRouteAdmin = (req) => {
    const router = useRouter();
    const isAuth = cookies(req).user_isAuth;
    const role = cookies(req).user_role;
    if(isAuth!=="true"){return router.push("/admin/login")}
    else if (isAuth === "true"&&role==="member") {return router.push("/member/home");
    }
}

export default privateRouteAdmin;