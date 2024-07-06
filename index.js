<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Darren De Guzman</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <h2>Shy's Collection Of BTS Albums</h2>
      <hr class="hr" />
    </div>
  </div>
  
  <div class="row justify-content-center">
    <div class="col-md-4 text-center mb-4">
      <label id="product1">Jungkook Golden</label>
      <img src="Jungkook.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product1" id="price1">15000.00</label>
      <input type="number" class="form-control" id="qty1" placeholder="Enter quantity"/>
    </div>
  
    <div class="col-md-4 text-center mb-4">
      <label id="product2">Taehyung Layover</label>
      <img src="Taehyung.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product2" id="price2">12000.00</label>
      <input type="number" class="form-control" id="qty2" placeholder="Enter quantity"/>
    </div>
  
    <div class="col-md-4 text-center mb-4">
      <label id="product3">Jimin Face</label>
      <img src="Jimin.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product3" id="price3">14000.00</label>
      <input type="number" class="form-control" id="qty3" placeholder="Enter quantity"/>
    </div>

    <div class="col-md-4 text-center mb-4">
      <label id="product4">Jhope In the Box</label>
      <img src="Jhope.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product4" id="price4">10000.00</label>
      <input type="number" class="form-control" id="qty4" placeholder="Enter quantity"/>
    </div>

    <div class="col-md-4 text-center mb-4">
      <label id="product5">Suga's D-Day</label>
      <img src="Suga.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product5" id="price5">18000.00</label>
      <input type="number" class="form-control" id="qty5" placeholder="Enter quantity"/>
    </div>

    <div class="col-md-4 text-center mb-4">
      <label id="product6">Rm Indigo</label>
      <img src="Rm.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product6" id="price6">20000.00</label>
      <input type="number" class="form-control" id="qty6" placeholder="Enter quantity"/>
    </div>

    <div class="col-md-4 text-center mb-4">
      <label id="product7">Jin The Astronaut</label>
      <img src="Jin.jpg" style="width:400px; height:500px;" class="img-thumbnail"/>
      <label for="product7" id="price7">100000.00</label>
      <input type="number" class="form-control" id="qty7" placeholder="Enter quantity"/>
    </div>

    <div class="col-md-4">
      <label for="carts">Orders</label>
      <textarea class="form-control" rows="29" id="carts" cols="200" readonly style="width:350px; height:400px; font-size:12px;"></textarea>
      <input type="text" class="form-control border-0" id="total" readonly placeholder="Total"/>
      <input type="number" class="form-control" id="cash" placeholder="Cash Tendered"/>
      <input type="text" class="form-control border-0" id="change" readonly placeholder="Change"/>
    </div>
  </div>
</div>
<script src="index.js"></script>
</body>
</html>
