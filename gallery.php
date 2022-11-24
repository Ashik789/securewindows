
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Secure || Windows & Doors</title>

    <?php include("containers/style.php") ?>
    
</head>

<body class="gradients" data-spy="scroll" data-target=".navbar" data-offset="90">

<?php include("containers/header.php") ?>

<section class="inner-heading">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="inner-title">
                        <h2>Gallery</h2>
                        <ol>
                            <li><a href="index">Home</a></li>
                            <i class="fas fa-angle-right"></i>
                            <li>Gallery</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <button class="bt-main">Photo Gallery</button>
                    <h2>Elegance <span>Portfolio</span></h2>
                    <p>Aenean tristique eget diam sed faucibus. Vivamus lacinia libero suscipit massa egestas, non dignissim lectus ultrices. 
                        Proin in eros pellentesque nulla porttitor rutrum in eget nisl Vivamus condimentum justo blandit, hendrerit ipsum ac, imperdiet mi. 
                        In sagittis, diam id tristique malesuada, nunc dui efficitur ex, et dignissim nibh lacus quis ipsum.</p>
                </div>
                <div class="col-md-12 text-center">
                    <ul id="filters" class="clearfix">
                      <li><span class="filter active " data-filter="*">All</span></li>
                      <li><span class="filter" data-filter=".doors">Doors</span></li>
                      <li><span class="filter" data-filter=".windows"> Windows</span></li>
                    </ul>
                    <div id="portfoliolist">
                        <div class="portfolio  doors" data-cat="doors">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-1.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-1.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  doors" data-cat="doors">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-2.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-2.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  windows" data-cat="windows">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-3.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-3.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  doors" data-cat="doors">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-4.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-4.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  windows" data-cat="windows">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-5.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-5.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  windows" data-cat="windows">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-6.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-6.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  doors" data-cat="doors">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-7.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-7.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio  doors" data-cat="doors">
                            <div class="gallery-box">
                                <img src="images/gallery/gallery-8.png">
                                <div class="gallery-box-overlay">
                                    <a href="images/gallery/gallery-8.png" class="image-popup"><h5><i class="fas fa-search"></i></h5></a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>

            </div>
        </div>
    </section>


  
<?php include("containers/footer.php") ?>

<script src="js/jquery.mixitup.min.js"></script>

    <script type="text/javascript">
        // gallery masonry - start
 // --------------------------------------------------
 $(function () {
       
       var filterList = {
       
           init: function () {
           
               // MixItUp plugin
               // http://mixitup.io
               $('#portfoliolist').mixItUp({
                 selectors: {
                 target: '.portfolio',
                 filter: '.filter'	
             },
             load: {
               filter: '*'  
             }     
               });								
           
           }

       };
       
       // Run the show!
       filterList.init();
       
       
   });	
 
 // gallery masonry - end
 // --------------------------------------------------
 


   </script>


</body></html>
