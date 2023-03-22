import React from "react"

//Link 태그를 이용하기 위해 import
import {Link} from "react-router-dom";

// react-hook-form 을 이용하기 위해 import
import { useForm } from "react-hook-form";

// useRef 이용하기 위해 import (react에 있다)
import {useRef} from "react";
import {useState} from "react";

// firebase import
import * as firebase from "../../firebase";


function RegisterPage(){
	
	// 변수를 가져오는 건가보다
	
	//formState : { errors } 말고 그냥 error 하면 오류난다 문법 변경인 듯
	const { register, watch, formState: { errors }, handleSubmit } = useForm({ mode : "onChange" });
	//mode를 onchange를 하지 않으면 submit을 눌러야 유효성 체크를 한다
	
	// uesRef는 어디다가 쓸까
	const password = useRef();
	password.current = watch("password");
	
	
	const [errorFromSubmit, setErrorFromSubmit ] = useState(""); 
	
	
	//계정 생성 함수(firebase)
	
	const onSubmit = async (data) => {
		
		try {
			let createdUser = await firebase
			.auth()
			.createUserWithEmailAndPassword(data.email, data.password);
		} catch (error) {
			setErrorFromSubmit(error.message);
			setTimeout(()=>{
				setErrorFromSubmit("");
			}, 5000);
		}
		
	}
	
	
	
	return (
		<div className="auth-wrapper">
			<div style={{ textAlign: 'center'}}>
				<h3>Register</h3>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
			
			  <label>Email</label>
			  <input
				  name="email"
				  type="email"
				  //...register로 연결해주는 것이다
				  {...register("email", ({required: true, pattern: /^\S+@\S+$/i}))}
				  />
			  { errors.email && <p>이메일은 필수 입력 사항입니다.</p> }
				
			  <label>Name</label>
			  <input 
				  name="name"
				  {...register("name", ({required: true, maxLength: 10}))}
				  />
				{ errors.name && errors.name.type === "required"
				&& <p>이름은 필수 입력 사항입니다.</p>}
				{ errors.name && errors.name.type ==="maxLength"
				&& <p>이름은 10자 이하여야 합니다.</p>}
				
			  <label>Password</label>
			  <input
				  name="password"
				  type="password"
				  {...register("password", {required: true, minLength: 6, maxLength: 16})}
				  />
				{ errors.password && errors.password.type === "required"
				&& <p>비밀번호는 필수 입력 사항입니다.</p>}
				{ errors.password && (errors.password.type === "minLength" || errors.password.type === "maxLength")
				&& <p>비밀번호는 6~16자 사이여야 합니다.</p>}
				
				
			  <label>Password Confirm</label>
			  <input
				  name="password_confirm"
				  type="password"
				  {...register("password_confirm", 
							   {required: true,
							   validate: (value) => 
							   value === password.current
							   })}
				  />
				
				{ errors.password_confirm && errors.password_confirm.type === "required"
				&& <p>이 항목은 필수 입력 사항입니다.</p>}
				{ errors.password_confirm && errors.password_confirm.type === "validate"
				&& <p>비밀번호가 일치하지 않습니다.</p>}
				
				
				

				{ errorFromSubmit && <p>{ errorFromSubmit }</p>}
				
			  <input type="submit" value="SUBMIT" />
			<Link style={{ color:'gray', textDecoration:'none' }} to="/login">이미 아이디가 있다면...</Link>
    </form>
			
		</div>
	);
}

export default RegisterPage

