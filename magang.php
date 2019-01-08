
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="style.css">
<head>
    <meta charset="utf-8">
    <title>Magang</title>
</head> 

<body>
 
<div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
        <tr class="top">
            <td colspan="2">
                <table>
                    <tr>
                        <td class="title">
                            <img src= <?php echo "ArkanaLogo.png"?> style="width:100%; max-width:100px;">
                        </td>   
                        <td>
                            <?php
                             echo "Invoice : 123<br>";
                             echo "Created      " . date("d/m/Y") . "<br>";
                            ?>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <tr class="information">
            <td colspan="2">
                <table>
                    <tr>
                        <td>
                            <?php
                            echo "PT Arkana Solusi Digital<br>";
                            echo "12345 Tole Iskandar Street<br>";
                            echo "Depok, West Java 12345";
                            ?>
                        </td>
                        
                        <td>
                        <?php
                            echo "Padjadjaran University.<br>";
                            echo "John Doe<br>";
                            echo "john@example.com";
                        ?>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <tr class="heading">
            <td>
            <?php
                echo "ASSETS";
            ?>
            </td>
            
            <td>
            <?php
                echo "3000";
            ?>
            </td>
        </tr>
        
        <tr class="details">
            <td>
            <?php
                echo "Check";
            ?>
            </td>
            
            <td>
            <?php
                echo "1000";
            ?>
            </td>
        </tr>
        
        <tr class="heading">
            <td>
            <?php
                echo "Liabilities";
            ?>
            </td>
            
            <td>
            <?php
                echo "2000";
            ?>
            </td>
        </tr>
        
        <tr class="item">
            <td>
            <?php
                echo "Website design";
            ?>
            </td>
            
            <td>
            <?php
                echo "$300.00";
            ?>
            </td>
        </tr>
        
        <tr class="item">
            <td>
            <?php
                echo "Hosting (3 months)";
            ?>
            </td>
            
            <td>
            <?php
                echo "$75.00";
            ?>
            </td>
        </tr>
        
        <tr class="item last">
            <td>
            <?php
                echo "Domain name (1 year)";
            ?>
            </td>
            
            <td>
            <?php
                echo "$10.00";
            ?>
            </td>
        </tr>
        
        <tr class="heading">
            <td>
            <?php
                echo "EQUITY";
            ?>
            </td>
            
            <td>
            <?php
                echo "2000";
            ?>
            </td>
        </tr>
         <tr class="details">
            <td>
            <?php
                echo "Check";
            ?>
            </td>
            
            <td>
            <?php
                echo "1000";
            ?>
            </td>
        </tr>
        <tr class="total">
            <td></td>
            
            <td>
            <?php
               echo "Total: $385.00";
            ?>
            </td>
        </tr>
    </table>
</div>
</body>
</html>
