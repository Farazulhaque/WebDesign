<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Data Entry Form</title>
</head>

<body>
    <h3>FOOD DATA ENTRY FORM</h3>
    <form method="post">
        Item Name: <input type="text" name="item"><br><br>
        Quantity: <input type="number" name="quantity"><br><br>
        Category: <input type="radio" name="category" value="Grains" checked>Grains<input type="radio" name="category" value="Dairy">Dairy<input type="radio" name="category" value="Vegetables">Vegetables<br><br>
        Expiry Date: <input type="date" name="expiry" value="dd-mm-yyyy"><br><br>
        <input type="submit" name="submit" value="Save Details" />
    </form>

    <?php
    if(isset($_POST['submit'])){
        $itemname = $_POST['item'];
        $quantity = $_POST['quantity'];
        $category = $_POST['category'];
        $expiry_date = $_POST['expiry'];

        if ($quantity > 0 && $quantity < 999){
            echo "<br>Item Name: ".$itemname;
            echo "<br>Food Category: ". $category;
            echo "<br>Expiry Date: ". $expiry_date;
        }
        else{
            echo "<br>Quantity must be 1 to 3 digits";
        }
    }
    ?>
</body>

</html>