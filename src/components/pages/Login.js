import React from 'react'

function Login() {
    return (
        <div>
            <body class="login-bg">
  	<div class="header">
	     <div class="container">
	        <div class="row">
	           <div class="col-md-12">
	              <div class="logo">
	                 <h1><a href="/login">Shoppy Admin Panel</a></h1>
	              </div>
	           </div>
	        </div>
	     </div>
	</div>

	<div class="page-content container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="login-wrapper">
			        <div class="box">
			            <div class="content-wrap">
			                <h6>GİRİŞ YAP</h6>
							<label><i class="glyphicon glyphicon-user" ></i> Kullanıcı Adı</label>
			                <input class="form-control" type="text"placeholder="admin" required/> 
							<label><i class="glyphicon glyphicon-lock" ></i> Şifre</label>
			                <input class="form-control" type="password" placeholder="12345y" required />
			                <div class="action">
			                    <a class="btn btn-primary signup" href="/">Giriş <i class="glyphicon glyphicon-log-in" ></i></a> 
			                </div>                
			            </div>
			        </div>
			    </div>
			</div>
		</div>
	</div>
    </body>
        </div>
    )
}

export default Login
