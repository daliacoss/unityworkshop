#pragma strict

var yourObject:GameObject;

var metersPerSecond:Vector3 = Vector3(0, 4, 0);
var maxDistance:Vector3 = Vector3(0, 10, 0);

var directionCoeff = 1;
@HideInInspector var initPosition:Vector3;

function Start () {
	//Debug.Log(distance.x);
	initPosition = transform.position;
	if (yourObject == void) GameObject.Find("Player");
	var textMesh = yourObject.GetComponent(TextMesh);
}

function Update () {
	transform.Translate(metersPerSecond * Time.deltaTime * directionCoeff);
	if (transform.position.sqrMagnitude >= (initPosition + maxDistance).sqrMagnitude)
		directionCoeff = -1;
	else if (transform.position.sqrMagnitude <= initPosition.sqrMagnitude)
		directionCoeff = 1;
}