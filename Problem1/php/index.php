<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$obj = $_POST['pattern'];

// ここに処理を記述してください。
$hashmapJson = json_decode($obj, true);
$hashmap = $hashmapJson["obj"];
$result = "";
for ($i = 1; $i <= 30; $i++) {
    $curr = "";
    for ($j = 0; $j < count($hashmap); $j++) {
        if ($i % (int)$hashmap[$j]["num"] === 0) {
            $curr .= $hashmap[$j]["text"] . " ";
        }
    }
    if($curr !== "") {
        $curr = substr($curr, 0, -1);
        $result .= $curr . ", ";
    } else {
        $result .= strval($i) . ", ";
    }
}

$result = substr($result, 0, -2);

echo($result);
?>
