var mongoose = require('mongoose'),
    Product = mongoose.model('Product');
    Cart = mongoose.model('Cart');


    module.exports = {
        index: (req, res) => {
            Product.find({}, (err, products) => {
                if (err) {
                    console.log(err);
                    res.status(400).json(err.errors)
                }
                else {
                    console.log(products)
                    res.json(products);
                }
            });
        },
    
        create: (request, response) => {
            console.log("Entered server")
            var product = new Product({
                name: request.body.name, 
                description: request.body.desc,
                price: request.body.price,
                img: request.body.image,
                category: request.body.category
            });
            product.save((err, product) => {
                if (err) {
                    console.log('Something went wrong', err.message);
                    response.json(err.errors);
                }
                else {
                    console.log('Successfully added an author!', product);
                }
            });
        },
    
        show: (request, response) => {
            console.log("The task id requested is:", request.params.id);
            Product.findOne({ _id: request.params.id }, (err, resturant) => {
                if (err) {
                    console.log(err);
                    response.status(400).json(err.errors);
                }
                else {
                    console.log(resturant);
                    response.json(resturant);
                }
            });
        },
    
      addreview: (req, res) => {
        Review.create(req.body, (err, data) => {
          if (err){
            res.json(err.errors)
          }
          else {
            Resturant.findOneAndUpdate({_id: req.params.id}, {$push: {review: data}}, (err, data) =>{
              if (req.body.name < 4){
                res.json(err.errors)
              }
              else if (req.body.star == undefined) {
                res.json(err.errors)
              }
              else if (req.body.review < 4) {
                res.json(err.errors)
              }
              else{
                console.log("Success pt2.")
              }
            })
        }
      }
      )},

      getTools: (req, res) => {
        Product.find({ category: "tools"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getBestsellers: (req, res) => {
        Product.find({ category: "bestsellers"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getNew: (req, res) => {
        Product.find({ category: "new"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getSolars: (req, res) => {
        Product.find({ category: "solar"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getU20s: (req, res) => {
        Product.find({ category: "U20"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      getWindups: (req, res) => {
        Product.find({ category: "windup"}, (err, products) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log(products)
                res.json(products);
            }
        });
      },

      addToCart: (req, res) => {
        //console.log("Server")
        //Product.findById({_id: req.params.id},(err, product) => {
            //Product.create(product, (err, data) => {
                //console.log("This is data: ", data);
                //Cart.find({status: "use"}, (err, cart) => {
                    //cart.push(product);
                    //console.log("This is cart: ",cart)
                //})
            //})      
        //})
        console.log("Inside: ", req.body)
        var quanity = 1;
        var userId = 1;
        var productId = req.body._id;
        Cart.update({
        $push: {
            items: {
                _id: productId,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                img: req.body.img,
                category: req.body.category
                }
            }
        }, (err, cart) => {
            console.log("THIS IS CART: ", cart);
            console.log("THIS IS ERROR: ", err);
        });
        console.log("Outside")
    },

    getCart: (req, res) => {
        Cart.find({}, (err, cart) => {
            if (err) {
                console.log(err);
                res.status(400).json(err.errors)
            }
            else {
                console.log("This is cart: ", cart[0].items)
                res.json(cart[0].items);
            }
        });
    }
    
}
    
    