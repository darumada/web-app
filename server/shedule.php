<?
	require_once('database.php');

	if (isset($_POST['type'])) {

		$type = $_POST['type'];
		$user_id = $_POST['id']; 
		$day = $_POST['day'];

		$user_sql = "SELECT * FROM users WHERE id='$user_id'";
		
		$user_rez = $conn->query($user_sql);

		if ($user_rez->num_rows === 1) { 
	    while($row = $user_rez->fetch_assoc()) {
	    	$group = $row['group_college'];
	   	} 	
   }

		$shedule_sql = "SELECT * FROM shedule WHERE type='$type' AND group_college='$group' AND day='$day'";

		$shedule_rez = $conn->query($shedule_sql);

		if ($shedule_rez->num_rows === 1) { 
	    while($row = $shedule_rez->fetch_assoc()) {
	    	$response = array(
	    		lessons => array (
	    			$row['one'],
	    			$row['two'],
	    			$row['three'],
	    			$row['four'],
	    			$row['five'],
	    			$row['six']
	    		),
    			group => $row['group_college'],
    			day => $row['day'],
    			type => $row['type']
    		);
    		echo json_encode($response);
	   	} 	
   }

	}
?>