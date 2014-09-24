// Afficher une table des multiplications
function display_table()
{
	var table_str = "";
	for(i=1;i<=10;i++) {
		resultat = 2 * i;
		table_str += "2 * " + i + " = " + resultat + "<br/>";
	}
	document.getElementById('message').innerHTML = table_str;
}