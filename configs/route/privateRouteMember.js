import { useRouter } from "next/router";
import cookies from "next-cookies";

const privateRouteMember = (req) => {
    const router = useRouter();
    const isAuth = cookies(req).user_isAuth;
    const role = cookies(req).user_role;
    if(isAuth!=="true"){return router.push("/member/login");}
    else if (isAuth === "true"&&role==="admin") {return router.push("/admin/home");
    }
}

export default privateRouteMember;