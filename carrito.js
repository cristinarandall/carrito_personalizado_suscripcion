


    var products_array = [];
    
    conekta.setToken("KDeu5s4hZHRH3eP7eff2");
    conekta.display.getProducts({}, function(p){    
    for (var i = 0, l = p.length; i < l; ++i) {
    products_array[i] = p[i];
    
    var id = p[i].getAttributes()["id"];
    var price = p[i].getAttributes()["price"];
    var image = p[i].getAttributes()["image"];
    image = image.replace("catalog_main","three_col");
    var title = p[i].getAttributes()["name"];

    
                                var html = '<li class="ajax_block_product span3  num-1 "> <div class="featured_li">  <a class="product_image" href="product.html#product_id=' + id +'" data-original-title="' + title + '"> <img src="' + image +'" class="main-img"/>   <img src="' + image + '" alt="" style="display:none;" class="next-img"/> </a>  <div> <span class="price"> $ ' + price + '</span>  <h5><a class="product_link" href="product.html#product_id=' + id +'" title=""> ' + price + '</a></h5>  <p class="product_desc"> </p> <div class="clearfix"> </div>  <a class="exclusive ajax_add_to_cart_button btn_add_cart" href="product.html#product_id=' + id +'" rel="ajax_id_product_1" > <span>Agregar al Carrito</span>  </a> <a class="button" rel="tooltip" href="product.html#product_id=' + id +'" data-placement="bottom">Ver</a> </div> </div> </li>'
                                
                                
    $(".center_column .addhomefeatured .row").append(html);
    
    
    }

    });


