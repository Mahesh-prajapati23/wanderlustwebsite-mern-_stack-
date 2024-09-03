const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync");
const Review = require("../models/review.js");
const Listing=require("../models/listing");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")




// Reviews
//      Post review route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview ));

//       Delete review route
router.delete("/:reviewID",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.desroyReview));

module.exports=router;