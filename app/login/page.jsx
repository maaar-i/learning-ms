import Image from "next/image";

export default function Login() {
  return (
    <main>

      <div className="login-page">
                  <div className="login-wallpaper">
              <img src="./img/loginwallp.JPG"></img>
          </div>

          <div class="login-form">
            <img src="./img/loginpfp.JPG"></img>
            <h1>LOGIN</h1>

                          <form>
                  <p class="input">
                      <i class="fa-solid fa-circle-user"></i>
                    <input type="email" placeholder="Email"></input>
                  </p>

                  <p  class="input">
                      <i class="fa-solid fa-lock"></i>
                      <input type="password" placeholder="Password"></input>
                  </p>
                  
                  <a href="#" class="forgot-pass">Forgot Password?</a>

                  <button type="submit">LOGIN</button><br/>
              </form>
          </div>
      </div>
    </main>
  );
}
