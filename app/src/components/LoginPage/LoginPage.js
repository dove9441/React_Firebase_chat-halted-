import React from "react"
//Link를 사용하기 위해
import {Link} from "react-router-dom";

function LoginPage(){
	return (
		<div className="auth-wrapper">
			<div style={{ textAlign: 'center'}}>
				<h3>Login</h3>
			</div>
			<form>
			  {/* register your input into the hook by invoking the "register" function */}
			  <label>Email</label>
			  <input type="email" />

			  {/* include validation with required or other standard HTML validation rules */}
			  <label>Password</label>
			  <input type="password" />
			  {/* errors will return when field validation fails  */}


			  <input type="submit" value="SUBMIT" />
				<Link style={{ color:'gray', textDecoration:'none' }} to="/register">아직 아이디가 없다면...</Link>
    </form>
		</div>
	);
}

export default LoginPage