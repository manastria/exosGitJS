// Afficher une table des multiplications
function display_table(table)
{
	var table_str = "";
	for(i=1;i<=10;i++) {
		resultat = table * i;
		table_str += table + " * " + i + " = " + resultat + "<br/>";
	}
	document.getElementById('message').innerHTML = table_str;
}