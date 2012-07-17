var patrolAngle = 10;
var degreesPerSecond = 90;
var alertColor:Color;
var player:GameObject;

@HideInInspector var initRotation:Quaternion;
private var targetPosition:Quaternion;
private var directionCoeff = 1;

function Start () {
	if (player == null) player = GameObject.Find("Player");
	
	initRotation = transform.rotation;
}

function Update () {
	rotate();

	// detect if player has stepped into the spotlight
	var hit:RaycastHit;
	if (Physics.Raycast(transform.position, transform.forward, hit, 5) && hit.transform == player.transform){
		for (var i:Transform in transform) i.light.color = alertColor;
	}
}

function rotate(){
	transform.rotation.eulerAngles.y += degreesPerSecond * Time.deltaTime;
}