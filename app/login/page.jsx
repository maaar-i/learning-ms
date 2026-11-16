import Image from "next/image";

export default function Login() {
  return (
    <main>

      <div>
        <img></img>
      </div>

      <div className="login-page">

        <div className="login-wallpaper">
          {/* <img src="./img/loginpfp.jpg" className="loginpfp"></img> */}
          <h1 className="login-title">LOGIN</h1>
        </div>

        <form>
          <input placeholder="Email" type="email" className="email-field"></input><br/>
          <input placeholder="Password" type="password" className="password-field"></input><br/>
          <button type="submit" className="login-submit-field">Login</button><br/>
        </form>

        <a href="#" className="forgot-password">Forgot Password?</a><br/>
      </div>

    </main>
  );
}
