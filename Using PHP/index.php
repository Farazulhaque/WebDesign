<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Month</title>
</head>
<style>
    /* to style table */
    table,
    tr,
    td {
        border: 1px solid black;
        border-collapse: collapse;
        font-weight: bold;
    }

    td {
        width: 200px;
        padding-left: 10px;
    }
</style>

<body>
    <!-- create simple form to get user input -->
    <form method="POST">
        Enter month number <input type="number" min="1" max="12" name="month">
        <input type="submit" name="submit" value="Submit" />
        <br><br>
    </form>
    <!-- php code to print table -->
    <?php
    if(isset($_POST['submit'])){
        // store user input into monthNumber variable
        $monthNumber = $_POST['month'];
        // store name of the months in an array
        $monthName = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        // store number of each months in an array
        $days = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        // initialise daysInYear to 0
        $daysInYear = 0;

        // create table
        echo "<table>";
        // create first row
        echo "<tr>";
        // create first column
        echo "<td> Name of the month </td>";
        // create second column
        // get value stored at index $monthNumber-1 of monthName array to get name of the month
        echo "<td>". $monthName[$monthNumber-1]."</td>";
        // close first row
        echo "</tr>";
        // create second row
        echo "<tr>";
        echo "<td> Number of the month </td>";
        echo "<td>".$monthNumber."</td>";
        // close second row
        echo "</tr>";
        // create third row
        echo "<tr>";
        echo "<td> Last day of the month </td>";
        // get value stored at index of $monthNumber-1 in days array to get days of the month
        echo "<td>".$days[$monthNumber-1]."</td>";
        // close third row
        echo "</tr>";
        // create fourth row
        echo "<tr>";
        echo "<td> Number of day in year </td>";
        // loop to to get total days in year
        // loop until monthNumber
        // add value to $daysInYear on each iteration
        for ($x = 0; $x < $monthNumber; $x++) 
            $daysInYear += $days[$x];
        echo "<td>". $daysInYear."</td>";
        // close fourth row
        echo "</tr>";
        // close table
        echo "</table>";
    }
    ?>

</body>

</html>