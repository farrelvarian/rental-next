import cookie from "cookie";
import axios from "axios";

const login = (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const data = {
      email,
      password,
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}login`,data,{
      withCredentials: true,
    })
      .then((response) => {
        const result = response.data.user;
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.setHeader("Set-Cookie", [
          cookie.serialize("token", result.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7200000,
            path: "/",
          }),
          cookie.serialize("user_id", result.id, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7200000,
            path: "/",
          }),
          cookie.serialize("user_role", result.role, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7200000,
            path: "/",
          }),
          cookie.serialize("user_isAuth", true, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7200000,
            path: "/",
          }),
        ]);

        res.status(200);
        res.json({ data: result });
      })
      .catch((error) => {
        console.log(error, "erpr");
      });
  }
};
export default login;