import React from 'react'

function Sidebar() {
    return (
		  <div class="col-md-2">
		  	<div class="sidebar content-box">
                <ul class="nav">
                    <li class="current"><a href="/"><i class="glyphicon glyphicon-home"></i> Ana Sayfa</a></li>
                    <li><a href="/products"><i class="glyphicon glyphicon-tasks"></i> Ürünler</a></li>
                    <li><a href="/categories"><i class="glyphicon glyphicon-stats"></i> Kategoriler</a></li>
                    <li><a href="/orders"><i class="glyphicon glyphicon-shopping-cart"></i> Siparişler</a></li>
                </ul>
             </div>
		  </div>
    )
}

export default Sidebar

