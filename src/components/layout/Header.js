import React from 'react'

function Header() {
    return (
            <div class="header">
	     <div class="container">
	        <div class="row">
	           <div class="col-md-6">
	              <div class="logo">
	                 <h1><a href="index.html">Shoppy Admin Panel</a></h1>
	              </div>
	           </div>
	           <div class="col-md-6">
	              <div class="navbar navbar-inverse" role="banner">
	                  <nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
	                    <ul class="nav navbar-nav">
	                      <li class="dropdown">
	                        <a href="/" class="dropdown-toggle" data-toggle="dropdown">Hesabım <b class="caret"></b></a>
	                        <ul class="dropdown-menu animated fadeInUp">
	                          <li><a href="/">Profilim <i class="glyphicon glyphicon-user"></i></a></li> 
	                          <li><a href="/login">Çıkış Yap <i class="glyphicon glyphicon-log-out"></i></a></li>
	                        </ul>
	                      </li>
	                    </ul>
	                  </nav>
	              </div>
	           </div>
	        </div>
	     </div>
	</div>
    )
}

export default Header
