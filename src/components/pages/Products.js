import React, { Component } from 'react'
import Container from '../layout/Container.js'
class Products extends Component {

    constructor(props){
        super(props);
        this.state ={products:[]}
    }
    componentDidMount(){
        this.getProductList();
    }

    getProductList(){
       fetch('http://localhost:5001/api/Products/AllProducts')
       .then(response=> response.json())
       .then(data => {
        this.setState({products:data});
       }
    );
    }

    componentDidUpdate(){
        this.getProductList();
    }

    render(){
        
    const {products} = this.state;

        return (
            <Container>
                 <div class="col-md-10">
               <div class="row">
             <div class="content-box-large">
                   <div class="panel-heading">
                     <div class="panel-title">Ürünler ve Bilgileri</div>
                     <br/><br/><br/>
                     <button  class="btn btn-warning"><i class="glyphicon glyphicon-tag"></i> Yeni Ürün Ekle</button>
                 </div>
                   <div class="panel-body">
                       <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example">
                         <thead>
                             <tr>
                                 <th>ID</th>
                                 <th>Ad</th>
                                 <th>Fiyat</th>
                                 <th>Açıklama</th>
                                 <th>Stok</th>
                                 <th>Beden</th>
                                 <th>Ürün Kodu</th>
                                 <th>Kategori</th>
                                 <th>İşlemler</th>
                             </tr>
                         </thead>
                         {products.map(function(product,i){ 
                         <tbody>
                             <tr key={i}>
                                 <td >{product.productId}</td>
                                 <td >{product.name}</td>
                                 <td >{product.price}</td>
                                 <td >{product.description}</td>
                                 <td >{product.stock}</td>
                                 <td >{product.bodySize}</td>
                                 <td >{product.productCode}</td>
                                 <td >{product.categoryId}</td>
                                 <td ><button  class="btn btn-primary"><i class="glyphicon glyphicon-pencil"></i> Güncelle</button>
                                     <button onClick={()=> this.deleteProduct(product.productId)}  class="btn btn-danger"><i class="glyphicon glyphicon-remove"></i> Sil</button></td>
                             </tr>
                         </tbody>
                        }) }
                     </table>
                   </div>
               </div>
 
               </div>
         </div>
            </Container>
     );
    }

    
}

export default Products
