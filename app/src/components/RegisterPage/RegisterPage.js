import React from "react"

function RegisterPage(){
	return (
		<div className="auth-wrapper">
			<div style={{ textAlign: 'center'}}>
				<h3>Register</h3>
			</div>
			<form>
			  {/* register your input into the hook by invoking the "register" function */}
			  <label>Example</label>
			  <input defaultValue="test"  />

			  {/* include validation with required or other standard HTML validation rules */}
			  <label>ExampleRequired</label>
			  <input />
			  {/* errors will return when field validation fails  */}


			  <input type="submit" value="SUBMIT" />
    </form>
		</div>
	);
}

export default RegisterPage

