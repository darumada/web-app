<?
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "app";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

	if (isset($_POST['submit'])) {

		$login = $_POST['login'];
		$password = $_POST['password'];
		
		$sql = "SELECT * FROM users WHERE login='$login'";
		$rez = $conn->query($sql);

		if ($rez->num_rows === 1) {
    
    while($row = $rez->fetch_assoc()) {

    	if ($row['password'] == $password) {
    		$response = array(
    			isLogin => true,
    			id => $row['id']
    		);
    		echo json_encode($response);
    	}
        
    }

		} else {
		    echo "0 results";
		}
		$conn->close();

	
	}
?>