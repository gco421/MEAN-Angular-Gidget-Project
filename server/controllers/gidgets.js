var mongoose = require('mongoose'),
    Product = mongoose.model('Product');


    module.exports = {
        index: (request, response) => {
            User.find({}, (err, users) => {
                if (err) {
                    console.log(err);
                    response.status(400).json(err.errors)
                }
                else {
                    console.log(resturants)
                    response.json(resturants);
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
                    console.log('Successfully added a product!', product);
                }
            });
        },
    
        show: (request, response) => {
            console.log("The task id requested is:", request.params.id);
            Resturant.findOne({ _id: request.params.id }, (err, resturant) => {
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
    
        update: (request, response) => {
            console.log('The task id requested is:', request.params.id);
            Resturant.update({ _id: request.params.id }, {
                name: request.body.name,
                cuisine: request.body.cuisine
            }, (err, resturant) => {
                if (err) {
                    console.log('There was an error', err);
                    response.status(400).json(err.errors);
                }
                else {
                    console.log('Successfully edited an author!')
                    response.json(resturant);
                }
            });
        },
    
        destroy: (request, response) => {
            console.log('The task id requested is:', request.params.id);
            Resturant.remove({ _id: request.params.id }, (err, resturant) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('Author has successfully been removed!')
                    response.json(resturant)
                }
            });
        },
    
        find: (req, res) => {
        Resturant.findById({_id: req.params.id},
        function(err, resturant) {
        // if there is an error console.log that something went wrong!
        if(err){
            console.log('Something went wrong', err);
            res.json({message: "Something went wrong", error: err});
        } else { // else console.log that we did well and then display on the index
            res.json(resturant);
        }
        })
      },
    
      findReview: (req, res) => {
      Resturant.findById({_id: req.params.id},
      function(err, resturant) {
      // if there is an error console.log that something went wrong!
      if(err){
          console.log('Something went wrong', err);
          res.json({message: "Something went wrong", error: err});
      } else { // else console.log that we did well and then display on the index
          res.json(resturant['review']);
      }
      })
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
      )}

    }
    
    