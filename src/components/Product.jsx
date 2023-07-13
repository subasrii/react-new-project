
import React from 'react'
import 'bootstrap/dist/css/product.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import f1 from"../images/f1.jpeg"
import f2 from"../images/f2.jpeg"
import f3 from"../images/f3.jpeg"
import f4 from"../images/f4.jpeg"
import f5 from"../images/f5.jpeg"
import f6 from"../images/f6.jpeg"
import f7 from"../images/f7.jpeg"
import b1 from"../images/b1.jpeg"
// import flag from"../images/flag.jpeg"

function Product() {
  return (
    <section class="section-products">
    <div class="container" >
            <div class="row justify-content-center text-center" >
                    <div class="col-md-8 col-lg-6">
                            <div class="header">
                                    <h3> Product items </h3>
                                    <h2>Popular Products</h2>
                            </div>
                    </div>
            </div>
            <div class="row">
                  
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-1" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f5})`,
    backgrounRepeat:'no-repeat'}}>
                                          <ul>
                                                    <li><a href="menu"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">delicious chicken gravy</h3>
                                            <h4 class="product-old-price">$79.99</h4>
                                            
                                    </div>
                            </div>
                   
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-2" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f1})`,
    backgrounRepeat:'no-repeat'}}>
                                            <span class="discount">15% off</span>
                                            <ul>
                                                    <li><a href="menu"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">chicken peper fry</h3>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-3" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f2})`,
    backgrounRepeat:'no-repeat'}}>
                                            <ul>
                                                    <li><a href=""><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">non with gravy</h3>
                                            <h4 class="product-old-price">$79.99</h4>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
                
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-4" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${b1})`,
    backgrounRepeat:'no-repeat'}}>
                                            <span class="new">new</span>
                                            <ul>
                                                    <li><a href="menu"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">briyani</h3>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
                  
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-1" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f4})`,
    backgrounRepeat:'no-repeat'}}>
                                            <ul>
                                                    <li><a href="menu"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">veg meals</h3>
                                            <h4 class="product-old-price">$79.99</h4>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-2" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f3})`,
    backgrounRepeat:'no-repeat'}}>
                                            <span class="discount">15% off</span>
                                            <ul>
                                                    <li><a href="menu"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">fish fry</h3>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
                   
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-3" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f6})`,
    backgrounRepeat:'no-repeat'}}>
                                            <ul>
                                                    <li><a href="menu"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">sweets</h3>
                                            <h4 class="product-old-price">$79.99</h4>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 col-xl-3">
                            <div id="product-4" class="single-product">
                                    <div class="part-1" style={{backgroundImage: `url(${ f7})`,
    backgrounRepeat:'no-repeat'}}>
                                            <span class="new">new</span>
                                            <ul>
                                                    <li><a href="/"><i class="fas fa-shopping-cart"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-heart"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-plus"></i></a></li>
                                                    <li><a href="/"><i class="fas fa-expand"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                            <h3 class="product-title">faloda</h3>
                                            <h4 class="product-price">$49.99</h4>
                                    </div>
                            </div>
                    </div>
            </div>
    </div>
</section>
  )
}

export default Product